"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 32, suffix: "", label: "Calculators" },
  { value: 100, suffix: "%", label: "Free forever" },
  { value: 0, suffix: "", label: "Sign-ups required" },
  { value: 50, suffix: "", label: "States covered" },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (target === 0) { setCount(0); return; }

    let frame: number;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, start]);

  return count;
}

function StatItem({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, 1200, visible);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tabular-nums">
        {count}{suffix}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
        {label}
      </p>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
