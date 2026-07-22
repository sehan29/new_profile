import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CommandPalette from './components/CommandPalette';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Reveal from './components/Reveal';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Command,
  Copy,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
} from './components/Icons';
import { portfolioData as data } from './portfolioData';

const navItems = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [selectedProject, setSelectedProject] = useState(null);
  const [commandOpen, setCommandOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const glowRef = useRef(null);

  const categories = useMemo(() => ['All', ...new Set(data.projects.map((project) => project.category))], []);
  const filteredProjects = useMemo(
    () => activeFilter === 'All' ? data.projects : data.projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  const closeCommand = useCallback(() => setCommandOpen(false), []);
  const closeModal = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return undefined;
    const moveGlow = (event) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate3d(${event.clientX - 210}px, ${event.clientY - 210}px, 0)`;
    };
    window.addEventListener('pointermove', moveGlow, { passive: true });
    return () => window.removeEventListener('pointermove', moveGlow);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${data.email}`;
    }
  };

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMobileMenu} aria-label="Go to home">
          <span className="brand-mark">SG</span>
          <span className="brand-copy"><strong>{data.shortName}</strong><small>Software Engineer</small></span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? 'is-active' : ''}
              onClick={closeMobileMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-button command-trigger" onClick={() => setCommandOpen(true)} aria-label="Open command menu">
            <Command /><span>Ctrl K</span>
          </button>
          <button
            className="icon-button"
            onClick={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          <button className="icon-button mobile-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
            <Menu />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-copy">
            <div className="availability-pill"><span /> {data.availability}</div>
            <p className="hero-kicker">Hello, I’m {data.shortName} — based in {data.location}</p>
            <h1>
              Engineering digital
              <span className="hero-gradient-text">experiences that think.</span>
            </h1>
            <p className="hero-description">{data.heroStatement}</p>
            <div className="hero-actions">
              <a href="#work" className="button button--primary">Explore my work <ArrowRight /></a>
              <button className="button button--ghost" onClick={copyEmail}>
                {copied ? <Check /> : <Copy />} {copied ? 'Email copied' : 'Copy email'}
              </button>
            </div>
            <div className="hero-socials">
              <a href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
              <a href={data.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
              <a href={`mailto:${data.email}`}><Mail /> Email</a>
            </div>
          </div>

          <div className="hero-lab" aria-label="Interactive software profile visual">
            <div className="lab-window">
              <div className="lab-window__header">
                <div><i /><i /><i /></div>
                <span>engineer.profile</span>
                <small>LIVE</small>
              </div>
              <div className="code-panel">
                <p><span className="code-purple">const</span> engineer = {'{'}</p>
                <p className="indent"><span className="code-blue">name</span>: <span className="code-green">'{data.shortName}'</span>,</p>
                <p className="indent"><span className="code-blue">focus</span>: [</p>
                <p className="indent-2"><span className="code-green">'Web'</span>, <span className="code-green">'Mobile'</span>,</p>
                <p className="indent-2"><span className="code-green">'AI'</span>, <span className="code-green">'IoT'</span></p>
                <p className="indent">],</p>
                <p className="indent"><span className="code-blue">mindset</span>: <span className="code-green">'build → learn → improve'</span></p>
                <p>{'}'};</p>
                <p className="terminal-line"><span>›</span> status: crafting meaningful systems<span className="terminal-cursor">_</span></p>
              </div>
              <div className="lab-metrics">
                <div><span>System thinking</span><strong>94%</strong><i><b style={{ width: '94%' }} /></i></div>
                <div><span>Product focus</span><strong>91%</strong><i><b style={{ width: '91%' }} /></i></div>
                <div><span>Curiosity</span><strong>100%</strong><i><b style={{ width: '100%' }} /></i></div>
              </div>
            </div>
            <div className="floating-chip floating-chip--one">API architecture</div>
            <div className="floating-chip floating-chip--two">AI systems</div>
            <div className="floating-chip floating-chip--three">React interfaces</div>
          </div>

          <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
            <span>Scroll to discover</span><i />
          </a>
        </section>

        <section id="about" className="section section--about">
          <Reveal className="section-heading">
            <p className="eyebrow">01 — About</p>
            <h2>I connect engineering depth with product clarity.</h2>
          </Reveal>

          <div className="about-layout">
            <Reveal className="profile-visual" delay={60}>
              <div className="profile-frame">
                <img src={data.profileImage} alt={`${data.name} profile placeholder`} />
                <div className="profile-scanline" aria-hidden="true" />
                <div className="profile-status"><span /> Profile image placeholder</div>
                <div className="profile-corner profile-corner--one" aria-hidden="true" />
                <div className="profile-corner profile-corner--two" aria-hidden="true" />
              </div>
              <p>Replace <code>public/profile-placeholder.svg</code> with your own photo later.</p>
            </Reveal>

            <Reveal className="about-statement" delay={110}>
              <p>{data.about}</p>
              <a href={data.website} target="_blank" rel="noreferrer" className="text-link">Visit current website <ArrowUpRight /></a>
            </Reveal>
          </div>

          <div className="focus-grid focus-grid--wide">
            {data.focusAreas.map((area, index) => (
              <Reveal className="focus-card" delay={index * 70} key={area}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{area}</p>
              </Reveal>
            ))}
          </div>

          <div className="stats-grid">
            {data.stats.map((stat, index) => (
              <Reveal className="stat-card" delay={index * 60} key={stat.label}>
                <strong>{stat.value}</strong><span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="work" className="section section--work">
          <Reveal className="section-heading section-heading--split">
            <div><p className="eyebrow">02 — Selected work</p><h2>Products designed around real problems.</h2></div>
            <p>Open a project card to explore the system, technologies and engineering thinking behind it.</p>
          </Reveal>

          <Reveal className="filter-row" delay={100}>
            {categories.map((category) => (
              <button
                key={category}
                className={activeFilter === category ? 'is-active' : ''}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </Reveal>

          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={index * 80}>
                <ProjectCard project={project} index={index} onOpen={setSelectedProject} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="skills-marquee" aria-label="Technology skills">
          <div className="marquee-track">
            {[...Object.values(data.skills).flat(), ...Object.values(data.skills).flat()].map((skill, index) => (
              <span key={`${skill}-${index}`}>{skill}<i>✦</i></span>
            ))}
          </div>
        </section>

        <section id="experience" className="section section--experience">
          <Reveal className="section-heading section-heading--split">
            <div><p className="eyebrow">03 — Journey</p><h2>Learning by building, shipping and improving.</h2></div>
            <p>A foundation in ICT, strengthened through industry experience, research and independent product development.</p>
          </Reveal>

          <div className="experience-layout">
            <div className="timeline">
              {data.experience.map((item, index) => (
                <Reveal className="timeline-item" delay={index * 100} key={`${item.company}-${item.period}`}>
                  <div className="timeline-marker"><span /></div>
                  <div className="timeline-period">{item.period}</div>
                  <article>
                    <p>{item.company}</p>
                    <h3>{item.role}</h3>
                    <div>{item.description}</div>
                    <footer>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</footer>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="skill-console" delay={120}>
              <div className="skill-console__header"><span>capabilities.json</span><small>READY</small></div>
              {Object.entries(data.skills).map(([group, skills]) => (
                <div className="skill-group" key={group}>
                  <p>{group}</p>
                  <div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="certifications" className="section section--certifications">
          <Reveal className="section-heading section-heading--split">
            <div><p className="eyebrow">04 — Certifications</p><h2>Proof of continuous learning and technical growth.</h2></div>
            <p>Selected credentials across cloud computing, software development, data engineering and programming.</p>
          </Reveal>

          <div className="certification-grid">
            {data.certifications.map((certification, index) => (
              <Reveal className="certification-card" delay={index * 70} key={certification.title}>
                <div className="certification-card__top">
                  <span className="certification-icon"><Award /></span>
                  <span className="certification-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="certification-card__body">
                  <p>{certification.issuer}</p>
                  <h3>{certification.title}</h3>
                  <div className="certification-meta">
                    <span>{certification.year}</span>
                    <span>{certification.type}</span>
                  </div>
                </div>
                <div className="certification-card__footer">
                  <span><Check /> Verified learning</span>
                  <i aria-hidden="true" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <Reveal>
            <p className="eyebrow">05 — Let’s create</p>
            <h2>Have an ambitious idea?<br /><span>Let’s engineer it.</span></h2>
            <p className="contact-description">I’m interested in software engineering roles, meaningful collaborations and products that create measurable value.</p>
            <div className="contact-actions">
              <a href={`mailto:${data.email}`} className="button button--primary button--large">Start a conversation <ArrowUpRight /></a>
              <button className="button button--ghost button--large" onClick={copyEmail}>{copied ? <Check /> : <Copy />} {data.email}</button>
            </div>
          </Reveal>
          <div className="contact-orb" aria-hidden="true"><span>Available</span><i /></div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Designed and engineered by {data.shortName}.</p>
        <p>© {new Date().getFullYear()} — Built with React.</p>
        <a href="#home">Back to top <ArrowUpRight /></a>
      </footer>

      <CommandPalette isOpen={commandOpen} onClose={closeCommand} email={data.email} />
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default App;
