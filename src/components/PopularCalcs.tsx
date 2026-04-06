import { popularCalcs } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

const baseUrl = "https://calculators.moneymath.pro";

export default function PopularCalcs() {
  return (
    <section className="py-16 px-6 border-t border-gray-100 dark:border-zinc-800/50">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-6">
          Popular calculators
        </p>
        <div className="flex flex-wrap gap-2">
          {popularCalcs.map((calc) => (
            <a
              key={calc.path}
              href={`${baseUrl}${calc.path}`}
              className="calc-card inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm text-gray-700 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-200 dark:hover:border-sky-500/30 transition-colors"
            >
              {calc.name}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-gray-400" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
