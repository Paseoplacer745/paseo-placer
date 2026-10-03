import type { Metadata } from "next";
import Image from "next/image";
import { Kicker } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Estacionamiento y cómo llegar",
  description: "Estacionamiento subterráneo en Paseo Placer: $49 por minuto, acceso por calle Santa Rosa, pago en efectivo y tarjetas. A pasos del metro Bío Bío.",
};

const faqs = [
  ["¿Cuánto cuesta estacionar?", "$49 por minuto."],
  ["¿Cuál es el horario del estacionamiento?", "El mismo del edificio: lunes a viernes de 8:30 a 21:30 y sábados y domingos de 8:30 a 20:00."],
  ["¿Cómo pago?", "En efectivo y con tarjetas bancarias."],
  ["¿Por dónde se entra en auto?", "El acceso vehicular es por calle Santa Rosa."],
  ["¿Hay estacionamiento para eventos en el 3°, 4° y 5° piso?", `Sí, en los niveles −1 y −2. Consulta condiciones al cotizar tu evento en ${site.emails.reservas}.`],
];

export default function EstacionamientoPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <>
      <section className="border-b border-[#1E1E1E] pb-18 pt-24">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div className="reveal flex flex-col gap-5">
            <Kicker>Estacionamiento subterráneo · {site.parking.operator}</Kicker>
            <h1 className="font-serif text-[clamp(46px,6.4vw,96px)] font-medium leading-[0.95]">Estaciona bajo Paseo Placer</h1>
            <p className="max-w-[520px] text-[19px] font-light text-[#DCD5CA]">Dos niveles subterráneos con acceso directo a todos los pisos del edificio.</p>
          </div>
          <div className="flex flex-col gap-2.5 border border-gold bg-[#111] p-10">
            <span className="text-xs uppercase tracking-[0.26em] text-gold-light">Tarifa</span>
            <span className="font-serif text-[96px] leading-[0.9]">$49</span>
            <span className="text-lg text-[#CFC8BC]">por minuto</span>
            <span className="text-[15px] text-[#A9A39A]">Pago en efectivo y con tarjetas bancarias · Acceso por calle Santa Rosa</span>
            <div className="mt-4 flex items-center gap-3.5 bg-paper p-3.5">
              <Image src="/logos/localiza2.png" alt="Logo de Localiza2" width={84} height={62} className="h-[62px] w-[84px] object-contain" />
              <span className="text-sm font-medium text-[#1A1A1A]">Operado por Localiza2</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1E1E1E] bg-ink-2 py-24">
        <div className="wrap grid gap-5 md:grid-cols-3">
          {[["Nivel −1", "1.575 m² de estacionamientos", "Acceso directo a ascensores"], ["Nivel −2", "1.407 m² de estacionamientos", "Acceso directo a ascensores"], ["Horario", "Lun a vie 8:30–21:30", "Sáb y dom 8:30–20:00"]].map(([t, b, c]) => (
            <div key={t} className="flex flex-col gap-2 border border-[#2A2A2A] p-8"><span className="font-serif text-[40px] text-gold-light">{t}</span><span className="text-[17px]">{b}</span><span className="text-[#A9A39A]">{c}</span></div>
          ))}
        </div>
      </section>

      <section id="llegar" className="scroll-mt-24 border-b border-[#1E1E1E] py-24 sm:py-28">
        <div className="wrap grid gap-14 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Kicker>Cómo llegar</Kicker>
            <h2 className="h-section">Placer 745, esquina Santa Rosa</h2>
            <ul className="border-t border-[#2A2A2A]">
              {[["M", "En metro", "Estación Bío Bío, Línea 6, a pasos del edificio."], ["B", "En micro", "Recorridos que pasan por avenida Santa Rosa."], ["P", "En auto", "Entrada vehicular por calle Santa Rosa. Estacionamiento en niveles −1 y −2."], ["W", "A pie o en bicicleta", "Accesos peatonales por Placer y por Santa Rosa."]].map(([i, t, d]) => (
                <li key={t} className="flex gap-4 border-b border-[#2A2A2A] py-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold font-semibold text-gold-light">{i}</span><div><div className="font-medium">{t}</div><div className="text-[15px] text-muted">{d}</div></div></li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.google.com/maps/search/?api=1&query=Placer+745+Santiago+Chile" target="_blank" rel="noopener" className="btn-gold">Abrir en Google Maps ↗</a>
              <a href="https://waze.com/ul?q=Placer%20745%20Santiago" target="_blank" rel="noopener" className="btn-ghost">Abrir en Waze ↗</a>
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden border border-line bg-[#121212]">
            <iframe title="Mapa de Paseo Placer" src="https://maps.google.com/maps?q=Placer%20745%2C%20Santiago%2C%20Chile&z=16&output=embed" loading="lazy" className="absolute inset-0 h-full w-full border-0 grayscale invert-[0.9] hue-rotate-180" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="wrap flex max-w-[920px] flex-col gap-6">
          <Kicker>Preguntas frecuentes</Kicker>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q} className="group border-t border-[#2A2A2A] py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[19px]">{q}<span className="text-gold transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-3 text-muted">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
