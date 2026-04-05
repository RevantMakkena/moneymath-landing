import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800">
      <FadeIn>
        <div className="max-w-5xl mx-auto py-12 px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-6 h-6 rounded-md bg-sky-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">M</span>
                </div>
                <span className="text-base font-semibold text-gray-900 dark:text-white">
                  MoneyMath
                </span>
              </div>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Free financial tools for everyday decisions.
                <br />
                Built by{" "}
                <a
                  href="https://ojaslabs.dev"
                  className="underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  Ojas Labs
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-sm text-gray-400 dark:text-gray-500">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Product
                </span>
                <a href="https://moneymath.pro" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Calculators
                </a>
                <a href="https://moneymath.pro/mortgage" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Mortgage
                </a>
                <a href="https://moneymath.pro/compound" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Compound Interest
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Legal
                </span>
                <a href="https://moneymath.pro/privacy" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Privacy
                </a>
                <a href="https://moneymath.pro/terms" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Terms
                </a>
                <a href="https://moneymath.pro/contact" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-gray-100 dark:border-zinc-800/50 text-xs text-gray-400 dark:text-gray-600">
            &copy; {new Date().getFullYear()} MoneyMath by Ojas Labs. All rights reserved.
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
