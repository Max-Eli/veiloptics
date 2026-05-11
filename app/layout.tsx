import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "*** ModsByMail.com *** ~ Hide your Ray-Ban Meta LED ~",
  description:
    "WELCOME!! ModsByMail is the #1 spot to mail in your Ray-Ban Meta glasses for the BEST mod on the web!! Now serving Kansas City with FREE hand delivery!!",
  metadataBase: new URL("https://modsbymail.com"),
  openGraph: {
    title: "ModsByMail.com",
    description: "Mail in your Ray-Ban Meta glasses!! KC hand delivery!!",
    type: "website",
  },
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
