"use client";

import StatCounter from "@/components/ui/stat-counter";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function SocialProof() {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 to-slate-800 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left - powered by */}
            <p className="text-sm text-slate-400">
              Powered by{" "}
              <a
                href="https://www.anthropic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors"
              >
                Claude AI from Anthropic
              </a>
            </p>

            {/* Right - stats */}
            <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
              <StatCounter target={5} label="Personalized plans" suffix="min" />
              <StatCounter
                target={10}
                label="Cheaper than human coaches"
                suffix="x"
              />
              <div className="text-center">
                <div className="text-sm text-slate-300 font-medium">
                  Meal + workout tracking
                </div>
                <div className="text-sm text-slate-400 mt-1">in one place</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
