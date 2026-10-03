"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";

const nav = [
  { href: "/#directorio", label: "Tiendas" },
  { href: "/eventos", label: "Eventos y fiestas" },
  { href: "/eventos#bodas", label: "Bodas" },
  { href: "/arriendos", label: "Arriendos" },
  { href: "/estacionamiento", label: "Cómo llegar" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="hidden border-b border-[#242424] text-[13px] tracking-[0.04em] text-muted sm:block">
        <div className="wrap flex flex-wrap items-center justify-between gap-4 py-2.5">
          <span>{site.address.street} · Santiago · {site.address.metro}</span>
          <span>Lun a vie 8:30–21:30 · Sáb y dom 8:30–20:00</span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-[#1E1E1E] bg-ink/90 backdrop-blur">
        <div className="wrap flex h-16 items-center justify-between gap-6 sm:h-[84px]">
          <Link href="/" aria-label="Paseo Placer, inicio" className="flex items-center">
            <Image src="/img/logo-paseo-placer.png" alt="Paseo Placer" width={1205} height={674} priority className="h-10 w-auto sm:h-[52px]" />
          </Link>
          <nav aria-label="Principal" className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.16em] lg:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-paper transition-colors hover:text-gold-light">{n.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/eventos#cotizar" className="btn-gold hidden !min-h-11 !px-5 !text-[12px] sm:inline-flex">Cotizar evento</Link>
            <button
              type="button"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="menu-movil"
              onClick={() => setOpen(!open)}
              className="flex h-11 w-11 items-center justify-center border border-line-2 lg:hidden"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
                {open ? <path d="M3 0 L17 14 M17 0 L3 14" stroke="currentColor" strokeWidth="1.6" /> : <path d="M0 1 H20 M0 7 H20 M0 13 H20" stroke="currentColor" strokeWidth="1.6" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <nav id="menu-movil" aria-label="Menú" className="border-t border-line bg-ink lg:hidden">
            <div className="wrap flex flex-col py-2">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center border-b border-line font-serif text-2xl">{n.label}</Link>
              ))}
              <Link href="/eventos#cotizar" onClick={() => setOpen(false)} className="btn-gold my-4">Cotizar evento</Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
