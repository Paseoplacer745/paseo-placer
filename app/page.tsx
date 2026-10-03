import Image from "next/image";
import Link from "next/link";
import FloorDirectory from "@/components/FloorDirectory";
import { Kicker, SectionHead } from "@/components/ui";
import { parties, site, weddingPromo } from "@/content/site";

const stats = [
  ["5 + 2", "pisos comerciales y subterráneos"],
  ["8.666", "m² construidos"],
  ["5.000", "personas en Club Placer"],
  ["13 m", "de pantalla LED publicitaria"],
];

export default function Home() {
  return (
    <>
      {/* Portada */}
      <section className="grid min-h-[720px] border-b border-[#1E1E1E] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal wrap flex flex-col justify-center gap-7 py-16 lg:mr-0 lg:max-w-[700px] lg:py-20 lg:pr-14">
          <Kicker>Barrio Bío Bío · Santiago</Kicker>
          <h1 className="font-serif text-[clamp(46px,6vw,88px)] font-medium leading-[0.98] tracking-[-0.01em]">Siete niveles para comprar, comer y celebrar.</h1>
          <p className="max-w-[480px] text-lg font-light text-[#CFC8BC]">Servicios de salud, tiendas, un polo gastronómico, lounge, discoteca y salones de eventos. Todo en la esquina de Placer con Santa Rosa.</p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="#directorio" className="btn-gold">Explorar pisos</Link>
            <Link href="/eventos" className="btn-ghost">Fiestas y eventos</Link>
          </div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden bg-[#111]">
          <video className="absolute inset-0 h-full w-full object-cover" src="/video/portada.mp4" poster="/img/hero-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Video de Paseo Placer: fachada y terraza de Club Placer" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#E9E4DA]">Placer 745 · Santiago</div>
        </div>
      </section>

      {/* Cifras */}
      <section aria-label="Paseo Placer en cifras" className="border-b border-[#1E1E1E]">
        <div className="wrap grid grid-cols-2 gap-6 py-11 md:grid-cols-4">
          {stats.map(([v, l]) => (
            <div key={l} className="flex flex-col gap-1">
              <span className="font-serif text-[44px] leading-none text-gold sm:text-[52px]">{v}</span>
              <span className="text-sm text-muted">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Directorio */}
      <section id="directorio" className="scroll-mt-24 border-b border-[#1E1E1E] py-24 sm:py-28">
        <div className="wrap flex flex-col gap-12">
          <SectionHead kicker="Directorio por nivel" title="Recorre el edificio piso a piso" aside={<p className="max-w-[380px] text-muted">Elige un nivel para ver qué encontrarás. Las tiendas con sitio web o Instagram se abren con un clic.</p>} />
          <FloorDirectory />
        </div>
      </section>

      {/* Vida nocturna */}
      <section className="border-b border-[#1E1E1E] bg-ink-2 py-24 sm:py-28">
        <div className="wrap flex flex-col gap-10">
          <SectionHead kicker="Pisos 3, 4 y 5 · De noche" title="La noche sube de piso" aside={<Link href="/eventos" className="link-gold">Ver fiestas y salones</Link>} />
          <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
            <Link href="/eventos" className="lift relative block min-h-[460px] overflow-hidden border border-line">
              <video className="absolute inset-0 h-full w-full object-cover" src="/video/club-placer.mp4" poster="/img/club-poster.jpg" autoPlay muted loop playsInline preload="metadata" aria-label="Fiesta en Club Placer" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/90 to-transparent p-8">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-[0.28em] text-party">5° piso · Discoteca</span>
                  <span className="font-serif text-[40px] leading-none">Club Placer</span>
                  <span className="text-[#D4CEC4]">Pista, altillo VIP y terraza con vista a la cordillera.</span>
                </div>
                <Image src="/logos/club-placer.png" alt="" width={84} height={84} className="h-[84px] w-[84px] object-contain" />
              </div>
            </Link>
            <div className="flex flex-col gap-5">
              <Link href="/eventos#salones" className="lift relative block min-h-[250px] flex-1 overflow-hidden border border-line">
                <Image src="/img/terraza-club.jpg" alt="Terraza de Club Placer con sillones de cuero y vista a Santiago" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <div className="text-xs uppercase tracking-[0.28em] text-party">Terraza · 5° piso</div>
                  <div className="font-serif text-3xl">Lounge al aire libre</div>
                </div>
              </Link>
              <div className="flex items-center gap-5 border border-line bg-[#111] p-5">
                <Image src="/logos/gcu.png" alt="Logo de GCU Music Lounge" width={96} height={96} className="h-24 w-24 shrink-0 object-contain" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.28em] text-gold-light">4° piso · Bar lounge</span>
                  <span className="font-serif text-[28px] leading-tight">GCU Music Lounge</span>
                  <span className="text-sm text-muted">Música en vivo y coctelería de autor.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximas fiestas */}
      <section className="border-b border-[#1E1E1E] py-24 sm:py-28">
        <div className="wrap flex flex-col gap-11">
          <SectionHead kicker="Agenda" title="Próximas fiestas" aside={<Link href="/eventos#agenda" className="link-gold">Toda la agenda</Link>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {parties.map((p) => (
              <Link key={p.slug} href="/eventos#agenda" className="lift flex flex-col border border-[#2A2A2A] bg-[#111]">
                <Image src={p.poster} alt={p.posterAlt} width={1298} height={2398} sizes="(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw" className="aspect-[9/16] w-full object-cover object-top" />
                <div className="flex flex-col gap-1.5 px-6 py-5">
                  <span className="text-xs uppercase tracking-[0.24em] text-gold-light">{p.dateLabel}</span>
                  <h3 className="font-serif text-[28px] font-medium leading-tight">{p.title} · {p.subtitle}</h3>
                  <span className="text-sm text-[#A9A39A]">{p.place}</span>
                </div>
              </Link>
            ))}
            <Link href="/eventos#bodas" className="lift flex flex-col border border-[#2A2A2A] bg-[#111]">
              <Image src={weddingPromo.image} alt="Tomás Cox, promoción de matrimonios" width={858} height={957} sizes="(min-width:1024px) 400px, 100vw" className="aspect-[9/16] w-full object-cover object-top" />
              <div className="flex flex-col gap-1.5 px-6 py-5">
                <span className="text-xs uppercase tracking-[0.24em] text-gold-light">Promoción especial</span>
                <h3 className="font-serif text-[28px] font-medium leading-tight">{weddingPromo.title}</h3>
                <span className="text-sm text-[#A9A39A]">Salones VIP · All inclusive</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gastronomía */}
      <section className="border-b border-[#1E1E1E] py-24 sm:py-28">
        <div className="wrap grid items-center gap-16 md:grid-cols-2">
          <div className="flex aspect-square items-center justify-center bg-cream p-14">
            <Image src="/logos/terraza-placer.png" alt="Logo de Terraza Placer, comida con historia" width={504} height={504} className="h-auto w-full max-w-[380px]" />
          </div>
          <div className="flex flex-col gap-6">
            <Kicker>3° piso · Polo gastronómico</Kicker>
            <h2 className="h-section">Terraza Placer, comida con historia</h2>
            <p className="text-[17px] text-muted">1.457 m² dedicados a la cocina del barrio y del mundo, con capacidad para eventos de hasta 3.000 personas.</p>
            <div className="flex flex-col border-t border-[#2A2A2A]">
              <a href="https://www.puramoca.cl" target="_blank" rel="noopener" className="flex justify-between border-b border-[#2A2A2A] py-4 hover:text-gold-light"><span>Cafetería Pura Moca ↗</span><span className="text-muted-2">1° piso</span></a>
              <div className="flex justify-between border-b border-[#2A2A2A] py-4"><span>Patio de comidas Terraza Placer</span><span className="text-muted-2">3° piso</span></div>
              <div className="flex justify-between border-b border-[#2A2A2A] py-4"><span>GCU Music Lounge</span><span className="text-muted-2">4° piso</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bodas */}
      <section id="bodas" aria-labelledby="bodas-title" className="border-y border-[#3A2A1C] bg-wine py-24 sm:py-28">
        <div className="wrap grid items-center gap-16 md:grid-cols-2">
          <div className="relative border border-gold p-4">
            <Image src={weddingPromo.image} alt="Tomás Cox, anfitrión de la promoción de matrimonios en Paseo Placer" width={858} height={957} sizes="(min-width:768px) 50vw, 100vw" className="h-auto w-full" />
            <span className="absolute left-[-1px] top-8 bg-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-ink">Promoción especial</span>
          </div>
          <div className="flex flex-col gap-6">
            <Kicker>Salones VIP · Paseo Placer</Kicker>
            <h2 id="bodas-title" className="font-serif text-[clamp(46px,6vw,84px)] font-medium leading-[0.96]">Cásate con <em className="text-gold-light">Tomás Cox</em></h2>
            <p className="text-sm uppercase tracking-[0.26em] text-gold-light">{weddingPromo.tagline}</p>
            <p className="font-serif text-[28px] leading-tight">{weddingPromo.lead}</p>
            <p className="text-[17px] text-[#CFC8BC]"><strong className="font-medium text-gold-light">All inclusive:</strong> todo listo para que celebres el amor, con mucho amor.</p>
            <div className="flex flex-wrap gap-3.5">
              <Link href="/eventos#cotizar" className="btn-gold">Reservar mi fecha</Link>
              <a href={`mailto:${site.emails.reservas}`} className="btn-ghost">{site.emails.reservas}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo llegar */}
      <section className="border-b border-[#1E1E1E] bg-ink-2 py-24 sm:py-28">
        <div className="wrap grid gap-14 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Kicker>Cómo llegar</Kicker>
            <h2 className="h-section">Placer 745, esquina Santa Rosa</h2>
            <ul className="flex flex-col border-t border-[#2A2A2A]">
              {[
                ["M", "En metro", "Estación Bío Bío, Línea 6, a pasos del edificio."],
                ["B", "En micro", "Recorridos que pasan por avenida Santa Rosa."],
                ["P", "En auto", `${site.parking.access}. Estacionamiento subterráneo en niveles −1 y −2: ${site.parking.rate}.`],
              ].map(([i, t, d]) => (
                <li key={t} className="flex gap-4 border-b border-[#2A2A2A] py-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold font-semibold text-gold-light">{i}</span>
                  <div><div className="font-medium">{t}</div><div className="text-[15px] text-muted">{d}</div></div>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/estacionamiento" className="btn-gold">Estacionamiento</Link>
              <a href="https://www.google.com/maps/search/?api=1&query=Placer+745+Santiago+Chile" target="_blank" rel="noopener" className="btn-ghost">Google Maps ↗</a>
              <a href="https://waze.com/ul?q=Placer%20745%20Santiago" target="_blank" rel="noopener" className="btn-ghost">Waze ↗</a>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden border border-line bg-[#121212]">
            <iframe title="Mapa de Paseo Placer" src="https://maps.google.com/maps?q=Placer%20745%2C%20Santiago%2C%20Chile&z=16&output=embed" loading="lazy" className="absolute inset-0 h-full w-full border-0 grayscale invert-[0.9] hue-rotate-180" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* Arriendos */}
      <section className="border-b border-[#1E1E1E] py-24 sm:py-28">
        <div className="wrap flex flex-col gap-11">
          <SectionHead kicker="Comercialización" title="Instala tu marca en Paseo Placer" aside={<a href={`mailto:${site.emails.arriendo}`} className="link-gold">{site.emails.arriendo}</a>} />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["/logos/arriendos.png", "Locales comerciales", "Arriendos en primer y segundo piso, frente a Santa Rosa."],
              ["/logos/modulos.png", "Módulos", "Espacios flexibles para marcas emergentes, en todos los pisos."],
              [null, "Pantalla LED", "Publicidad en una pantalla de 13 metros hacia la calle."],
            ].map(([img, t, d]) => (
              <Link key={t} href="/arriendos" className="lift flex flex-col gap-4 border border-[#2A2A2A] bg-[#111] p-8">
                {img ? <Image src={img} alt="" width={120} height={100} className="h-auto w-[120px] invert" /> : <div className="flex h-[100px] w-[120px] items-center justify-center border border-gold font-serif text-[40px] text-gold-light">13 m</div>}
                <span className="font-serif text-[28px]">{t}</span>
                <span className="text-muted">{d}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section aria-labelledby="ig-title" className="bg-ink-2 py-24 sm:py-28">
        <div className="wrap flex flex-col gap-9">
          <SectionHead id="ig-title" kicker="Síguenos" title={`${site.instagramHandle} en Instagram`} aside={<a href={site.instagram} target="_blank" rel="noopener" className="btn-ghost !border-gold !text-gold-light">Seguir ↗</a>} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["/img/fachada.jpg", "Fachada de Paseo Placer"],
              ["/afiches/halloween-2026.jpg", "Afiche de Halloween 2026"],
              ["/img/terraza-club.jpg", "Terraza de Club Placer"],
              ["/afiches/ano-nuevo-2027.jpg", "Afiche de Año Nuevo 2027"],
            ].map(([src, alt]) => (
              <a key={src} href={site.instagram} target="_blank" rel="noopener" className="relative block aspect-square overflow-hidden bg-[#111]">
                <Image src={src} alt={alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
