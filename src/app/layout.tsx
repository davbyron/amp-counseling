import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMP Counseling",
  description: "Aislyn M Plath Counseling. Collaborative and affirming mental health counseling.",
};

const dmSans = DM_Sans({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen ${dmSans.className} text-gray-dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
