import Image from "next/image";

const pilotMailto =
  "mailto:support@fyn-labs.com?subject=Normkontor%20Pilotgespr%C3%A4ch&body=Workflow%3A%0ATeam%3A%0ADatenklasse%3A%0AGew%C3%BCnschtes%20Ergebnis%3A%0AErfolgskriterium%3A%0AVerantwortliche%20Person%3A";

const buyerQuestions = [
  "Welche Aufgaben und Daten soll der erste kontrollierte Workflow abdecken?",
  "Wie werden Ergebnisse unabhängig geprüft und als Evidenz gebunden?",
  "Wer entscheidet auf dieser Grundlage über die Skalierung?",
];

const pilotWeeks = [
  ["01", "Frame", "Team, Zielworkflow, Datenklassen, Nachweisfrage und Entscheidungskriterien festlegen."],
  ["02", "Configure", "Agent, Repository-Regeln, Berechtigungen, native Tools und Evidenzpfad einrichten."],
  ["03", "Enable", "Führung, Entwicklung und Assurance am freigegebenen Ablauf befähigen."],
  ["04", "Operate", "Den realen Workflow im Team begleiten und operative Erkenntnisse erfassen."],
  ["05", "Evaluate", "Qualität, Arbeitsqualität, Risiko, Kosten und Skalierbarkeit bewerten."],
  ["06", "Decide", "Skalierungsentscheidung und priorisierten 90-Tage-Plan vorlegen."],
];

const pilotOutcomes = [
  ["Betriebsmodell", "Rollen, Datenklassen, Human Gates und Übergaben für den gewählten Workflow."],
  ["Evidenz", "Nachvollziehbare Ergebnisse aus Evaluation, Training, Risiken und unabhängiger Prüfung."],
  ["90-Tage-Plan", "Priorisierte nächste Schritte für gezieltes Skalieren und Verbessern."],
];

const controlPath = [
  ["01", "Auftrag", "Ziel, Scope, Datenklasse, Akzeptanz und Entscheidungskriterien werden vor dem Lauf benannt."],
  ["02", "Ausführung", "Der Agent arbeitet im vereinbarten Auftrag und berichtet Artefakte und Checks."],
  ["03", "Unabhängige Prüfung", "Qualität, Sicherheit, Datenschutz und Risiko werden getrennt vom Erzeuger bewertet."],
  ["04", "Evidenz", "Scope, Befunde und Widerspruch bleiben nachvollziehbar gebunden."],
  ["DO", "Menschliche Entscheidung", "Der verifizierte Owner entscheidet außerhalb des Modells."],
];

const academyTracks = [
  ["1 Tag", "Executive & Governance", "Verantwortung klären, Risiken einordnen und tragfähige Einführungsentscheidungen treffen."],
  ["2 Tage", "Practitioner", "Agenten im Workflow einsetzen, Ergebnisse prüfen, Evidenz sichern und sicher eskalieren."],
  ["5 Tage", "Trainer & Assurance Lead", "Teams befähigen, Prüfverfahren aufbauen und interne Qualität dauerhaft sichern."],
];

const ladder = [
  ["01", "Need", "Muss dieses Verhalten oder Artefakt überhaupt existieren?"],
  ["02", "Reuse", "Gibt es bereits einen verantwortlichen Owner?"],
  ["03", "Native", "Kann die vorhandene Runtime oder Plattform es bereits?"],
  ["04", "Available", "Reicht eine vorhandene Standardfähigkeit?"],
  ["05", "Reduce", "Kann Code entfallen oder eine Konfiguration genügen?"],
  ["06", "Vet", "Löst eine gepflegte bestehende Fähigkeit die Aufgabe besser?"],
  ["07", "Create", "Was ist der kleinste vollständige neue Pfad?"],
];

const governanceControls = [
  ["Purpose & Allowlist", "Teams, Repositories, Pfade, Zwecke, Datenklassen, Modelle, Tools und Aktionen werden benannt."],
  ["Minimize", "Diff oder Symbolpaket halten den freigegebenen Kontext präzise und prüfbar."],
  ["Protect & redact", "Sensible Inhalte werden passend zur Datenklasse geschützt oder geschwärzt."],
  ["Route proof", "Provider, aufgelöstes Modell, Region, Retention und Fallback werden im Dossier dokumentiert."],
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
            <Image src="/brand/normkontor-mark.svg" alt="" width={52} height={52} priority />
            <span><strong>NORMKONTOR</strong><small>FYN LABS</small></span>
          </a>

          <div className="nav-links">
            <a href="#pilot"><span aria-hidden="true">01</span><strong>Pilot</strong></a>
            <a href="#ergebnis"><span aria-hidden="true">02</span><strong>Ergebnis</strong></a>
            <a href="#betriebsmodell"><span aria-hidden="true">03</span><strong>Betriebsmodell</strong></a>
            <a href="#academy"><span aria-hidden="true">04</span><strong>Academy</strong></a>
            <a href="#standard"><span aria-hidden="true">05</span><strong>Standard &amp; 3A</strong></a>
            <a href="#governance"><span aria-hidden="true">06</span><strong>Governance</strong></a>
            <a href="/blog"><span aria-hidden="true">07</span><strong>Analysen</strong></a>
          </div>

          <p className="nav-truth">Evidenz vor Entscheidung.<br />Autorität bleibt beim Unternehmen.</p>

          <details className="mobile-menu">
            <summary>Menü</summary>
            <div>
              <a href="#pilot">Pilot</a>
              <a href="#ergebnis">Ergebnis</a>
              <a href="#betriebsmodell">Betriebsmodell</a>
              <a href="#academy">Academy</a>
              <a href="#standard">Standard &amp; 3A</a>
              <a href="#governance">Governance</a>
              <a href="/blog">Analysen</a>
              <a href="#kontakt">Pilotgespräch anfragen</a>
            </div>
          </details>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-art-frame">
            <Image
              className="hero-art"
              src="/brand/normkontor-control-corridor-hero.png"
              alt="Konzeptioneller Kontrollpfad von einem begrenzten Auftrag über Prüfung und Evidenz bis zur getrennten menschlichen Entscheidung."
              fill
              fetchPriority="high"
              loading="eager"
              sizes="(min-width: 901px) calc(100vw - 76px), 100vw"
              unoptimized
            />
          </div>

          <div className="hero-shell">
            <div className="hero-brandline" aria-label="Normkontor, eine Produktmarke von FYN Labs">
              <strong>NORMKONTOR</strong><span></span><small>FYN LABS</small>
            </div>

            <div className="hero-copy">
              <h1 id="hero-title">
                <span>Coding-Agenten</span>
                <span>kontrolliert</span>
                <span>einführen.</span>
              </h1>
              <p className="hero-lede">
                Aus einer Agentenlizenz wird ein kontrollierbarer Entwicklungsbetrieb. Ein Team.
                Ein realer Workflow. Sechs Wochen bis zur belastbaren Skalierungsentscheidung.
              </p>
              <a className="button button-primary" href="#kontakt">Pilotgespräch anfragen</a>
              <p className="hero-audience">Für Engineering, Security, Datenschutz, Risk und Revision.</p>
            </div>
          </div>

          <ol className="hero-path" aria-label="Kontrollpfad im Überblick">
            <li><span>01</span><strong>Auftrag</strong></li>
            <li><span>02</span><strong>Unabhängige Prüfung</strong></li>
            <li><span>03</span><strong>Evidenz</strong></li>
            <li><span>DO</span><strong>Menschliche Entscheidung</strong></li>
          </ol>
        </section>

        <section className="problem-section paper-section" aria-labelledby="problem-title">
          <div className="section-shell problem-layout">
            <header>
              <p className="section-kicker"><span>WARUM JETZT</span> / VON DER LIZENZ ZUM BETRIEB</p>
              <h2 id="problem-title">Agentenarbeit wird steuerbar.</h2>
              <p>Normkontor verbindet Agentenarbeit mit klaren Datenwegen, unabhängiger Prüfung und menschlicher Entscheidungshoheit.</p>
            </header>
            <ol className="question-ledger">
              {buyerQuestions.map((question, index) => (
                <li key={question}><span>0{index + 1}</span><strong>{question}</strong></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pilot-section" id="pilot" aria-labelledby="pilot-title">
          <div className="section-shell">
            <header className="split-heading">
              <div>
                <p className="section-kicker"><span>KAUFBARER EINSTIEG</span> / 6-WOCHEN-PILOT</p>
                <h2 id="pilot-title">Ein Team. Ein Workflow. Sechs Wochen.</h2>
              </div>
              <div>
                <p>Wir starten mit einem realen Entwicklungsablauf, definierten Datenklassen, einer Nachweisfrage und klaren Entscheidungskriterien.</p>
                <a className="text-link" href="#kontakt">Pilotgespräch anfragen</a>
              </div>
            </header>

            <ol className="pilot-ledger" aria-label="Ablauf des sechs-wöchigen Piloten">
              {pilotWeeks.map(([number, title, body]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><p>{body}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="result-interrupt" id="ergebnis" aria-labelledby="result-title">
          <div className="section-shell">
            <header className="result-heading">
              <p className="section-kicker"><span>PILOT-ERGEBNIS</span> / ENTSCHEIDUNGSPAKET</p>
              <h2 id="result-title">Das liegt nach sechs Wochen auf dem Tisch.</h2>
              <p>Betriebsmodell, Evidenzdossier und Skalierungsplan bilden gemeinsam die belastbare Grundlage für den nächsten Schritt.</p>
            </header>

            <figure className="result-figure">
              <Image
                src="/brand/normkontor-pilot-decision-kit.png"
                alt="Pilot-Artefakte entlang eines dokumentierten Entscheidungswegs."
                width={1672}
                height={941}
                sizes="(max-width: 900px) 100vw, calc(100vw - 76px)"
                unoptimized
              />
              <figcaption>ENTSCHEIDUNGSKIT · BETRIEBSMODELL · EVIDENZ · SKALIERUNGSPLAN</figcaption>
            </figure>

            <div className="outcome-ledger">
              {pilotOutcomes.map(([title, body], index) => (
                <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="operating-section" id="betriebsmodell" aria-labelledby="operating-title">
          <div className="section-shell">
            <header className="section-heading-dark">
              <p className="section-kicker"><span>BETRIEBSMODELL</span> / KLARE OWNER</p>
              <h2 id="operating-title">Vom Auftrag zur menschlichen Entscheidung.</h2>
              <p>Normkontor verbindet Agentenarbeit mit Git, CI, Identity, Security und GRC zu einem nachvollziehbaren Entscheidungsweg.</p>
            </header>

            <ol className="control-path">
              {controlPath.map(([number, title, body]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><p>{body}</p></div>
                </li>
              ))}
            </ol>

            <blockquote>Der Decision Owner erhält ein nachvollziehbares Dossier und trifft die Freigabe auf belastbarer Evidenz.</blockquote>
          </div>
        </section>

        <section className="academy-section paper-section" id="academy" aria-labelledby="academy-title">
          <div className="section-shell">
            <header className="split-heading">
              <div>
                <p className="section-kicker"><span>NORMKONTOR ACADEMY</span> / BEFÄHIGUNG</p>
                <h2 id="academy-title">Kompetenz, die im Unternehmen bleibt.</h2>
              </div>
              <p>Rollenbasierte Tracks verbinden den freigegebenen Workflow mit praktischer Anwendung, Prüfung und sicherer Eskalation.</p>
            </header>

            <div className="academy-ledger">
              {academyTracks.map(([duration, title, body]) => (
                <details key={duration}>
                  <summary><span>{duration}</span><strong>{title}</strong><small>Details</small></summary>
                  <p>{body}</p>
                </details>
              ))}
            </div>
            <p className="boundary-note">Die Academy wird auf Rollen, Workflow und Prüfanforderungen Ihres Teams zugeschnitten.</p>
          </div>
        </section>

        <section className="standard-visual" aria-labelledby="standard-visual-title">
          <div className="section-shell">
            <figure>
              <Image
                src="/brand/normkontor-ownership-xray.png"
                alt="Prinzipdarstellung: Viele parallele Sonderwege werden an der Eigentümergrenze in einen klaren nativen Pfad überführt."
                width={1382}
                height={1058}
                sizes="(max-width: 900px) 100vw, calc(100vw - 76px)"
                unoptimized
              />
              <figcaption>
                <span>3A / OWNERSHIP X-RAY</span>
                <strong id="standard-visual-title">Ein Problem. Ein Owner. Der kleinste vollständige Weg.</strong>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="standard-section paper-section" id="standard" aria-labelledby="standard-title">
          <div className="section-shell">
            <header className="split-heading">
              <div>
                <p className="section-kicker"><span>OFFENE BASIS</span> / STANDARD &amp; 3A COD3X</p>
                <h2 id="standard-title">Offener Standard. Klarer Betrieb.</h2>
              </div>
              <div>
                <p>Der Normkontor Standard schafft einen klaren Governance-Rahmen. 3A COD3X führt Agenten über vorhandene Owner und native Fähigkeiten zum kleinsten vollständigen Pfad.</p>
                <a className="text-link" href="https://github.com/FYN-Labs/normkontor" target="_blank" rel="noreferrer">Standard auf GitHub ansehen</a>
              </div>
            </header>

            <div className="three-a" aria-label="Bedeutung von 3A">
              <p><span>A</span><strong>Aligned</strong><small>am ursprünglichen Problem und vorhandenen Owner</small></p>
              <p><span>A</span><strong>Autonomous</strong><small>selbstständig im klar definierten Handlungsrahmen</small></p>
              <p><span>A</span><strong>Auditable</strong><small>kleiner vollständiger Pfad, real geprüft</small></p>
            </div>

            <div className="ladder-list">
              {ladder.map(([number, title, question], index) => (
                <details key={number} open={index === 0}>
                  <summary><span>{number}</span><strong>{title}</strong><small>{question}</small></summary>
                  <p>{index === 6 ? "Der neue Pfad wird vollständig verdrahtet, real geprüft und einem klaren Owner zugeordnet." : "Diese Stufe löst das ursprüngliche Problem vollständig am richtigen Owner."}</p>
                </details>
              ))}
            </div>

            <p className="safety-floor">Der Sicherheitsboden bleibt verbindlich: Authentifizierung, Autorisierung, Trust Boundaries, Datenschutz, Datenverlustschutz, Barrierefreiheit und risikogerechte Tests.</p>
          </div>
        </section>

        <section className="governance-section" id="governance" aria-labelledby="governance-title">
          <div className="section-shell">
            <header className="split-heading">
              <div>
                <p className="section-kicker"><span>ROUTE EVIDENCE</span> / VERTRAUENSSCHICHT</p>
                <h2 id="governance-title">Datenwege werden sichtbar und prüfbar.</h2>
              </div>
              <p>Für den vereinbarten Einsatz dokumentiert Normkontor Route, Region, Retention und Fallback in einer nachvollziehbaren Evidenzkette.</p>
            </header>

            <div className="governance-grid">
              <ol>
                {governanceControls.map(([title, body], index) => (
                  <li key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{body}</p></div></li>
                ))}
              </ol>

              <div className="evidence-receipt" aria-label="Struktur eines Route Evidence Receipts">
                <p className="receipt-label">ROUTE EVIDENCE / DOSSIERSTRUKTUR</p>
                <h3>Route Evidence</h3>
                <dl>
                  <div><dt>Provider</dt><dd>dokumentiert</dd></div>
                  <div><dt>Resolved model</dt><dd>dokumentiert</dd></div>
                  <div><dt>Region / profile</dt><dd>dokumentiert</dd></div>
                  <div><dt>Retention / fallback</dt><dd>dokumentiert</dd></div>
                  <div><dt>Decision evidence</dt><dd>gebunden</dd></div>
                </dl>
                <p>Das Receipt bindet den tatsächlich aufgelösten Pfad an die Entscheidungsevidenz des Piloten.</p>
              </div>
            </div>

            <p className="legal-boundary">Datenschutz, Security, Risk und Revision werden von Beginn an eingebunden. Die Evidenzstruktur unterstützt die zuständigen Teams bei GDPR-, DORA- und EU-AI-Act-bezogenen Bewertungen.</p>
          </div>
        </section>

        <section className="contact-section" id="kontakt" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div>
              <p className="section-kicker"><span>PILOTGESPRÄCH</span> / NÄCHSTER SCHRITT</p>
              <h2 id="contact-title">Starten Sie mit einem Workflow, der zählt.</h2>
            </div>
            <div>
              <p>Im ersten Gespräch definieren wir gemeinsam Workflow, Team, Datenklasse, gewünschtes Ergebnis und Erfolgskriterium für den Pilot.</p>
              <ol><li>Workflow</li><li>Team</li><li>Datenklasse</li><li>Zielbild</li><li>Erfolgskriterium</li></ol>
              <a className="button button-primary" href={pilotMailto}>Pilotgespräch anfragen</a>
              <p className="contact-fallback">Öffnet Ihr E-Mail-Programm · alternativ: <a href="mailto:support@fyn-labs.com">support@fyn-labs.com</a></p>
            </div>
          </div>
        </section>

        <section className="sources-section" aria-label="Primärquellen">
          <div className="section-shell">
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
          <div className="footer-brand">
            <Image src="/brand/normkontor-mark.svg" alt="" width={42} height={42} />
            <p><strong>NORMKONTOR</strong><span>eine Produktmarke von FYN Labs LLC</span></p>
          </div>
          <p>3A COD3X ist ein unabhängiges Regelwerk von Normkontor. Codex ist eine Marke von OpenAI.</p>
          <p><a href="https://fyn-labs.com/de/legal">Impressum</a> · <a href="https://fyn-labs.com/de/privacy">Datenschutz</a><br /><a href="mailto:support@fyn-labs.com">support@fyn-labs.com</a> · © 2026 FYN Labs LLC</p>
        </div>
      </footer>
    </>
  );
}
