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
    <div className="bg-white min-h-screen text-slate-800 selection:bg-emerald-100 selection:text-emerald-900 font-sans relative overflow-x-hidden">
      {/* Global Ambient Glow & Subtle Texture System */}
      <div className="fixed inset-0 bg-grid-subtle opacity-70 pointer-events-none z-0"></div>
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-emerald-100/35 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed top-1/2 right-10 w-[700px] h-[700px] bg-blue-100/30 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 left-10 w-[600px] h-[600px] bg-teal-100/35 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <main>
          <Skills />
          <About />
          <Projects />
          <Services />
          <Experience />
          <Education />
          <WhyHireMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
