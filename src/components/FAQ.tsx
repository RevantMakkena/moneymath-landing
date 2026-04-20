"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    q: "Is MoneyMath really free?",
    a: "Yes. Every calculator and tool is completely free with no sign-up required. We don't sell your data or put answers behind paywalls.",
  },
  {
    q: "How accurate are the calculators?",
    a: "Our calculators use the same standard formulas used by banks and financial institutions. For mortgages, we use standard amortization math. For taxes, we use current federal and state brackets for all 50 states.",
  },
  {
    q: "Is my data stored or tracked?",
    a: "No. All calculations run entirely in your browser. Nothing is sent to a server, nothing is stored, and we don't use cookies to track your inputs.",
  },
  {
    q: "What calculators do you have?",
    a: "32 and counting. Finance (mortgage, loan, compound interest, tax, paycheck, retirement, 401k, salary, and more), health (BMI, calorie, TDEE, macro), and utilities (unit converter, date, GPA, percentage).",
  },
  {
    q: "Can I share my calculation results?",
    a: "Yes. Every calculator generates a shareable URL with your inputs encoded in it. Just copy the link from your browser and send it to anyone — they'll see the exact same results.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={index * 80}>
      <div className="border-b border-gray-200 dark:border-zinc-800 last:border-0">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
        >
          <span className="text-base font-medium text-gray-900 dark:text-white pr-4 group-hover:text-blue-500 transition-colors">
            {q}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? "200px" : "0", opacity: open ? 1 : 0 }}
        >
          <p className="pb-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            {a}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-sm font-medium text-blue-500 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Common questions
          </h2>
        </FadeIn>

        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
