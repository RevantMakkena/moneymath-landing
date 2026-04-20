import { Calculator } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Product {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  status: "live";
  url?: string;
  accent: string;
  accentBg: string;
}

export const products: Product[] = [
  {
    name: "Calculators",
    tagline: "32 tools, zero sign-ups",
    description:
      "Mortgage, compound interest, paycheck, tax, BMI, and 27 more. All run in your browser — nothing stored, nothing tracked.",
    icon: Calculator,
    status: "live",
    url: "https://calculators.moneymath.pro",
    accent: "#2563eb",
    accentBg: "bg-blue-600/10 text-blue-600",
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
