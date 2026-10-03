"use client";

import { useState } from "react";
import Image from "next/image";
import { floors, storesForFloor, type Store } from "@/content/site";

export default function FloorDirectory({ initial = "1" }: { initial?: string }) {
  const [sel, setSel] = useState(initial);
  const cur = floors.find((f) => f.id === sel)!;
  const list = storesForFloor(sel);

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
      <div role="group" aria-label="Seleccionar nivel" className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 lg:flex lg:flex-col">
        {floors.map((f) => {
          const active = f.id === sel;
          return (
            <div key={f.id} className="contents">
              {f.id === "-1" && (
                <div className="col-span-full my-2 hidden items-center gap-2.5 text-[11px] uppercase tracking-[0.28em] text-muted-2 lg:flex">
                  <span className="h-px flex-1 bg-line-2" />Nivel calle<span className="h-px flex-1 bg-line-2" />
                </div>
              )}
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setSel(f.id)}
                className={`flex min-h-[60px] w-full items-center gap-4 border px-4 text-left transition-colors ${active ? "border-gold bg-gold text-ink" : "border-[#2A2A2A] bg-[#141414] hover:border-gold"}`}
              >
                <span className={`w-11 font-serif text-[30px] ${active ? "font-semibold" : "text-gold-light"}`}>{f.label}</span>
                <span className={`text-sm ${active ? "font-medium" : "text-[#CFC8BC]"}`}>{f.short}</span>
              </button>
            </div>
          );
        })}
      </div>

      <div aria-live="polite" className="flex min-h-[520px] flex-col gap-7 border border-line bg-[#131313] p-6 sm:p-10">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex max-w-xl flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.28em] text-gold-light">{sel.startsWith("-") ? `Subterráneo ${sel.slice(1)}` : `Piso ${cur.label}`}</span>
            <h3 className="font-serif text-[40px] font-medium leading-[1.05]">{cur.title}</h3>
            <p className="text-muted">{cur.description}</p>
          </div>
          <div className="border border-line-2 px-4 py-3 text-right">
            <div className="font-serif text-[34px] leading-none text-gold-light">{cur.m2}</div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-2">m²</div>
          </div>
        </div>
        <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((s) => <StoreCard key={s.slug} s={s} />)}
        </div>
      </div>
    </div>
  );
}

function StoreCard({ s }: { s: Store }) {
  const ig = s.url?.includes("instagram");
  const inner = (
    <>
      <div className="flex h-[150px] items-center justify-center p-5" style={{ background: s.logo ? s.logoBg ?? "#F5F2EC" : "#1A1A1A" }}>
        {s.logo ? (
          <Image src={s.logo} alt={`Logo de ${s.name}`} width={300} height={200} className="max-h-[114px] w-auto object-contain" />
        ) : (
          <span className="text-center font-serif text-[28px] text-gold-light">{s.name}</span>
        )}
      </div>
      <div className="flex flex-col gap-0.5 px-4 py-3.5">
        <span className="text-[15px] font-medium">{s.name}</span>
        <span className="text-[13px] text-[#A9A39A]">{s.category}</span>
        {s.url && <span className="mt-1.5 text-xs uppercase tracking-[0.14em] text-gold-light">{ig ? "Ver Instagram ↗" : "Ir al sitio web ↗"}</span>}
      </div>
    </>
  );
  const cls = "lift flex flex-col border border-[#2A2A2A] bg-[#0F0F0F]";
  if (!s.url && !s.comingSoon) return <a href={`/tiendas/${s.slug}`} className={cls}>{inner}</a>;
  return s.url ? (
    <a href={s.url} target="_blank" rel="noopener" aria-label={`${ig ? "Ver Instagram de" : "Visitar sitio web de"} ${s.name} (se abre en una pestaña nueva)`} className={cls}>{inner}</a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
