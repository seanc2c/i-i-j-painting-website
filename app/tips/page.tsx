// app/tips/page.tsx
import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Tips & Ideas · I & I J Painting · SoCal Paint Advice",
  description:
    "Practical painting tips, color ideas, and prep guides from Ismael Camarillo and the I & I J Painting crew. Twenty years of SoCal experience in plain English.",
};

const articles = [
  {
    num: "01",
    tag: "COLOR",
    tagEs: "COLOR",
    date: "May 2025",
    title: "How to pick an exterior color you won't hate in three years",
    titleEs: "Cómo elegir un color exterior que no vas a odiar en tres años",
    body: `Most homeowners pick a color from a 2-inch chip under store lighting, then wonder why it looks wrong on 1,800 square feet of stucco in full SoCal sun. The chip is not the wall.

Here's our rule: get three large memo boards (at least 12"×12"), paint them in your top three candidates, and tape them to the actual wall — north face AND south face. Live with them for two days. Walk past them at 7am, noon, and 5pm. The color that still looks intentional at high noon in direct sun is your color.

One more thing: stucco reads 1–2 shades lighter than smooth drywall. If the chip looks bone-white in the store, it'll read nearly white outside. Go one stop warmer or deeper than your gut says.`,
    bodyEs: `La mayoría de los dueños de casa eligen el color de un chip de 5 cm bajo la luz de la tienda, y después se preguntan por qué se ve raro en 150 metros cuadrados de estuco bajo el sol de California. El chip no es la pared.

Nuestra regla: consigue tres tablas grandes (al menos 30×30 cm), píntalas con tus tres candidatos, y pégalas en la pared real — lado norte Y lado sur. Vívelas dos días. Míralas a las 7am, al mediodía y a las 5pm. El color que todavía se ve intencional al mediodía en sol directo es tu color.

Algo más: el estuco se ve 1–2 tonos más claro que el drywall liso. Si el chip parece hueso en la tienda, afuera va a parecer casi blanco. Ve un tono más cálido o profundo de lo que tu instinto te dice.`,
    accent: "terracotta",
    readTime: "3 min",
  },
  {
    num: "02",
    tag: "PREP",
    tagEs: "PREPARACIÓN",
    date: "April 2025",
    title: "The one prep step that doubles how long your paint job lasts",
    titleEs: "El paso de preparación que duplica la vida de tu pintura",
    body: `Seventy percent of paint quality is prep. We say it on every estimate, and we mean it. But if you had to name the single most skipped step that costs homeowners the most money over time, it's caulking every joint and gap before primer goes on.

Exterior paint fails from the edges: where siding meets trim, where window frames meet stucco, where any two surfaces meet at a corner. Water gets in through a hairline gap, freezes (even in SoCal — mornings in Riverside get cold), expands, and peels your paint from the inside out.

Our process: after washing and scraping, we go joint by joint with paintable elastomeric caulk rated for 50 years. It costs an extra couple of hours. It means you won't be calling us for a repaint in five years when you should be calling in twelve.`,
    bodyEs: `El 70% de la calidad de la pintura está en la preparación. Lo decimos en cada presupuesto y lo decimos en serio. Pero si tuvieras que nombrar el paso más saltado que más le cuesta a los dueños de casa, es el sellado de cada junta y grieta antes de imprimar.

La pintura exterior falla por los bordes: donde el siding toca el marco, donde la ventana toca el estuco, donde dos superficies se encuentran en una esquina. El agua entra por una grieta de un cabello, se congela (incluso en SoCal — las mañanas en Riverside se ponen frías), se expande y te pela la pintura desde adentro.

Nuestro proceso: después de lavar y raspar, vamos junta por junta con sellador elastomérico pintable garantizado por 50 años. Toma unas horas extra. Significa que no nos vas a llamar para repintar en cinco años cuando deberías llamarnos en doce.`,
    accent: "blueprint",
    readTime: "4 min",
  },
  {
    num: "03",
    tag: "INTERIOR",
    tagEs: "INTERIOR",
    date: "March 2025",
    title: "One accent wall, done right — the decision most people overthink",
    titleEs: "Una pared de acento, bien hecha — la decisión que todos piensan de más",
    body: `We painted a terracotta accent wall in Irvine for a homeowner who had been afraid to commit for six years. Six years. She loves it now. Here's the thing about accent walls: the fear is almost always bigger than the risk.

The wrong way to pick the accent wall: pick whichever wall your TV hangs on. That's the focal point by default — usually not the strongest architectural choice.

The right way: look for the wall your eye goes to first when you walk through the door. Usually it's the far wall you see straight-on from the entry, or the fireplace wall. That's your accent candidate.

Sheen matters more than people think: a flat finish on an accent wall makes it feel heavy and permanent. An eggshell reads as intentional and easy to live with. Satin if you want drama. Stay away from semi-gloss unless it's trim.

And one practical note: if you're renting, a dark accent wall painted with quality primer comes back to white in two coats — it's not the commitment it feels like.`,
    bodyEs: `Pintamos una pared de acento en terracota en Irvine para una dueña que tenía seis años sin atreverse. Seis años. Ahora la ama. La realidad sobre las paredes de acento: el miedo casi siempre es más grande que el riesgo.

La manera incorrecta: elige la pared donde cuelga el televisor. Es el punto focal por defecto — generalmente no es la mejor opción arquitectónica.

La manera correcta: observa hacia dónde va tu mirada primero cuando entras por la puerta. Normalmente es la pared del fondo que ves de frente desde la entrada, o la pared de la chimenea. Esa es tu candidata.

El brillo importa más de lo que la gente cree: mate en una pared de acento la hace sentir pesada y permanente. Cáscara de huevo se lee intencional y cómoda. Satinado si quieres drama. Evita semi-brillante a menos que sea moldura.

Y una nota práctica: si rentas, una pared oscura pintada con buen sellador regresa al blanco en dos manos — no es el compromiso que parece.`,
    accent: "rust",
    readTime: "5 min",
  },
];

const accentMap: Record<string, string> = {
  terracotta: "var(--color-terracotta)",
  blueprint: "var(--color-blueprint)",
  rust: "var(--color-rust)",
  sage: "var(--color-sage)",
};

export default function TipsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[color:var(--color-paper)]">
        {/* ── Hero band ── */}
        <section className="pt-36 pb-16 md:pt-44 md:pb-20 max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="eyebrow mb-6 text-[color:var(--color-terracotta)]">
            Tips &amp; Ideas · Ideas &amp; Consejos
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-display text-5xl md:text-7xl xl:text-8xl leading-[0.95] max-w-2xl">
              Paint smarter,<br />
              <span className="text-[color:var(--color-terracotta)]">not harder.</span>
            </h1>
            <p className="max-w-sm font-body text-base text-[color:var(--color-ink)]/65 md:text-right md:pb-2">
              Twenty years of SoCal jobs distilled into the advice we give every homeowner before the first bucket opens.
            </p>
          </div>
          <div className="hairline-h mt-10 md:mt-14" />
        </section>

        {/* ── Articles ── */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-10 pb-24 md:pb-32 space-y-0">
          {articles.map((a, i) => (
            <article
              key={a.num}
              className={`grid md:grid-cols-[80px_1fr_1fr] gap-0 border-b border-[color:var(--color-ink)]/10 py-14 md:py-20 ${
                i === 0 ? "border-t border-[color:var(--color-ink)]/10" : ""
              }`}
            >
              {/* Left — number + meta */}
              <div className="hidden md:flex flex-col gap-3 pt-1">
                <span
                  className="font-mono text-[11px] tracking-[0.28em]"
                  style={{ color: accentMap[a.accent] }}
                >
                  {a.num}
                </span>
              </div>

              {/* Center — headline + body EN */}
              <div className="md:pr-12 xl:pr-20">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-mono text-[10px] tracking-[0.3em] uppercase px-2.5 py-1 rounded-sm"
                    style={{
                      background: `${accentMap[a.accent]}18`,
                      color: accentMap[a.accent],
                    }}
                  >
                    {a.tag}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-ink)]/40 uppercase">
                    {a.date} · {a.readTime} read
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl xl:text-4xl leading-tight mb-6 text-[color:var(--color-ink)]">
                  {a.title}
                </h2>
                <div className="space-y-4">
                  {a.body.trim().split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className="font-body text-[15px] md:text-base leading-relaxed text-[color:var(--color-ink)]/70"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right — Spanish version */}
              <div
                className="mt-10 md:mt-0 md:pl-12 xl:pl-16 border-t md:border-t-0 md:border-l border-[color:var(--color-ink)]/10 pt-10 md:pt-0"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-mono text-[10px] tracking-[0.3em] uppercase px-2.5 py-1 rounded-sm"
                    style={{
                      background: `${accentMap[a.accent]}18`,
                      color: accentMap[a.accent],
                    }}
                  >
                    {a.tagEs}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[color:var(--color-ink)]/40 uppercase">
                    ES
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl xl:text-4xl leading-tight mb-6 text-[color:var(--color-ink)]">
                  {a.titleEs}
                </h2>
                <div className="space-y-4">
                  {a.bodyEs.trim().split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className="font-body text-[15px] md:text-base leading-relaxed text-[color:var(--color-ink)]/70"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ── CTA band ── */}
        <section className="dark-atmos py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="eyebrow-on-dark mb-3">Ready to start?</p>
              <h2 className="font-display text-3xl md:text-5xl text-[color:var(--color-bone)] leading-tight">
                Get a free estimate.<br />
                <span className="text-[color:var(--color-terracotta)]">No pressure.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a href="/#estimate" className="btn-ink">
                Book a walk-through
              </a>
              <a
                href="tel:+19515007577"
                className="btn-ghost !text-[color:var(--color-bone)] !border-[color:var(--color-bone)]/30 hover:!bg-[color:var(--color-bone)] hover:!text-[color:var(--color-ink)]"
              >
                (951) 500-7577
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
