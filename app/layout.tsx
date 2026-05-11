import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const terminal = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ModsByMail — Hide your Ray-Ban Meta LED",
  description:
    "Mail-in service that conceals the recording indicator on your Ray-Ban Meta glasses. Five-day turnaround, lifetime warranty, free Kansas City hand delivery.",
  metadataBase: new URL("https://modsbymail.com"),
  openGraph: {
    title: "ModsByMail",
    description:
      "Mail-in concealment service for Ray-Ban Meta glasses. KC hand delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixel.variable} ${terminal.variable}`}>
      <body>{children}</body>
    </html>
  );
}
