import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const description =
  "Normkontor macht Coding-Agenten für regulierte Engineering-Organisationen steuerbar: mit einem realen Workflow, belastbarer Evidenz und einem priorisierten Skalierungsplan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://normkontor.de"),
  title: {
    default: "Normkontor — Coding-Agenten kontrolliert einführen.",
    template: "%s | Normkontor",
  },
  description,
  applicationName: "Normkontor",
  authors: [{ name: "FYN Labs", url: "https://fyn-labs.com" }],
  creator: "FYN Labs",
  publisher: "FYN Labs LLC",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Normkontor",
    title: "Normkontor — Coding-Agenten kontrolliert einführen.",
    description,
    images: [
      {
        url: "/brand/normkontor-og.png",
        width: 1200,
        height: 630,
        alt: "Normkontor — Coding-Agenten kontrolliert einführen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Normkontor — Coding-Agenten kontrolliert einführen.",
    description,
    images: ["/brand/normkontor-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
