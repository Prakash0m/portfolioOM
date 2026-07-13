import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import WhyHireMe from './components/WhyHireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-100 selection:bg-brand-purple/30 selection:text-brand-cyan">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Services />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
