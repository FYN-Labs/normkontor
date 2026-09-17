import { NextRequest, NextResponse } from "next/server";
import { token } from "../route";

// Bestaetigung der Newsletteranmeldung, zweiter Schritt.
//
// Prueft den signierten Link aus der Bestaetigungsmail und traegt die Adresse
// erst danach in die Zielliste des Versanddienstes ein. Ohne gueltigen Nachweis
// wird nichts gespeichert.

export const runtime = "nodejs";

const GUELTIG_MS = 48 * 60 * 60 * 1000;

function seite(titel: string, text: string): string {
  const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c] as string);
  return '<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
    '<meta name="robots" content="noindex">' +
    "<title>" + esc(titel) + " | Normkontor</title>" +
    "<style>" +
    "body{background:#f7f5f0;color:#16202e;font-family:ui-sans-serif,system-ui,sans-serif;margin:0}" +
    "main{max-width:38rem;margin:0 auto;padding:6rem 1.5rem}" +
    "h1{font-family:Georgia,serif;font-size:2rem;font-weight:400;line-height:1.2;margin:0 0 1rem}" +
    "p{line-height:1.7;color:#4a5462}" +
    "a{color:#16202e}" +
    "</style></head><body><main>" +
    "<h1>" + esc(titel) + "</h1><p>" + esc(text) + "</p>" +
    '<p style="margin-top:2rem"><a href="/blog">Zu den Analysen</a></p>' +
    "</main></body></html>";
}

function html(inhalt: string, status: number) {
  return new NextResponse(inhalt, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export async function GET(request: NextRequest) {
  const { RESEND_API_KEY, NEWSLETTER_AUDIENCE } = process.env;

  if (!RESEND_API_KEY) {
    return html(seite("Noch nicht eingerichtet", "Der Newsletterversand ist derzeit nicht aktiv. Bitte versuchen Sie es später erneut."), 503);
  }

  const p = request.nextUrl.searchParams;
  const adresse = (p.get("adresse") ?? "").trim().toLowerCase();
  const zeit = Number(p.get("zeit") ?? 0);
  const nachweis = p.get("nachweis") ?? "";

  if (!adresse || !zeit || !nachweis) {
    return html(seite("Link unvollständig", "Dieser Bestätigungslink ist unvollständig. Bitte melden Sie sich erneut an."), 400);
  }
  if (Date.now() - zeit > GUELTIG_MS) {
    return html(seite("Link abgelaufen", "Dieser Bestätigungslink ist älter als 48 Stunden. Bitte melden Sie sich erneut an."), 410);
  }

  const erwartet = await token(adresse, zeit, RESEND_API_KEY);
  if (erwartet !== nachweis) {
    return html(seite("Link ungültig", "Dieser Bestätigungslink konnte nicht geprüft werden. Bitte melden Sie sich erneut an."), 400);
  }

  if (!NEWSLETTER_AUDIENCE) {
    return html(seite("Noch nicht eingerichtet", "Die Zielliste ist noch nicht konfiguriert. Ihre Adresse wurde nicht gespeichert."), 503);
  }

  try {
    const antwort = await fetch("https://api.resend.com/audiences/" + NEWSLETTER_AUDIENCE + "/contacts", {
      method: "POST",
      headers: { Authorization: "Bearer " + RESEND_API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ email: adresse, unsubscribed: false }),
    });

    if (!antwort.ok && antwort.status !== 409) {
      console.error("Eintrag abgelehnt:", antwort.status);
      return html(seite("Eintrag fehlgeschlagen", "Ihre Bestätigung konnte nicht verarbeitet werden. Bitte versuchen Sie es später erneut."), 502);
    }
  } catch (fehler) {
    console.error("Bestaetigung fehlgeschlagen:", fehler);
    return html(seite("Eintrag fehlgeschlagen", "Ihre Bestätigung konnte nicht verarbeitet werden. Bitte versuchen Sie es später erneut."), 502);
  }

  return html(seite("Anmeldung bestätigt", "Ihre Adresse ist eingetragen. Sie erhalten die Analysen, sobald eine neue Ausgabe erscheint. Abmeldung ist in jeder Ausgabe mit einem Klick möglich."), 200);
}

