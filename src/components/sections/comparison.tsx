"use client";

import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ScrollReveal from "@/components/ui/scroll-reveal";

const features = [
  { name: "Personalized workout plan", coach: true, mfp: false, cm: true },
  { name: "Personalized meal plan", coach: true, mfp: false, cm: true },
  { name: "24/7 availability", coach: false, mfp: true, cm: true },
  { name: "Conversational intake", coach: true, mfp: false, cm: true },
  { name: "Food logging", coach: false, mfp: true, cm: true },
  { name: "Workout logging + timer", coach: false, mfp: false, cm: true },
  { name: "Adapts to feedback", coach: true, mfp: false, cm: true },
  { name: "Calorie + macro tracking", coach: false, mfp: true, cm: true },
  { name: "Progress dashboard", coach: false, mfp: true, cm: true },
];

function BoolIcon({ value }: { value: boolean }) {
  return value ? (
    <Check className="w-5 h-5 text-emerald-500 mx-auto" />
  ) : (
    <X className="w-5 h-5 text-slate-500 mx-auto" />
  );
}

export default function Comparison() {
  return (
    <section className="py-20 sm:py-28 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-center font-[family-name:var(--font-plus-jakarta)] font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mb-16">
            How CoachMe Stacks Up
          </h2>
        </ScrollReveal>

        {/* Desktop table */}
        <ScrollReveal className="hidden md:block max-w-4xl mx-auto">
          <div className="rounded-xl border border-slate-700 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead scope="col" className="text-slate-400 w-[35%]">
                    Feature
                  </TableHead>
                  <TableHead scope="col" className="text-slate-400 text-center">
                    Human Coach
                    <br />
                    <span className="text-xs font-normal">$150-300/mo</span>
                  </TableHead>
                  <TableHead scope="col" className="text-slate-400 text-center">
                    MyFitnessPal
                    <br />
                    <span className="text-xs font-normal">Free</span>
                  </TableHead>
                  <TableHead
                    scope="col"
                    className="text-white text-center bg-emerald-500/10 font-bold"
                  >
                    CoachMe
                    <br />
                    <span className="text-xs font-normal text-emerald-500">
                      $15/mo
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((f) => (
                  <TableRow
                    key={f.name}
                    className="border-slate-700 hover:bg-emerald-500/5 transition-colors"
                  >
                    <TableCell className="text-slate-300 text-sm">
                      {f.name}
                    </TableCell>
                    <TableCell className="text-center">
                      <BoolIcon value={f.coach} />
                    </TableCell>
                    <TableCell className="text-center">
                      <BoolIcon value={f.mfp} />
                    </TableCell>
                    <TableCell className="text-center bg-emerald-500/5">
                      <BoolIcon value={f.cm} />
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-slate-700 hover:bg-emerald-500/5 transition-colors">
                  <TableCell className="text-slate-300 text-sm font-medium">
                    Cost per month
                  </TableCell>
                  <TableCell className="text-center text-slate-400 text-sm">
                    $150-300
                  </TableCell>
                  <TableCell className="text-center text-slate-400 text-sm">
                    Free
                  </TableCell>
                  <TableCell className="text-center bg-emerald-500/5 text-emerald-500 font-bold text-sm">
                    $15
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </ScrollReveal>

        {/* Mobile checklist */}
        <ScrollReveal className="md:hidden max-w-sm mx-auto">
          <div className="space-y-3">
            {features.map((f) => (
              <div
                key={f.name}
                className="flex items-center gap-3 py-2 border-b border-slate-700 last:border-0"
              >
                {f.cm ? (
                  <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-slate-500 shrink-0" />
                )}
                <span className="text-sm text-slate-300">{f.name}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-500 mt-6">
            View full comparison on desktop.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
