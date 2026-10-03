import type { Metadata } from "next";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import PageHero from "@/components/PageHero";
import { Kicker, SectionHead } from "@/components/ui";
import { floors, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Arriendo de locales, módulos y publicidad",
  description: "Arrienda locales comerciales, módulos o publicidad en la pantalla LED de 13 metros de Paseo Placer, en Placer con Santa Rosa, a pasos del metro Bío Bío.",
};

const offers = [
  { img: "/logos/arriendos.png", title: "Locales comerciales", where: "1° y 2° piso", text: "Locales con vitrina hacia Santa Rosa, en los pisos de mayor flujo.", items: ["Vitrina a la calle", "Acceso desde Santa Rosa", "Superficies: consultar"] },
  { img: "/logos/modulos.png", title: "Módulos", where: "Todos los pisos", text: "Espacios flexibles para marcas emergentes, temporadas o pop-ups.", items: ["Contratos flexibles", "Ubicación en zonas de paso", "Valores: consultar"] },
  { img: null, title: "Pantalla LED", where: "Fachada", text: "Publicidad en una pantalla de 13 metros hacia la calle.", items: ["Visible desde Santa Rosa", "Campañas por día, semana o mes", "Tarifas y formatos: consultar"] },
];

export default function ArriendosPage() {
  return (
    <>
      <PageHero kicker="Comercialización" title="Instala tu marca en Paseo Placer" lead={`Locales, módulos y una pantalla LED de 13 metros en la esquina de Placer con Santa Rosa, a pasos del metro Bío Bío. Consultas: ${site.emails.arriendo}`} image="/img/hero-poster.jpg" alt="Fachada de Paseo Placer" />

      <section className="border-b border-[#1E1E1E] py-24 sm:py-28">
        <div className="wrap flex flex-col gap-11">
          <SectionHead kicker="Espacios disponibles" title="Tres formas de estar aquí" />
          <div className="grid gap-5 md:grid-cols-3">
            {offers.map((o) => (
              <article key={o.title} className="lift flex flex-col gap-4 border border-[#2A2A2A] bg-[#111] p-9">
                {o.img ? <Image src={o.img} alt="" width={110} height={92} className="h-auto w-[110px] invert" /> : <div className="flex h-[92px] w-[110px] items-center justify-center border border-gold font-serif text-4xl text-gold-light">13 m</div>}
                <span className="text-xs uppercase tracking-[0.24em] text-gold-light">{o.where}</span>
                <h3 className="font-serif text-[34px] font-medium leading-none">{o.title}</h3>
                <p className="text-muted">{o.text}</p>
                <ul className="border-t border-[#2A2A2A] text-[15px] text-[#CFC8BC]">{o.items.map((i) => <li key={i} className="border-b border-[#2A2A2A] py-2.5">{i}</li>)}</ul>
                <a href="#postular" className="btn-gold mt-auto self-start">Consultar</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#1E1E1E] bg-ink-2 py-24 sm:py-28">
        <div className="wrap grid items-start gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div className="flex flex-col gap-7">
            <Kicker>El edificio</Kicker>
            <h2 className="h-section">8.666 m² en siete niveles</h2>
            <div className="border-t border-[#2A2A2A]">
              {floors.map((f) => (
                <div key={f.id} className="grid grid-cols-[56px_minmax(0,1fr)_auto] items-center gap-4 border-b border-[#2A2A2A] py-4">
                  <span className="font-serif text-3xl text-gold-light">{f.label}</span>
                  <span className="text-[#CFC8BC]">{f.title}</span>
                  <span className="whitespace-nowrap text-[#A9A39A]">{f.m2} m²</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {[["Metro Bío Bío", "Línea 6, a pasos del edificio"], ["2 niveles", "de estacionamiento subterráneo"], ["Lun a dom", "abierto todos los días desde las 8:30"]].map(([v, l]) => (
              <div key={v} className="flex flex-col gap-1 border border-[#2A2A2A] p-6"><span className="font-serif text-[34px] text-gold">{v}</span><span className="text-muted">{l}</span></div>
            ))}
            <a href={`mailto:${site.emails.arriendo}`} className="flex flex-col gap-1 border border-gold p-6"><span className="font-serif text-[28px] text-gold">{site.emails.arriendo}</span><span className="text-muted">Valores, superficies y flujo de visitas</span></a>
          </div>
        </div>
      </section>

      <section id="postular" className="scroll-mt-24 py-24 sm:py-28">
        <div className="wrap max-w-[920px]">
          <div className="border border-[#2A2A2A] bg-[#111] p-6 sm:p-11">
            <Kicker>Formulario de arriendo</Kicker>
            <div className="mt-4">
              <LeadForm
                kind="arriendo"
                title="Cuéntanos sobre tu marca"
                choiceLabel="Me interesa"
                choices={["Local comercial", "Módulo", "Pantalla LED"]}
                replyFrom={site.emails.arriendo}
                successText={`El equipo comercial te escribirá desde ${site.emails.arriendo} con disponibilidad y condiciones para {opcion}.`}
                fields={[
                  { name: "marca", label: "Marca o empresa", placeholder: "Nombre comercial", required: true },
                  { name: "rubro", label: "Rubro", placeholder: "Ej.: vestuario, comida, servicios" },
                  { name: "m2", label: "Superficie requerida (m²)", type: "number", placeholder: "40" },
                  { name: "nombre", label: "Nombre de contacto", placeholder: "Nombre y apellido", required: true },
                  { name: "correo", label: "Correo", type: "email", placeholder: "nombre@empresa.cl", required: true },
                  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "+56 9" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
