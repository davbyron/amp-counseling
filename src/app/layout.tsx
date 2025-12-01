import Link from "next/link";
import { GlowingBall } from "@/components";
import { Baskervville, DM_Sans } from "next/font/google";
import { PiClockFill , PiPhoneFill, PiMapPinFill } from "react-icons/pi";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMP Counseling",
  description: "Aislyn M Plath Counseling. Collaborative and affirming mental health counseling.",
};

const baskervville = Baskervville({
  subsets: ["latin"],
})

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
        className={`h-screen overflow-hidden ${dmSans.className} text-gray-dark antialiased`}
      >
        <div className="relative h-full flex flex-col items-center gap-48">
          <GlowingBall size="45rem" top="60%" right="40%" shadowSize="xl" />
          <GlowingBall size="22.5rem" top="30%" right="10%" shadowSize="md" />
          <GlowingBall size="6rem" top="10%" right="10%" shadowSize="md" />

          <header className="px-5 w-full flex justify-between items-center z-10 backdrop-blur-lg shadow-header">
            <img
              src="/amp-counseling-logo.svg"
              alt="AMP Counseling Logo"
              className="size-30"
            />
            <div className="flex items-center gap-20">
              <nav className={`${baskervville.className} flex gap-20 font-semibold`}>
                <Link
                  href="/about-fees"
                  className="
                    relative
                    after:absolute after:left-0 after:-bottom-0.5
                    after:h-0.5 after:w-full after:bg-gray-dark
                    after:origin-left after:scale-x-0
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100 active:opacity-75
                    active:after:bg-gray-dark/75
                  "
                >
                  About/Fees
                </Link>
                <Link
                  href="/insurance-contact"
                  className="
                    relative
                    after:absolute after:left-0 after:-bottom-0.5
                    after:h-0.5 after:w-full after:bg-gray-dark
                    after:origin-left after:scale-x-0
                    after:transition-transform after:duration-300
                    hover:after:scale-x-100 active:opacity-75
                    active:after:bg-gray-dark/75
                  "
                >
                  Insurance/Contact
                </Link>
              </nav>
              <address className="not-italic flex flex-col items-end gap-2">
                <p className="w-full flex items-center justify-between gap-2">
                <PiPhoneFill />
                <span>(508) 321-7967</span>
                </p>
                <div className="w-full flex items-center justify-between gap-2">
                  <PiMapPinFill />
                  <p className="flex flex-col items-end">
                    <span>Providence, RI</span>
                    <span>Bridgewater, MA</span>
                  </p>
                </div>
              </address>
            </div>
          </header>

          <main className="w-full z-10">
            {children}
          </main>

          <footer className="px-5 pt-5 w-full mt-auto pb-5 flex flex-col gap-2 z-10 backdrop-blur-lg shadow-footer">
            <p className="flex items-center gap-2">
              <PiClockFill />
              <span>Monday - Thursday 11am-7pm</span>
            </p>
            <img
              src="/progress-rainbow-flag.svg"
              alt="Progress rainbow LGBTQ flag"
              className="w-10"
            />
          </footer>
        </div>
      </body>
    </html>
  );
}
