import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Veil Optics — Discreet LED concealment for Ray-Ban Meta glasses",
  description:
    "Premium mail-in service that conceals the recording indicator on your Ray-Ban Meta glasses. Ship them in, get them back in days.",
  metadataBase: new URL("https://veiloptics.com"),
  openGraph: {
    title: "Veil Optics",
    description:
      "Premium mail-in concealment service for Ray-Ban Meta glasses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
