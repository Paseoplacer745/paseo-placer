import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] pt-20 pb-10">
      <div className="wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Image src="/img/logo-paseo-placer.png" alt="Paseo Placer" width={1205} height={674} className="h-auto w-[180px]" />
          <p className="text-sm text-muted">
            {site.address.street}, {site.address.commune}.<br />
            Lun a vie 8:30–21:30 · Sáb y dom 8:30–20:00
          </p>
          <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram de Paseo Placer" className="flex h-11 w-11 items-center justify-center border border-line-2 hover:border-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>
          </a>
        </div>
        <FooterCol title="Visita" links={[["/#directorio", "Directorio de tiendas"], ["/eventos", "Fiestas y vida nocturna"], ["/estacionamiento", "Estacionamiento"], ["/estacionamiento#llegar", "Cómo llegar"]]} />
        <FooterCol title="Negocios" links={[["/eventos#cotizar", "Salones de eventos"], ["/eventos#bodas", "Bodas"], ["/arriendos", "Arriendo de locales"], ["/arriendos", "Pantalla LED 13 m"]]} />
        <div className="flex flex-col gap-3 text-sm">
          <span className="text-xs uppercase tracking-[0.24em] text-gold-light">Contacto</span>
          <a href={`mailto:${site.emails.contacto}`} className="text-[#CFC8BC] hover:text-white">{site.emails.contacto}</a>
          <a href={`mailto:${site.emails.reservas}`} className="text-[#CFC8BC] hover:text-white">{site.emails.reservas}</a>
          <a href={`mailto:${site.emails.arriendo}`} className="text-[#CFC8BC] hover:text-white">{site.emails.arriendo}</a>
          <a href={site.instagram} target="_blank" rel="noopener" className="text-[#CFC8BC] hover:text-white">Instagram {site.instagramHandle} ↗</a>
        </div>
      </div>
      <div className="wrap mt-14 flex flex-wrap justify-between gap-4 border-t border-[#222] pt-6 text-[13px] text-muted-2">
        <span>© {new Date().getFullYear()} Paseo Placer. Todos los derechos reservados.</span>
        <span className="flex gap-4"><Link href="/privacidad" className="hover:text-white">Privacidad y cookies</Link></span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-3 text-sm">
      <span className="text-xs uppercase tracking-[0.24em] text-gold-light">{title}</span>
      {links.map(([href, label]) => (
        <Link key={label} href={href} className="text-[#CFC8BC] hover:text-white">{label}</Link>
      ))}
    </nav>
  );
}
