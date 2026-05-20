import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import UpcomingProjects from './components/UpcomingProjects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <UpcomingProjects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
