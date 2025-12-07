import { headings } from "@/utils/tailwind-variants"
import { LuBadgeInfo } from "react-icons/lu";

export default async function AboutFeesPage() {
  const { h1, h2 } = headings();

  return (
    <div className="py-20 mx-auto w-1/2 flex flex-col gap-10">
      <h1 className={h1({ className: "flex items-center gap-3" })}>
        <LuBadgeInfo />
        About/Fees
      </h1>

      <div className="flex flex-col gap-3">
        <h2 className={h2()}>About Me</h2>
        <p>Hello, and welcome. I&apos;m a licensed therapist dedicated to helping individuals navigate life&apos;s challenges with clarity and compassion. My approach is warm, collaborative, and grounded in evidence-based practices.</p>
        <p>I work with adults and teens on a wide range of concerns, including anxiety, depression, relationship challenges, life transitions, stress, and self-esteem. My goal is to create a safe, supportive space where you can explore what&apos;s holding you back and develop tools that support growth and healing.</p>
        <p>Therapy is not one-size-fits-all. Together, we&apos;ll work at a pace that feels comfortable for you and tailor each session to meet your unique needs and goals.</p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className={h2()}>My Approach</h2>
        <p>I draw from modalities such as Cognitive Behavioral Therapy (CBT), mindfulness-based practices, and person-centered therapy. I believe in developing a strong therapeutic relationship and fostering long-term, sustainable change.</p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className={h2()}>Session Fees</h2>
        <ul>
          <li>Individual Therapy (50 minutes): $0</li>
          <li>Initial Intake Session (60 minutes): $0</li>
          <li>Extended Session (75 minutes): $0</li>
        </ul>
        <p>Payment is due at the time of service. I accept major credit/debit cards, HSA/FSA cards, and digital payment options.</p>
        <p>If cost is a barrier, I offer a limited number of sliding-scale spots based on financial need. Please reach out for availability.</p>
      </div>
    </div>
  )
}
