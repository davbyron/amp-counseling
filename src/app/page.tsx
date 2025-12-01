import { Baskervville } from "next/font/google";

const baskervville = Baskervville({
  subsets: ["latin"],
})

export default async function Home() {
  return (
    <div className="mx-auto w-1/2 flex flex-col items-center gap-5 text-center z-10">
      <h1 className={`${baskervville.className} text-5xl font-medium`}>
        aislyn m plath counseling
      </h1>
      <h2 className="text-lg">
        collaborative and affirming mental health counseling
      </h2>
    </div>
  );
}
