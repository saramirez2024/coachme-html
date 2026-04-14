"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PhoneMockup from "@/components/ui/phone-mockup";
import ChatBubble from "@/components/ui/chat-bubble";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "#pricing";

const trustItems = [
  "No Credit Card Required",
  "Personalized in 5 Minutes",
  "Cancel Anytime",
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 mb-6">
              AI-Powered Personal Coaching
            </Badge>
          </motion.div>

          <motion.h1
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-[family-name:var(--font-plus-jakarta)] font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase leading-tight tracking-tight"
          >
            Your AI Coach.{" "}
            <span className="text-blue-500">Your Plan.</span>{" "}
            Your Results.
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0"
          >
            CoachMe builds you a personalized workout + meal plan through real
            conversation — not boring forms. Like having a personal trainer and
            nutritionist in your pocket for less than a coffee a day.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-blue-500 text-white font-medium text-base hover:bg-blue-600 transition-colors"
            >
              Start Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-slate-700 text-slate-300 font-medium text-base hover:border-slate-500 hover:text-white transition-colors"
            >
              See How It Works &rarr;
            </a>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start"
          >
            {trustItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <Check className="w-4 h-4 text-emerald-500" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right phone mockup */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:block"
        >
          <div className={prefersReducedMotion ? "" : "animate-float"}>
            <PhoneMockup>
              <div className="flex flex-col gap-1 py-2">
                <div className="text-xs font-medium text-slate-400 text-center mb-2">
                  AI Coach
                </div>
                <ChatBubble
                  role="user"
                  message="I want to lose 15 lbs but I have a bad knee from basketball"
                />
                <ChatBubble
                  role="assistant"
                  message="Got it — 15 lb goal with a knee consideration. How many days per week can you work out?"
                />
                <ChatBubble
                  role="user"
                  message="4 days, I have dumbbells at home"
                />
                <ChatBubble
                  role="assistant"
                  message="Perfect. I'll program 4 days of dumbbell-focused training with knee-friendly exercises. Any dietary restrictions?"
                />
                <ChatBubble role="assistant" message="" showTyping />
              </div>
            </PhoneMockup>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
