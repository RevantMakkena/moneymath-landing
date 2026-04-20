"use client";

import {useState, useMemo} from "react";
import {ArrowRight} from "lucide-react";

function calcMortgage(principal: number, annualRate: number, years: number) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  const payment =
    (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const total = payment * n;
  return {
    payment: Math.round(payment),
    total: Math.round(total),
    interest: Math.round(total - principal),
  };
}

const presets = [
  {label: "$250K", principal: 250000},
  {label: "$350K", principal: 350000},
  {label: "$500K", principal: 500000},
  {label: "$750K", principal: 750000},
];

export default function HeroSection() {
  const [activePreset, setActivePreset] = useState(1);
  const principal = presets[activePreset].principal;
  const rate = 6.5;
  const years = 30;

  const calc = useMemo(() => calcMortgage(principal, rate, years), [principal]);

  const fmt = (n: number) =>
    n.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-blue-500 mb-4 tracking-wide uppercase">
              Free financial tools
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Do the math
              <br />
              <span className="text-gray-400 dark:text-gray-500">
                before the money does.
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
              MoneyMath is a suite of free financial tools for everyday money
              decisions. No sign-ups, no jargon — just answers.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://calculators.moneymath.pro"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                Try the calculators
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right — interactive mortgage preview */}
          <div className="relative">
            <div className="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 pt-6 md:px-8 md:pt-8">
                <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                  Mortgage Calculator Preview
                </p>

                {/* Preset buttons */}
                <div className="flex gap-2 mb-6">
                  {presets.map((p, i) => (
                    <button
                      key={p.label}
                      onClick={() => setActivePreset(i)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                        i === activePreset
                          ? "bg-blue-500 text-white shadow-sm"
                          : "bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-700"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {fmt(principal)} at {rate}% for {years} years
                </p>

                {/* Big number */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white tabular-nums transition-all">
                    {fmt(calc.payment)}
                  </span>
                  <span className="text-xl text-gray-400 dark:text-gray-500">
                    /mo
                  </span>
                </div>
              </div>

              {/* Breakdown */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Total paid over {years} years
                  </span>
                  <span className="text-gray-900 dark:text-white font-medium tabular-nums">
                    {fmt(calc.total)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Total interest
                  </span>
                  <span className="text-blue-500 font-medium tabular-nums">
                    {fmt(calc.interest)}
                  </span>
                </div>

                {/* Mini bar chart */}
                <div className="pt-3">
                  <div className="h-2 rounded-full bg-gray-100 dark:bg-zinc-800 overflow-hidden flex">
                    <div
                      className="h-full bg-blue-500 rounded-l-full transition-all duration-500"
                      style={{width: `${(principal / calc.total) * 100}%`}}
                    />
                    <div
                      className="h-full bg-blue-300 dark:bg-blue-400/40 rounded-r-full transition-all duration-500"
                      style={{width: `${(calc.interest / calc.total) * 100}%`}}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-400 dark:text-gray-500">
                    <span>Principal</span>
                    <span>Interest</span>
                  </div>
                </div>
              </div>

              {/* Footer link */}
              <div className="px-6 py-4 md:px-8 border-t border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-800/30">
                <a
                  href="https://calculators.moneymath.pro/mortgage"
                  className="text-sm text-blue-500 hover:text-blue-400 font-medium transition-colors inline-flex items-center gap-1"
                >
                  Run your own numbers
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
