import type { Metadata } from "next";
import { Cormorant_Garamond, Sora, Pinyon_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resnoir de Bussy — Shamanic Practitioner",
  description:
    "Remote shamanic healing with Resnoir de Bussy. Soul retrieval, energy clearing, ancestral healing, and more. Distance is no barrier to deep transformation.",
  other: {
    "theme-color": "#FAF7F2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sora.variable} ${pinyon.variable}`}>
      <body className="min-h-dvh font-[family-name:var(--font-body)]">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
