import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ValueStrip } from '@/components/ValueStrip';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Technology } from '@/components/Technology';
import { WhyWorkWithMe } from '@/components/WhyWorkWithMe';
import { Process } from '@/components/Process';
import { About } from '@/components/About';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueStrip />
        <Services />
        <Projects />
        <Technology />
        <WhyWorkWithMe />
        <Process />
        <About />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
