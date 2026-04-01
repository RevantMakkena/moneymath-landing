import { Calculator, CreditCard, Code } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Product {
  name: string;
  description: string;
  icon: LucideIcon;
  status: "live" | "coming-soon";
  url?: string;
  color: string;
}

export const products: Product[] = [
  {
    name: "Calculators",
    description:
      "28 free financial, health, and utility calculators — mortgage, compound interest, BMI, and more.",
    icon: Calculator,
    status: "live",
    url: "https://moneymath.pro",
    color: "text-sky-500",
  },
  {
    name: "Credit Card Rewards",
    description:
      "Compare credit cards, maximize rewards, and find the best card for your spending habits.",
    icon: CreditCard,
    status: "coming-soon",
    color: "text-emerald-500",
  },
  {
    name: "Public API",
    description:
      "Access credit card data and financial calculations programmatically. Built for developers and AI tools.",
    icon: Code,
    status: "coming-soon",
    color: "text-violet-500",
  },
];
