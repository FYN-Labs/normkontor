import type { Metadata } from "next";
import "./globals.css";

const description =
  "Regelwerke, unabhängige Prüfpfade und Ausbildung für kontrollierte agentische Softwareentwicklung in regulierten Organisationen.";

export const metadata: Metadata = {
  metadataBase: new URL("https://normkontor.de"),
  title: {
    default: "Normkontor — Kontrollierte KI-Arbeit. Nachweisbar.",
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
    title: "Normkontor — Kontrollierte KI-Arbeit. Nachweisbar.",
    description,
    images: [
      {
        url: "/brand/normkontor-og.png",
        width: 1200,
        height: 630,
        alt: "Normkontor — Kontrollierte KI-Arbeit. Nachweisbar.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Normkontor — Kontrollierte KI-Arbeit. Nachweisbar.",
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
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
