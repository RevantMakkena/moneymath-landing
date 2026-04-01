import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ name, description, icon: Icon, status, url, color }: Product) {
  const content = (
    <div className="group relative rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all hover:shadow-md hover:-translate-y-0.5 h-full">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2.5 rounded-lg bg-gray-50 dark:bg-zinc-800 ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2">
          {status === "live" ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          ) : (
            <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
              Coming Soon
            </span>
          )}
          {url && (
            <ExternalLink className="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors" />
          )}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
