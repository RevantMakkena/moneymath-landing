import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({
  name,
  tagline,
  description,
  icon: Icon,
  status,
  url,
  accent,
  accentBg,
}: Product) {
  const content = (
    <div
      className="product-card group rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 h-full transition-all hover:border-gray-300 dark:hover:border-zinc-700"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2.5 rounded-xl ${accentBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        {status === "live" ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </span>
        ) : (
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
            Coming Soon
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
        {name}
      </h3>
      <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-3">
        {tagline}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
        {description}
      </p>

      {url && (
        <span className="inline-flex items-center gap-1 text-sm font-medium text-sky-500 group-hover:text-sky-400 transition-colors">
          Explore
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}
