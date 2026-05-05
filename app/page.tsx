// app/page.tsx
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { StatsRow } from "./components/StatsRow";
import { Portfolio } from "./components/Portfolio";
import { Gallery } from "./components/Gallery";
import { Services } from "./components/Services";
import { Strip } from "./components/Strip";
import { Process } from "./components/Process";
import { Story } from "./components/Story";
import { Voices } from "./components/Voices";
import { Contact } from "./components/Contact";
import { Estimate } from "./components/Estimate";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <StatsRow />
        <Portfolio />
        <Gallery />
        <Services />
        <Strip />
        <Process />
        <Story />
        <Voices />
        <Contact />
        <Estimate />
      </main>
      <Footer />
    </>
  );
}
