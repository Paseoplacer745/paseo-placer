import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClipPlayer from "@/components/ClipPlayer";
import LeadForm from "@/components/LeadForm";
import { Kicker, SectionHead } from "@/components/ui";
import { parties, site, venues, weddingPromo } from "@/content/site";

export const metadata: Metadata = {
  title: "Fiestas, discoteca y salones de eventos",
  description: "Club Placer en el 5° piso, salón VIP en el 4° y polo del 3°: fiestas, matrimonios y eventos con vista 360° sobre Santiago. Cotiza tu evento en línea.",
  openGraph: { images: [{ url: "/afiches/halloween-2026.jpg" }] },
};

const eventJsonLd = parties.map((p) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: `${p.title} · ${p.subtitle}`,
  startDate: p.date,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: [`${site.url}${p.poster}`],
  location: { "@type": "Place", name: "Paseo Placer", address: { "@type": "PostalAddress", streetAddress: "Placer 745", addressLocality: "Santiago", addressCountry: "CL" } },
  organizer: { "@type": "Organization", name: "Paseo Placer", url: site.url },
}));

export default function EventosPage() {
  return (
    <>
      {/* Portada */}
      <section className="relative flex min-h-[760px] items-end overflow-hidden border-b border-[#1E1E1E] bg-black">
        <video className="absolute inset-0 h-full w-full object-cover" src="/video/club-placer.mp4" poster="/img/club-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Fiesta en Club Placer, quinto piso" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/55" />
        <div className="reveal wrap relative flex w-full flex-col gap-6 pb-[72px] pt-36">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#FF5C7A]">
            <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[#FF3D64]" />5° piso · Discoteca · Club Placer
          </div>
          <h1 className="max-w-[1000px] font-serif text-[clamp(56px,8.4vw,132px)] font-medium leading-[0.92] tracking-[-0.015em]">La noche<br /><em className="text-gold-light">sube de piso.</em></h1>
          <p className="max-w-[560px] text-[19px] font-light text-[#DCD5CA]">Fiestas, música en vivo y celebraciones privadas en los pisos más altos de Paseo Placer: discoteca y terraza en el 5°, salón VIP en el 4° y el gran polo del 3° piso.</p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="#agenda" className="btn-gold">Próximas fiestas</Link>
            <Link href="#cotizar" className="btn-ghost">Cotizar mi evento</Link>
          </div>
        </div>
      </section>

      {/* Cifras */}
      <section aria-label="Capacidades" className="border-b border-[#1E1E1E]">
        <div className="wrap grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {[["5.000", "personas · Club Placer, 5° piso"], ["3.000", "personas · Polo del 3° piso"], ["800", "personas · Salón VIP, 4° piso"], ["360°", "vista sobre Santiago"]].map(([v, l]) => (
            <div key={l} className="flex flex-col gap-1"><span className="font-serif text-[50px] leading-none text-gold">{v}</span><span className="text-sm text-muted">{l}</span></div>
          ))}
        </div>
      </section>

      {/* Agenda con afiches */}
      <section id="agenda" className="scroll-mt-24 border-b border-[#1E1E1E] py-24 sm:py-28">
        <div className="wrap flex flex-col gap-11">
          <SectionHead kicker="Cartelera" title="Próximas fiestas" aside={<a href={site.instagram} target="_blank" rel="noopener" className="link-gold">Entradas en {site.instagramHandle} ↗</a>} />
          <div className="grid gap-6 md:grid-cols-2">
            {parties.map((p) => (
              <article key={p.slug} className="flex flex-col border border-[#2A2A2A] bg-[#111]">
                <Image src={p.poster} alt={p.posterAlt} width={1298} height={2398} sizes="(min-width:768px) 600px, 100vw" className="h-auto w-full" />
                <div className="flex flex-col gap-2 p-7">
                  <span className="text-xs uppercase tracking-[0.22em] text-party">{p.dateLabel} · +18</span>
                  <h3 className="font-serif text-[34px] font-medium leading-tight">{p.title} · {p.subtitle}</h3>
                  <span className="text-muted">{p.place}</span>
                  <ul className="mt-1 flex flex-wrap gap-2">
                    {p.highlights.map((h) => <li key={h} className="border border-line-2 px-3 py-1.5 text-[13px] text-[#CFC8BC]">{h}</li>)}
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a href={site.instagram} target="_blank" rel="noopener" className="btn-gold !text-[12px]">Entradas en {site.instagramHandle} ↗</a>
                    <a href={p.poster} download className="btn-ghost !text-[12px]">Descargar afiche</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="border-b border-[#1E1E1E] bg-ink-2 py-24 sm:py-28">
        <div className="wrap flex flex-col gap-10">
          <SectionHead kicker="Así se vive Club Placer" title="Videos de nuestras fiestas" aside={<a href={site.instagram} target="_blank" rel="noopener" className="link-gold">Más videos en Instagram ↗</a>} />
          <ClipPlayer />
        </div>
      </section>

      {/* Salones */}
      <section id="salones" className="scroll-mt-24 border-b border-[#1E1E1E] py-24 sm:py-28">
        <div className="wrap flex flex-col gap-11">
          <SectionHead kicker="Salones de eventos" title="Tres pisos para celebrar" aside={<p className="max-w-[420px] text-muted">Arrienda un salón para tu evento privado. Te ayudamos con el montaje, la música y la comida.</p>} />
          <div className="grid gap-5 lg:grid-cols-3">
            {venues.map((v) => (
              <article key={v.id} className="flex flex-col border border-[#2A2A2A] bg-[#101010]">
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <Image src={v.image} alt={v.imageAlt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
                  <span className="absolute left-0 top-6 bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink">{v.floor}</span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="font-serif text-[36px] font-medium leading-none">{v.name}</h3><span className="font-serif text-2xl text-gold-light">{v.m2}</span></div>
                  <p className="text-muted">{v.description}</p>
                  <ul className="border-t border-[#2A2A2A]">
                    {v.features.map((f) => <li key={f} className="flex gap-3 border-b border-[#2A2A2A] py-3"><span className="text-gold">—</span>{f}</li>)}
                  </ul>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="text-sm text-[#A9A39A]">Capacidad: <b className="font-medium text-paper">{v.capacity}</b></span>
                    <Link href="#cotizar" className="btn-gold !text-[12px]">Cotizar</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {["Matrimonios", "Cumpleaños", "Fiestas de empresa", "Graduaciones", "Lanzamientos de marca", "Fiestas privadas"].map((t) => <li key={t} className="border border-line-2 px-4 py-2.5 text-sm text-[#CFC8BC]">{t}</li>)}
          </ul>
        </div>
      </section>

      {/* Bodas */}
      <section id="bodas" aria-labelledby="bodas-ev" className="scroll-mt-24 border-b border-[#3A2A1C] bg-wine py-24">
        <div className="wrap grid items-center gap-14 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <span className="self-start bg-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-ink">Promoción especial</span>
            <h2 id="bodas-ev" className="font-serif text-[clamp(46px,6vw,84px)] font-medium leading-[0.96]">Cásate con <em className="text-gold-light">Tomás Cox</em></h2>
            <p className="text-sm uppercase tracking-[0.26em] text-gold-light">{weddingPromo.tagline}</p>
            <p className="font-serif text-[28px] leading-tight">{weddingPromo.lead}</p>
            <p className="text-[17px] text-[#CFC8BC]"><strong className="font-medium text-gold-light">All inclusive:</strong> todo listo para que celebres el amor, con mucho amor.</p>
            <div className="flex flex-wrap gap-3.5"><Link href="#cotizar" className="btn-gold">Reservar mi fecha</Link><a href={`mailto:${site.emails.reservas}`} className="btn-ghost">{site.emails.reservas}</a></div>
          </div>
          <div className="border border-gold p-4"><Image src={weddingPromo.image} alt="Tomás Cox, anfitrión de la promoción de matrimonios" width={858} height={957} sizes="(min-width:768px) 50vw, 100vw" className="h-auto w-full" /></div>
        </div>
      </section>

      {/* Galería */}
      <section aria-label="Galería" className="border-b border-[#1E1E1E] py-24">
        <div className="wrap flex flex-col gap-8">
          <Kicker>Galería</Kicker>
          <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
            <div className="relative col-span-2 row-span-2"><Image src="/img/club-poster.jpg" alt="Pista de Club Placer con luces" fill sizes="50vw" className="object-cover" /></div>
            <div className="relative"><Image src="/img/salon-vip.jpg" alt="Salón VIP" fill sizes="25vw" className="object-cover" /></div>
            <div className="relative"><Image src="/img/terraza-club.jpg" alt="Terraza lounge" fill sizes="25vw" className="object-cover" /></div>
            <div className="relative"><Image src="/img/hero-poster.jpg" alt="Fachada de Paseo Placer" fill sizes="25vw" className="object-cover" /></div>
            <div className="flex items-center justify-center border border-line bg-[#141414] p-6"><Image src="/logos/club-placer.png" alt="Logo de Club Placer" width={150} height={150} className="max-h-[150px] w-auto" /></div>
          </div>
        </div>
      </section>

      {/* Cotizar */}
      <section id="cotizar" className="scroll-mt-24 bg-ink-2 py-24 sm:py-28">
        <div className="wrap grid items-start gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div className="border border-[#2A2A2A] bg-[#111] p-6 sm:p-11">
            <Kicker>Cotiza tu evento</Kicker>
            <div className="mt-4">
              <LeadForm
                kind="evento"
                title="Cuéntanos qué quieres celebrar"
                choiceLabel="Salón"
                choices={["Club Placer · 5° piso", "Salón VIP · 4° piso", "Polo · 3° piso"]}
                replyFrom={site.emails.reservas}
                successText={`Te escribiremos desde ${site.emails.reservas} con disponibilidad y una propuesta para {opcion}.`}
                fields={[
                  { name: "tipo", label: "Tipo de evento", options: ["Matrimonio", "Cumpleaños", "Fiesta de empresa", "Graduación", "Lanzamiento", "Otro"] },
                  { name: "fecha", label: "Fecha tentativa", type: "date" },
                  { name: "invitados", label: "N° de invitados", type: "number", placeholder: "150" },
                  { name: "nombre", label: "Nombre", placeholder: "Nombre y apellido", required: true },
                  { name: "correo", label: "Correo", type: "email", placeholder: "nombre@correo.cl", required: true },
                  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "+56 9" },
                  { name: "mensaje", label: "Mensaje (opcional)", type: "textarea", placeholder: "Horario, música, comida, decoración…", full: true },
                ]}
              />
            </div>
          </div>
          <aside className="flex flex-col gap-6">
            <div className="relative aspect-[4/5] overflow-hidden border border-line"><Image src="/img/terraza-club.jpg" alt="" fill sizes="(min-width:1024px) 35vw, 100vw" className="object-cover" /></div>
            <div className="flex flex-col border-t border-[#2A2A2A]">
              <a href={`mailto:${site.emails.reservas}`} className="flex justify-between gap-4 border-b border-[#2A2A2A] py-4"><span>Reservas</span><span className="text-gold-light">{site.emails.reservas}</span></a>
              <a href={site.instagram} target="_blank" rel="noopener" className="flex justify-between gap-4 border-b border-[#2A2A2A] py-4"><span>Instagram</span><span className="text-gold-light">{site.instagramHandle} ↗</span></a>
              <div className="flex justify-between gap-4 border-b border-[#2A2A2A] py-4"><span>Estacionamiento</span><span className="text-right text-[#A9A39A]">{site.parking.rate} · Santa Rosa</span></div>
            </div>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
    </>
  );
}
