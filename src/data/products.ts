import { Calculator, CreditCard, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Product {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "coming-soon";
  url?: string;
  accent: string;
  accentBg: string;
}

export const products: Product[] = [
  {
    name: "Calculators",
    tagline: "28 tools, zero sign-ups",
    description:
      "Mortgage, compound interest, paycheck, tax, BMI, and 22 more. All run in your browser — nothing stored, nothing tracked.",
    icon: Calculator,
    status: "live",
    url: "https://moneymath.pro",
    accent: "#0ea5e9",
    accentBg: "bg-sky-500/10 text-sky-500",
  },
  {
    name: "Credit Card Rewards",
    tagline: "Find your best card",
    description:
      "Side-by-side card comparisons, reward maximizers, and \"best card for X\" recommendations backed by real data.",
    icon: CreditCard,
    status: "coming-soon",
    accent: "#10b981",
    accentBg: "bg-emerald-500/10 text-emerald-500",
  },
  {
    name: "Public API",
    tagline: "Built for developers & AI",
    description:
      "Programmatic access to credit card data and financial calculations. OpenAPI spec, rate-limited, free tier.",
    icon: Code,
    status: "coming-soon",
    accent: "#8b5cf6",
    accentBg: "bg-violet-500/10 text-violet-500",
  },
];

export const popularCalcs = [
  { name: "Mortgage", path: "/mortgage" },
  { name: "Compound Interest", path: "/compound" },
  { name: "Paycheck", path: "/paycheck" },
  { name: "Tax", path: "/tax" },
  { name: "Auto Loan", path: "/auto-loan" },
  { name: "Retirement", path: "/retirement" },
  { name: "BMI", path: "/bmi" },
  { name: "401(k)", path: "/401k" },
  { name: "Salary", path: "/salary" },
  { name: "Student Loan", path: "/student-loan" },
  { name: "Tip", path: "/tip" },
  { name: "House Affordability", path: "/house-affordability" },
];
