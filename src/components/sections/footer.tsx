const links = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Col 1 - Brand */}
          <div>
            <span className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl text-white">
              CoachMe
            </span>
            <p className="mt-2 text-sm text-slate-400">
              Your AI coach, always ready
            </p>
          </div>

          {/* Col 2 - Links */}
          <div>
            <h4 className="text-sm font-medium text-slate-300 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Built with */}
          <div>
            <h4 className="text-sm font-medium text-slate-300 mb-3">
              Built With
            </h4>
            <a
              href="https://www.anthropic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            >
              Built with Claude AI
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
          &copy; 2026 CoachMe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
