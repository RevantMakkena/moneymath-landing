export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-zinc-800 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} MoneyMath. Built by{" "}
          <a
            href="https://ojaslabs.dev"
            className="underline hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Ojas Labs
          </a>
        </p>
        <div className="flex gap-6">
          <a
            href="https://moneymath.pro/privacy"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Privacy
          </a>
          <a
            href="https://moneymath.pro/terms"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Terms
          </a>
          <a
            href="https://moneymath.pro/contact"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
