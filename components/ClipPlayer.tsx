"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { clips } from "@/content/site";

export default function ClipPlayer() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);
  const pick = (k: number) => {
    setI(k);
    const v = ref.current;
    if (v) { v.currentTime = clips[k].start; v.play().catch(() => {}); }
  };
  const cur = clips[i];
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-[1.5fr_1fr]">
      <div className="relative aspect-video overflow-hidden border border-line bg-black">
        <video ref={ref} className="absolute inset-0 h-full w-full object-cover" src="/video/club-placer.mp4" poster="/img/club-poster.jpg" controls muted playsInline preload="metadata" aria-label={cur.title} />
        <div className="pointer-events-none absolute inset-x-0 top-0 flex flex-col gap-0.5 bg-gradient-to-b from-black/70 to-transparent px-6 py-5">
          <span className="text-xs uppercase tracking-[0.24em] text-party">{cur.tag}</span>
          <span className="font-serif text-[30px] leading-tight">{cur.title}</span>
        </div>
      </div>
      <div role="group" aria-label="Elegir video" className="flex flex-col gap-3">
        {clips.map((c, k) => (
          <button key={c.title} type="button" aria-pressed={k === i} onClick={() => pick(k)}
            className={`flex w-full items-center gap-4 border p-3 text-left transition-colors ${k === i ? "border-gold bg-[#1A1410]" : "border-line bg-[#111] hover:border-gold"}`}>
            <span className="relative h-[68px] w-[120px] shrink-0 overflow-hidden bg-black">
              <Image src={c.thumb} alt="" fill sizes="120px" className="object-cover" />
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="absolute left-[49px] top-[23px]"><circle cx="11" cy="11" r="10" fill="rgba(0,0,0,.55)" stroke="#F5F2EC" /><path d="M9 7 L15 11 L9 15 Z" fill="#F5F2EC" /></svg>
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-xs uppercase tracking-[0.2em] text-party">{c.tag}</span>
              <span className="font-medium">{c.title}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
