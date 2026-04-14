"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "#pricing";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Gradient mesh bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-plus-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight">
            Your Strongest Chapter Starts Now
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Join the beta — your AI coach is ready. Beta testing with real users
            in Houston.
          </p>
          <a
            href={APP_URL}
            className="mt-8 inline-flex items-center justify-center h-12 w-full sm:w-auto px-12 rounded-lg bg-blue-500 text-white text-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Start Free — No Credit Card
          </a>
          <p className="mt-4 text-sm text-slate-400">
            5-minute setup. Personalized plan today.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
