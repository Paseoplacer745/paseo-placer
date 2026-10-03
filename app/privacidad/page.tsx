import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Política de privacidad y cookies", robots: { index: false } };

export default function PrivacidadPage() {
  return (
    <section className="py-24">
      <div className="wrap max-w-[820px] space-y-6 text-[17px] leading-relaxed text-[#CFC8BC]">
        <h1 className="font-serif text-6xl font-medium text-paper">Privacidad y cookies</h1>
        <p className="border border-gold/50 p-4 text-sm text-gold-light">Texto base para revisión legal. Debe ser validado por un abogado antes de publicar, considerando la Ley 19.628 y la Ley 21.719 de protección de datos personales.</p>
        <h2 className="font-serif text-3xl text-paper">Responsable</h2>
        <p>Paseo Placer, {site.address.street}, Santiago. Contacto: <a className="text-gold-light underline" href={`mailto:${site.emails.contacto}`}>{site.emails.contacto}</a>.</p>
        <h2 className="font-serif text-3xl text-paper">Qué datos recogemos</h2>
        <p>Solo los datos que ingresas en los formularios de cotización de eventos y de arriendo (nombre, correo, teléfono y detalles de tu solicitud). Los usamos únicamente para responderte y no los cedemos a terceros con fines comerciales.</p>
        <h2 className="font-serif text-3xl text-paper">Cookies</h2>
        <p>Usamos cookies esenciales para el funcionamiento del sitio. Si lo aceptas, usamos también cookies de medición (Google Analytics) para entender cómo se usa el sitio. Puedes cambiar tu elección borrando los datos del sitio en tu navegador.</p>
        <h2 className="font-serif text-3xl text-paper">Tus derechos</h2>
        <p>Puedes pedir acceso, rectificación o eliminación de tus datos escribiendo a {site.emails.contacto}.</p>
      </div>
    </section>
  );
}
