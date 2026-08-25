import Image from "next/image";

const controlStages = [
  ["0.5", "Auftrag"],
  ["0.65", "Laufbereitschaft"],
  ["01", "Worker"],
  ["02", "CAO"],
  ["03", "Controller"],
  ["HG", "Entscheidung"],
];

const modules = [
  {
    status: "Public Source Candidate",
    state: "live",
    number: "01 / Open Ruleset",
    title: "Normkontor 3A",
    tech: "Technischer Pluginname: 3A COD3X",
    body: "Aligned. Autonomous. Auditable. Zwei Skills halten Agentenarbeit am ursprünglichen Problem, am kleinsten nativen Owner und an nachweisbarer Verifikation.",
    link: "https://github.com/FYN-Labs/normkontor",
    cta: "Repository prüfen ↗",
  },
  {
    status: "Pilot auf Anfrage",
    state: "request",
    number: "02 / Einführung",
    title: "Normkontor Rollout",
    tech: "Ein Team · ein Workflow · sechs Wochen",
    body: "Scope, Konfiguration, Arbeitsmodell, Training, begleiteter Betrieb und eine belegbare Scale-, Revise- oder Stop-Entscheidung.",
    link: "#pilot",
    cta: "Pilotstruktur ansehen ↓",
  },
  {
    status: "Pilot auf Anfrage",
    state: "request",
    number: "03 / Ausbildung",
    title: "Normkontor Academy",
    tech: "Executive · Practitioner · Assurance Lead",
    body: "Praxis für Agenten-Setup, Stage 0.5/0.65, CAO, Eval Gates, Review-Zange, Human Gates und Evidenzführung.",
    link: "#academy",
    cta: "Tracks ansehen ↓",
  },
  {
    status: "In Entwicklung",
    state: "planned",
    number: "04 / Software",
    title: "Normkontor Review",
    tech: "Geplanter MCP/API-Prüfarm",
    body: "Customer-controlled Review für materielle Entscheidungen: gefrorener Gegenstand, blinde Modellarme, Datenpolitik und belastbares Evidence Receipt.",
    link: "#review",
    cta: "Zielarchitektur prüfen ↓",
  },
];

const ladder = [
  ["01", "Need", "Muss dieses Verhalten oder Artefakt überhaupt existieren?"],
  ["02", "Reuse", "Gibt es bereits einen klaren Owner, der repariert oder erweitert werden kann?"],
  ["03", "Native", "Kann Framework, Runtime, Agent, Plattform oder Konfiguration es schon?"],
  ["04", "Available", "Reicht Standardbibliothek oder eine bereits installierte Abhängigkeit?"],
  ["05", "Reduce", "Löst Löschen, Konfigurieren oder eine gezielte Änderung das Problem?"],
  ["06", "Vet", "Schließt ein gepflegtes Upstream die belegte Lücke mit weniger Ownership?"],
  ["07", "Create", "Sonst: kleinster vollständiger neuer Pfad, sauber verdrahtet und geprüft."],
];

const academyTracks = [
  ["1 Tag", "Executive & Governance", "Engineering Leadership · Risk · Produkt", "Betriebsmodell, Risikoklassen, Human Gates, Claims und Entscheidungshoheit."],
  ["2 Tage", "Practitioner", "Entwickler · Reviewer · Plattformteams", "Agenten-Setup, native Tools, 3A Ladder, Tests, Receipts und sichere Eskalation."],
  ["5 Tage", "Trainer & Assurance Lead", "Multiplikatoren · Audit · Enablement", "Train-the-Trainer, CAO, Eval Design, blinde Prüfarme und praktische Prüfung."],
];

const pilotWeeks = [
  ["01", "Rahmen", "Team, Workflow, Datenklassen, Nachweisfrage und Stop-Kriterien."],
  ["02", "Konfiguration", "Agent, Repository-Regeln, Berechtigungen, native Tools und Evidenzpfad."],
  ["03", "Enablement", "Rollenbasierte Praxis am freigegebenen Arbeitsablauf."],
  ["04", "Pilotbetrieb", "Begleitete Anwendung mit Ausnahme-, Incident- und Supportlog."],
  ["05", "Evaluation", "Qualität, Arbeitsqualität, Reibung, Risiko, Kosten und offene Evidenz."],
  ["06", "Entscheidung", "Scale, Revise oder Stop plus priorisierter 90-Tage-Plan."],
];

const sources = [
  ["OpenAI", "Running Codex safely", "https://openai.com/index/running-codex-safely/"],
  ["OpenAI", "Design and brand guidelines", "https://openai.com/brand/"],
  ["EDPB", "Data Protection Impact Assessment", "https://www.edpb.europa.eu/topics/accountability-and-compliance-tools/data-protection-impact-assessment_en"],
  ["EU", "Artificial Intelligence Act", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"],
  ["EU", "Digital Operational Resilience Act", "https://eur-lex.europa.eu/eli/reg/2022/2554/oj"],
  ["AWS", "Bedrock geographic inference", "https://docs.aws.amazon.com/bedrock/latest/userguide/geographic-cross-region-inference.html"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>

      <header className="site-header" id="top">
        <nav className="nav-shell" aria-label="Hauptnavigation">
          <a className="brand" href="#top" aria-label="Normkontor Startseite">
            <Image src="/brand/normkontor-mark.svg" alt="" width={42} height={42} priority />
            <span><strong>NORMKONTOR</strong><small>eine Produktmarke von FYN Labs</small></span>
          </a>
          <div className="nav-links">
            <a href="#regelwerke">Regelwerke</a>
            <a href="#review">Review</a>
            <a href="#academy">Academy</a>
            <a href="#governance">Governance &amp; Daten</a>
            <a className="nav-cta" href="#kontakt">Pilot anfragen</a>
          </div>
          <details className="mobile-menu">
            <summary>Menü</summary>
            <div>
              <a href="#regelwerke">Regelwerke</a>
              <a href="#review">Review</a>
              <a href="#academy">Academy</a>
              <a href="#governance">Governance &amp; Daten</a>
              <a href="#opensource">Open Source</a>
              <a href="#kontakt">Pilot anfragen</a>
            </div>
          </details>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Normkontor · FYN Labs · Deutschland &amp; EU</p>
            <h1>Kontrollierte KI-Arbeit. <em>Nachweisbar.</em></h1>
            <p className="lede">
              Regelwerke, unabhängige Prüfpfade und Ausbildung für Teams, die
              agentische Softwareentwicklung in regulierten Umfeldern
              verantwortbar einführen wollen.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#kontakt">Pilotgespräch anfragen</a>
              <a className="button-secondary" href="#regelwerke">3A-Regelwerk prüfen</a>
            </div>
            <ul className="trust-row" aria-label="Normkontor Grundsätze">
              <li>Reuse before create</li>
              <li>Human Gates bleiben bestehen</li>
              <li>Claims folgen Evidenz</li>
            </ul>
          </div>

          <aside className="control-card" aria-label="Normkontor Kontrollkette">
            <div className="card-head"><span>Kontrollpfad</span><span>NK / 01</span></div>
            <ol>
              {controlStages.map(([number, title]) => (
                <li key={number}><span>{number}</span><strong>{title}</strong></li>
              ))}
            </ol>
            <p><i aria-hidden="true" /> Bericht ist Evidenz. Autorität bleibt beim benannten Owner.</p>
          </aside>
        </section>

        <section className="status-strip" aria-label="Produktstatus">
          <p><strong>3A Ruleset</strong><span>öffentlicher Quellenkandidat</span></p>
          <p><strong>Rollout</strong><span>Pilot auf Anfrage</span></p>
          <p><strong>Academy</strong><span>Pilot auf Anfrage</span></p>
          <p><strong>Review Runtime</strong><span>in Entwicklung</span></p>
        </section>

        <section className="section-shell problem-section">
          <div>
            <p className="section-label">Die eigentliche Einführungsfrage</p>
            <h2>Ein Agenten-Zugang ist noch kein Betriebsmodell.</h2>
          </div>
          <div className="question-list">
            <p><span>01</span>Welche Aufgaben und Daten dürfen in welchen Lauf?</p>
            <p><span>02</span>Wer prüft ein Ergebnis unabhängig vom erzeugenden Agenten?</p>
            <p><span>03</span>Welche Evidenz trägt eine Entscheidung — und wer darf sie treffen?</p>
          </div>
        </section>

        <section className="section-shell" id="regelwerke">
          <header className="section-heading">
            <div><p className="section-label">Ein Portfolio, klare Wahrheitsklassen</p><h2>Offen. Umsetzbar. Getrennt.</h2></div>
            <p>Open Source, Pilotleistung und geplante Software werden nicht vermischt. Das macht Prüfung, Beschaffung und Skalierung belastbarer.</p>
          </header>
          <div className="module-grid">
            {modules.map((module) => (
              <article className="module-card" key={module.title}>
                <span className={`state state-${module.state}`}>{module.status}</span>
                <p className="card-number">{module.number}</p>
                <h3>{module.title}</h3>
                <p className="tech-line">{module.tech}</p>
                <p>{module.body}</p>
                <a
                  href={module.link}
                  target={module.link.startsWith("http") ? "_blank" : undefined}
                  rel={module.link.startsWith("http") ? "noreferrer" : undefined}
                >
                  {module.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="doctrine-section">
          <div className="section-shell">
            <header className="section-heading inverted">
              <div><p className="section-label">Normkontor 3A</p><h2>Erst kleiner denken. Dann sauber bauen.</h2></div>
              <p>Aligned am ursprünglichen Problem. Autonomous innerhalb echter Autorität. Auditable durch einen kleinen vollständigen Pfad und reale Checks.</p>
            </header>
            <div className="ladder-grid">
              {ladder.map(([number, title, body]) => (
                <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
              ))}
            </div>
            <p className="doctrine-note">Wenn Scope, Produktionscode, Owner, Zustand oder Reparaturschleifen wachsen: vor der nächsten Erweiterung stoppen, Meta-Ursache prüfen und den kleineren nativen Owner suchen.</p>
          </div>
        </section>

        <section className="section-shell" id="review">
          <header className="section-heading">
            <div><p className="section-label">Normkontor Review · in Entwicklung</p><h2>Eine zweite Meinung, die als zweite Meinung belegbar ist.</h2></div>
            <p>Der MCP-Endpunkt wäre nur die Tür. Blindheit, Modelltrennung, Datenpolitik, Qualifikation und vollständige Receipts machen daraus erst einen belastbaren Prüfarm.</p>
          </header>
          <div className="review-grid">
            <figure className="review-diagram">
              <figcaption className="sr-only">Geplante Reihenfolge: Agent oder CI, Customer Policy Gateway, zwei blinde Prüfarme, Evidence Receipt und abschließendes Human- und CI-Gate.</figcaption>
              <div className="node wide"><small>01</small><strong>Codex · Agent · IDE · CI</strong><span>frozen subject + authority boundary</span></div>
              <div className="line" aria-hidden="true" />
              <div className="node wide accent"><small>02</small><strong>Customer Policy Gateway</strong><span>identity · scope · minimize · scrub · route</span></div>
              <div className="split" aria-hidden="true" />
              <div className="arms"><div className="node"><small>A</small><strong>Blind Arm</strong><span>qualified family one</span></div><div className="node"><small>B</small><strong>Blind Arm</strong><span>qualified family two</span></div></div>
              <div className="join" aria-hidden="true" />
              <div className="node wide"><small>03</small><strong>Evidence Receipt</strong><span>identity · findings · disagreement · gaps</span></div>
              <div className="line" aria-hidden="true" />
              <div className="node wide dark"><small>HG</small><strong>Human &amp; CI Gate</strong><span>decision remains outside the model</span></div>
            </figure>
            <div className="review-copy">
              <p className="status-banner"><span /> Keine verfügbare Managed Runtime</p>
              <h3>Pflicht bei klassifizierten materiellen Gates</h3>
              <ul>
                <li>gleicher Hash und gefrorener Gegenstand für beide Arme;</li>
                <li>zwei zusätzliche blinde, author-independent Reviewer;</li>
                <li>drei aufgelöste Modellfamilien und Entwickler inklusive Primary;</li>
                <li>datierte, entscheidungsspezifische Qualifikation;</li>
                <li>kein stiller Fallback, kein gemitteltes Urteil;</li>
                <li>Receipt mit Einzelbefunden, Widersprüchen und Restlücken.</li>
              </ul>
              <p className="quiet-copy">Die Open-Source-Doctrine beschreibt diesen Vertrag. Sie provisioniert keine Modelle, führt keine Prüfarme aus und behauptet keinen Assurance-PASS.</p>
            </div>
          </div>
        </section>

        <section className="governance-section" id="governance">
          <div className="section-shell">
            <header className="section-heading inverted">
              <div><p className="section-label">Governance &amp; Daten</p><h2>Regionalität und Scrubbing werden bewiesen, nicht etikettiert.</h2></div>
              <p>Frankfurt als Service-Standort beweist keine Frankfurt-Inferenz. Providerroute, Datenklasse, Fallback, Retention und Zugriff müssen je Modell und Vertrag nachvollziehbar sein.</p>
            </header>
            <div className="governance-grid">
              <article><span>01</span><h3>Allowlist</h3><p>Teams, Repositories, Pfade, Zwecke, Datenklassen, Tools und Aktionen.</p></article>
              <article><span>02</span><h3>Minimize</h3><p>Diff oder Symbolpaket vor unbeschränktem Repository-Kontext.</p></article>
              <article><span>03</span><h3>Detect</h3><p>Secrets, PII, Gesundheits-, Schaden-, Beschäftigten- und Zahlungsdaten.</p></article>
              <article><span>04</span><h3>Block or redact</h3><p>Blockieren, wenn Schwärzung Bedeutung oder Sicherheitsfakten zerstört.</p></article>
              <article><span>05</span><h3>Route proof</h3><p>Provider, Modell, Profil, Region, Retention und Fallback im Receipt.</p></article>
              <article><span>06</span><h3>Human control</h3><p>Keine individuelle Leistungsmessung; Merge und Release bleiben bei Ownern.</p></article>
            </div>
            <p className="legal-boundary">Designed to support GDPR-, DORA- and EU-AI-Act-aware deployment work. Keine Rechtsberatung, Zertifizierung oder regulatorische Freigabe. Scrubbing reduziert Risiko; es ersetzt keine DPIA.</p>
          </div>
        </section>

        <section className="section-shell" id="academy">
          <header className="section-heading">
            <div><p className="section-label">Normkontor Academy</p><h2>Vom sicheren Anwenden zum internen Multiplikator.</h2></div>
            <p>Rollenbasierte Praxis statt Teilnahme-Badge. Eine Kompetenzbescheinigung bindet Person, Szenario, Regelwerk, Policy, Rubrik, Datum und Restlücken.</p>
          </header>
          <div className="academy-grid">
            {academyTracks.map(([duration, title, audience, body]) => (
              <article key={duration}><span>{duration}</span><h3>{title}</h3><p className="audience">{audience}</p><p>{body}</p></article>
            ))}
          </div>
        </section>

        <section className="pilot-section" id="pilot">
          <div className="section-shell">
            <header className="section-heading inverted">
              <div><p className="section-label">Einstiegsformat auf Anfrage</p><h2>Sechs Wochen bis zu einer belegbaren Entscheidung.</h2></div>
              <p>Kein konzernweiter Big Bang: ein Team, ein Workflow, eine Nachweisfrage und vorab benannte Stop-Kriterien.</p>
            </header>
            <div className="week-grid">
              {pilotWeeks.map(([number, title, body]) => (
                <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>
              ))}
            </div>
            <div className="pilot-output"><div><p className="section-label">Mögliche Outputs</p><h3>Pilot Charter, Arbeitsmodell, Trainingsevidenz, Risikoregister, Eval-Katalog und 90-Tage-Plan.</h3></div><a className="button-light" href="#kontakt">Scope besprechen</a></div>
          </div>
        </section>

        <section className="section-shell open-source-section" id="opensource">
          <div>
            <p className="section-label">Open Source · MIT</p>
            <h2>3A COD3X im Normkontor Marketplace.</h2>
            <p>Ein Plugin, zwei kanonische Skills, null Runtime. Deaktiviere den alten AAA-Code-Marketplace, bevor du den Nachfolger aktivierst, damit nicht zwei implizite Doctrine-Owner konkurrieren.</p>
          </div>
          <div className="install-card" aria-label="Installationsbefehle">
            <div><span>Codex</span><code>codex plugin marketplace add FYN-Labs/normkontor</code><code>codex plugin add 3a-cod3x@normkontor</code></div>
            <div><span>Claude Code</span><code>claude plugin marketplace add FYN-Labs/normkontor</code><code>claude plugin install 3a-cod3x@normkontor</code></div>
            <a href="https://github.com/FYN-Labs/normkontor" target="_blank" rel="noreferrer">Quellcode und Grenzen prüfen ↗</a>
          </div>
        </section>

        <section className="truth-section">
          <div className="section-shell truth-grid">
            <div><p className="section-label">Claim Discipline</p><h2>Was Normkontor bewusst nicht behauptet.</h2></div>
            <ul>
              <li>keine GDPR-, DORA-, AI-Act-, BaFin- oder Security-Zertifizierung;</li>
              <li>keine aktuelle customer-hosted oder managed Review Runtime;</li>
              <li>keine Garantie für Frankfurt-only oder EU-only Inferenz;</li>
              <li>keine gemessene Produktivitäts- oder Qualitätssteigerung;</li>
              <li>keinen benannten Kunden, Versicherer oder Produktionsrollout;</li>
              <li>keine offizielle oder unterstützte OpenAI-, Anthropic- oder Hermes-Integration.</li>
            </ul>
          </div>
        </section>

        <section className="contact-section" id="kontakt">
          <div className="section-shell contact-grid">
            <div><p className="section-label">Nächster kleiner Schritt</p><h2>Ist ein Pilot charterfähig?</h2></div>
            <div><p>In einem ersten Gespräch klären wir fünf Punkte: Workflow, Team, Datenklasse, Nachweisfrage und Stop-Kriterium.</p><div className="hero-actions"><a className="button-light" href="mailto:support@fyn-labs.com?subject=Normkontor%20Pilot">Pilotgespräch anfragen</a><a className="button-outline-light" href="https://fyn-labs.com/en">FYN Labs ansehen</a></div></div>
          </div>
        </section>

        <section className="sources-section" id="quellen">
          <div className="section-shell">
            <p className="section-label">Primärquellen · geprüft am 25. August 2026</p>
            <div className="sources-grid">
              {sources.map(([publisher, title, url]) => (
                <a href={url} key={url} target="_blank" rel="noreferrer"><span>{publisher}</span><strong>{title}</strong><small>↗</small></a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand"><Image src="/brand/normkontor-mark.svg" alt="" width={36} height={36} /><p><strong>NORMKONTOR</strong><span>eine Produktmarke von FYN Labs LLC</span></p></div>
          <p>3A COD3X ist ein unabhängiges Normkontor-Regelwerk. Es ist weder mit OpenAI verbunden noch von OpenAI unterstützt. Codex ist eine Marke von OpenAI.</p>
          <p><a href="https://fyn-labs.com/de/legal">Impressum</a> · <a href="https://fyn-labs.com/de/privacy">Datenschutz</a><br /><a href="mailto:support@fyn-labs.com">support@fyn-labs.com</a> · © 2026 FYN Labs LLC</p>
        </div>
      </footer>
    </>
  );
}
