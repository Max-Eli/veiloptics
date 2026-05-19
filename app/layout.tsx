import type { Metadata } from "next";
import "./globals.css";

const title =
  "ModsByMail — Hide the Recording LED on Meta Ray-Ban & Oakley Glasses";
const description =
  "Mail-in service that conceals the recording indicator on Meta Ray-Ban (Display, Wayfarer, Headliner, Skyler, Scriber, Blayzer) and Meta Oakley (Vanguard, HSTN) smart glasses. 24-hour turnaround, lifetime warranty, and free hand delivery in the Kansas City metro.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://modsbymail.com"),
  applicationName: "ModsByMail",
  keywords: [
    "Ray-Ban Meta",
    "Meta Oakley",
    "smart glasses mod",
    "hide recording LED",
    "Ray-Ban Display",
    "Oakley Vanguard",
    "Oakley HSTN",
    "Kansas City",
  ],
  authors: [{ name: "ModsByMail" }],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "ModsByMail",
    url: "https://modsbymail.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#000080",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
