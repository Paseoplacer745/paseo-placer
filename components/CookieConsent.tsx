"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const KEY = "pp-cookies";
const GA = process.env.NEXT_PUBLIC_GA_ID;

export default function CookieConsent() {
  const [choice, setChoice] = useState<string | null>("pending");

  useEffect(() => {
    try { setChoice(localStorage.getItem(KEY)); } catch { setChoice(null); }
  }, []);

  const save = (v: "all" | "essential") => {
    try { localStorage.setItem(KEY, v); } catch {}
    setChoice(v);
  };

  return (
    <>
      {choice === "all" && GA && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}</Script>
        </>
      )}
      {choice === null && (
        <div role="dialog" aria-label="Preferencias de cookies" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl border border-line-2 bg-panel/95 p-5 backdrop-blur sm:p-6">
          <p className="text-sm text-[#CFC8BC]">
            Usamos cookies esenciales para que el sitio funcione y, si lo aceptas, cookies de medición para mejorar tu experiencia.{" "}
            <Link href="/privacidad" className="text-gold-light underline">Más información</Link>.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => save("all")} className="btn-gold !min-h-11">Aceptar todas</button>
            <button type="button" onClick={() => save("essential")} className="btn-ghost !min-h-11">Solo esenciales</button>
          </div>
        </div>
      )}
    </>
  );
}
