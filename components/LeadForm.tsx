"use client";

import { useState, type FormEvent } from "react";

type Field = { name: string; label: string; type?: string; placeholder?: string; required?: boolean; options?: string[]; full?: boolean };

export default function LeadForm({
  kind, title, choiceLabel, choices, fields, replyFrom, successText,
}: {
  kind: "evento" | "arriendo";
  title: string;
  choiceLabel: string;
  choices: string[];
  fields: Field[];
  replyFrom: string;
  successText: string;
}) {
  const [choice, setChoice] = useState(choices[0]);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind, opcion: choice }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "No pudimos enviar tu solicitud.");
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No pudimos enviar tu solicitud.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="flex flex-col gap-5 py-10" role="status">
        <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="27" fill="none" stroke="#C9A45C" strokeWidth="1.5" /><path d="M17 29 L25 37 L40 20" fill="none" stroke="#E6D3A8" strokeWidth="2" /></svg>
        <h2 className="font-serif text-[44px] font-medium leading-tight">¡Recibimos tu solicitud!</h2>
        <p className="text-[17px] text-muted">{successText.replace("{opcion}", choice)}</p>
        <button type="button" onClick={() => setState("idle")} className="btn-ghost self-start">Enviar otra solicitud</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-7" noValidate={false}>
      <h2 className="font-serif text-[40px] font-medium leading-tight sm:text-[48px]">{title}</h2>
      <fieldset className="flex flex-col gap-2.5">
        <legend className="label mb-2.5">{choiceLabel}</legend>
        <div className="flex flex-wrap gap-2.5">
          {choices.map((c) => (
            <button key={c} type="button" aria-pressed={c === choice} onClick={() => setChoice(c)}
              className={`min-h-12 border px-5 text-sm font-medium transition-colors ${c === choice ? "border-gold bg-gold text-ink" : "border-line-2 hover:border-gold"}`}>{c}</button>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={`flex flex-col gap-2 ${f.full ? "sm:col-span-2" : ""}`}>
            <label htmlFor={`${kind}-${f.name}`} className="label">{f.label}{f.required && <span aria-hidden="true"> *</span>}</label>
            {f.options ? (
              <select id={`${kind}-${f.name}`} name={f.name} required={f.required} className="field">{f.options.map((o) => <option key={o}>{o}</option>)}</select>
            ) : f.type === "textarea" ? (
              <textarea id={`${kind}-${f.name}`} name={f.name} rows={4} placeholder={f.placeholder} className="field !h-auto py-3.5" />
            ) : (
              <input id={`${kind}-${f.name}`} name={f.name} type={f.type ?? "text"} placeholder={f.placeholder} required={f.required} className="field" />
            )}
          </div>
        ))}
      </div>
      {/* campo trampa contra spam */}
      <input type="text" name="empresa_web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consentimiento" required className="mt-1 h-4 w-4 accent-[#C9A45C]" />
        <span>Acepto que Paseo Placer use mis datos para responder esta solicitud, según la <a href="/privacidad" className="text-gold-light underline">política de privacidad</a>.</span>
      </label>
      {state === "error" && <p role="alert" className="border border-[#7a2a2a] bg-[#2a1111] p-3 text-sm">{error} También puedes escribir a {replyFrom}.</p>}
      <div className="flex flex-wrap items-center gap-5">
        <button type="submit" disabled={state === "sending"} className="btn-gold disabled:opacity-60">{state === "sending" ? "Enviando…" : "Enviar solicitud"}</button>
        <span className="text-[13px] text-muted-2">Respondemos desde {replyFrom}</span>
      </div>
    </form>
  );
}
