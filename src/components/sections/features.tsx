"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageCircle,
  Utensils,
  Dumbbell,
  Search,
  BarChart3,
  Flame,
} from "lucide-react";
import PhoneMockup from "@/components/ui/phone-mockup";
import ChatBubble from "@/components/ui/chat-bubble";
import ScrollReveal from "@/components/ui/scroll-reveal";

const tabData = [
  {
    value: "chat",
    label: "AI Chat Coach",
    icon: MessageCircle,
    headline: "Real conversation, not a quiz",
    copy: "Your coach remembers everything about you and adapts over time. Ask questions, change your mind, and your plan updates instantly.",
    phone: (
      <div className="flex flex-col gap-1 py-2">
        <div className="text-xs font-medium text-slate-400 text-center mb-2">
          AI Coach
        </div>
        <ChatBubble
          role="assistant"
          message="Hey! I'm your AI fitness coach. Tell me about your fitness goals."
        />
        <ChatBubble
          role="user"
          message="I want to build muscle but I only have 30 minutes a day"
        />
        <ChatBubble
          role="assistant"
          message="30-minute sessions are great for building muscle — we'll focus on compound movements. What equipment do you have?"
        />
        <ChatBubble role="user" message="Full gym access" />
        <ChatBubble role="assistant" message="" showTyping />
      </div>
    ),
  },
  {
    value: "meals",
    label: "Smart Meal Plans",
    icon: Utensils,
    headline: "Weekly meals personalized to YOUR macros and budget",
    copy: "Full meal plan based on calorie goal, macro targets, preferences, and budget. Swap meals, log restaurant food with our database.",
    phone: (
      <div className="flex flex-col gap-3 py-2">
        <div className="text-xs font-medium text-slate-400 text-center">
          Meal Plan
        </div>
        <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
          <div className="text-[10px] text-blue-500 font-medium mb-1">
            BREAKFAST
          </div>
          <div className="text-xs text-white">Greek Yogurt Bowl</div>
          <div className="text-[10px] text-slate-400">
            320 cal | 28g protein
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
          <div className="text-[10px] text-blue-500 font-medium mb-1">
            LUNCH
          </div>
          <div className="text-xs text-white">Grilled Chicken Salad</div>
          <div className="text-[10px] text-slate-400">
            480 cal | 42g protein
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
          <div className="text-[10px] text-blue-500 font-medium mb-1">
            DINNER
          </div>
          <div className="text-xs text-white">Salmon + Sweet Potato</div>
          <div className="text-[10px] text-slate-400">
            520 cal | 38g protein
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
          <div className="text-[10px] text-emerald-500 font-medium mb-1">
            SNACK
          </div>
          <div className="text-xs text-white">Protein Shake + Banana</div>
          <div className="text-[10px] text-slate-400">
            280 cal | 30g protein
          </div>
        </div>
      </div>
    ),
  },
  {
    value: "workouts",
    label: "Workout Programming",
    icon: Dumbbell,
    headline: "Progressive overload for YOUR level",
    copy: "Not a template. The AI selects exercises, sets, reps, and rest based on your experience, equipment, and goals. Plan progresses as you do.",
    phone: (
      <div className="flex flex-col gap-3 py-2">
        <div className="text-xs font-medium text-slate-400 text-center">
          Today&apos;s Workout
        </div>
        <div className="text-center">
          <div className="text-xs text-blue-500 font-medium">
            DAY 1 — UPPER BODY
          </div>
        </div>
        {[
          { name: "Dumbbell Bench Press", sets: "4x10", rest: "90s" },
          { name: "Bent Over Rows", sets: "4x10", rest: "90s" },
          { name: "Overhead Press", sets: "3x12", rest: "60s" },
          { name: "Bicep Curls", sets: "3x15", rest: "45s" },
          { name: "Tricep Extensions", sets: "3x15", rest: "45s" },
        ].map((ex) => (
          <div
            key={ex.name}
            className="flex items-center justify-between bg-slate-800 rounded-lg px-3 py-2 border border-slate-700"
          >
            <div>
              <div className="text-xs text-white">{ex.name}</div>
              <div className="text-[10px] text-slate-400">
                {ex.sets} | Rest: {ex.rest}
              </div>
            </div>
            <div className="w-5 h-5 rounded border border-slate-600" />
          </div>
        ))}
      </div>
    ),
  },
  {
    value: "food",
    label: "Food Lookup",
    icon: Search,
    headline: "Any food, any restaurant, in seconds",
    copy: "Search any item (Starbucks vanilla latte, homemade pasta, gas station snacks) and get accurate nutrition data.",
    phone: (
      <div className="flex flex-col gap-3 py-2">
        <div className="text-xs font-medium text-slate-400 text-center">
          Food Search
        </div>
        <div className="flex items-center gap-2 bg-slate-700 rounded-lg px-3 py-2">
          <Search className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-xs text-white">starbucks vanilla</span>
        </div>
        {[
          {
            name: "Vanilla Latte, Grande",
            brand: "Starbucks",
            cal: 240,
            p: 12,
          },
          {
            name: "Vanilla Sweet Cream Cold Brew",
            brand: "Starbucks",
            cal: 200,
            p: 3,
          },
          {
            name: "Vanilla Bean Frappuccino",
            brand: "Starbucks",
            cal: 380,
            p: 5,
          },
        ].map((item) => (
          <div
            key={item.name}
            className="bg-slate-800 rounded-lg px-3 py-2.5 border border-slate-700"
          >
            <div className="text-xs text-white">{item.name}</div>
            <div className="text-[10px] text-slate-400">
              {item.brand} | {item.cal} cal | {item.p}g protein
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    value: "dashboard",
    label: "Progress Dashboard",
    icon: BarChart3,
    headline: "See your results at a glance",
    copy: "Calorie rings (like Apple Watch), macro breakdowns, streaks, 7-day charts. Everything to stay motivated.",
    phone: (
      <div className="flex flex-col gap-3 py-2">
        <div className="text-xs font-medium text-slate-400 text-center">
          Dashboard
        </div>
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
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
                strokeDasharray={`${0.75 * 2 * Math.PI * 42} ${2 * Math.PI * 42}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-white">1,680</span>
              <span className="text-[9px] text-slate-400">/ 2,200</span>
            </div>
          </div>
        </div>
        <div className="space-y-1.5 px-2">
          {[
            { label: "Protein", g: 140, pct: 78, color: "bg-blue-500" },
            { label: "Carbs", g: 200, pct: 80, color: "bg-emerald-500" },
            { label: "Fat", g: 55, pct: 61, color: "bg-amber-500" },
          ].map((m) => (
            <div key={m.label}>
              <div className="flex justify-between text-[10px] mb-0.5">
                <span className="text-slate-400">{m.label}</span>
                <span className="text-slate-300">{m.g}g</span>
              </div>
              <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className={`h-full ${m.color} rounded-full`}
                  style={{ width: `${m.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          <Flame className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold text-white">12 DAY STREAK</span>
        </div>
        <svg viewBox="0 0 140 30" className="w-full h-6 px-2">
          <path
            d="M0,20 L20,15 L40,18 L60,10 L80,12 L100,6 L120,8 L140,3"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-plus-jakarta)] font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mb-16">
            Everything Your $150 Coach Does.{" "}
            <span className="text-blue-500">For $15.</span>
          </h2>
        </ScrollReveal>

        <Tabs defaultValue="chat" className="max-w-5xl mx-auto">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12">
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-slate-400 data-[state=active]:bg-blue-500/10 data-[state=active]:text-blue-500 border border-transparent data-[state=active]:border-blue-500/20 transition-colors"
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabData.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-2xl mb-4">
                    {tab.headline}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                    {tab.copy}
                  </p>
                </div>
                <div className="flex justify-center">
                  <PhoneMockup>{tab.phone}</PhoneMockup>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
