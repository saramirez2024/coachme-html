"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const faqs = [
  {
    q: "Is this actually personalized, or just a template?",
    a: "Completely personalized. The AI asks about your goals, experience, injuries, schedule, dietary restrictions, preferences, and budget before generating anything. No two plans are alike.",
  },
  {
    q: "What if I don't know what exercises to do?",
    a: "That's the whole point. The AI programs everything — exercise selection, sets, reps, rest, progression, alternatives for injuries. You just follow the plan.",
  },
  {
    q: "Can I use this at any gym or at home?",
    a: "Yes. Tell your coach what equipment you have (gym, dumbbells, bands, bodyweight only) and the plan is built around that.",
  },
  {
    q: "How does meal planning work?",
    a: "Full weekly meal plan based on your calorie goal, macros, food preferences, and budget. Swap meals, adjust portions, log restaurant food anytime.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Encrypted, stored on Supabase with row-level security. Only you can access your data. We never sell it.",
  },
  {
    q: "How is this different from asking ChatGPT?",
    a: "ChatGPT gives a one-time generic plan. CoachMe maintains your profile, generates personalized plans, tracks progress, adjusts based on feedback, and integrates a real food database. It's the difference between a template and a coach.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no fees. Pause or cancel in your account settings. Keep your data.",
  },
  {
    q: "What AI model do you use?",
    a: "Claude by Anthropic. Haiku for fast chat, Sonnet for plan generation. Both more capable and private than alternatives.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-plus-jakarta)] font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mb-16">
            Questions? We&apos;ve Got Answers.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion
            className="max-w-3xl mx-auto space-y-3"
          >
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-slate-700 rounded-lg px-6 data-[state=open]:border-blue-500 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium py-4 hover:no-underline text-white">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
