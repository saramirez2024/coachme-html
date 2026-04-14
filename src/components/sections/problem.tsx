"use client";

import { Smartphone, DollarSign, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ui/scroll-reveal";

const painCards = [
  {
    icon: Smartphone,
    text: "You've downloaded 5 fitness apps and still don't know what to eat on Tuesday",
  },
  {
    icon: DollarSign,
    text: "You can't afford $150/mo for a human coach, so you're guessing your way through workouts",
  },
  {
    icon: BarChart3,
    text: "You track calories but your plan never changes based on YOUR body and YOUR goals",
  },
];

export default function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-plus-jakarta)] font-extrabold text-3xl sm:text-4xl uppercase tracking-tight">
              Sound Familiar?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              You&apos;re not the problem. The fitness industry is.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <Card className="bg-slate-800 border-slate-700 h-full">
                <CardContent className="pt-6">
                  <card.icon className="w-10 h-10 text-blue-500 mb-4" />
                  <p className="text-slate-300 leading-relaxed">{card.text}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <p className="text-center mt-12 text-lg text-slate-300 font-medium">
            You don&apos;t need another tracker.{" "}
            <span className="text-white">You need a coach.</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
