import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Kicker } from "@/components/ui";
import { floors, site, stores, storesForFloor } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stores.filter((s) => !s.comingSoon).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = stores.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: `${s.name} · ${s.category}`, description: `${s.name} en Paseo Placer, piso ${s.floor}. ${s.category}. Placer 745, Santiago.` };
}

export default async function StorePage({ params }: Props) {
  const { slug } = await params;
  const s = stores.find((x) => x.slug === slug && !x.comingSoon);
  if (!s) notFound();
  const floor = floors.find((f) => f.id === s.floor)!;
  const others = storesForFloor(s.floor).filter((o) => o.slug !== s.slug && !o.comingSoon).slice(0, 4);
  const ig = s.url?.includes("instagram");

  return (
    <>
      <div className="wrap pt-10 text-[13px] text-muted-2">
        <Link href="/" className="text-[#A9A39A] hover:text-white">Inicio</Link> / <Link href="/#directorio" className="text-[#A9A39A] hover:text-white">Tiendas</Link> / Piso {floor.label} / <span className="text-paper">{s.name}</span>
      </div>
      <section className="border-b border-[#1E1E1E] pb-24 pt-10">
        <div className="wrap grid items-start gap-14 md:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center p-14" style={{ background: s.logo ? s.logoBg ?? "#F5F2EC" : "#1A1A1A" }}>
            {s.logo ? <Image src={s.logo} alt={`Logo de ${s.name}`} width={600} height={450} priority className="max-h-full w-auto object-contain" /> : <span className="font-serif text-5xl text-gold-light">{s.name}</span>}
          </div>
          <div className="flex flex-col gap-6">
            <Kicker>Piso {floor.label} · {s.category}</Kicker>
            <h1 className="font-serif text-[clamp(46px,6vw,88px)] font-medium leading-[0.95]">{s.name}</h1>
            {s.description && <p className="text-lg text-[#CFC8BC]">{s.description}</p>}
            <div className="border-t border-[#2A2A2A]">
              <div className="flex justify-between gap-4 border-b border-[#2A2A2A] py-4"><span>Horario</span><span className="text-right text-[#A9A39A]">Lun a vie 8:30–21:30 · Sáb y dom 8:30–20:00</span></div>
              <div className="flex justify-between gap-4 border-b border-[#2A2A2A] py-4"><span>Ubicación</span><span className="text-[#A9A39A]">Piso {floor.label} · {site.address.street}</span></div>
            </div>
            <div className="flex flex-wrap gap-3">
              {s.url && <a href={s.url} target="_blank" rel="noopener" className="btn-gold">{ig ? "Ver Instagram ↗" : "Visitar sitio web ↗"}</a>}
              <Link href="/#directorio" className="btn-ghost">Ver todo el piso</Link>
            </div>
          </div>
        </div>
      </section>
      {others.length > 0 && (
        <section className="py-24">
          <div className="wrap flex flex-col gap-7">
            <Kicker>También en el piso {floor.label}</Kicker>
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <Link key={o.slug} href={`/tiendas/${o.slug}`} className="lift flex flex-col border border-[#2A2A2A]">
                  <div className="flex h-[150px] items-center justify-center p-5" style={{ background: o.logo ? o.logoBg ?? "#F5F2EC" : "#1A1A1A" }}>
                    {o.logo ? <Image src={o.logo} alt="" width={240} height={150} className="max-h-[110px] w-auto object-contain" /> : <span className="font-serif text-3xl text-gold-light">{o.name}</span>}
                  </div>
                  <div className="px-4 py-3.5 font-medium">{o.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
