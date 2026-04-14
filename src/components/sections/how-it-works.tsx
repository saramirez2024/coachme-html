"use client";

import { Search, Flame } from "lucide-react";
import PhoneMockup from "@/components/ui/phone-mockup";
import ChatBubble from "@/components/ui/chat-bubble";
import ScrollReveal from "@/components/ui/scroll-reveal";

function DashboardContent() {
  return (
    <div className="flex flex-col gap-3 py-2">
      <div className="text-xs font-medium text-slate-400 text-center">
        Dashboard
      </div>

      {/* Calorie ring */}
      <div className="flex justify-center">
        <div className="relative w-28 h-28">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#334155"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="8"
              strokeDasharray={`${0.6 * 2 * Math.PI * 42} ${2 * Math.PI * 42}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-white">1,450</span>
            <span className="text-[10px] text-slate-400">/ 2,200 cal</span>
          </div>
        </div>
      </div>

      {/* Macro bars */}
      <div className="space-y-2 px-2">
        {[
          { label: "Protein", value: 125, max: 180, color: "bg-blue-500" },
          { label: "Carbs", value: 180, max: 250, color: "bg-emerald-500" },
          { label: "Fat", value: 65, max: 90, color: "bg-amber-500" },
        ].map((m) => (
          <div key={m.label}>
            <div className="flex justify-between text-[10px] mb-0.5">
              <span className="text-slate-400">{m.label}</span>
              <span className="text-slate-300">{m.value}g</span>
            </div>
            <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className={`h-full ${m.color} rounded-full`}
                style={{ width: `${(m.value / m.max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Streak */}
      <div className="flex items-center justify-center gap-2 mt-1">
        <Flame className="w-4 h-4 text-amber-500" />
        <span className="text-xs font-bold text-white">7 DAYS</span>
      </div>

      {/* Mini sparkline */}
      <div className="flex justify-center px-2">
        <svg viewBox="0 0 140 30" className="w-full h-6">
          <path
            d="M0,25 L20,18 L40,22 L60,12 L80,15 L100,8 L120,10 L140,5"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function MealLoggingContent() {
  const meals = [
    { name: "Apple, medium", cal: 95 },
    { name: "Starbucks Vanilla Latte, Grande", cal: 240 },
    { name: "Grilled Chicken Breast, 6oz", cal: 280 },
  ];

  return (
    <div className="flex flex-col gap-3 py-2">
      <div className="text-xs font-medium text-slate-400 text-center">
        Log Meal
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2 bg-slate-700 rounded-lg px-3 py-2">
        <Search className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-xs text-slate-400">
          Search meals or restaurants...
        </span>
      </div>

      {/* Result cards */}
      <div className="space-y-2">
        {meals.map((meal) => (
          <div
            key={meal.name}
            className="flex items-center justify-between bg-slate-800 rounded-lg px-3 py-2.5 border border-slate-700"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-slate-600 flex items-center justify-center">
                <span className="text-[8px]">🍽</span>
              </div>
              <span className="text-xs text-slate-200 truncate max-w-[140px]">
                {meal.name}
              </span>
            </div>
            <span className="text-xs text-slate-400 whitespace-nowrap ml-2">
              {meal.cal} cal
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const steps = [
  {
    num: 1,
    title: "Chat with Your Coach",
    desc: "The AI asks about your goals, experience, schedule, injuries, food preferences, and budget — like a real intake session. No forms. Just conversation.",
    content: (
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
        <ChatBubble role="user" message="4 days, I have dumbbells at home" />
        <ChatBubble
          role="assistant"
          message="Perfect. I'll program 4 days of dumbbell-focused training with knee-friendly exercises. Any dietary restrictions?"
        />
        <ChatBubble role="assistant" message="" showTyping />
      </div>
    ),
  },
  {
    num: 2,
    title: "Get Your Plan",
    desc: "Claude Sonnet generates a complete weekly workout + meal plan personalized to you. Not a template. Not \"eat chicken and rice.\"",
    content: <DashboardContent />,
  },
  {
    num: 3,
    title: "Log & Improve",
    desc: "Track meals with restaurant support. Log workouts with a timer. Watch your progress on the dashboard with calorie rings and macro breakdowns.",
    content: <MealLoggingContent />,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-plus-jakarta)] font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mb-16">
            3 Steps to Your Personalized Plan
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.2}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold text-lg">
                  {step.num}
                </div>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  {step.desc}
                </p>
                <PhoneMockup>{step.content}</PhoneMockup>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
