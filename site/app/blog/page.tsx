import type { Metadata } from "next";
import Link from "next/link";
import { allPosts, dateLabel } from "../../lib/blog";
import { BlogFooter, BlogHeader } from "./chrome";
import { NewsletterFormular } from "./NewsletterFormular";

export const metadata: Metadata = {
  title: "Analysen",
  description:
    "Recherchierte Einordnungen zu Prüfung, Evidenz und Governance beim Einsatz von Coding-Agenten. Originalquellen, klare Grenzen, keine erfundenen Tests.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <BlogHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="problem-section paper-section" aria-labelledby="blog-title">
          <div className="section-shell">
            <p className="section-kicker"><span>ANALYSEN</span> / EVIDENZ VOR ENTSCHEIDUNG</p>
            <h1 id="blog-title">Was eine Entwicklung für kontrollierte Organisationen bedeutet.</h1>
            <p style={{ maxWidth: "62ch", marginTop: "1.2rem" }}>
              Wir lesen Originalquellen, trennen Anbieterangaben von geprüften Aussagen und benennen offene Fragen.
              Keine erfundenen Tests, keine Zertifizierungsversprechen.
            </p>
          </div>
        </section>

        <section className="pilot-section" aria-label="Beiträge">
          <div className="section-shell">
            <ol className="analysen-liste">
              {allPosts.map((p, i) => (
                <li key={p.slug}>
                  <p className="section-kicker">
                    <span>{String(i + 1).padStart(2, "0")}</span> / {p.kicker} · <time dateTime={p.date}>{dateLabel(p.date)}</time>
                  </p>
                  <h2><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
                  <p>{p.description}</p>
                  <p><Link className="text-link" href={`/blog/${p.slug}`}>Analyse lesen</Link></p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="pilot-section" aria-label="Newsletter">
          <div className="section-shell">
            <NewsletterFormular />
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  );
}
