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
  "Öffentlicher Normkontor Standard, 3A-Regelwerk, Pilot und Ausbildung für kontrollierte agentische Softwareentwicklung.";

export const metadata: Metadata = {
  metadataBase: new URL("https://normkontor.de"),
  title: {
    default: "Normkontor — Verantwortung bleibt beim Unternehmen.",
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
    title: "Normkontor — KI-Agenten arbeiten. Verantwortung bleibt beim Unternehmen.",
    description,
    images: [
      {
        url: "/brand/normkontor-og.png",
        width: 1200,
        height: 630,
        alt: "Normkontor — KI-Agenten arbeiten. Verantwortung bleibt beim Unternehmen.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Normkontor — Verantwortung bleibt beim Unternehmen.",
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
