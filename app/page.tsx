import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
