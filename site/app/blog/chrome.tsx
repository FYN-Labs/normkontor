import Image from "next/image";
import Link from "next/link";

// Kopf und Fuss der Blogseiten. Uebernimmt die bestehenden Klassen aus app/globals.css,
// damit der Blog visuell Teil der Hauptseite bleibt.

export function BlogHeader() {
  return (
    <header className="site-header" id="top">
      <nav className="nav-shell" aria-label="Hauptnavigation">
        <Link className="brand" href="/" aria-label="Normkontor Startseite">
          <Image src="/brand/normkontor-mark.svg" alt="" width={52} height={52} priority />
          <span><strong>NORMKONTOR</strong><small>FYN LABS</small></span>
        </Link>

        <div className="nav-links">
          <a href="/#pilot"><span aria-hidden="true">01</span><strong>Pilot</strong></a>
          <a href="/#ergebnis"><span aria-hidden="true">02</span><strong>Ergebnis</strong></a>
          <a href="/#standard"><span aria-hidden="true">03</span><strong>Standard &amp; 3A</strong></a>
          <a href="/#governance"><span aria-hidden="true">04</span><strong>Governance</strong></a>
          <Link href="/blog"><span aria-hidden="true">05</span><strong>Analysen</strong></Link>
        </div>

        <p className="nav-truth">Evidenz vor Entscheidung.<br />Autorität bleibt beim Unternehmen.</p>

        <details className="mobile-menu">
          <summary>Menü</summary>
          <div>
            <a href="/#pilot">Pilot</a>
            <a href="/#ergebnis">Ergebnis</a>
            <a href="/#standard">Standard &amp; 3A</a>
            <a href="/#governance">Governance</a>
            <Link href="/blog">Analysen</Link>
            <a href="/#kontakt">Pilotgespräch anfragen</a>
          </div>
        </details>
      </nav>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/brand/normkontor-mark.svg" alt="" width={42} height={42} />
          <p><strong>NORMKONTOR</strong><span>eine Produktmarke von FYN Labs LLC</span></p>
        </div>
        <p>3A COD3X ist ein unabhängiges Regelwerk von Normkontor. Codex ist eine Marke von OpenAI.</p>
        <p><a href="https://fyn-labs.com/de/legal">Impressum</a> · <a href="https://fyn-labs.com/de/privacy">Datenschutz</a><br /><a href="mailto:support@fyn-labs.com">support@fyn-labs.com</a> · © 2026 FYN Labs LLC</p>
      </div>
    </footer>
  );
}
