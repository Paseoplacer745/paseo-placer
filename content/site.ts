// Contenido central del sitio.
// Todo lo que el equipo de marketing actualiza (tiendas, fiestas, promociones)
// vive aquí. Al conectar Sanity, estos datos pasan al gestor de contenidos sin
// cambiar los componentes.

export const site = {
  name: "Paseo Placer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.paseoplacer.com",
  description:
    "Centro comercial en Santiago: servicios, tiendas, polo gastronómico, discoteca Club Placer y salones de eventos con vista 360°. Placer 745, esquina Santa Rosa, a pasos del metro Bío Bío.",
  address: {
    street: "Placer 745, esquina Santa Rosa",
    commune: "Santiago",
    region: "Región Metropolitana",
    country: "CL",
    metro: "Metro Bío Bío (Línea 6)",
  },
  hours: [
    { label: "Lunes a viernes", value: "8:30 – 21:30", schema: "Mo-Fr 08:30-21:30" },
    { label: "Sábado y domingo", value: "8:30 – 20:00", schema: "Sa-Su 08:30-20:00" },
  ],
  emails: {
    contacto: "contacto@paseoplacer.com",
    reservas: "reservas@paseoplacer.com",
    arriendo: "arriendo@paseoplacer.com",
  },
  instagram: "https://www.instagram.com/paseoplacer/",
  instagramHandle: "@paseoplacer",
  parking: {
    operator: "Localiza2",
    rate: "$49 por minuto",
    access: "Acceso por calle Santa Rosa",
    payment: "Efectivo y tarjetas bancarias",
  },
};

export type Store = {
  slug: string;
  name: string;
  category: string;
  floor: string;
  logo?: string;
  logoBg?: string; // fondo de la tarjeta del logo (por defecto, crema)
  url?: string; // sitio web o Instagram
  comingSoon?: boolean;
  description?: string;
};

export const stores: Store[] = [
  { slug: "localiza2", name: "Localiza2", category: "Estacionamiento", floor: "-1", logo: "/logos/localiza2.png" },
  { slug: "pura-moca", name: "Pura Moca", category: "Cafetería", floor: "1", url: "https://www.puramoca.cl" },
  { slug: "casa-jama", name: "Casa Jama", category: "Ropa de cama", floor: "1", logo: "/logos/casa-jama.png", url: "https://www.casajama.cl" },
  { slug: "automotora-santa-rosa", name: "Automotora Santa Rosa", category: "Automotora · venta online", floor: "1", logo: "/logos/automotora.png", url: "https://www.autosantarosa.cl" },
  { slug: "farmacia-santa-providencia", name: "Farmacia Santa Providencia", category: "Farmacia", floor: "1", logo: "/logos/farmacia.png", url: "https://www.farmaciasantaprovidencia.cl" },
  { slug: "centro-medico", name: "Centro Médico", category: "Salud integral · 1° y 2° piso", floor: "1", logo: "/logos/centro-medico.png" },
  { slug: "xdaw", name: "XDAW Academia de Baile", category: "Dance · Fitness · Comunidad · Arte", floor: "2", logo: "/logos/xdaw.png", logoBg: "#1E1E1E", url: "https://www.instagram.com/xdawofficial/" },
  { slug: "clinica-dental", name: "Clínica Dental", category: "Odontología", floor: "2", logo: "/logos/clinica-dental.png" },
  { slug: "muebles", name: "Muebles", category: "Pronta inauguración", floor: "2", comingSoon: true },
  { slug: "estetica", name: "Estética", category: "Pronta inauguración", floor: "2", comingSoon: true },
  { slug: "terraza-placer", name: "Terraza Placer", category: "Patio de comidas", floor: "3", logo: "/logos/terraza-placer.png" },
  { slug: "gcu", name: "GCU Music Lounge", category: "Bar · lounge", floor: "4", logo: "/logos/gcu.png" },
  { slug: "club-placer", name: "Club Placer", category: "Discoteca · centro de eventos", floor: "5", logo: "/logos/club-placer.png" },
];

export type Floor = {
  id: string;
  label: string;
  short: string;
  title: string;
  m2: string;
  description: string;
  extraStores?: string[]; // slugs de tiendas que también están en este piso
};

export const floors: Floor[] = [
  { id: "5", label: "5°", short: "Discoteca y eventos", title: "Discoteca y centro de eventos", m2: "1.580", description: "Club Placer: pista principal, altillo VIP y terraza lounge con vista a la ciudad." },
  { id: "4", label: "4°", short: "Salón VIP y lounge", title: "Salón de eventos VIP", m2: "632", description: "Un salón para eventos privados y el bar lounge GCU." },
  { id: "3", label: "3°", short: "Polo gastronómico", title: "Polo gastronómico", m2: "1.457", description: "Terraza Placer reúne la oferta de comida del edificio y recibe eventos de hasta 3.000 personas." },
  { id: "2", label: "2°", short: "Baile, salud y bienestar", title: "Baile, salud y bienestar", m2: "833", description: "Academia de baile XDAW, venta de muebles, clínica dental, estética, vestuario y oficinas.", extraStores: ["centro-medico"] },
  { id: "1", label: "1°", short: "Servicios y compras", title: "Servicios y compras", m2: "1.182", description: "Ropa de cama, automotora, centro médico, farmacia y cafetería, con acceso directo desde Santa Rosa." },
  { id: "-1", label: "−1", short: "Estacionamientos", title: "Estacionamientos", m2: "1.575", description: "Primer nivel de estacionamiento subterráneo, operado por Localiza2." },
  { id: "-2", label: "−2", short: "Estacionamientos", title: "Estacionamientos", m2: "1.407", description: "Segundo nivel de estacionamiento subterráneo, operado por Localiza2.", extraStores: ["localiza2"] },
];

export function storesForFloor(id: string): Store[] {
  const floor = floors.find((f) => f.id === id);
  const own = stores.filter((s) => s.floor === id);
  const extra = (floor?.extraStores ?? []).map((slug) => stores.find((s) => s.slug === slug)!).filter(Boolean);
  return [...own, ...extra.filter((e) => !own.includes(e))];
}

export type Party = {
  slug: string;
  title: string;
  subtitle: string;
  date: string; // ISO
  dateLabel: string;
  place: string;
  poster: string;
  posterAlt: string;
  highlights: string[];
};

export const parties: Party[] = [
  {
    slug: "halloween-2026",
    title: "Halloween 2026",
    subtitle: "Dark Queen Drácula",
    date: "2026-10-31T22:00:00-03:00",
    dateLabel: "Sábado 31 de octubre",
    place: "3° y 5° piso · Vista Sky panorámica",
    poster: "/afiches/halloween-2026.jpg",
    posterAlt: "Afiche Halloween Dark Queen Drácula en Paseo Placer, sábado 31 de octubre",
    highlights: ["Sexy · Misterio · Pasión", "Dress code dark & sexy", "+18"],
  },
  {
    slug: "ano-nuevo-2027",
    title: "Año Nuevo 2027",
    subtitle: "Pachanga y celebración de la vida",
    date: "2026-12-31T22:00:00-03:00",
    dateLabel: "Jueves 31 de diciembre",
    place: "Vista 360° sobre Santiago",
    poster: "/afiches/ano-nuevo-2027.jpg",
    posterAlt: "Afiche Fiesta de Año Nuevo 2027 en Paseo Placer, jueves 31 de diciembre",
    highlights: ["Música en vivo", "DJ", "Baile", "Buena comida", "+18"],
  },
];

export const venues = [
  {
    id: "club-placer",
    floor: "5° piso",
    name: "Club Placer",
    m2: "1.580 m²",
    capacity: "5.000 personas",
    image: "/img/terraza-club.jpg",
    imageAlt: "Terraza de Club Placer con sillones de cuero y vista a la ciudad",
    description: "Discoteca y centro de eventos con pista principal, altillo VIP y terraza lounge con vista a la cordillera.",
    features: ["Pista de baile con iluminación y sonido profesional", "Altillo VIP con vista a la pista", "Terraza lounge al aire libre", "Barra completa"],
  },
  {
    id: "salon-vip",
    floor: "4° piso",
    name: "Salón VIP",
    m2: "632 m²",
    capacity: "800 personas",
    image: "/img/salon-vip.jpg",
    imageAlt: "Salón VIP con mesas altas e iluminación cálida",
    description: "Un espacio privado para celebraciones y eventos corporativos, junto al bar lounge GCU.",
    features: ["Ambiente privado con acceso exclusivo", "Bar lounge GCU con coctelería", "Matrimonios, cumpleaños y empresas", "Montaje a medida"],
  },
  {
    id: "polo",
    floor: "3° piso",
    name: "Polo gastronómico",
    m2: "1.457 m²",
    capacity: "3.000 personas",
    image: "/img/club-poster.jpg",
    imageAlt: "Ambiente de fiesta con luces en Paseo Placer",
    description: "El nivel gastronómico de Terraza Placer, preparado para grandes celebraciones y eventos masivos.",
    features: ["Gran superficie libre", "Oferta gastronómica en el mismo piso", "Ideal para fiestas masivas y lanzamientos", "Conexión con el 5° piso"],
  },
];

export const clips = [
  { tag: "Pista principal", title: "Viernes en Club Placer", start: 0, thumb: "/img/club-poster.jpg" },
  { tag: "Terraza", title: "Atardecer en la terraza lounge", start: 3.3, thumb: "/img/terraza-club.jpg" },
  { tag: "Altillo VIP", title: "Noche VIP", start: 6.5, thumb: "/img/salon-vip.jpg" },
  { tag: "After", title: "Hasta el amanecer", start: 9.7, thumb: "/img/terraza-club.jpg" },
];

export const weddingPromo = {
  title: "Cásate con Tomás Cox",
  tagline: "Exclusivo en nuestros salones VIP · 360° Santiago",
  lead: "Celebra el amor con Tomás Cox.",
  detail: "All inclusive: todo listo para que celebres el amor, con mucho amor.",
  image: "/img/tomas-cox-bodas.jpg",
};
