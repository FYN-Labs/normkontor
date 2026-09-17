import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts, dateLabel, getPost } from "../../../lib/blog";
import { BlogFooter, BlogHeader } from "../chrome";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Analyse nicht gefunden" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, type: "article" },
  };
}

export default async function BlogArticle({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
      <BlogHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="problem-section paper-section" aria-labelledby="article-title">
          <div className="section-shell">
            <p className="section-kicker">
              <span>{post.kicker}</span> / <time dateTime={post.date}>{dateLabel(post.date)}</time>
            </p>
            <h1 id="article-title">{post.title}</h1>
            <p style={{ maxWidth: "62ch", marginTop: "1.2rem" }}>{post.lead}</p>
          </div>
        </section>

        <section className="pilot-section" aria-label="Analyse">
          <div className="section-shell" style={{ maxWidth: "50rem" }}>
            <p className="hero-lede" style={{ borderLeft: "2px solid currentColor", paddingLeft: "1.4rem" }}>{post.takeaway}</p>

            {post.sections.map((s) => (
              <section key={s.h} style={{ marginTop: "2.6rem" }}>
                <h2>{s.h}</h2>
                <p style={{ marginTop: "0.9rem" }}>{s.p}</p>
              </section>
            ))}

            <section className="sources-section" style={{ marginTop: "3.2rem" }} aria-label="Quellen">
              <p className="section-kicker"><span>QUELLEN UND STAND</span> / GEPRÜFT {post.date}</p>
              <div className="sources-list">
                {post.sources.map((s) => (
                  <a key={s.url} href={s.url} target="_blank" rel="noreferrer"><strong>{s.label}</strong></a>
                ))}
              </div>
            </section>

            {post.cta ? (
              <aside className="contact-section" style={{ marginTop: "2.6rem", padding: "2rem" }}>
                <p className="section-kicker"><span>HINWEIS AUF EIN EIGENES ANGEBOT</span></p>
                <h2 style={{ marginTop: "0.8rem" }}>{post.cta.title}</h2>
                <p style={{ margin: "1rem 0 1.6rem" }}>{post.cta.text}</p>
                <a className="button button-primary" href={post.cta.href}>{post.cta.label}</a>
              </aside>
            ) : null}

            <p className="section-kicker" style={{ marginTop: "3rem", paddingTop: "1.4rem", borderTop: "1px solid currentColor" }}>
              <span>MATHIAS HEINKE</span>
            </p>
            <p style={{ marginTop: "1.6rem" }}><Link className="text-link" href="/blog">Alle Analysen</Link></p>
          </div>
        </section>
      </main>
      <BlogFooter />
    </>
  );
}
