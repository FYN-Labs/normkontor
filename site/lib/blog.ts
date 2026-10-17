import { readFileSync, statSync } from "node:fs";
import path from "node:path";

export type BlogSource = { label: string; url: string };
export type BlogSection = { h: string; p: string };
export type BlogCta = { title: string; text: string; label: string; href: string };
export type BlogPost = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  description: string;
  lead: string;
  heroImage?: string;
  heroAlt?: string;
  heroCaption?: string;
  takeaway: string;
  sections: BlogSection[];
  sources: BlogSource[];
  cta?: BlogCta;
};

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function load(): BlogPost[] {
  const file = path.join(process.cwd(), "content", "blog.json");
  const posts = JSON.parse(readFileSync(file, "utf8")) as BlogPost[];
  const seen = new Set<string>();
  for (const p of posts) {
    if (!slugPattern.test(p.slug) || seen.has(p.slug)) throw new Error("Ungueltiger oder doppelter Slug: " + p.slug);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(p.date)) throw new Error("Ungueltiges Datum: " + p.slug);
    if (!p.sources?.length) throw new Error("Artikel ohne Quelle: " + p.slug);
    if (p.heroImage !== undefined) {
      if (!/^\/blog\/(?:[\w-]+\/)*[\w.-]+\.(?:png|jpe?g|webp|avif)$/.test(p.heroImage)) throw new Error("Nur lokale Titelbilder unter /blog/ erlaubt: " + p.slug);
      if (!p.heroAlt?.trim()) throw new Error("Titelbild ohne beschreibenden Alttext: " + p.slug);
      if (!statSync(path.join(process.cwd(), "public", p.heroImage.slice(1)), { throwIfNoEntry: false })?.isFile()) throw new Error("Titelbilddatei fehlt: " + p.slug);
    }
    for (const s of p.sources) {
      if (new URL(s.url).protocol !== "https:") throw new Error("Nur HTTPS Quellen erlaubt: " + s.url);
    }
    seen.add(p.slug);
  }
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const allPosts = load();
export const getPost = (slug: string) => allPosts.find((p) => p.slug === slug);
export const dateLabel = (d: string) =>
  new Date(d + "T00:00:00Z").toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" });
