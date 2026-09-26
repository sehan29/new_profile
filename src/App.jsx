import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { portfolioData as data } from './portfolioData';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  const closeProject = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')];
    let frame;
    const update = () => {
      const section = [...sections].reverse().find((item) => item.getBoundingClientRect().top <= 160);
      setActiveSection(section?.id || 'home');
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const hash = window.location.hash.slice(1);
    if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'instant' });
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header data={data} activeSection={activeSection} />
      <main id="main-content" tabIndex={-1}>
        <Hero data={data} />
        <Projects projects={data.projects} onSelect={setSelectedProject} />
        <About data={data} />
        <Experience experience={data.experience} skills={data.skills} />
        <Credentials certifications={data.certifications} />
        <Contact data={data} />
      </main>
      <footer className="site-footer">
        <div className="page-width footer-inner">
          <p>© {new Date().getFullYear()} {data.name}</p>
          <p>Designed &amp; built in Colombo</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeProject} />}
    </div>
  );
}

export default App;
