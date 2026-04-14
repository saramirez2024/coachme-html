"use client";

import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/ui/scroll-reveal";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "#pricing";

const freeFeatures = [
  "AI chat coach",
  "Personalized workout plan",
  "Personalized meal plan",
  "Food logging",
  "Workout logging",
  "Progress dashboard",
];

const paidFeatures = [
  "Everything in free trial",
  "Ongoing access",
  "Plan updates",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-plus-jakarta)] font-extrabold text-3xl sm:text-4xl uppercase tracking-tight">
              Start Free. Upgrade When You&apos;re Ready.
            </h2>
            <p className="mt-4 text-slate-300">
              No credit card. Pause or cancel anytime.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Free Trial */}
          <ScrollReveal delay={0}>
            <Card className="bg-slate-800 border-blue-500 md:scale-105 relative h-full">
              <CardContent className="pt-6">
                <Badge className="bg-blue-500 text-white mb-4">
                  Start Here
                </Badge>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl mb-2">
                  Free Trial
                </h3>
                <p className="text-slate-300 text-sm mb-6">
                  7 days, all features, no card required
                </p>
                <ul className="space-y-3 mb-8">
                  {freeFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  className="flex items-center justify-center w-full h-12 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
                >
                  Start Free
                </a>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Monthly */}
          <ScrollReveal delay={0.15}>
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardContent className="pt-6">
                <div className="mb-4 h-[22px]" /> {/* spacer to align with badge */}
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl mb-2">
                  Monthly
                </h3>
                <p className="text-slate-300 text-sm mb-1">
                  Starting at{" "}
                  <span className="text-white font-bold text-xl">$15/mo</span>
                </p>
                <p className="text-slate-400 text-xs mb-6">
                  Less than one personal training session. For a full month of
                  AI coaching.
                </p>
                <ul className="space-y-3 mb-8">
                  {paidFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={APP_URL}
                  className="flex items-center justify-center w-full h-12 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
                >
                  Start Free
                </a>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <p className="text-center mt-12 text-sm text-slate-400 max-w-xl mx-auto">
            That&apos;s 10x cheaper than human coaches ($150-300/mo). Better
            personalization than MyFitnessPal or Caliber.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
