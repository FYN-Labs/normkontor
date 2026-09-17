import { NextRequest, NextResponse } from "next/server";

// Newsletteranmeldung mit doppelter Bestaetigung, erster Schritt.
//
// Eine Anmeldung gilt erst nach bestaetigtem Klick im Bestaetigungsmail als
// Einwilligung. Ohne konfigurierten Versanddienst antwortet die Route bewusst
// mit 503, damit die Seite einen ehrlichen Hinweis zeigt statt eine Anmeldung
// vorzutaeuschen. Es wird in diesem Schritt nichts gespeichert.
//
// Erwartete Umgebungsvariablen im Vercel Projekt:
//   RESEND_API_KEY        Schluessel des Versanddienstes
//   NEWSLETTER_VON        verifizierter Absender
//   NEWSLETTER_BASIS_URL  oeffentliche Basisadresse fuer den Bestaetigungslink
//   NEWSLETTER_AUDIENCE   Zielliste, erst im zweiten Schritt noetig

export const runtime = "nodejs";

const GRENZE = 3;
const FENSTER_MS = 15 * 60 * 1000;
const zaehler = new Map<string, number[]>();

function zuOft(quelle: string): boolean {
  const jetzt = Date.now();
  const eintraege = (zaehler.get(quelle) ?? []).filter((t) => jetzt - t < FENSTER_MS);
  eintraege.push(jetzt);
  zaehler.set(quelle, eintraege);
  return eintraege.length > GRENZE;
}

function gueltigeAdresse(wert: unknown): wert is string {
  return typeof wert === "string" && /^[^@\s]+@[^@\s.]+\.[^@\s]{2,}$/.test(wert) && wert.length <= 200;
}

// Bestaetigungstoken ohne Datenbank: HMAC ueber Adresse und Ausgabezeit.
export async function token(adresse: string, zeit: number, geheim: string): Promise<string> {
  const schluessel = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(geheim),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signatur = await crypto.subtle.sign("HMAC", schluessel, new TextEncoder().encode(adresse + "|" + zeit));
  return Array.from(new Uint8Array(signatur)).map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 32);
}

export async function POST(request: NextRequest) {
  const { RESEND_API_KEY, NEWSLETTER_VON, NEWSLETTER_BASIS_URL } = process.env;
  if (!RESEND_API_KEY || !NEWSLETTER_VON || !NEWSLETTER_BASIS_URL) {
    return NextResponse.json({ fehler: "Newsletterversand ist noch nicht eingerichtet" }, { status: 503 });
  }

  const quelle = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unbekannt";
  if (zuOft(quelle)) {
    return NextResponse.json({ fehler: "Zu viele Anfragen" }, { status: 429 });
  }

  let daten: Record<string, unknown>;
  try {
    daten = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ fehler: "Ungueltiger Rumpf" }, { status: 400 });
  }

  if (daten.website) {
    return NextResponse.json({ ok: true }, { status: 200 }); // Honigtopf
  }

  const roh = typeof daten.email === "string" ? daten.email.trim().toLowerCase() : "";
  if (!gueltigeAdresse(roh)) {
    return NextResponse.json({ fehler: "Bitte eine gültige E-Mail-Adresse angeben" }, { status: 400 });
  }

  const zeit = Date.now();
  const nachweis = await token(roh, zeit, RESEND_API_KEY);
  const basis = NEWSLETTER_BASIS_URL.replace(/\/$/, "");
  const bestaetigen =
    basis + "/api/newsletter/bestaetigen?adresse=" + encodeURIComponent(roh) + "&zeit=" + zeit + "&nachweis=" + nachweis;

  try {
    const antwort = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: "Bearer " + RESEND_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: NEWSLETTER_VON,
        to: [roh],
        subject: "Bitte bestätigen Sie Ihre Anmeldung",
        text:
          "Sie haben sich für die Normkontor Analysen angemeldet.\n\n" +
          "Bitte bestätigen Sie die Anmeldung mit diesem Link:\n" + bestaetigen + "\n\n" +
          "Der Link ist 48 Stunden gültig. Wenn Sie sich nicht angemeldet haben, ignorieren Sie diese Nachricht; " +
          "ohne Bestätigung wird nichts gespeichert.\n\n" +
          "Abmeldung ist in jeder Ausgabe mit einem Klick möglich.",
      }),
    });

    if (!antwort.ok) {
      console.error("Bestaetigungsmail abgelehnt:", antwort.status);
      return NextResponse.json({ fehler: "Bestätigungsmail konnte nicht gesendet werden" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, hinweis: "Bestätigungsmail versendet" }, { status: 200 });
  } catch (fehler) {
    console.error("Anmeldung fehlgeschlagen:", fehler);
    return NextResponse.json({ fehler: "Anmeldung fehlgeschlagen" }, { status: 502 });
  }
}

