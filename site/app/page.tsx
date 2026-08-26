import Image from "next/image";

const pilotMailto =
  "mailto:support@fyn-labs.com?subject=Normkontor%20Pilotf%C3%A4higkeit&body=Workflow%3A%0ATeam%3A%0ADatenklasse%3A%0ANachweisfrage%3A%0AStop-Kriterium%3A";

const statusItems = [
  { icon: "/brand/normkontor-status-open-source.png", title: "Normkontor Standard", status: "Kernel 1.0 · Source Candidate" },
  { icon: "/brand/normkontor-status-rollout.png", title: "Rollout", status: "Auf Anfrage" },
  { icon: "/brand/normkontor-status-academy.png", title: "Academy", status: "Auf Anfrage" },
  { icon: "/brand/normkontor-status-review.png", title: "Review", status: "In Entwicklung" },
];

const questions = [
  "Was darf der Agent bearbeiten?",
  "Wer prüft unabhängig?",
  "Welche Evidenz trägt welche Entscheidung?",
];

const ladder = [
  {
    number: "01",
    title: "Need",
    prompt: "Muss dieses Verhalten oder Artefakt überhaupt existieren?",
    body: "Beginne beim ursprünglichen Problem. Eine neue Komponente ist kein Fortschritt, wenn kein belegter Bedarf besteht.",
  },
  {
    number: "02",
    title: "Reuse",
    prompt: "Gibt es bereits einen verantwortlichen Owner?",
    body: "Repariere oder erweitere den bestehenden Pfad, bevor eine zweite Quelle für dieselbe Wahrheit entsteht.",
  },
  {
    number: "03",
    title: "Native",
    prompt: "Kann die vorhandene Runtime es bereits?",
    body: "Nutze Agent, Framework, Plattform, Protokoll oder Konfiguration, bevor du eigene Mechanik einziehst.",
  },
  {
    number: "04",
    title: "Available",
    prompt: "Reicht eine vorhandene Standardfähigkeit?",
    body: "Standardbibliothek und bereits installierte Abhängigkeiten sind einem neuen Owner vorzuziehen.",
  },
  {
    number: "05",
    title: "Reduce",
    prompt: "Kann Code entfallen?",
    body: "Löschen, Konfigurieren oder eine gezielte Änderung schlägt einen neuen Wrapper, Store oder Prozess.",
  },
  {
    number: "06",
    title: "Vet",
    prompt: "Schließt ein gepflegtes Upstream die echte Lücke?",
    body: "Erst nach belegtem Capability Gap werden Herkunft, Lizenz, Wartung, Datenschutz, Rollback und Kosten geprüft.",
  },
  {
    number: "07",
    title: "Create",
    prompt: "Was ist der kleinste vollständige neue Pfad?",
    body: "Nur wenn alle früheren Stufen ausscheiden: sauber verdrahten, real prüfen und den Owner explizit halten.",
  },
];

const controlStages = [
  ["0.5", "Contract", "Scope, Owner, Akzeptanz, Ausschlüsse, Evidenz, Rollback und Human Gate."],
  ["0.65", "Readiness", "Umgebung, Datenklasse, Fähigkeit, Budget, Stop-Bedingungen und Reporting."],
  ["01", "Worker", "Arbeitet im eingefrorenen Auftrag und berichtet Artefakte, Checks und Restlücken."],
  ["02", "CAO", "Liefert PASS, REJECT oder PARK als Evidenz — ohne selbst zu bauen oder zu autorisieren."],
  ["03", "Controller", "Integriert Befunde, erhält Widerspruch und routet zur richtigen Autorität."],
  ["DO", "Decision Owner", "Ein verifizierter Mensch entscheidet geschützte Handlungen mit gültigem Receipt für den exakten Scope."],
];

const products = [
  {
    code: "NK / 01",
    status: "Public Source Candidate",
    title: "Normkontor Standard",
    tech: "Kernel 1.0.0 · 3A COD3X 0.4.0",
    body: "Öffentlicher Governance-Kernel mit generischen Host-Adaptern; 3A COD3X liefert darunter zwei instruction-only Methoden für Umsetzung und begrenzten Review.",
    href: "#opensource",
    action: "Veröffentlichungsstatus prüfen",
  },
  {
    code: "NK / 02",
    status: "Pilot auf Anfrage",
    title: "Normkontor Rollout",
    tech: "Ein Team · ein Workflow · sechs Wochen",
    body: "Ein begrenzter Einführungsrahmen mit vorab benannten Datenklassen, Nachweisfrage und Stop-Kriterien.",
    href: "#rollout",
    action: "Pilotstruktur ansehen",
  },
  {
    code: "NK / 03",
    status: "Pilot auf Anfrage",
    title: "Normkontor Academy",
    tech: "Executive · Practitioner · Assurance Lead",
    body: "Rollenbasierte Praxis für Agenten-Setup, Human Gates, Eval Design, Review-Arme und Evidenzführung.",
    href: "#academy",
    action: "Academy-Tracks ansehen",
  },
  {
    code: "NK / 04",
    status: "In Entwicklung",
    title: "Normkontor Review",
    tech: "Separat geplante Review-Funktion",
    body: "Gefrorener Prüfgegenstand, unabhängige Befunde, nachvollziehbares Evidenzdossier und menschliche Entscheidung.",
    href: "#review",
    action: "Produktgrenze prüfen",
  },
];

const reviewSteps = [
  ["01", "Frozen subject", "Scope, Akzeptanz, Autoritätsgrenze und Evidence Hash werden vorab fixiert."],
  ["02", "Independent findings", "Ein getrennter Prüfpfad liefert nachvollziehbare Befunde, ohne die Entscheidung selbst zu treffen."],
  ["03", "Evidence dossier", "Scope, Einzelbefunde, Widersprüche und Restlücken bleiben prüfbar gebunden."],
  ["DO", "Decision owner", "Der verifizierte menschliche Owner entscheidet außerhalb des Modells."],
];

const governanceControls = [
  ["01", "Allowlist", "Teams, Repositories, Pfade, Zwecke, Datenklassen, Modelle, Tools und Aktionen."],
  ["02", "Minimize", "Diff oder Symbolpaket vor unbeschränktem Repository-Kontext."],
  ["03", "Detect", "Secrets, PII, Gesundheits-, Schaden-, Beschäftigten- und Zahlungsdaten."],
  ["04", "Block or redact", "Blockieren, wenn Schwärzung Semantik oder Sicherheitsfakten zerstört."],
  ["05", "Route proof", "Provider, aufgelöstes Modell, Profil, Region, Retention und Fallback belegen."],
  ["06", "Human control", "Keine individuelle Leistungsmessung; Merge und Release bleiben bei Ownern."],
];

const pilotWeeks = [
  ["01", "Frame", "Team, Workflow, Datenklassen, Erfolgsfrage und Stop-Kriterien."],
  ["02", "Configure", "Agent, Repository-Regeln, Berechtigungen, native Tools und Evidenzpfad."],
  ["03", "Enable", "Rollenbasierte Praxis am freigegebenen Arbeitsablauf."],
  ["04", "Operate", "Begleiteter Betrieb mit Ausnahme-, Incident- und Supportlog."],
  ["05", "Evaluate", "Qualität, Arbeitsqualität, Reibung, Risiko, Kosten und offene Evidenz."],
  ["06", "Decide", "Scale, Revise oder Stop plus priorisierter 90-Tage-Plan."],
];

const academyTracks = [
  ["1 Tag", "Executive & Governance", "Betriebsmodell, Risikoklassen, Human Gates, Claims, Beschaffung und Entscheidungshoheit."],
  ["2 Tage", "Practitioner", "Agenten-Setup, native Tools, 3A-Leiter, Tests, Receipts, Review-Praxis und Eskalation."],
  ["5 Tage", "Trainer & Assurance Lead", "Train-the-Trainer, Stage 0.5/0.65, CAO, Eval Design und praktische Prüfung."],
];

const claims = [
  "kein getaggter Release-Receipt für Kernel 1.0.0 oder Plugin 0.4.0",
  "keine GDPR-, DORA-, EU-AI-Act-, BaFin- oder Security-Zertifizierung",
  "keine aktuelle Managed oder Customer-hosted Review Runtime",
  "keine Garantie für Frankfurt-only oder EU-only Inferenz",
  "keine gemessene Qualitäts-, Produktivitäts- oder Kostenverbesserung",
  "kein benannter Versicherer, Referenzkunde oder Production-Scale-Claim",
  "keine offizielle oder unterstützte Herstellerintegration",
];

const sources = [
  ["OpenAI", "Running Codex safely", "https://openai.com/index/running-codex-safely/"],
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
            <Image src="/brand/normkontor-mark.svg" alt="" width={46} height={46} />
            <span><strong>NORMKONTOR</strong><small>FYN LABS</small></span>
          </a>
          <div className="nav-truth">Bericht ist Evidenz.<br />Autorität bleibt beim Unternehmen.</div>
          <div className="nav-links">
            <a href="#top"><span aria-hidden="true">01</span><strong>Überblick</strong></a>
            <a href="#kontrollpfad"><span aria-hidden="true">02</span><strong>Kontrollpfad</strong></a>
            <a href="#rollout"><span aria-hidden="true">03</span><strong>Rollout</strong></a>
            <a href="#3a"><span aria-hidden="true">04</span><strong>Standard &amp; 3A</strong></a>
            <a href="#academy"><span aria-hidden="true">05</span><strong>Academy</strong></a>
            <a href="#review"><span aria-hidden="true">06</span><strong>Review</strong></a>
          </div>
          <details className="mobile-menu">
            <summary>Menü</summary>
            <div>
              <a href="#3a">Standard &amp; 3A</a>
              <a href="#kontrollpfad">Kontrollpfad</a>
              <a href="#review">Review</a>
              <a href="#governance">Governance</a>
              <a href="#rollout">Rollout &amp; Academy</a>
              <a href="#kontakt">Pilotfähigkeit klären</a>
            </div>
          </details>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <nav className="hero-utility-nav" aria-label="Direkteinstiege">
            <a href="#kontrollpfad">Kontrollpfad</a>
            <a href="#rollout">Rollout &amp; Academy</a>
            <a href="#kontakt">Pilotfähigkeit klären</a>
          </nav>
          <div className="hero-shell">
            <div className="hero-copy">
              <h1 id="hero-title">
                <span>KI-Agenten arbeiten.</span>
                <span>Verantwortung bleibt</span>
                <span>beim Unternehmen.</span>
              </h1>
              <p className="hero-lede">
                Offene Groundbase, Pilot und Ausbildung für<br />
                kontrollierte agentische Softwareentwicklung.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#kontakt">Pilotfähigkeit klären</a>
                <a className="button button-secondary" href="#3a">Standard &amp; 3A prüfen</a>
              </div>
              <p className="hero-evidence">Bericht ist Evidenz. Autorität bleibt beim Unternehmen.</p>
            </div>
          </div>
          <div className="hero-art-frame" aria-hidden="true">
            <Image
              className="hero-art"
              src="/brand/normkontor-3a-kontorakte-hero-16x9.png"
              alt=""
              fill
              fetchPriority="high"
              sizes="(min-width: 901px) calc(100vw - 76px), 100vw"
              unoptimized
            />
          </div>
          <div className="status-rail" aria-label="Produktstatus">
            {statusItems.map(({ icon, title, status }) => (
              <p key={title}>
                <Image src={icon} alt="" width={80} height={80} />
                <strong>{title}</strong>
                <span>{status}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="evidence-opening section-dark">
          <div className="section-shell evidence-grid">
            <div>
              <h2>Kontrolle ist kein Bremser.</h2>
            </div>
            <div>
              <p className="section-intro">Der Kontrollpfad schafft Klarheit: Entscheidungen bleiben dort, wo sie hingehören — beim Unternehmen.</p>
              <ol className="question-ledger">
                {questions.map((question, index) => (
                  <li key={question}><span>0{index + 1}</span><strong>{question}</strong></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="paper-section" id="3a">
          <div className="section-shell">
            <header className="document-heading">
              <div>
                <p className="section-kicker">NK / METHOD / 01 · 3A COD3X</p>
                <h2>Der kleinste vollständige Weg.</h2>
                <p>3A COD3X ist die erste Arbeitsmethode unter dem Normkontor Standard Kernel. Der Kernel setzt die Governance-Grenze; zwei Skills bestimmen ausschließlich Umsetzung und begrenzten read-only Review.</p>
              </div>
              <div className="document-meta" aria-label="3A COD3X unter dem Normkontor Standard">
                <p><span>STANDARD</span><strong>Kernel 1.0.0</strong></p>
                <p><span>TYPE</span><strong>Instruction-only plugin</strong></p>
                <p><span>OWNERS</span><strong>2 canonical skills</strong></p>
                <p><span>RUNTIME</span><strong>None</strong></p>
                <p><span>AUTHORITY</span><strong>None</strong></p>
              </div>
            </header>

            <div className="three-a" aria-label="Bedeutung von 3A">
              <p><span>A</span><strong>Aligned</strong><small>am ursprünglichen Problem und nativen Owner</small></p>
              <p><span>A</span><strong>Autonomous</strong><small>maximal sinnvoll innerhalb echter Autorität</small></p>
              <p><span>A</span><strong>Auditable</strong><small>kleiner vollständiger Pfad, real geprüft</small></p>
            </div>

            <div className="ledger-list">
              {ladder.map((step, index) => (
                <details key={step.number} open={index === 0}>
                  <summary>
                    <span className="summary-grid">
                      <span>{step.number}</span>
                      <strong>{step.title}</strong>
                      <small>{step.prompt}</small>
                    </span>
                  </summary>
                  <p>{step.body}</p>
                </details>
              ))}
            </div>

            <div className="safety-floor">
              <p className="section-kicker">NON-NEGOTIABLE / SAFETY FLOOR</p>
              <p>Authentifizierung, Autorisierung, Trust Boundaries, Datenschutz, Datenverlustschutz, Barrierefreiheit und risikogerechte Tests werden nicht wegvereinfacht.</p>
              <a className="text-link" href="#opensource">Veröffentlichungsgrenze prüfen</a>
            </div>
          </div>
        </section>

        <section className="section-dark control-section" id="kontrollpfad">
          <div className="section-shell">
            <header className="section-heading-dark">
              <p className="section-kicker">NK / CONTROL PATH / 02</p>
              <h2>Vom Auftrag zur Entscheidung. Mit benannten Ownern.</h2>
              <p>Linear bleibt das Ausführungsledger; Git, CI, Identity, Security und GRC bleiben ihre jeweiligen Enforcement-Owner. Normkontor ersetzt sie nicht.</p>
            </header>
            <ol className="control-ledger">
              {controlStages.map(([number, title, body]) => (
                <li key={number}><span>{number}</span><strong>{title}</strong><p>{body}</p></li>
              ))}
            </ol>
            <blockquote>Ein sauberer Bericht ist Evidenz. Er autorisiert weder Merge, Deploy, Publish, Spend, Production noch Linear Done.</blockquote>
          </div>
        </section>

        <section className="visual-interruptor visual-interruptor-authority" aria-labelledby="authority-interruptor-title">
          <h2 className="sr-only" id="authority-interruptor-title">Wo Arbeit endet. Wo Autorität beginnt.</h2>
          <figure className="visual-figure">
            <Image
              src="/brand/normkontor-authority-shutter.png"
              alt=""
              width={1122}
              height={696}
              sizes="(max-width: 900px) 100vw, calc(100vw - 76px)"
              unoptimized
            />
            <figcaption className="visual-transcript">
              <span>BUILD · TEST · REPORT · REVIEW</span>
              <strong>Merge, Deploy, Publish, Spend, Production und Linear Done bleiben beim verifizierten menschlichen Decision Owner.</strong>
            </figcaption>
          </figure>
        </section>

        <section className="paper-section portfolio-section" id="portfolio">
          <div className="section-shell">
            <header className="document-heading compact">
              <div><p className="section-kicker">NK / PORTFOLIO / 03 · PRODUCT TRUTH</p><h2>Reifegrade werden nie vermischt.</h2></div>
              <p>Open Source, Dienstleistung und geplante Software behalten ihren tatsächlichen Reifegrad.</p>
            </header>
            <div className="product-ledger">
              {products.map((product) => (
                <article key={product.code}>
                  <p className="product-code">{product.code}</p>
                  <div><span className="status-stamp">{product.status}</span><h3>{product.title}</h3><p className="product-tech">{product.tech}</p></div>
                  <p>{product.body}</p>
                  <a className="text-link" href={product.href} target={product.href.startsWith("http") ? "_blank" : undefined} rel={product.href.startsWith("http") ? "noreferrer" : undefined}>{product.action}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="review-section" id="review">
          <div className="section-shell review-layout">
            <div className="review-copy">
              <p className="status-warning">IN ENTWICKLUNG · KEINE VERFÜGBARE MANAGED RUNTIME</p>
              <p className="section-kicker">NK / REVIEW / 04 · PRODUCT CONCEPT</p>
              <h2>Zweite Meinung. Der Mensch entscheidet.</h2>
              <p>Normkontor Review ist eine separat geplante Funktion. Öffentlich zugesagt ist nur die Ergebnisgrenze: ein vorab fixierter Prüfgegenstand, unabhängige Befunde, ein nachvollziehbares Evidenzdossier und die Entscheidung beim verifizierten menschlichen Owner.</p>
              <a className="text-link light" href="#kontakt">Review-Konzept besprechen</a>
            </div>
            <ol className="review-ledger">
              {reviewSteps.map(([number, title, body]) => (
                <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{body}</p></div></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="paper-section governance-section" id="governance">
          <div className="section-shell">
            <header className="document-heading">
              <div><p className="section-kicker">NK / GOVERNANCE / 05 · ROUTE PROOF</p><h2>Region. Scrubbing. Belegt.</h2></div>
              <p>Frankfurt als Servicestandort beweist keine Frankfurt-Inferenz. Route, Retention, Fallback und Restlücke müssen je Modell und Vertrag nachvollziehbar sein.</p>
            </header>
            <ol className="governance-ledger">
              {governanceControls.map(([number, title, body]) => (
                <li key={number}><span>{number}</span><strong>{title}</strong><p>{body}</p></li>
              ))}
            </ol>
            <div className="route-receipt">
              <div><p className="section-kicker">RECEIPT / ROUTE EVIDENCE</p><h3>Sichtbar statt angenommen.</h3></div>
              <dl>
                <div><dt>Provider</dt><dd>zu belegen</dd></div>
                <div><dt>Resolved model</dt><dd>zu belegen</dd></div>
                <div><dt>Region / profile</dt><dd>zu belegen</dd></div>
                <div><dt>Retention / fallback</dt><dd>zu belegen</dd></div>
                <div><dt>Residual gap</dt><dd>zu benennen</dd></div>
              </dl>
            </div>
            <p className="legal-boundary">Konzipiert zur Unterstützung eines kontrollierten GDPR-, DORA- und EU-AI-Act-bewussten Einführungsprozesses. Keine Rechtsberatung, Zertifizierung oder pauschale Compliance-Erklärung. Scrubbing ersetzt keine DPIA.</p>
          </div>
        </section>

        <section className="adoption-section section-dark" id="rollout">
          <div className="section-shell adoption-shell">
            <header className="section-heading-dark adoption-heading">
              <p className="section-kicker">NK / ADOPTION / 06 · PILOT AUF ANFRAGE</p>
              <h2>Vom Workflow zur Entscheidung.</h2>
              <p>Kein konzernweiter Big Bang: sechs begrenzte Schritte bis Scale, Revise oder Stop — begleitet von rollenbasierter Befähigung.</p>
            </header>
            <div className="adoption-grid">
              <div>
                <p className="ledger-title">Sechs Wochen</p>
                <ol className="pilot-ledger">
                  {pilotWeeks.map(([number, title, body]) => (
                    <li key={number}><span>{number}</span><div><strong>{title}</strong><p>{body}</p></div></li>
                  ))}
                </ol>
              </div>
              <div id="academy">
                <p className="ledger-title">Drei Academy-Tracks</p>
                <div className="academy-ledger">
                  {academyTracks.map(([duration, title, body]) => (
                    <details key={duration}>
                      <summary><span className="academy-summary"><span>{duration}</span><strong>{title}</strong></span></summary>
                      <p>{body}</p>
                    </details>
                  ))}
                </div>
                <p className="academy-note">Teilnahme allein ist kein Kompetenznachweis. Exakte Leistungen, Termine und Datenzugriffe gehören in den kundenspezifischen Vertrag.</p>
              </div>
            </div>
            <div className="adoption-action">
              <p>Mögliche Outputs: Pilot Charter, Arbeitsmodell, Trainingsevidenz, Risikoregister, Eval-Katalog und priorisierter 90-Tage-Plan.</p>
              <a className="button button-primary" href="#kontakt">Pilotformat besprechen</a>
            </div>
          </div>
        </section>

        <section className="open-source-section" id="opensource">
          <div className="section-shell open-source-grid">
            <div>
              <p className="section-kicker">NK / PUBLIC STANDARD / 07 · SOURCE CANDIDATE</p>
              <h2>Ein Kernel. Zwei Skills. Null Runtime.</h2>
              <p>Der Normkontor Standard Kernel 1.0.0 setzt die gemeinsame Governance-Grenze. 3A COD3X 0.4.0 liefert darunter die Implementierungs- und Review-Methode. Der öffentliche Quellenlink folgt erst nach dem harten Boundary-Split; weder Kernel noch Plugin vergeben Autorität oder ersetzen Host-, Git-, CI-, IAM- oder Linear-Enforcement.</p>
              <a className="text-link light" href="#wahrheit">Releasegrenze prüfen</a>
            </div>
            <div className="install-receipt" aria-label="Groundbase Quellennachweis">
              <p><span>STANDARD</span><strong>Kernel 1.0.0 · Source Candidate</strong></p>
              <p><span>METHOD</span><strong>3A COD3X 0.4.0 · 2 Skills</strong></p>
              <p><span>EVIDENCE SET</span><strong>15/15 Checks · 11 Eval-Fälle</strong></p>
              <p><span>PUBLIC LINK</span><strong>Bis Boundary-Split zurückgehalten</strong></p>
              <div><span>Evidence boundary</span><code>Source + package + static contract</code><code>Runtime + compliance + release: not proven</code></div>
              <p><span>AUTHORITY GRANTED</span><strong>NONE</strong></p>
            </div>
          </div>
        </section>

        <section className="truth-section paper-section" id="wahrheit">
          <div className="section-shell truth-layout">
            <div><p className="section-kicker">NK / CLAIMS / 08 · DOES NOT PROVE</p><h2>Was noch nicht bewiesen ist.</h2></div>
            <ul>
              {claims.map((claim, index) => <li key={claim}><span>0{index + 1}</span><p>{claim}</p></li>)}
            </ul>
          </div>
        </section>

        <section className="contact-section" id="kontakt">
          <div className="section-shell contact-layout">
            <div><p className="section-kicker">NK / PILOT / 09 · FIVE-POINT CHARTER</p><h2>Ist ein Pilot charterfähig?</h2></div>
            <div>
              <p>Im ersten Gespräch klären wir genau fünf Punkte.</p>
              <ol><li>Workflow</li><li>Team</li><li>Datenklasse</li><li>Nachweisfrage</li><li>Stop-Kriterium</li></ol>
              <div className="hero-actions">
                <a className="button button-primary" href={pilotMailto}>Pilotgespräch anfragen</a>
                <a className="button button-secondary" href="#opensource">Groundbase-Status prüfen</a>
              </div>
              <p className="contact-fallback">Öffnet Ihr E-Mail-Programm · alternativ: <a href="mailto:support@fyn-labs.com">support@fyn-labs.com</a></p>
            </div>
          </div>
        </section>

        <section className="sources-section" id="quellen">
          <div className="section-shell sources-shell">
            <details>
              <summary>Evidence references · Primärquellen</summary>
              <div className="sources-list">
                {sources.map(([publisher, title, href]) => (
                  <a href={href} key={href} target="_blank" rel="noreferrer"><span>{publisher}</span><strong>{title}</strong></a>
                ))}
              </div>
            </details>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand"><Image src="/brand/normkontor-mark.svg" alt="" width={42} height={42} /><p><strong>NORMKONTOR</strong><span>eine Produktmarke von FYN Labs LLC</span></p></div>
          <p>3A COD3X ist ein unabhängiges Normkontor-Regelwerk. Es ist weder mit OpenAI verbunden noch von OpenAI unterstützt. Codex ist eine Marke von OpenAI.</p>
          <p><a href="https://fyn-labs.com/de/legal">Impressum</a> · <a href="https://fyn-labs.com/de/privacy">Datenschutz</a><br /><a href="mailto:support@fyn-labs.com">support@fyn-labs.com</a> · © 2026 FYN Labs LLC</p>
        </div>
      </footer>
    </>
  );
}
