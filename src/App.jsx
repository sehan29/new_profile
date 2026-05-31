import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Projects", "Experience", "Qualifications", "Contact"];

const SKILLS = [
  { category: "Languages", items: ["JavaScript", "Python", "C#", "Java", "PHP"], icon: "💻" },
  { category: "Web Dev", items: ["React", "Node.js", "Laravel", "ASP.NET Core", "HTML/CSS"], icon: "🌐" },
  { category: "Databases", items: ["MySQL", "SQL Server", "Django ORM"], icon: "🗄️" },
  { category: "AI & Data", items: ["YOLOv8", "Machine Learning", "FastAPI"], icon: "🧠" },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Visual Studio"], icon: "🔧" },
  { category: "IoT", items: ["IoT Systems", "Ad-hoc Networks", "Sensor Integration"], icon: "📡" },
];

const PROJECTS = [
  {
    title: "AI Plant Disease Detection",
    subtitle: "YOLOv8 · Flutter · FastAPI · ASP.NET Core",
    desc: "AI-powered plant disease detection with IoT sensor integration for real-time environmental monitoring. Provides root cause analysis and actionable recommendations for farmers.",
    tags: ["AI/ML", "IoT", "Mobile", "Backend"],
    accent: "#00d4aa",
    icon: "🌿",
  },
  {
    title: "Mercedes-Benz Report System",
    subtitle: "Laravel · MySQL · SAP Integration",
    desc: "Enterprise-grade web-based report management system with service, inspection, and conditional report generation. Features PDF/Word export and full SAP workflow integration.",
    tags: ["Enterprise", "Laravel", "PDF", "SAP"],
    accent: "#c0a060",
    icon: "🚗",
  },
  {
    title: "Rice Distribution System",
    subtitle: "React · .NET Core MVC · SQL",
    desc: "Full-stack distribution and inventory management platform with real-time inventory tracking, financial monitoring, and a responsive interface for operational management.",
    tags: ["React", ".NET", "Inventory", "Finance"],
    accent: "#6c8ef5",
    icon: "📦",
  },
];

const CERTS = [
  { title: "AWS Academy Cloud Foundations", org: "Amazon Web Services", icon: "☁️" },
  { title: "AWS Academy Data Engineering", org: "Amazon Web Services", icon: "☁️" },
  { title: "Foundational C# with Microsoft", org: "Microsoft", icon: "🪟" },
  { title: "Programming in Python Level I & II", org: "University of Moratuwa", icon: "🐍" },
  { title: "Introduction to Azure Cloud Services", org: "Microsoft", icon: "🪟" },
];

const REFS = [
  {
    name: "Dr. Rohan Samarasinghe",
    role: "Head of ICT Department",
    org: "University of Colombo, Faculty of Technology",
    phone: "+94718610664",
    email: "rohan@ict.cmb.ac.lk",
  },
  {
    name: "Ms. N. T. Weerawarna",
    role: "Lecturer, ICT Department",
    org: "University of Colombo, Faculty of Technology",
    phone: "+94773999401",
    email: "nethmini@ict.cmb.ac.lk",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, style = {} }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

function NavBar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const go = (link) => {
    document.getElementById(link.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" });
    setActive(link);
    setMenuOpen(false);
  };
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(4,6,14,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(18px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.4s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
          SH<span style={{ color: "#00d4aa" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 4 }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => go(link)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px 14px", borderRadius: 8,
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              color: active === link ? "#00d4aa" : "rgba(255,255,255,0.7)",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => { if (active !== link) e.target.style.color = "#fff"; }}
              onMouseLeave={e => { if (active !== link) e.target.style.color = "rgba(255,255,255,0.7)"; }}
            >{link}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HomeSection() {
  const [typed, setTyped] = useState("");
  const words = ["Software Engineer", "AI Enthusiast", "Full-Stack Developer", "Cybersecurity Learner"];
  const wordIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const tick = () => {
      const word = words[wordIdx.current];
      if (!deleting.current) {
        setTyped(word.slice(0, charIdx.current + 1));
        charIdx.current++;
        if (charIdx.current === word.length) {
          deleting.current = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        setTyped(word.slice(0, charIdx.current - 1));
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          wordIdx.current = (wordIdx.current + 1) % words.length;
        }
      }
      setTimeout(tick, deleting.current ? 50 : 80);
    };
    const t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #04060e 0%, #060c1e 50%, #04060e 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,212,170,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "20%", left: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "20%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,142,245,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1, padding: "0 2rem" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32,
          background: "rgba(0,212,170,0.08)", border: "1px solid rgba(0,212,170,0.2)",
          borderRadius: 100, padding: "6px 18px",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00d4aa", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#00d4aa", letterSpacing: 1 }}>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(3rem, 8vw, 6.5rem)",
          fontWeight: 800, color: "#fff", margin: "0 0 16px",
          lineHeight: 1.05, letterSpacing: "-2px",
        }}>
          Sehan<br />
          <span style={{
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundImage: "linear-gradient(90deg, #00d4aa, #6c8ef5)",
            backgroundClip: "text",
          }}>Hansaja</span>
        </h1>

        <div style={{ height: 52, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 40 }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            color: "rgba(255,255,255,0.55)", fontWeight: 300,
          }}>
            {typed}<span style={{ borderRight: "2px solid #00d4aa", marginLeft: 2, animation: "blink 0.8s infinite" }}>&nbsp;</span>
          </span>
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} style={{
            background: "#00d4aa", color: "#04060e", border: "none",
            padding: "14px 32px", borderRadius: 12, cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
            letterSpacing: "0.5px", transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 32px rgba(0,212,170,0.3)"; }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
          >
            View My Work
          </button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{
            background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)", padding: "14px 32px", borderRadius: 12,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500,
            transition: "border-color 0.2s, transform 0.2s",
          }}
            onMouseEnter={e => { e.target.style.borderColor = "rgba(255,255,255,0.5)"; e.target.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.transform = ""; }}
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: -100, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: 2 }}>SCROLL</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #04060e; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #04060e; }
        ::-webkit-scrollbar-thumb { background: #00d4aa33; border-radius: 10px; }
      `}</style>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 2rem", background: "#060c1e" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase" }}>01 / About</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn delay={0.1}>
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 24, letterSpacing: "-1px" }}>
                Building the future,<br />
                <span style={{ color: "#00d4aa" }}>one line at a time.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 20 }}>
                I'm an ICT undergraduate at the University of Colombo (CGPA: 3.71) with hands-on internship experience at Sri Lanka Telecom. I'm passionate about building AI-powered, user-focused software solutions.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                My interests span software engineering, artificial intelligence, cybersecurity, and modern web development. I thrive in collaborative environments and love turning complex problems into elegant solutions.
              </p>

              <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
                {[
                  { label: "CGPA", value: "3.71" },
                  { label: "Projects", value: "3+" },
                  { label: "Certs", value: "5+" },
                ].map(stat => (
                  <div key={stat.label} style={{
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 12, padding: "16px 24px", textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: "#00d4aa" }}>{stat.value}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase", marginBottom: 28 }}>Tech Stack</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {SKILLS.map((s, i) => (
                  <div key={s.category} style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 12, padding: "14px 20px",
                    transition: "border-color 0.3s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.2)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                      <span style={{ fontSize: 16 }}>{s.icon}</span>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: 1.5, textTransform: "uppercase" }}>{s.category}</span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {s.items.map(item => (
                        <span key={item} style={{
                          fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                          background: "rgba(0,212,170,0.08)", color: "#00d4aa",
                          border: "1px solid rgba(0,212,170,0.15)",
                          padding: "3px 10px", borderRadius: 100,
                        }}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" style={{ padding: "100px 2rem", background: "#04060e" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase" }}>02 / Projects</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 56, letterSpacing: "-1px" }}>
            Things I've <span style={{ color: "#00d4aa" }}>Built</span>
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {PROJECTS.map((proj, i) => (
            <FadeIn key={proj.title} delay={i * 0.12}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                  border: `1px solid ${hovered === i ? proj.accent + "40" : "rgba(255,255,255,0.06)"}`,
                  borderRadius: 20, padding: "36px 40px",
                  transition: "all 0.3s ease",
                  position: "relative", overflow: "hidden",
                  cursor: "default",
                }}
              >
                {/* accent bar */}
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: proj.accent, borderRadius: "20px 0 0 20px" }} />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                      <span style={{ fontSize: 24 }}>{proj.icon}</span>
                      <div>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{proj.title}</h3>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: proj.accent }}>{proj.subtitle}</p>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{proj.desc}</p>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, maxWidth: 200, justifyContent: "flex-end" }}>
                    {proj.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600,
                        background: proj.accent + "15", color: proj.accent,
                        border: `1px solid ${proj.accent}30`,
                        padding: "4px 12px", borderRadius: 100, letterSpacing: 0.5,
                        whiteSpace: "nowrap",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "100px 2rem", background: "#060c1e" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase" }}>03 / Experience</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
          <FadeIn delay={0.1}>
            {/* Main Experience */}
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: 40, letterSpacing: "-1px" }}>
                Work<br /><span style={{ color: "#00d4aa" }}>Experience</span>
              </h2>
              <div style={{
                position: "relative", paddingLeft: 24,
                borderLeft: "1px solid rgba(0,212,170,0.2)",
              }}>
                {/* dot */}
                <div style={{
                  position: "absolute", left: -6, top: 6,
                  width: 12, height: 12, borderRadius: "50%",
                  background: "#00d4aa", boxShadow: "0 0 12px rgba(0,212,170,0.5)",
                }} />
                <div style={{
                  background: "rgba(0,212,170,0.04)", border: "1px solid rgba(0,212,170,0.12)",
                  borderRadius: 16, padding: "28px 32px",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Software Engineer Intern</h3>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#00d4aa" }}>Sri Lanka Telecom</p>
                    </div>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 12,
                      background: "rgba(0,212,170,0.1)", color: "#00d4aa",
                      border: "1px solid rgba(0,212,170,0.2)",
                      padding: "5px 14px", borderRadius: 100,
                      whiteSpace: "nowrap",
                    }}>Feb 2025 – Aug 2025</span>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      "Developed and maintained web-based applications using modern technologies",
                      "Collaborated with development teams to build, test, and improve software solutions",
                      "Worked with APIs, databases, and backend services to enhance system functionality",
                      "Participated in debugging, performance optimization, and problem-solving for enterprise applications",
                      "Used Git-based version control and followed agile development practices",
                    ].map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#00d4aa", marginTop: 6, fontSize: 8, flexShrink: 0 }}>▶</span>
                        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {/* Extracurriculars */}
            <div>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "#fff", marginBottom: 40, letterSpacing: "-1px" }}>
                Leadership &<br /><span style={{ color: "#6c8ef5" }}>Activities</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { role: "Vice President", org: "INTSEC Club", uni: "University of Colombo", icon: "🔐" },
                  { role: "Member", org: "LEO Club", uni: "University of Colombo", icon: "🦁" },
                ].map((act, i) => (
                  <div key={i} style={{
                    background: "rgba(108,142,245,0.04)", border: "1px solid rgba(108,142,245,0.12)",
                    borderRadius: 16, padding: "24px 28px",
                    display: "flex", gap: 16, alignItems: "center",
                  }}>
                    <span style={{ fontSize: 28 }}>{act.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: "#fff" }}>{act.role}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#6c8ef5" }}>{act.org}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 2 }}>{act.uni}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function QualificationsSection() {
  return (
    <section id="qualifications" style={{ padding: "100px 2rem", background: "#04060e" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase" }}>04 / Qualifications</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          {/* Education */}
          <FadeIn delay={0.1}>
            <div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 32 }}>Education</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  {
                    title: "BSc (Hons) ICT",
                    subtitle: "University of Colombo, Faculty of Technology",
                    date: "Jan 2021 – Present",
                    detail: "CGPA: 3.71",
                    accent: "#00d4aa",
                  },
                  {
                    title: "G.C.E. Advanced Level",
                    subtitle: "Siri Piyarathana Central College, Padukka",
                    date: "Jan 2018 – Dec 2020",
                    detail: "Technology Stream · 1A | 2B's",
                    accent: "#6c8ef5",
                  },
                ].map((edu, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 16, padding: "24px 28px",
                    borderLeftColor: edu.accent, borderLeftWidth: 2,
                    transition: "border-color 0.3s",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, flexWrap: "wrap", gap: 4 }}>
                      <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: "#fff" }}>{edu.title}</h4>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{edu.date}</span>
                    </div>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>{edu.subtitle}</p>
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600,
                      background: edu.accent + "15", color: edu.accent,
                      border: `1px solid ${edu.accent}30`, padding: "3px 12px", borderRadius: 100,
                    }}>{edu.detail}</span>
                  </div>
                ))}
              </div>

              {/* References */}
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", letterSpacing: 3, textTransform: "uppercase", marginTop: 40, marginBottom: 24 }}>References</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {REFS.map((r, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 14, padding: "18px 22px",
                  }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{r.name}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#00d4aa", marginBottom: 8 }}>{r.role}</div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{r.org}</div>
                    <div style={{ display: "flex", gap: 16, marginTop: 10 }}>
                      <a href={`mailto:${r.email}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{r.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={0.2}>
            <div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.35)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 32 }}>Certifications</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {CERTS.map((cert, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 14, padding: "18px 22px",
                    display: "flex", alignItems: "center", gap: 14,
                    transition: "border-color 0.3s, background 0.3s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,170,0.2)"; e.currentTarget.style.background = "rgba(0,212,170,0.03)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                  >
                    <span style={{ fontSize: 24, flexShrink: 0 }}>{cert.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 3 }}>{cert.title}</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{cert.org}</div>
                    </div>
                    <div style={{ marginLeft: "auto", width: 20, height: 20, borderRadius: "50%", background: "rgba(0,212,170,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#00d4aa", fontSize: 11 }}>✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "100px 2rem 60px", background: "#060c1e" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase" }}>05 / Contact</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
          </div>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 16, letterSpacing: "-1.5px" }}>
            Let's <span style={{ color: "#00d4aa" }}>Connect</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.45)", textAlign: "center", marginBottom: 56, lineHeight: 1.7 }}>
            I'm open to internships, collaborations, and exciting projects.<br />Drop me a message!
          </p>
        </FadeIn>

        {/* Contact info */}
        <FadeIn delay={0.1}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            {[
              { icon: "📧", label: "Email", value: "sehanhansu@gmail.com", href: "mailto:sehanhansu@gmail.com" },
              { icon: "📱", label: "Phone", value: "+94 70 287 6795", href: "tel:+94702876795" },
              { icon: "🔗", label: "LinkedIn", value: "Connect on LinkedIn", href: "#" },
            ].map(item => (
              <a key={item.label} href={item.href} style={{
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14, padding: "16px 24px",
                display: "flex", gap: 12, alignItems: "center",
                textDecoration: "none", transition: "border-color 0.3s",
                minWidth: 200,
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,212,170,0.3)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"}
              >
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: "#fff" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.2}>
          <div style={{
            background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20, padding: "40px",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "24px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)" }}>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[{ name: "name", label: "Your Name", placeholder: "John Doe" }, { name: "email", label: "Email Address", placeholder: "john@example.com" }].map(field => (
                    <div key={field.name}>
                      <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>{field.label}</label>
                      <input
                        name={field.name} value={form[field.name]} onChange={handleChange}
                        placeholder={field.placeholder}
                        style={{
                          width: "100%", background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10,
                          padding: "12px 16px", color: "#fff",
                          fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                          outline: "none", transition: "border-color 0.2s",
                        }}
                        onFocus={e => e.target.style.borderColor = "rgba(0,212,170,0.4)"}
                        onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    style={{
                      width: "100%", background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10,
                      padding: "12px 16px", color: "#fff",
                      fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                      outline: "none", resize: "vertical", transition: "border-color 0.2s",
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(0,212,170,0.4)"}
                    onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>
                <button onClick={handleSubmit} style={{
                  background: "#00d4aa", color: "#04060e",
                  border: "none", borderRadius: 12, padding: "14px 40px",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 700,
                  cursor: "pointer", alignSelf: "flex-end",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px rgba(0,212,170,0.3)"; }}
                  onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
                >Send Message →</button>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
            © 2025 Sehan Hansaja · Built with React
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.getElementById(l.toLowerCase().replace(" ", "-")));
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.id;
          const match = NAV_LINKS.find(l => l.toLowerCase().replace(" ", "-") === id);
          if (match) setActiveNav(match);
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "#04060e", minHeight: "100vh" }}>
      <NavBar active={activeNav} setActive={setActiveNav} />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <QualificationsSection />
      <ContactSection />
    </div>
  );
}
