import { tv } from "tailwind-variants";
import { Baskervville } from "next/font/google";

const baskervville = Baskervville({
  subsets: ["latin"],
})

export const headings = tv({
  slots: {
    h1: "text-2xl",
    h2: "text-lg"
  },
  compoundSlots: [
    {
      slots: ["h1", "h2"],
      className: `${baskervville.className} font-bold`
    }
  ]
});
