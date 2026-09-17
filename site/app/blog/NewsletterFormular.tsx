"use client";

import { useState } from "react";

// Anmeldeformular fuer die Analysen. Der Ablauf ist absichtlich ehrlich:
// Ohne konfigurierten Versanddienst meldet die Route 503 und der Hinweis sagt
// das auch, statt eine Anmeldung vorzutaeuschen.

type Zustand = "bereit" | "laeuft" | "ok" | "fehler";

export function NewsletterFormular() {
  const [adresse, setAdresse] = useState("");
  const [zustand, setZustand] = useState<Zustand>("bereit");
  const [hinweis, setHinweis] = useState("");

  async function absenden(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!adresse || zustand === "laeuft") return;
    setZustand("laeuft");
    setHinweis("");
    try {
      const antwort = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: adresse, website: "" }),
      });
      const daten = await antwort.json().catch(() => ({}));
      if (antwort.ok) {
        setZustand("ok");
        setHinweis("Wir haben Ihnen eine Bestätigungsmail geschickt. Erst nach Ihrem Klick wird Ihre Adresse gespeichert.");
        setAdresse("");
      } else {
        setZustand("fehler");
        setHinweis(daten.fehler || "Die Anmeldung war nicht möglich.");
      }
    } catch {
      setZustand("fehler");
      setHinweis("Die Anmeldung war nicht möglich. Bitte versuchen Sie es später erneut.");
    }
  }

  return (
    <section className="newsletter-block" aria-labelledby="newsletter-titel">
      <p className="section-kicker"><span>ANALYSEN PER MAIL</span></p>
      <h2 id="newsletter-titel">Neue Analysen, sobald sie erscheinen.</h2>
      <p className="newsletter-text">
        Recherchierte Einordnungen zu Prüfung, Evidenz und Governance. Sie erhalten zuerst eine Bestätigungsmail;
        ohne Ihren Klick wird nichts gespeichert. Abmeldung in jeder Ausgabe mit einem Klick.
      </p>
      <form className="newsletter-form" onSubmit={absenden} noValidate>
        <label className="sr-only" htmlFor="newsletter-adresse">E-Mail-Adresse</label>
        <input
          id="newsletter-adresse"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="ihre@firma.de"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
        <button type="submit" disabled={zustand === "laeuft" || !adresse}>
          {zustand === "laeuft" ? "Wird gesendet" : "Analysen abonnieren"}
        </button>
      </form>
      <p className="newsletter-status" role="status" aria-live="polite">{hinweis}</p>
    </section>
  );
}

