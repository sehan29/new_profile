import React, { useEffect, useMemo, useState } from "react";

const PROFILE = {
  name: "Hasitha Perera",
  firstName: "Hasitha",
  role: "Software Developer",
  title: "IT Undergraduate / Full Stack Developer",
  email: "hasitha.perera.dev@example.com",
  phone: "+94 77 456 8921",
  location: "Colombo, Sri Lanka",
  github: "https://github.com/hasithaperera-dev",
  linkedin: "https://linkedin.com/in/hasithaperera-dev",
  resume: "https://example.com/hasitha-perera-cv.pdf",
  image:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85",
};

const NAV_ITEMS = ["Home", "About", "Services", "Projects", "Experience", "Qualifications", "Contact"];

const SKILLS = [
  "HTML5",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "ASP.NET Core",
  "FastAPI",
  "MySQL",
  "MongoDB",
  "Firebase",
  "Git",
  "GitHub",
];

const SERVICES = [
  {
    title: "Website Development",
    icon: "⌘",
    text: "Responsive, modern and clean websites using React, JavaScript, HTML and CSS.",
    points: ["Landing pages", "Portfolio websites", "Responsive UI", "Dashboard interfaces"],
  },
  {
    title: "Application Development",
    icon: "▣",
    text: "Interactive frontend applications with API integration and user-friendly workflows.",
    points: ["React apps", "API integration", "Authentication UI", "Admin dashboards"],
  },
  {
    title: "Backend & Database",
    icon: "⬢",
    text: "Backend APIs, database structure, CRUD features and deployment-ready project setup.",
    points: ["REST APIs", "MySQL / MongoDB", "FastAPI services", "Deployment support"],
  },
];

const STATS = [
  { value: "12+", label: "Completed Projects" },
  { value: "95%", label: "Quality Focus" },
  { value: "10+", label: "Months Practice" },
];

const EXPERIENCE = [
  {
    year: "2026",
    role: "Final Year Research Project Developer",
    place: "Academic Research Project",
    text:
      "Developed CropGuard, a smart agriculture platform using AI disease detection, IoT sensor readings, backend APIs and recommendation logic.",
  },
  {
    year: "2025",
    role: "Full Stack Development Practice",
    place: "Personal / Academic Projects",
    text:
      "Built React interfaces, admin dashboards, Firebase apps, REST API integrations and database-backed web applications.",
  },
  {
    year: "2024",
    role: "Software Engineering Foundation",
    place: "IT Undergraduate Learning Path",
    text:
      "Improved programming fundamentals, UI design, database design, documentation, Git workflow and project planning skills.",
  },
];

const QUALIFICATIONS = [
  {
    title: "IT Undergraduate",
    provider: "National Institute of Technology, Sri Lanka",
    period: "Ongoing",
    text:
      "Focused on software engineering, web development, database systems, project development and research-based application building.",
  },
  {
    title: "Full Stack Development Skills",
    provider: "React, Node.js, ASP.NET Core, FastAPI, MySQL",
    period: "Project Based",
    text:
      "Practical experience in frontend development, backend APIs, database integration, authentication flows and deployment-ready structures.",
  },
  {
    title: "AI & Computer Vision Project Experience",
    provider: "Python, YOLOv8, OpenCV, FastAPI ML Services",
    period: "Research Based",
    text:
      "Hands-on work with image detection workflows, model API integration and AI-powered diagnosis/report generation.",
  },
];

const PROJECTS = [
  {
    id: 1,
    title: "CropGuard Disease Detection",
    category: "AI / Full Stack",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1400&q=85",
    ],
    summary:
      "AI-assisted black pepper disease detection using image detection, sensor readings and root cause analysis.",
    description:
      "CropGuard is a smart agriculture platform built to detect black pepper leaf diseases and support farmers with root cause analysis. It connects a mobile diagnosis flow, admin dashboard, backend APIs, FastAPI AI service, YOLO detection, sensor readings and recommendation logic.",
    features: [
      "Disease detection from leaf images",
      "Sensor values for temperature, humidity, soil moisture, NPK and pH",
      "Root cause analysis with recommendation output",
      "Admin dashboard for diagnosis logs and device management",
      "Mobile-friendly diagnosis workflow",
      "Full report view for detected cases",
    ],
    tech: ["React", "Flutter", "ASP.NET Core", "FastAPI", "YOLO", "MySQL"],
    role:
      "Designed the system flow, built dashboard UI sections and connected AI diagnosis results with backend report data.",
    links: { github: "https://github.com/hasithaperera-dev/portfolio-project", live: "https://hasitha-portfolio-demo.netlify.app" },
  },
  {
    id: 2,
    title: "News Publishing Platform",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1400&q=85",
    ],
    summary:
      "A professional news platform with article cards, source filtering and full article reading inside the app.",
    description:
      "This news platform is designed for clean article browsing, source filtering, search and full article reading. It focuses on clear card alignment, readable content structure and a polished web application experience.",
    features: [
      "Responsive news homepage",
      "Article cards with images and metadata",
      "Source filtering and search",
      "Full article view inside the app",
      "Admin publishing concept",
      "MongoDB-backed content structure",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "CSS"],
    role:
      "Worked on frontend layout, article card design, filtering flow and backend application structure.",
    links: { github: "https://github.com/hasithaperera-dev/portfolio-project", live: "https://hasitha-portfolio-demo.netlify.app" },
  },
  {
    id: 3,
    title: "Smart Attendance System",
    category: "Education Tool",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=85",
    ],
    summary:
      "Teacher-focused attendance system with student management, lesson selection and activity logs.",
    description:
      "The attendance system helps teachers manage students, select lessons, mark attendance and keep clear activity logs. The interface focuses on reducing manual work and preventing accidental attendance submissions.",
    features: [
      "Student management flow",
      "Lesson-based attendance marking",
      "Confirmation dialog before final submit",
      "Teacher activity logs",
      "Firebase-based storage structure",
      "Clean classroom workflow",
    ],
    tech: ["React", "Firebase", "JavaScript", "CSS"],
    role:
      "Created attendance UI, lesson selection logic, student display flow and confirmation experience.",
    links: { github: "https://github.com/hasithaperera-dev/portfolio-project", live: "https://hasitha-portfolio-demo.netlify.app" },
  },
];

function getSectionId(sectionName) {
  return sectionName.toLowerCase();
}

function goTo(sectionName) {
  const section = document.getElementById(getSectionId(sectionName));
  if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
      setProgress(value);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
}

function useActiveSection() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    function updateActive() {
      const scrollPosition = window.scrollY + 160;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      if (isAtBottom) {
        setActive(NAV_ITEMS[NAV_ITEMS.length - 1]);
        return;
      }

      let current = "Home";

      NAV_ITEMS.forEach((item) => {
        const section = document.getElementById(getSectionId(item));
        if (section && section.offsetTop <= scrollPosition) {
          current = item;
        }
      });

      setActive(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return active;
}

function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const progress = useScrollProgress();

  function navigate(item) {
    goTo(item);
    setOpen(false);
  }

  return (
    <header className="header">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className="navbar">
        <button className="brand" type="button" onClick={() => navigate("Home")}>
          {PROFILE.name}
        </button>

        <div className="desktop-nav">
          {NAV_ITEMS.map((item) => (
            <button key={item} type="button" className={active === item ? "active" : ""} onClick={() => navigate(item)}>
              {item}
            </button>
          ))}
        </div>

        <button className="menu-btn" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? "×" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="mobile-nav">
          {NAV_ITEMS.map((item) => (
            <button key={item} type="button" className={active === item ? "active" : ""} onClick={() => navigate(item)}>
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function SectionHeading({ title, align = "center" }) {
  return (
    <div className={`section-heading ${align}`}>
      <span />
      <h2>{title}</h2>
      {align === "center" && <span />}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hello-row">
            <span />
            <strong>Hello</strong>
            <i />
          </div>

          <p className="name-line">I’m {PROFILE.firstName}</p>
          <h1>{PROFILE.role}</h1>
          <p className="hero-intro">
            I create modern websites, web applications and AI-integrated systems with a strong focus on usability,
            clean design and practical software development.
          </p>

          <div className="hero-actions">
            <button type="button" onClick={() => goTo("Projects")}>View projects</button>
            <a href={PROFILE.resume}>My resume</a>
          </div>
        </div>

        <div className="hero-portrait">
          <div className="circle-bg" />
          <img src={PROFILE.image} alt={PROFILE.name} />
          <span className="shape shape-left">&lt;</span>
          <span className="shape shape-right">&gt;</span>
          <div className="floating-badge badge-one">React Developer</div>
          <div className="floating-badge badge-two">AI Projects</div>
        </div>
      </div>

      <div className="skill-strip" aria-label="Technology stack">
        <div className="strip-track">
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-content">
          <SectionHeading title="About me" align="left" />
          <p>
            I started my software journey by building practical student projects and gradually moved into full stack
            development, dashboards, APIs and AI-integrated systems. I focus on creating clean interfaces, useful
            features and project flows that are easy to understand.
          </p>

          <div className="stats-row">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-card">
          <h3>What makes this portfolio user-friendly?</h3>
          <ul>
            <li>Clear fixed navigation with active section highlight</li>
            <li>Scroll progress bar</li>
            <li>Interactive service selector</li>
            <li>Project filtering and search</li>
            <li>Experience and qualification sections</li>
            <li>Image gallery inside project details</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <section id="services" className="section services-section">
      <div className="container service-grid">
        <div className="service-list">
          {SERVICES.map((service) => (
            <button
              type="button"
              className={activeService.title === service.title ? "service-item active" : "service-item"}
              key={service.title}
              onClick={() => setActiveService(service)}
            >
              <div className="service-icon">{service.icon}</div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="service-preview">
          <span>{activeService.icon}</span>
          <h2>{activeService.title}</h2>
          <p>{activeService.text}</p>
          <div className="service-points">
            {activeService.points.map((point) => (
              <small key={point}>{point}</small>
            ))}
          </div>
          <button type="button" onClick={() => goTo("Projects")}>View related projects</button>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(PROJECTS.map((project) => project.category))], []);

  const visibleProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category === activeCategory;
      const searchableText = `${project.title} ${project.category} ${project.summary} ${project.tech.join(" ")}`.toLowerCase();
      const matchesSearch = searchableText.includes(search.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function openProject(project) {
    setSelectedProject(project);
    setImageIndex(0);
  }

  function closeProject() {
    setSelectedProject(null);
    setImageIndex(0);
  }

  function showNextImage() {
    if (!selectedProject) return;
    setImageIndex((current) => (current + 1) % selectedProject.gallery.length);
  }

  function showPreviousImage() {
    if (!selectedProject) return;
    setImageIndex((current) =>
      current === 0 ? selectedProject.gallery.length - 1 : current - 1
    );
  }

  function clearProjectFilters() {
    setActiveCategory("All");
    setSearch("");
  }

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeading title="Projects" />

        <div className="project-tools">
          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-search-box">
            <input
              type="search"
              placeholder="Search projects or tech..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {(search || activeCategory !== "All") && (
              <button type="button" onClick={clearProjectFilters}>Clear</button>
            )}
          </div>
        </div>

        <p className="project-result-count">
          Showing {visibleProjects.length} of {PROJECTS.length} projects
        </p>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <button type="button" className="project-image" onClick={() => openProject(project)}>
                <img src={project.image} alt={project.title} />
                <span>View details</span>
              </button>

              <div className="project-body">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tech-row">
                  {project.tech.slice(0, 4).map((tech) => (
                    <small key={tech}>{tech}</small>
                  ))}
                </div>
                <button type="button" onClick={() => openProject(project)}>View project</button>
              </div>
            </article>
          ))}
        </div>

        {visibleProjects.length === 0 && <p className="empty-state">No projects found. Try another keyword.</p>}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="modal-close" onClick={closeProject} aria-label="Close project modal">
              ×
            </button>

            <div className="modal-gallery">
              <div className="gallery-main-image">
                <img src={selectedProject.gallery[imageIndex]} alt={selectedProject.title} />
                <button type="button" className="gallery-arrow gallery-prev" onClick={showPreviousImage}>‹</button>
                <button type="button" className="gallery-arrow gallery-next" onClick={showNextImage}>›</button>
                <span className="gallery-counter">{imageIndex + 1} / {selectedProject.gallery.length}</span>
              </div>
              <div className="thumb-row">
                {selectedProject.gallery.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    className={imageIndex === index ? "active" : ""}
                    onClick={() => setImageIndex(index)}
                    aria-label={`Show project image ${index + 1}`}
                  >
                    <img src={image} alt={`${selectedProject.title} preview ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-content">
              <span>{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>

              <div className="modal-section">
                <h3>Key features</h3>
                <div className="feature-grid">
                  {selectedProject.features.map((feature) => (
                    <div key={feature}>{feature}</div>
                  ))}
                </div>
              </div>

              <div className="modal-section two-col">
                <div>
                  <h3>My role</h3>
                  <p>{selectedProject.role}</p>
                </div>
                <div>
                  <h3>Tech stack</h3>
                  <div className="tech-row modal-tech">
                    {selectedProject.tech.map((tech) => (
                      <small key={tech}>{tech}</small>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-links">
                <a href={selectedProject.links.github}>GitHub</a>
                <a href={selectedProject.links.live}>Live Preview</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <SectionHeading title="Experience" />

        <div className="experience-grid">
          {EXPERIENCE.map((item) => (
            <article className="experience-card" key={`${item.year}-${item.role}`}>
              <div className="experience-year">{item.year}</div>
              <div>
                <span>{item.place}</span>
                <h3>{item.role}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Qualifications() {
  return (
    <section id="qualifications" className="section qualification-section">
      <div className="container">
        <SectionHeading title="Professional Qualifications" />

        <div className="qualification-grid">
          {QUALIFICATIONS.map((item) => (
            <article className="qualification-card" key={item.title}>
              <div className="qualification-top">
                <span>{item.period}</span>
              </div>
              <h3>{item.title}</h3>
              <strong>{item.provider}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid contact-only-grid">
        <div className="contact-copy">
          <SectionHeading title="Contact" align="left" />
          <p>
            Let’s connect for internships, academic projects, freelance work or software development opportunities.
          </p>
          <button type="button" onClick={copyEmail}>{copied ? "Email copied ✓" : "Copy email address"}</button>
        </div>

        <div className="contact-info-grid">
          <a className="contact-info-card" href={`mailto:${PROFILE.email}`}>
            <span>Email</span>
            <strong>{PROFILE.email}</strong>
          </a>
          <a className="contact-info-card" href={`tel:${PROFILE.phone}`}>
            <span>Phone</span>
            <strong>{PROFILE.phone}</strong>
          </a>
          <div className="contact-info-card">
            <span>Location</span>
            <strong>{PROFILE.location}</strong>
          </div>
          <a className="contact-info-card" href={PROFILE.github} target="_blank" rel="noreferrer">
            <span>GitHub</span>
            <strong>View profile</strong>
          </a>
          <a className="contact-info-card" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>Connect with me</strong>
          </a>
          <a className="contact-info-card" href={PROFILE.resume} target="_blank" rel="noreferrer">
            <span>Resume</span>
            <strong>Download CV</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

function Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');

      :root {
        --bg: #0b1520;
        --panel: #111e2a;
        --panel-light: #172536;
        --text: #ffffff;
        --muted: #8d9aaa;
        --line: rgba(255, 255, 255, 0.08);
        --accent: #ff675c;
        --shadow: 0 28px 90px rgba(0, 0, 0, 0.34);
      }

      * {
        box-sizing: border-box;
      }

      html,
      body,
      #root {
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        font-family: 'Roboto', Arial, sans-serif;
        background: var(--bg);
      }

      button,
      input,
      textarea {
        font: inherit;
      }

      button,
      a {
        -webkit-tap-highlight-color: transparent;
      }

      img {
        display: block;
        max-width: 100%;
      }

      .app {
        min-height: 100vh;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
        position: relative;
        padding-top: 74px;
        color: var(--text);
        background:
          radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 0%), rgba(255, 103, 92, 0.16), transparent 18rem),
          radial-gradient(circle at 20% 0%, rgba(255, 103, 92, 0.13), transparent 28rem),
          radial-gradient(circle at 85% 12%, rgba(255, 103, 92, 0.08), transparent 26rem),
          var(--bg);
      }

      .container {
        width: min(1120px, calc(100% - 32px));
        margin: 0 auto;
      }

      .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 80;
        background: rgba(11, 21, 32, 0.94);
        backdrop-filter: blur(16px);
      }

      .scroll-progress {
        position: absolute;
        left: 0;
        top: 0;
        height: 3px;
        background: var(--accent);
        z-index: 2;
        transition: width 0.1s linear;
      }

      .navbar {
        width: 100%;
        min-height: 74px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 22px;
        margin: 0 auto;
        padding: 0 max(24px, calc((100vw - 1120px) / 2));
        border-bottom: 1px solid var(--line);
      }

      .brand,
      .desktop-nav button,
      .menu-btn,
      .mobile-nav button,
      .hero-actions button,
      .project-filters button,
      .project-image,
      .project-body button,
      .modal-close,
      .thumb-row button,
      .contact-copy button,
      .service-item,
      .service-preview button {
        border: 0;
        cursor: pointer;
      }

      .brand {
        background: transparent;
        color: var(--text);
        font-size: 16px;
        font-weight: 900;
        white-space: nowrap;
      }

      .desktop-nav {
        display: flex;
        align-items: center;
        gap: 14px;
        flex-wrap: nowrap;
      }

      .desktop-nav button,
      .mobile-nav button {
        position: relative;
        background: transparent;
        color: var(--text);
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
        transition: 0.2s ease;
      }

      .desktop-nav button::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -9px;
        height: 2px;
        transform: scaleX(0);
        background: var(--accent);
        transition: 0.2s ease;
      }

      .desktop-nav button:hover,
      .desktop-nav button.active,
      .mobile-nav button:hover,
      .mobile-nav button.active {
        color: var(--accent);
      }

      .desktop-nav button:hover::after,
      .desktop-nav button.active::after {
        transform: scaleX(1);
      }

      .menu-btn {
        display: none;
        background: transparent;
        color: var(--text);
        font-size: 24px;
      }

      .mobile-nav {
        display: none;
        width: 100%;
        max-height: calc(100vh - 74px);
        overflow-y: auto;
        background: var(--bg);
        border-top: 1px solid var(--line);
        padding: 14px 24px;
      }

      .mobile-nav button {
        display: block;
        width: 100%;
        padding: 12px 0;
        text-align: left;
      }

      .hero-section,
      .section {
        width: 100%;
        background: transparent;
        scroll-margin-top: 92px;
      }

      .hero-section {
        overflow: hidden;
      }

      .hero-grid {
        min-height: 600px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 48px;
        padding: 72px 0 0;
      }

      .hello-row {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 12px;
      }

      .hello-row span {
        width: 84px;
        height: 2px;
        background: var(--accent);
      }

      .hello-row strong {
        font-size: clamp(24px, 4vw, 34px);
        letter-spacing: -0.04em;
      }

      .hello-row i {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--accent);
      }

      .name-line {
        margin: 0;
        color: var(--text);
        font-size: clamp(22px, 4vw, 32px);
        line-height: 1.2;
        font-weight: 300;
      }

      .hero-copy h1 {
        margin: 12px 0 0;
        color: var(--text);
        font-size: clamp(38px, 6vw, 62px);
        line-height: 1.05;
        letter-spacing: -0.045em;
        font-weight: 900;
      }

      .hero-intro {
        max-width: 550px;
        color: var(--muted);
        line-height: 1.8;
        margin: 20px 0 0;
      }

      .hero-actions {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        margin-top: 30px;
      }

      .hero-actions button,
      .hero-actions a,
      .project-body button,
      .contact-copy button,
      .contact-form a,
      .modal-links a,
      .service-preview button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 0 18px;
        border-radius: 2px;
        text-decoration: none;
        font-size: 13px;
        font-weight: 700;
        transition: 0.2s ease;
      }

      .hero-actions button,
      .project-body button,
      .contact-copy button,
      .contact-form a,
      .modal-links a:last-child,
      .service-preview button {
        background: var(--accent);
        color: #fff;
      }

      .hero-actions a,
      .modal-links a:first-child {
        border: 1px solid var(--text);
        background: transparent;
        color: var(--text);
      }

      .hero-actions button:hover,
      .hero-actions a:hover,
      .project-body button:hover,
      .contact-copy button:hover,
      .contact-form a:hover,
      .modal-links a:hover,
      .service-preview button:hover {
        transform: translateY(-2px);
      }

      .hero-portrait {
        position: relative;
        max-width: 100%;
        overflow: hidden;
        min-height: 470px;
        display: flex;
        align-items: end;
        justify-content: center;
      }

      .circle-bg {
        position: absolute;
        width: 315px;
        height: 315px;
        border-radius: 50%;
        background: linear-gradient(135deg, #ff6b5f, #8f2f2f);
        right: 55px;
        bottom: 0;
        transition: 0.3s ease;
      }

      .hero-portrait:hover .circle-bg {
        transform: scale(1.08) rotate(10deg);
      }

      .hero-portrait img {
        position: relative;
        z-index: 2;
        width: 300px;
        height: 410px;
        object-fit: cover;
        object-position: top;
        border-radius: 150px 150px 0 0;
        filter: saturate(0.95);
        transition: 0.3s ease;
      }

      .hero-portrait:hover img {
        transform: translateY(-8px);
      }

      .shape {
        position: absolute;
        z-index: 1;
        color: rgba(255, 103, 92, 0.38);
        font-size: 72px;
        font-weight: 300;
      }

      .shape-left {
        left: 80px;
        top: 96px;
      }

      .shape-right {
        right: 16px;
        bottom: 74px;
      }

      .floating-badge {
        position: absolute;
        z-index: 3;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(17, 30, 42, 0.82);
        color: var(--text);
        padding: 10px 13px;
        font-size: 12px;
        font-weight: 900;
        box-shadow: var(--shadow);
        backdrop-filter: blur(12px);
      }

      .badge-one {
        left: 72px;
        bottom: 100px;
      }

      .badge-two {
        right: 26px;
        top: 126px;
      }

      .skill-strip {
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        background: var(--panel);
        border-top: 1px solid rgba(255, 255, 255, 0.03);
        border-bottom: 1px solid rgba(255, 255, 255, 0.03);
      }

      .strip-track {
        display: flex;
        width: max-content;
        max-width: none;
        gap: 52px;
        padding: 23px 0;
        animation: marquee 24s linear infinite;
      }

      .strip-track span {
        color: rgba(255, 255, 255, 0.28);
        font-size: 16px;
        font-weight: 500;
        white-space: nowrap;
      }

      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      .section {
        padding: 88px 0;
      }

      .about-grid,
      .service-grid,
      .contact-grid {
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap: 70px;
      }

      .section-heading {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
        margin-bottom: 32px;
      }

      .section-heading.left {
        justify-content: flex-start;
      }

      .section-heading span {
        width: 3px;
        height: 42px;
        background: var(--accent);
      }

      .section-heading h2,
      .service-preview h2,
      .about-content h2,
      .contact-copy h2 {
        margin: 0;
        color: var(--text);
        font-size: clamp(32px, 5vw, 46px);
        line-height: 1.04;
        letter-spacing: -0.04em;
        font-weight: 900;
      }

      .about-content p,
      .project-body p,
      .modal-content p,
      .contact-copy p,
      .about-card li,
      .service-preview p,
      .service-item p,
      .experience-card p,
      .qualification-card p {
        color: var(--muted);
        line-height: 1.75;
      }

      .about-content p {
        max-width: 560px;
        margin: 22px 0 0;
        font-size: 14px;
      }

      .about-card,
      .service-preview,
      .experience-card,
      .qualification-card {
        background: var(--panel);
        padding: 30px;
        box-shadow: var(--shadow);
      }

      .about-card h3 {
        margin: 0;
        color: var(--text);
        font-size: 26px;
        line-height: 1.1;
      }

      .about-card ul {
        display: grid;
        gap: 9px;
        margin: 22px 0 0;
        padding-left: 18px;
      }

      .stats-row {
        display: flex;
        gap: 28px;
        flex-wrap: wrap;
        margin-top: 28px;
      }

      .stats-row strong,
      .stats-row span {
        display: block;
      }

      .stats-row strong {
        color: var(--text);
        font-size: 28px;
        font-weight: 900;
      }

      .stats-row strong::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: var(--accent);
        margin-left: 6px;
      }

      .stats-row span {
        max-width: 90px;
        margin-top: 6px;
        color: var(--muted);
        font-size: 11px;
        line-height: 1.35;
      }

      .service-list {
        position: relative;
        display: grid;
        gap: 20px;
      }

      .service-list::before {
        content: '';
        position: absolute;
        left: 10px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: linear-gradient(180deg, var(--accent), transparent);
      }

      .service-item {
        position: relative;
        display: grid;
        grid-template-columns: 50px 1fr;
        gap: 18px;
        padding: 18px 18px 18px 28px;
        background: transparent;
        text-align: left;
        transition: 0.2s ease;
      }

      .service-item::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 30px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--accent);
      }

      .service-item:hover,
      .service-item.active {
        background: var(--panel);
        transform: translateX(0);
      }

      .service-icon {
        display: grid;
        place-items: center;
        width: 38px;
        height: 38px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: var(--text);
      }

      .service-item h3,
      .service-preview h2 {
        margin: 2px 0 0;
        color: var(--text);
        font-weight: 800;
      }

      .service-item h3 {
        font-size: 16px;
      }

      .service-item p {
        margin: 8px 0 0;
        font-size: 13px;
      }

      .service-preview > span {
        display: grid;
        place-items: center;
        width: 58px;
        height: 58px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        color: var(--accent);
        font-size: 24px;
      }

      .service-preview h2 {
        margin-top: 22px;
      }

      .service-points {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 9px;
        margin: 22px 0;
      }

      .service-points small {
        background: var(--bg);
        color: var(--text);
        padding: 11px;
        font-weight: 700;
      }

      .project-tools {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        flex-wrap: wrap;
        margin-bottom: 32px;
      }

      .project-filters {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .project-filters button {
        border: 1px solid var(--line);
        border-radius: 2px;
        background: transparent;
        color: var(--muted);
        padding: 10px 14px;
        font-size: 13px;
        font-weight: 700;
      }

      .project-filters button:hover,
      .project-filters button.active {
        background: var(--accent);
        border-color: var(--accent);
        color: white;
      }

      .project-search-box {
        display: flex;
        align-items: stretch;
        width: min(410px, 100%);
        border: 1px solid var(--line);
        background: var(--panel);
      }

      .project-search-box input {
        width: 100%;
        min-width: 0;
        border: 0;
        outline: none;
        background: transparent;
        color: var(--text);
        padding: 12px 14px;
      }

      .project-search-box:focus-within {
        border-color: var(--accent);
      }

      .project-search-box button {
        border: 0;
        background: var(--accent);
        color: white;
        padding: 0 13px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 900;
      }

      .project-result-count {
        margin: -14px 0 20px;
        color: var(--muted);
        font-size: 13px;
        font-weight: 700;
      }

      .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 22px;
      }

      .project-card {
        overflow: hidden;
        background: var(--panel);
        box-shadow: var(--shadow);
        transition: 0.25s ease;
      }

      .project-card:hover,
      .experience-card:hover,
      .qualification-card:hover {
        transform: translateY(-7px);
      }

      .project-image {
        position: relative;
        display: block;
        width: 100%;
        height: 220px;
        overflow: hidden;
        background: var(--panel-light);
        padding: 0;
      }

      .project-image::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.22);
        opacity: 0;
        transition: 0.2s ease;
      }

      .project-image > span {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 2;
        transform: translate(-50%, -50%) scale(0.92);
        background: var(--accent);
        color: #fff;
        padding: 10px 13px;
        font-size: 12px;
        font-weight: 900;
        opacity: 0;
        transition: 0.2s ease;
        white-space: nowrap;
      }

      .project-image:hover::after,
      .project-image:hover > span {
        opacity: 1;
      }

      .project-image:hover > span {
        transform: translate(-50%, -50%) scale(1);
      }

      .project-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.35s ease;
      }

      .project-card:hover .project-image img {
        transform: scale(1.05);
      }

      .project-body {
        padding: 20px;
      }

      .project-body > span,
      .modal-content > span,
      .experience-card span,
      .qualification-card span {
        color: var(--accent);
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
      }

      .project-body h3,
      .experience-card h3,
      .qualification-card h3 {
        margin: 10px 0 0;
        color: var(--text);
        font-size: 20px;
        line-height: 1.15;
      }

      .qualification-card h3 {
        font-size: 24px;
      }

      .project-body p,
      .experience-card p,
      .qualification-card p {
        margin: 12px 0 0;
        font-size: 13px;
      }

      .tech-row {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        margin-top: 14px;
      }

      .tech-row small {
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--muted);
        padding: 5px 7px;
        font-size: 10px;
        font-weight: 800;
      }

      .project-body button {
        width: 100%;
        margin-top: 18px;
      }

      .empty-state {
        color: var(--muted);
        text-align: center;
      }

      .experience-grid {
        display: grid;
        gap: 18px;
      }

      .experience-card {
        display: grid;
        grid-template-columns: 130px 1fr;
        gap: 24px;
        align-items: start;
        transition: 0.25s ease;
      }

      .experience-year {
        display: grid;
        place-items: center;
        width: 86px;
        height: 86px;
        background: var(--accent);
        color: white;
        font-weight: 900;
        font-size: 18px;
      }

      .qualification-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 22px;
      }

      .qualification-card {
        transition: 0.25s ease;
      }

      .qualification-card strong {
        display: block;
        margin-top: 10px;
        color: var(--text);
        font-size: 14px;
      }

      .qualification-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .modal-overlay {
        position: fixed;
        inset: 0;
        z-index: 120;
        display: grid;
        place-items: center;
        background: rgba(0, 0, 0, 0.72);
        padding: 18px;
        backdrop-filter: blur(10px);
      }

      .project-modal {
        position: relative;
        max-width: 100%;
        display: grid;
        grid-template-columns: minmax(320px, 0.95fr) minmax(0, 1.05fr);
        width: min(1080px, 100%);
        max-height: 90vh;
        overflow: hidden;
        background: var(--bg);
        box-shadow: var(--shadow);
      }

      .modal-close {
        position: absolute;
        top: 14px;
        right: 14px;
        z-index: 5;
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        background: var(--accent);
        color: white;
        font-size: 30px;
        line-height: 1;
      }

      .modal-gallery {
        background: var(--panel);
        padding: 12px;
      }

      .gallery-main-image {
        position: relative;
        overflow: hidden;
      }

      .gallery-main-image > img {
        width: 100%;
        height: 470px;
        object-fit: cover;
      }

      .gallery-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 3;
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border: 0;
        background: rgba(11, 21, 32, 0.82);
        color: white;
        cursor: pointer;
        font-size: 32px;
        line-height: 1;
        transition: 0.2s ease;
      }

      .gallery-arrow:hover {
        background: var(--accent);
      }

      .gallery-prev {
        left: 12px;
      }

      .gallery-next {
        right: 12px;
      }

      .gallery-counter {
        position: absolute;
        left: 12px;
        bottom: 12px;
        z-index: 3;
        background: rgba(11, 21, 32, 0.82);
        color: white;
        padding: 7px 10px;
        font-size: 12px;
        font-weight: 900;
      }

      .thumb-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-top: 8px;
      }

      .thumb-row button {
        overflow: hidden;
        border: 2px solid transparent;
        background: transparent;
        padding: 0;
        opacity: 0.6;
      }

      .thumb-row button.active,
      .thumb-row button:hover {
        border-color: var(--accent);
        opacity: 1;
      }

      .thumb-row img {
        width: 100%;
        height: 72px;
        object-fit: cover;
      }

      .modal-content {
        overflow: auto;
        padding: 34px;
      }

      .modal-content h2 {
        margin: 12px 44px 0 0;
        color: var(--text);
        font-size: clamp(30px, 4vw, 46px);
        line-height: 1.05;
        letter-spacing: -0.04em;
      }

      .modal-content p {
        margin-top: 16px;
      }

      .modal-section {
        margin-top: 24px;
      }

      .modal-section h3,
      .two-col h3 {
        margin: 0;
        color: var(--text);
        font-size: 20px;
      }

      .feature-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin-top: 12px;
      }

      .feature-grid div,
      .two-col > div {
        background: var(--panel);
        color: var(--muted);
        padding: 13px;
        font-size: 13px;
        line-height: 1.5;
      }

      .feature-grid div::before {
        content: '✓ ';
        color: var(--accent);
      }

      .two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .modal-links {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 24px;
      }

      .contact-copy p {
        max-width: 500px;
      }

      .contact-only-grid {
        align-items: start;
      }

      .contact-info-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .contact-info-card {
        display: block;
        min-width: 0;
        background: var(--panel);
        color: var(--text);
        text-decoration: none;
        padding: 22px;
        box-shadow: var(--shadow);
        transition: 0.25s ease;
        border: 1px solid var(--line);
      }

      .contact-info-card:hover {
        transform: translateY(-6px);
        border-color: rgba(255, 103, 92, 0.45);
      }

      .contact-info-card span {
        display: block;
        color: var(--accent);
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
      }

      .contact-info-card strong {
        display: block;
        margin-top: 10px;
        color: var(--text);
        font-size: 16px;
        line-height: 1.4;
        word-break: break-word;
      }

      .contact-links {
        display: grid;
        gap: 10px;
        margin-top: 24px;
      }

      .contact-links a {
        color: var(--text);
        text-decoration: none;
        border-bottom: 1px solid var(--line);
        padding-bottom: 10px;
        font-weight: 700;
        word-break: break-word;
      }

      .contact-copy button {
        margin-top: 24px;
      }

      .contact-form {
        display: grid;
        gap: 12px;
        background: var(--panel);
        padding: 24px;
      }

      .contact-form input,
      .contact-form textarea {
        width: 100%;
        border: 1px solid rgba(255, 255, 255, 0.08);
        outline: none;
        background: var(--bg);
        color: var(--text);
        padding: 14px;
      }

      .contact-form textarea {
        resize: vertical;
      }

      .contact-form input:focus,
      .contact-form textarea:focus {
        border-color: var(--accent);
      }

      .contact-form a {
        width: 100%;
      }

      .contact-form a.disabled {
        opacity: 0.45;
        pointer-events: none;
      }

      .contact-form small {
        color: var(--muted);
        text-align: center;
      }

      .back-top {
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 70;
        width: 48px;
        height: 48px;
        border: 0;
        background: var(--accent);
        color: white;
        cursor: pointer;
        font-size: 22px;
        font-weight: 900;
        box-shadow: var(--shadow);
      }

      @media (max-width: 1180px) {
        .container {
          width: min(100% - 40px, 1040px);
        }

        .navbar {
          padding-left: 24px;
          padding-right: 24px;
        }

        .projects-grid,
        .qualification-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 1080px) {
        .desktop-nav {
          display: none;
        }

        .menu-btn {
          display: block;
        }

        .mobile-nav {
          display: block;
        }
      }

      @media (max-width: 900px) {
        .navbar {
          min-height: 68px;
        }

        .brand {
          font-size: 15px;
        }

        .app {
          padding-top: 68px;
        }

        .hero-section {
          padding-top: 32px;
        }

        .hero-grid {
          min-height: auto;
          grid-template-columns: 1fr;
          gap: 22px;
          padding-top: 34px;
        }

        .hero-copy h1 {
          max-width: 620px;
          font-size: clamp(38px, 9vw, 58px);
        }

        .hero-intro {
          max-width: 620px;
        }

        .hero-portrait {
          min-height: 390px;
          justify-content: center;
          overflow: hidden;
        }

        .circle-bg {
          left: 50%;
          right: auto;
          width: 300px;
          height: 300px;
          transform: translateX(-50%);
        }

        .hero-portrait:hover .circle-bg {
          transform: translateX(-50%) scale(1.04) rotate(8deg);
        }

        .hero-portrait img {
          width: 270px;
          height: 360px;
        }

        .shape-left {
          left: 14%;
          top: 70px;
        }

        .shape-right {
          right: 12%;
          bottom: 55px;
        }

        .badge-one {
          left: 8%;
          bottom: 78px;
        }

        .badge-two {
          right: 8%;
          top: 96px;
        }

        .about-grid,
        .service-grid,
        .contact-grid,
        .project-modal {
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .service-preview {
          order: -1;
        }

        .service-list::before,
        .service-item::before {
          display: none;
        }

        .service-item {
          padding: 18px;
          border: 1px solid var(--line);
          background: rgba(255, 255, 255, 0.02);
        }

        .section {
          padding: 72px 0;
        }

        .project-modal {
          width: min(720px, 100%);
          max-height: 92vh;
          overflow: auto;
        }

        .gallery-main-image > img {
          height: 360px;
        }

        .modal-content {
          overflow: visible;
        }
      }

      @media (max-width: 720px) {
        .container {
          width: min(100% - 28px, 1120px);
        }

        .navbar {
          padding-left: 14px;
          padding-right: 14px;
        }

        .mobile-nav {
          padding-left: 18px;
          padding-right: 18px;
        }

        .hello-row {
          gap: 12px;
        }

        .hello-row span {
          width: 42px;
        }

        .hello-row strong {
          font-size: 26px;
        }

        .name-line {
          font-size: 23px;
        }

        .hero-copy h1 {
          font-size: clamp(36px, 12vw, 48px);
          line-height: 1.03;
        }

        .hero-intro {
          font-size: 15px;
          line-height: 1.75;
        }

        .hero-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .hero-actions button,
        .hero-actions a {
          width: 100%;
          padding-left: 12px;
          padding-right: 12px;
        }

        .hero-portrait {
          min-height: 340px;
        }

        .circle-bg {
          width: 250px;
          height: 250px;
        }

        .hero-portrait img {
          width: 230px;
          height: 315px;
        }

        .shape {
          font-size: 52px;
        }

        .floating-badge {
          padding: 8px 10px;
          font-size: 11px;
        }

        .badge-one {
          left: 2%;
          bottom: 70px;
        }

        .badge-two {
          right: 2%;
          top: 88px;
        }

        .strip-track {
          gap: 34px;
          padding: 18px 0;
          animation-duration: 18s;
        }

        .section-heading {
          justify-content: flex-start;
          margin-bottom: 26px;
        }

        .section-heading.center {
          justify-content: center;
        }

        .section-heading h2,
        .service-preview h2,
        .about-content h2,
        .contact-copy h2 {
          font-size: clamp(30px, 9vw, 40px);
        }

        .service-preview,
        .about-card,
        .contact-form,
        .experience-card,
        .qualification-card {
          padding: 22px;
        }

        .service-points,
        .projects-grid,
        .qualification-grid,
        .contact-info-grid,
        .feature-grid,
        .two-col {
          grid-template-columns: 1fr;
        }

        .experience-card {
          grid-template-columns: 1fr;
        }

        .project-tools {
          display: grid;
          grid-template-columns: 1fr;
        }

        .project-filters {
          overflow-x: auto;
          flex-wrap: nowrap;
          padding-bottom: 4px;
          scrollbar-width: none;
        }

        .project-filters::-webkit-scrollbar {
          display: none;
        }

        .project-filters button {
          white-space: nowrap;
        }

        .project-search-box {
          width: 100%;
        }

        .project-image {
          height: 230px;
        }

        .modal-overlay {
          align-items: start;
          padding: 10px;
          overflow-y: auto;
        }

        .project-modal {
          margin: 18px 0;
          width: 100%;
        }

        .modal-gallery {
          padding: 10px;
        }

        .gallery-main-image > img {
          height: 260px;
        }

        .gallery-arrow {
          width: 36px;
          height: 36px;
          font-size: 28px;
        }

        .thumb-row img {
          height: 64px;
        }

        .modal-content {
          padding: 24px;
        }

        .modal-content h2 {
          margin-right: 38px;
          font-size: 30px;
        }
      }

      @media (max-width: 480px) {
        .container {
          width: min(100% - 22px, 1120px);
        }

        .navbar {
          min-height: 62px;
        }

        .app {
          padding-top: 62px;
        }

        .brand {
          max-width: 180px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .hero-grid {
          padding-top: 26px;
        }

        .hero-copy h1 {
          font-size: 35px;
          letter-spacing: -0.025em;
        }

        .hero-actions {
          grid-template-columns: 1fr;
        }

        .hero-portrait {
          min-height: 300px;
        }

        .circle-bg {
          width: 220px;
          height: 220px;
        }

        .hero-portrait img {
          width: 205px;
          height: 280px;
        }

        .floating-badge {
          display: none;
        }

        .shape-left {
          left: 4%;
          top: 58px;
        }

        .shape-right {
          right: 4%;
          bottom: 42px;
        }

        .section {
          padding: 58px 0;
        }

        .service-item {
          grid-template-columns: 40px 1fr;
          gap: 12px;
          padding: 15px;
        }

        .service-icon {
          width: 34px;
          height: 34px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }

        .project-image {
          height: 205px;
        }

        .project-body,
        .contact-form,
        .service-preview,
        .about-card,
        .experience-card,
        .qualification-card {
          padding: 18px;
        }

        .experience-year {
          width: 74px;
          height: 74px;
        }

        .modal-content {
          padding: 20px;
        }

        .gallery-main-image > img {
          height: 220px;
        }

        .thumb-row img {
          height: 56px;
        }

        .contact-copy button,
        .contact-form a,
        .service-preview button {
          width: 100%;
        }

        .back-top {
          right: 14px;
          bottom: 14px;
          width: 44px;
          height: 44px;
        }
      }
    `}</style>
  );
}

export default function App() {
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "0%" });

  function handleMouseMove(event) {
    setSpotlight({ x: `${event.clientX}px`, y: `${event.clientY}px` });
  }

  return (
    <div
      className="app"
      style={{ "--cursor-x": spotlight.x, "--cursor-y": spotlight.y }}
      onMouseMove={handleMouseMove}
    >
      <Styles />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Qualifications />
        <Contact />
      </main>
      <button className="back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        ↑
      </button>
    </div>
  );
}
