"use client";

import { Signal, Battery, Wifi } from "lucide-react";

export default function PhoneMockup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="w-[280px] md:w-[350px] lg:w-[390px] aspect-[390/844] rounded-[3rem] border border-slate-700 bg-slate-900 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col"
    >
      {/* Notch */}
      <div className="flex justify-center pt-2">
        <div className="h-[12px] w-[120px] rounded-full bg-black" />
      </div>

      {/* Status bar */}
      <div className="h-[44px] flex items-center justify-between px-6 text-slate-300 text-xs shrink-0">
        <span className="font-medium">9:41</span>
        <div className="flex items-center gap-1">
          <Signal className="w-3.5 h-3.5" />
          <Wifi className="w-3.5 h-3.5" />
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex-1 overflow-hidden px-4 pb-2">{children}</div>

      {/* Home indicator */}
      <div className="flex justify-center pb-2 shrink-0">
        <div className="h-[4px] w-[100px] rounded-full bg-slate-600" />
      </div>
    </div>
  );
}
