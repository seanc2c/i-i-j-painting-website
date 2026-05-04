// app/lib/content.ts
// All editable content lives here. Bilingual via { en, es } pairs.

export const business = {
  name: "I & I J Painting",
  shortName: "I & I J",
  phone: "(760) 669-6420",
  phoneRaw: "+17606696420",
  email: "info@iandijpainting.com",
  license: "CSLB #939153",
  founded: 2005,
  yearsExp: 20,
  ownerFirst: "Ismael",
  ownerFamily: "Camarillo family",
  serviceArea: {
    en: "Orange County · Riverside · San Diego County · Los Angeles",
    es: "Orange County · Riverside · San Diego County · Los Ángeles",
  },
  hq: {
    en: "Family-owned · Southern California",
    es: "Negocio familiar · Sur de California",
  },
};

export const nav = [
  { href: "#work", en: "Work", es: "Proyectos" },
  { href: "#services", en: "Services", es: "Servicios" },
  { href: "#story", en: "Story", es: "Historia" },
  { href: "#voices", en: "Voices", es: "Testimonios" },
  { href: "#estimate", en: "Free Estimate", es: "Presupuesto" },
];

export const hero = {
  eyebrow: {
    en: "EST. 2005 · CSLB #939153 · LICENSED · BONDED · INSURED",
    es: "DESDE 2005 · CSLB #939153 · LICENCIADO · ASEGURADO",
  },
  // Editorial headline — specific, voice-y, not "welcome to"
  headlineLine1: { en: "Twenty years.", es: "Veinte años." },
  headlineLine2: { en: "One ladder.", es: "Una escalera." },
  headlineLine3: { en: "One family.", es: "Una familia." },
  sub: {
    en: "Ismael Camarillo and his crew have painted the homes, offices, and warehouses of Southern California since 2005. We show up on time. We tape every edge. We clean up every night. The kind of paint job your neighbor asks about.",
    es: "Ismael Camarillo y su equipo han pintado las casas, oficinas y almacenes del sur de California desde 2005. Llegamos a tiempo. Cubrimos cada borde. Limpiamos cada noche. El trabajo que tus vecinos van a notar.",
  },
  ctaPrimary: { en: "Get a free estimate", es: "Pedir presupuesto" },
  ctaSecondary: { en: "See recent work", es: "Ver trabajos" },
};

export const stats = [
  {
    n: "20",
    label: { en: "Years painting SoCal", es: "Años pintando SoCal" },
  },
  {
    n: "1,400+",
    label: { en: "Projects finished", es: "Proyectos terminados" },
  },
  {
    n: "0",
    label: {
      en: "Subcontractors. Just our crew.",
      es: "Subcontratistas. Solo nuestro equipo.",
    },
  },
  {
    n: "100%",
    label: { en: "Licensed & insured", es: "Con licencia y asegurado" },
  },
];

export const services = [
  {
    code: "01",
    tag: { en: "RESIDENTIAL", es: "RESIDENCIAL" },
    title: { en: "Homes, inside and out", es: "Casas, por dentro y por fuera" },
    blurb: {
      en: "Stucco repaint, interior walls, ceilings, kitchen cabinets, decks, garages, fences. Color consult included. We pull permits when the job needs them.",
      es: "Repintado de estuco, paredes interiores, techos, gabinetes de cocina, terrazas, garajes, cercas. Asesoría de color incluida. Sacamos permisos cuando hace falta.",
    },
    bullets: [
      { en: "Interior walls & ceilings", es: "Paredes y techos interiores" },
      { en: "Exterior stucco & siding", es: "Estuco y siding exterior" },
      { en: "Cabinets & built-ins", es: "Gabinetes y muebles fijos" },
      { en: "Decks, fences, gates", es: "Terrazas, cercas, portones" },
      { en: "Color consultation", es: "Asesoría de color" },
      { en: "Drywall patch & texture", es: "Reparación y textura de drywall" },
    ],
    color: "terracotta",
  },
  {
    code: "02",
    tag: { en: "COMMERCIAL", es: "COMERCIAL" },
    title: {
      en: "Offices, retail, HOAs",
      es: "Oficinas, tiendas, HOAs",
    },
    blurb: {
      en: "Property managers, real estate agents, and HOA boards rely on us for repaints between tenants, exterior refresh, and full multi-building campaigns. We work nights and weekends so your tenants don't notice.",
      es: "Administradores, agentes de bienes raíces y juntas de HOA cuentan con nosotros para repintar entre inquilinos, refrescar fachadas y campañas de varios edificios. Trabajamos de noche y fines de semana para que tus inquilinos no se enteren.",
    },
    bullets: [
      { en: "Office repaints", es: "Repintado de oficinas" },
      { en: "Retail buildouts", es: "Acabados de retail" },
      { en: "HOA color campaigns", es: "Campañas de color para HOA" },
      { en: "Tenant turnover", es: "Cambios de inquilino" },
      { en: "After-hours scheduling", es: "Horarios fuera de oficina" },
      { en: "Property managers welcome", es: "Atendemos administradores" },
    ],
    color: "blueprint",
  },
  {
    code: "03",
    tag: { en: "INDUSTRIAL", es: "INDUSTRIAL" },
    title: {
      en: "Warehouses & manufacturing",
      es: "Almacenes y fábricas",
    },
    blurb: {
      en: "Epoxy floors, line striping, high-bay walls, structural steel, machinery touch-ups. We work around production schedules and follow your safety plan, not the other way around.",
      es: "Pisos epóxicos, líneas de tránsito, muros altos, acero estructural, retoque de maquinaria. Nos adaptamos a tu producción y seguimos tu plan de seguridad.",
    },
    bullets: [
      { en: "Warehouse interiors", es: "Interiores de almacén" },
      { en: "Epoxy floor coatings", es: "Recubrimiento de pisos" },
      { en: "Line striping & safety", es: "Líneas y señalización" },
      { en: "Structural steel", es: "Acero estructural" },
      { en: "Tank & equipment", es: "Tanques y equipo" },
      { en: "OSHA-aware crews", es: "Equipos con OSHA" },
    ],
    color: "sage",
  },
  {
    code: "04",
    tag: { en: "SPECIALTY", es: "ESPECIALIDADES" },
    title: {
      en: "Restoration & decorative",
      es: "Restauración y decorativo",
    },
    blurb: {
      en: "Lead-safe prep on pre-1978 homes. Faux finishes, color matching for historic Craftsman and Spanish revival. Custom decorating consults — we'll mock up three palettes before a single drop is wet.",
      es: "Preparación segura para plomo en casas anteriores a 1978. Acabados decorativos, igualación de color para Craftsman y Estilo Español históricos. Consulta personalizada — proponemos tres paletas antes de mojar un pincel.",
    },
    bullets: [
      { en: "Lead-safe prep", es: "Preparación libre de plomo" },
      { en: "Historic restoration", es: "Restauración histórica" },
      { en: "Faux finishes", es: "Acabados decorativos" },
      { en: "Color matching", es: "Igualación de color" },
      { en: "Cabinet refinishing", es: "Reacabado de gabinetes" },
      { en: "Wood staining & sealing", es: "Tinte y sellado de madera" },
    ],
    color: "rust",
  },
];

export const portfolio = [
  {
    slug: "spanish-revival-laguna",
    image: "/images/portfolio-spanish.jpg",
    category: { en: "EXTERIOR · RESIDENTIAL", es: "EXTERIOR · RESIDENCIAL" },
    title: {
      en: "1928 Spanish Revival, Laguna Niguel",
      es: "Casa Estilo Español 1928, Laguna Niguel",
    },
    summary: {
      en: "Full exterior repaint with original stucco preserved. Color-matched the original Mediterranean trim from a 1953 photograph the owners pulled out of a shoebox.",
      es: "Repintado exterior completo con el estuco original conservado. Color igualado al original mediterráneo desde una foto de 1953 que los dueños guardaban en una caja de zapatos.",
    },
    duration: { en: "11 days", es: "11 días" },
    palette: ["bone", "terracotta", "ink"],
    year: "2024",
  },
  {
    slug: "mid-century-living-irvine",
    image: "/images/portfolio-interior.jpg",
    category: { en: "INTERIOR · RESIDENTIAL", es: "INTERIOR · RESIDENCIAL" },
    title: {
      en: "Mid-century full interior, Irvine",
      es: "Interior estilo mid-century, Irvine",
    },
    summary: {
      en: "1,800 sq ft of walls, ceilings, and trim. One single terracotta accent wall the homeowner had been afraid to commit to for six years. She loves it.",
      es: "1,800 pies² de paredes, techos y molduras. Una sola pared de acento en terracota que la dueña no se atrevía a hacer en seis años. Ahora la ama.",
    },
    duration: { en: "8 days", es: "8 días" },
    palette: ["bone", "clay", "ink"],
    year: "2025",
  },
  {
    slug: "office-repaint-temecula",
    image: "/images/portfolio-commercial.jpg",
    category: { en: "EXTERIOR · COMMERCIAL", es: "EXTERIOR · COMERCIAL" },
    title: {
      en: "12,000 sq ft office park, Temecula",
      es: "Edificio de oficinas 12,000 pies², Temecula",
    },
    summary: {
      en: "Three buildings, two shifts, finished in fourteen working days. Property manager kept all 47 tenants in business throughout. Zero complaints.",
      es: "Tres edificios, dos turnos, terminado en catorce días laborales. El administrador mantuvo a sus 47 inquilinos operando todo el tiempo. Cero quejas.",
    },
    duration: { en: "14 days", es: "14 días" },
    palette: ["bone", "blueprint", "ink"],
    year: "2024",
  },
];

export const testimonials = [
  {
    quote: {
      en: "I & I J Painting did a great job on our home, inside and out. Ismael and his staff were very professional — they showed up on time and got the job finished without any delays.",
      es: "I & I J Painting hizo un excelente trabajo en nuestra casa, por dentro y por fuera. Ismael y su equipo fueron muy profesionales — llegaron a tiempo y terminaron sin retrasos.",
    },
    name: "Doug Katona",
    city: "La Habra, CA",
  },
  {
    quote: {
      en: "Ismael and his crew were dependable, friendly and efficient. His estimate was fair and reasonably priced. We are very pleased with his work.",
      es: "Ismael y su equipo fueron confiables, amables y eficientes. Su presupuesto fue justo y razonable. Estamos muy contentos con su trabajo.",
    },
    name: "Susanna Blanco",
    city: "Temecula, CA",
  },
  {
    quote: {
      en: "I & I J Painting has done a remarkable job with our house. Every inch was scrubbed, scraped, prepped, and is now absolutely resplendent.",
      es: "I & I J Painting hizo un trabajo increíble en nuestra casa. Cada pulgada fue lavada, raspada, preparada, y ahora luce espectacular.",
    },
    name: "Drena Luigo",
    city: "Orange County, CA",
  },
  {
    quote: {
      en: "My wife and I would give 10 stars if we could. Fast, reliable and fair priced. If you are looking for a painting company, look no further.",
      es: "Mi esposa y yo daríamos 10 estrellas si pudiéramos. Rápidos, confiables y a buen precio. Si buscas pintor, no busques más.",
    },
    name: "Danny & Winter R.",
    city: "Riverside County, CA",
  },
  {
    quote: {
      en: "Hard workers and very pleasant, too. Ismael and his workers were on time, courteous, polite, and they clean up every day before they leave.",
      es: "Trabajan duro y son muy agradables. Ismael y sus trabajadores fueron puntuales, corteses y limpian todos los días antes de irse.",
    },
    name: "Carmen Valdez",
    city: "Irvine, CA",
  },
  {
    quote: {
      en: "Doing business with Ismael was a pleasure. Ismael and his crew painted the exterior and interior of my house and did an excellent job.",
      es: "Trabajar con Ismael fue un placer. Ismael y su equipo pintaron el exterior e interior de mi casa e hicieron un trabajo excelente.",
    },
    name: "Leticia Illescas",
    city: "San Diego, CA",
  },
];

export const audiences = [
  { en: "Homeowners", es: "Dueños de casa" },
  { en: "Renovators", es: "Renovadores" },
  { en: "Property managers", es: "Administradores" },
  { en: "Real estate agents", es: "Agentes inmobiliarios" },
  { en: "HOA boards", es: "Juntas de HOA" },
  { en: "General contractors", es: "Contratistas generales" },
  { en: "Builders", es: "Constructores" },
  { en: "Office tenants", es: "Inquilinos comerciales" },
  { en: "Manufacturers", es: "Fábricas" },
  { en: "Warehouse operators", es: "Almacenes" },
];

export const process = [
  {
    n: "01",
    title: { en: "Walk-through", es: "Inspección" },
    body: {
      en: "Ismael shows up himself, measures the space, asks about your goals, and writes the estimate by hand on the spot. No pressure, no upsell.",
      es: "Ismael llega en persona, mide el espacio, pregunta tus metas y escribe el presupuesto a mano en el momento. Sin presión, sin ventas extras.",
    },
  },
  {
    n: "02",
    title: { en: "Color & spec", es: "Color y especificación" },
    body: {
      en: "We mock up sample boards in your light. We spec the paint by name and brand. You sign off on the exact gallons, sheen, and primer before we start.",
      es: "Probamos muestras con la luz de tu casa. Especificamos pintura por nombre y marca. Apruebas los galones, brillo y sellador exactos antes de empezar.",
    },
  },
  {
    n: "03",
    title: { en: "Prep", es: "Preparación" },
    body: {
      en: "70% of paint quality is prep. Wash, scrape, sand, patch, caulk, mask, prime. We don't skip steps — and you'll see the difference five years from now.",
      es: "El 70% de la calidad es preparación. Lavar, raspar, lijar, parchar, sellar, enmascarar, imprimar. No saltamos pasos — y se nota cinco años después.",
    },
  },
  {
    n: "04",
    title: { en: "Paint", es: "Pintura" },
    body: {
      en: "Two finish coats minimum. Brush and roll on detail, sprayer where it's faster and cleaner. Crew of three to six. Same crew every day.",
      es: "Dos manos mínimo. Brocha y rodillo en detalles, pistola donde es más rápido y limpio. Equipo de tres a seis. El mismo equipo cada día.",
    },
  },
  {
    n: "05",
    title: { en: "Clean & walk", es: "Limpieza y revisión" },
    body: {
      en: "Drop cloths fold up, brushes wash out, you get the leftover gallons labeled in your garage. Final walk-through with a flashlight — we fix anything you flag.",
      es: "Recogemos lonas, lavamos brochas, te dejamos los galones sobrantes etiquetados en el garaje. Última revisión con linterna — corregimos cualquier detalle.",
    },
  },
];

export const trustBadges = [
  { en: "Licensed CSLB #939153", es: "Licencia CSLB #939153" },
  { en: "Bonded · Insured", es: "Asegurado · Con fianza" },
  { en: "Lead-safe certified", es: "Certificado anti-plomo" },
  { en: "Family-owned since 2005", es: "Familia · desde 2005" },
  { en: "EN · ES bilingual crew", es: "Equipo bilingüe EN · ES" },
  { en: "Free estimates", es: "Presupuesto gratis" },
];
