import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Retour : vos clients oublient de reprendre rendez-vous",
  description:
    "Retour rappelle automatiquement vos clients quand il est temps de revenir à votre salon.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf6ef",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-creme">{children}</body>
    </html>
  );
}
