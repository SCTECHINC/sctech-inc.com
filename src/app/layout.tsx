import type { Metadata } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sctech-inc.com"),
  title: "SCTECH INC — Boutique Technology Consulting & Custom Software",
  description:
    "Boutique, senior-only technology consultancy. 25+ years shipping production software — from Fortune 500 enterprise portals (Microsoft, NOV, UBS, Credit Suisse, Xerox) to AI-native SaaS platforms running live today.",
  openGraph: {
    type: "website",
    siteName: "SCTECH INC",
    title: "SCTECH INC — Boutique Technology Consulting",
    description:
      "Boutique. Fast. Super intelligent. Master of all. A senior-only consulting team for companies that need a real builder in the room.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
