import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Paseo Placer · Centro comercial y eventos en Santiago", template: "%s · Paseo Placer" },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: "Paseo Placer",
    images: [{ url: "/img/fachada.jpg", width: 960, height: 1280, alt: "Fachada de Paseo Placer" }],
  },
};

export const viewport: Viewport = { themeColor: "#0B0B0B" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ShoppingCenter",
  name: site.name,
  url: site.url,
  image: `${site.url}/img/fachada.jpg`,
  email: site.emails.contacto,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Placer 745",
    addressLocality: site.address.commune,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  openingHours: site.hours.map((h) => h.schema),
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <body>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-ink">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <CookieConsent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
