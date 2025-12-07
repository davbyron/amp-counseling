import { headings } from "@/utils/tailwind-variants"
import { LuScrollText } from "react-icons/lu";

export default async function InsuranceContactPage() {
  const { h1, h2 } = headings();

  return (
    <div className="py-16 mx-auto w-1/2 flex flex-col gap-10">
      <h1 className={h1({ className: "flex items-center gap-3" })}>
        <LuScrollText />
        Insurance/Contact
      </h1>

      <div className="flex flex-col gap-3">
        <h2 className={h2()}>Insurance Information</h2>
        <p>I am an out-of-network provider, which means I do not bill insurance directly. However, many clients are able to receive partial reimbursement for sessions depending on their insurance plan.</p>
        <p>If you&apos;d like to use out-of-network benefits, I can provide a superbill that you can submit to your insurance company for reimbursement. It&apos;s a simple process, and I&apos;m happy to guide you through it.</p>
        <p>Before starting therapy, you may want to call your insurance provider and ask:</p>
        <ul>
          <li>Do I have out-of-network mental health benefits?</li>
          <li>What percentage of the session fee is reimbursed?</li>
          <li>Do I have a deductible, and has any of it been met?</li>
          <li>Are telehealth sessions covered?</li>
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className={h2()}>Good Faith Estimate (No Surprises Act)</h2>
        <p>Under the No Surprises Act, you have the right to receive a Good Faith Estimate explaining the expected cost of therapy services. I&apos;m happy to provide one at any time.</p>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className={h2()}>Contact</h2>
        <p>I&apos;d love to hear from you. Whether you have questions or you&apos;re ready to schedule an appointment, please feel free to reach out.</p>
        <address>
          <p><span className="font-bold">Phone:</span> (508) 321-7967</p>
          <p><span className="font-bold">Email:</span> aislyn@amp-counseling.com</p>
          <p><span className="font-bold">Office Locations:</span> Providence, RI and Bridgewater, MA</p>
        </address>
      </div>
    </div>
  )
}
