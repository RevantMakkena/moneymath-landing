"use client";

import {
  Home,
  DollarSign,
  BarChart3,
  Calculator,
  CreditCard,
  TrendingUp,
  Landmark,
  Banknote,
  Coins,
  PiggyBank,
  Percent,
  Receipt,
  Wallet,
  CircleDollarSign,
  ChartPie,
  Scale,
  Target,
  type LucideIcon,
} from "lucide-react";

const icons: { Icon: LucideIcon; top: string; left: string; size: number; rotate: number }[] = [
  // Top band
  { Icon: Home, top: "2%", left: "5%", size: 36, rotate: -12 },
  { Icon: DollarSign, top: "4%", left: "22%", size: 28, rotate: 18 },
  { Icon: BarChart3, top: "3%", left: "45%", size: 34, rotate: -8 },
  { Icon: Calculator, top: "5%", left: "68%", size: 30, rotate: 15 },
  { Icon: CreditCard, top: "2%", left: "90%", size: 34, rotate: -20 },

  // Upper section
  { Icon: TrendingUp, top: "10%", left: "12%", size: 30, rotate: 10 },
  { Icon: Landmark, top: "12%", left: "38%", size: 36, rotate: -15 },
  { Icon: Banknote, top: "9%", left: "58%", size: 28, rotate: 25 },
  { Icon: Coins, top: "14%", left: "80%", size: 34, rotate: -10 },

  // Upper-mid
  { Icon: PiggyBank, top: "20%", left: "3%", size: 34, rotate: 16 },
  { Icon: Percent, top: "22%", left: "30%", size: 26, rotate: -22 },
  { Icon: Receipt, top: "18%", left: "52%", size: 30, rotate: 8 },
  { Icon: Wallet, top: "24%", left: "75%", size: 28, rotate: -18 },
  { Icon: CircleDollarSign, top: "21%", left: "93%", size: 30, rotate: 12 },

  // Mid
  { Icon: ChartPie, top: "30%", left: "8%", size: 30, rotate: -25 },
  { Icon: Scale, top: "33%", left: "42%", size: 28, rotate: 14 },
  { Icon: Target, top: "28%", left: "65%", size: 34, rotate: -8 },
  { Icon: Home, top: "35%", left: "88%", size: 28, rotate: 20 },

  // Center
  { Icon: DollarSign, top: "40%", left: "2%", size: 28, rotate: -14 },
  { Icon: Calculator, top: "42%", left: "25%", size: 36, rotate: 6 },
  { Icon: TrendingUp, top: "38%", left: "50%", size: 28, rotate: -30 },
  { Icon: Banknote, top: "44%", left: "72%", size: 30, rotate: 18 },

  // Lower-center
  { Icon: Landmark, top: "50%", left: "10%", size: 34, rotate: -12 },
  { Icon: CreditCard, top: "52%", left: "35%", size: 28, rotate: 22 },
  { Icon: Coins, top: "48%", left: "60%", size: 30, rotate: -16 },
  { Icon: PiggyBank, top: "54%", left: "85%", size: 36, rotate: 10 },

  // Lower
  { Icon: Percent, top: "60%", left: "5%", size: 26, rotate: 28 },
  { Icon: Receipt, top: "62%", left: "28%", size: 30, rotate: -10 },
  { Icon: Wallet, top: "58%", left: "48%", size: 34, rotate: 15 },
  { Icon: CircleDollarSign, top: "64%", left: "70%", size: 28, rotate: -22 },
  { Icon: ChartPie, top: "60%", left: "92%", size: 30, rotate: 8 },

  // Bottom band
  { Icon: Scale, top: "72%", left: "15%", size: 30, rotate: -18 },
  { Icon: Target, top: "70%", left: "40%", size: 28, rotate: 12 },
  { Icon: Home, top: "74%", left: "62%", size: 34, rotate: -6 },
  { Icon: DollarSign, top: "68%", left: "82%", size: 28, rotate: 24 },

  // Near-bottom
  { Icon: Calculator, top: "80%", left: "6%", size: 34, rotate: 14 },
  { Icon: BarChart3, top: "82%", left: "32%", size: 28, rotate: -20 },
  { Icon: Landmark, top: "78%", left: "55%", size: 30, rotate: 10 },
  { Icon: Banknote, top: "84%", left: "78%", size: 36, rotate: -14 },

  // Very bottom
  { Icon: TrendingUp, top: "90%", left: "12%", size: 28, rotate: -8 },
  { Icon: CreditCard, top: "92%", left: "45%", size: 30, rotate: 16 },
  { Icon: PiggyBank, top: "88%", left: "68%", size: 34, rotate: -24 },
  { Icon: Coins, top: "94%", left: "90%", size: 28, rotate: 10 },
];

export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Grid */}
      <div className="absolute inset-0 hero-grid hero-fade" />

      {/* Icons */}
      {icons.map((item, i) => (
        <item.Icon
          key={i}
          className="absolute text-gray-400/20 dark:text-zinc-600/25"
          strokeWidth={1.2}
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
            transform: `rotate(${item.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
