import { Baskervville } from "next/font/google";
import { GlowingBall } from "./components";
import { PiClockFill , PiPhoneFill, PiMapPinFill } from "react-icons/pi";

const baskervville = Baskervville({
  subsets: ["latin"],
})

export default async function Home() {
  return (
    <div className="relative h-full px-5 flex flex-col items-center gap-48">
      <GlowingBall size="45rem" top="60%" right="40%" shadowSize="xl" />
      <GlowingBall size="22.5rem" top="30%" right="10%" shadowSize="md" />
      <GlowingBall size="6rem" top="10%" right="10%" shadowSize="md" />

      <header className="w-full flex justify-between items-center z-10">
        <img
          src="/amp-counseling-logo.svg"
          alt="AMP Counseling Logo"
          className="size-30"
        />
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
      </header>

      <main className="w-1/2 flex flex-col items-center gap-5 text-center z-10">
        <h1 className={`${baskervville.className} text-5xl font-medium`}>
          Aislyn M Plath Counseling 
        </h1>
        <h2 className="text-lg">
          Collaborative and affirming mental health counseling
        </h2>
      </main>

      <footer className="w-full mt-auto mb-5 flex flex-col gap-2 z-10">
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
  );
}
