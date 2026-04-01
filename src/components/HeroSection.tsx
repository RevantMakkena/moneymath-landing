import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
          Your money,{" "}
          <span className="text-sky-500">demystified.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
          MoneyMath is a suite of free financial tools for everyday money
          decisions. From mortgage calculators to credit card comparisons, we
          help you understand your finances — no jargon, no sign-ups.
        </p>

        <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">
          Built by{" "}
          <a
            href="https://ojaslabs.dev"
            className="underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Ojas Labs
          </a>
        </p>

        <a
          href="https://moneymath.pro"
          className="inline-flex items-center gap-2 px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-sky-500/25"
        >
          Try Our Calculators
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
