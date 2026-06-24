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

  {
  title: "Real-Time Technician Monitoring System",
  subtitle: "React · Node.js · MySQL · WebSocket",
  desc: "Real-time workshop monitoring platform for tracking technician tasks, task progress, and performance analytics. Provides live status updates, workflow visibility, and operational insights to improve workshop productivity and resource allocation.",
  tags: ["React", "Node.js", "Real-Time", "Analytics"],
  accent: "#ff6b6b",
  icon: "📊",
},
{
  title: "AI Tea Leaf Disease Detection",
  subtitle: "CNN · React · Node.js · Deep Learning",
  desc: "AI-powered tea leaf disease detection system using Convolutional Neural Networks (CNN) for image-based disease diagnosis. Delivers real-time predictions, treatment recommendations, and preventive measures for sustainable tea cultivation.",
  tags: ["AI/ML", "CNN", "Agriculture", "React"],
  accent: "#22c55e",
  icon: "🍃",
},
{
  title: "SLT ChatHub",
  subtitle: "Flutter · Flask · MongoDB · WebSocket",
  desc: "Secure enterprise-grade real-time messaging platform developed without third-party messaging services. Supports private and group chats, media sharing, offline messaging, and an integrated AI assistant with full data privacy.",
  tags: ["Flutter", "Flask", "MongoDB", "WebSocket"],
  accent: "#8b5cf6",
  icon: "💬",
},
{
  title: "Complaint Management System",
  subtitle: "Laravel · MySQL · Bootstrap",
  desc: "Comprehensive complaint management platform featuring role-based access control, complaint tracking, notifications, reporting dashboards, escalation workflows, and responsive user interfaces for efficient issue resolution.",
  tags: ["Laravel", "MySQL", "Dashboard", "Workflow"],
  accent: "#f59e0b",
  icon: "📋",
},
{
  title: "Developer Portfolio",
  subtitle: "React · Node.js · Responsive Design",
  desc: "Interactive portfolio website showcasing projects, technical skills, certifications, and professional experience with modern UI/UX design, smooth animations, and responsive layouts.",
  tags: ["React", "Portfolio", "UI/UX", "Frontend"],
  accent: "#06b6d4",
  icon: "🎨",
},
{
  title: "To-Do Mobile Application",
  subtitle: "Java · Android Studio · SQLite",
  desc: "Feature-rich Android task management application with offline support, local data storage, intuitive user interface, and productivity-focused features for efficient task organization.",
  tags: ["Android", "Java", "SQLite", "Mobile"],
  accent: "#ef4444",
  icon: "✅",
},
{
  title: "Gamified Learning Management System",
  subtitle: "Laravel · JavaScript · MySQL",
  desc: "Educational platform developed for RoyalKids Institute that integrates gamification concepts into learning. Features interactive learning modules, progress tracking, rewards, and student engagement tools.",
  tags: ["Laravel", "Education", "Gamification", "Web"],
  accent: "#f97316",
  icon: "🎓",
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
    email: "rohan@ict.cmb.ac.lk",
  },
  {
    name: "Ms. N. T. Weerawarna",
    role: "Lecturer, ICT Department",
    org: "University of Colombo, Faculty of Technology",
    email: "nethmini@ict.cmb.ac.lk",
  },
];

/* ── responsive hook ── */
function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

/* ── intersection fade ── */
function useInView(threshold = 0.12) {
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
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════
   GLOBAL STYLES  (injected once)
══════════════════════════════════════════ */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { width: 100%; min-height: 100vh; background: #04060e; }
  body { overflow-x: hidden; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: #04060e; }
  ::-webkit-scrollbar-thumb { background: rgba(0,212,170,0.25); border-radius: 10px; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
  @keyframes blink  { 0%,100%{opacity:1} 50%{opacity:0} }

  /* ── section container ── */
  .section-inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(1rem, 5vw, 3rem);
  }

  /* ── two-column grids ── */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }
  @media (max-width: 860px) {
    .grid-2 { grid-template-columns: 1fr; gap: 40px; }
  }

  /* ── about grid: photo | bio | skills ── */
  .grid-about {
    display: grid;
    grid-template-columns: 260px 1fr 1fr;
    gap: 48px;
    align-items: start;
  }
  @media (max-width: 1020px) {
    .grid-about { grid-template-columns: 200px 1fr; gap: 36px; }
    .grid-about .skills-col { grid-column: 1 / -1; }
  }
  @media (max-width: 680px) {
    .grid-about { grid-template-columns: 1fr; gap: 32px; }
    .grid-about .skills-col { grid-column: auto; }
  }

  /* profile image wrapper */
  .profile-wrap {
    position: sticky;
    top: 88px;
  }
  .profile-img-box {
    position: relative;
    width: 100%;
    aspect-ratio: 3/4;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(0,212,170,.18);
    background: rgba(0,212,170,.04);
  }
  .profile-img-box img {
    width: 100%; height: 100%;
    object-fit: cover; object-position: center top;
    display: block;
    transition: transform .5s ease;
  }
  .profile-img-box:hover img { transform: scale(1.04); }

  /* ── stat cards row ── */
  .stat-row {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-top: 36px;
  }

  /* ── contact info row ── */
  .contact-row {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  /* ── form name/email row ── */
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  @media (max-width: 600px) {
    .form-row { grid-template-columns: 1fr; }
  }

  /* ── nav links ── */
  .nav-links { display: flex; gap: 4px; }
  .nav-hamburger { display: none; }
  @media (max-width: 700px) {
    .nav-links { display: none; }
    .nav-hamburger { display: flex; }
  }
  .nav-mobile-menu {
    position: fixed; top: 64px; left: 0; right: 0; z-index: 99;
    background: rgba(4,6,14,0.98);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 12px 0 20px;
    display: flex; flex-direction: column; gap: 4px; align-items: center;
  }

  /* ── project card inner ── */
  .proj-card-inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
  }
  .proj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    max-width: 200px;
    justify-content: flex-end;
    flex-shrink: 0;
  }
  @media (max-width: 640px) {
    .proj-card-inner { flex-direction: column; }
    .proj-tags { max-width: 100%; justify-content: flex-start; }
  }

  /* ── experience grid ── */
  .exp-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }
  @media (max-width: 860px) {
    .exp-grid { grid-template-columns: 1fr; gap: 40px; }
  }
`;

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
function NavBar({ active, setActive }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (link) => {
    const id = link.toLowerCase().replace(/\s+/g, "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(link);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(4,6,14,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.35s ease",
      }}>
        <div className="section-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
            SH<span style={{ color: "#00d4aa" }}>.</span>
          </span>

          {/* desktop links */}
          <div className="nav-links">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => go(link)} style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "6px 13px", borderRadius: 8,
                fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500,
                color: active === link ? "#00d4aa" : "rgba(255,255,255,0.65)",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => { if (active !== link) e.target.style.color = "#fff"; }}
                onMouseLeave={e => { if (active !== link) e.target.style.color = "rgba(255,255,255,0.65)"; }}
              >{link}</button>
            ))}
          </div>

          {/* hamburger */}
          <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} style={{
            background: "none", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "#fff",
            fontFamily: "'DM Sans',sans-serif", fontSize: 18, lineHeight: 1,
          }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => go(link)} style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "10px 32px", borderRadius: 8, width: "100%",
              fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 500,
              color: active === link ? "#00d4aa" : "rgba(255,255,255,0.7)",
            }}>{link}</button>
          ))}
        </div>
      )}
    </>
  );
}

/* ══════════════════════════════════════════
   HOME
══════════════════════════════════════════ */
function HomeSection() {
  const [typed, setTyped] = useState("");
  const words = ["Software Engineer", "AI Enthusiast", "Full-Stack Developer", "Cybersecurity Learner"];
  const wordIdx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const tick = () => {
      const word = words[wordIdx.current];
      if (!deleting.current) {
        charIdx.current++;
        setTyped(word.slice(0, charIdx.current));
        if (charIdx.current === word.length) {
          deleting.current = true;
          timerRef.current = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIdx.current--;
        setTyped(word.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          wordIdx.current = (wordIdx.current + 1) % words.length;
        }
      }
      timerRef.current = setTimeout(tick, deleting.current ? 48 : 78);
    };
    timerRef.current = setTimeout(tick, 600);
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg,#04060e 0%,#060c1e 50%,#04060e 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(0,212,170,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,170,.04) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div style={{ position: "absolute", top: "18%", left: "8%", width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,212,170,.07) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "18%", right: "8%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle,rgba(108,142,245,.07) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ textAlign: "center", position: "relative", zIndex: 1, width: "100%", padding: "80px clamp(1.2rem,5vw,3rem) 100px" }}>
        {/* badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 28,
          background: "rgba(0,212,170,.08)", border: "1px solid rgba(0,212,170,.2)",
          borderRadius: 100, padding: "6px 18px",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00d4aa", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#00d4aa", letterSpacing: 1 }}>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <h1 style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(2.8rem,9vw,7rem)",
          fontWeight: 800, color: "#fff",
          margin: "0 0 14px", lineHeight: 1.05, letterSpacing: "-2px",
        }}>
          Sehan<br />
          <span style={{
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            backgroundImage: "linear-gradient(90deg,#00d4aa,#6c8ef5)",
            backgroundClip: "text",
          }}>Hansaja</span>
        </h1>

        <div style={{ height: 50, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 36 }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(1rem,2.8vw,1.4rem)", color: "rgba(255,255,255,.5)", fontWeight: 300 }}>
            {typed}
            <span style={{ borderRight: "2px solid #00d4aa", marginLeft: 2, animation: "blink .8s infinite" }}>&nbsp;</span>
          </span>
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { label: "View My Work", fill: true, target: "projects" },
            { label: "Get In Touch", fill: false, target: "contact" },
          ].map(btn => (
            <button key={btn.label} onClick={() => document.getElementById(btn.target)?.scrollIntoView({ behavior: "smooth" })} style={{
              background: btn.fill ? "#00d4aa" : "transparent",
              color: btn.fill ? "#04060e" : "#fff",
              border: btn.fill ? "none" : "1px solid rgba(255,255,255,.2)",
              padding: "13px 30px", borderRadius: 12, cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif", fontSize: 15,
              fontWeight: btn.fill ? 700 : 500,
              transition: "transform .2s,box-shadow .2s,border-color .2s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-2px)";
                if (btn.fill) e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,212,170,.3)";
                else e.currentTarget.style.borderColor = "rgba(255,255,255,.45)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
                if (!btn.fill) e.currentTarget.style.borderColor = "rgba(255,255,255,.2)";
              }}
            >{btn.label}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   ABOUT
   Replace PROFILE_IMG with your image path,
   e.g. "/sehan.jpg" or "./assets/profile.png"
══════════════════════════════════════════ */
const PROFILE_IMG = "/profile.jpeg"; // ← swap with your image path

function AboutSection() {
  return (
    <section id="about" style={{ padding: "90px 0", background: "#060c1e" }}>
      <div className="section-inner">
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase", whiteSpace: "nowrap" }}>01 / About</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.06)" }} />
          </div>
        </FadeIn>

        <div className="grid-about">

          {/* ── col 1: profile photo ── */}
          <FadeIn delay={0.05}>
            <div className="profile-wrap">
              <div className="profile-img-box">
                <img src={PROFILE_IMG} alt="Sehan Hansaja" />

              {/* decorative accent ring */}
              <div style={{
                position: "relative", marginTop: -16, marginLeft: 16,
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg,#00d4aa,#6c8ef5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "3px solid #060c1e",
                zIndex: 1,
              }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 800, color: "#04060e" }}>SH</span>
              </div>

              {/* mini info card */}
              <div style={{
                marginTop: 16,
                background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.06)",
                borderRadius: 14, padding: "14px 16px",
              }}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Sehan Hansaja</div>
                <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#00d4aa", marginBottom: 10 }}>Software Engineer Intern</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {[
                    { icon: "🎓", text: "Univ. of Colombo" },
                    { icon: "📍", text: "Sri Lanka" },
                    { icon: "💼", text: "Sri Lanka Telecom" },
                  ].map(item => (
                    <div key={item.text} style={{ display: "flex", gap: 7, alignItems: "center" }}>
                      <span style={{ fontSize: 11 }}>{item.icon}</span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.4)" }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </FadeIn>

          {/* ── col 2: bio + stats ── */}
          <FadeIn delay={0.12}>
            <div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.7rem,3vw,2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-1px" }}>
                Building the future,<br /><span style={{ color: "#00d4aa" }}>one line at a time.</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(255,255,255,.52)", lineHeight: 1.85, marginBottom: 16 }}>
                I'm an ICT undergraduate at the University of Colombo (CGPA: 3.71) with hands-on internship experience at Sri Lanka Telecom. Passionate about building AI-powered, user-focused software solutions.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(255,255,255,.52)", lineHeight: 1.85 }}>
                My interests span software engineering, artificial intelligence, cybersecurity, and modern web development. I thrive in collaborative environments and love turning complex problems into elegant solutions.
              </p>

              <div className="stat-row">
                {[{ label: "CGPA", value: "3.71" }, { label: "Projects", value: "20+" }, { label: "Certs", value: "15+" }].map(s => (
                  <div key={s.label} style={{
                    background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.06)",
                    borderRadius: 12, padding: "14px 22px", textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 26, fontWeight: 800, color: "#00d4aa" }}>{s.value}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.4)", letterSpacing: 1, textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* soft skills */}
              <div style={{ marginTop: 28 }}>
                <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.35)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Soft Skills</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {["Problem Solving", "Teamwork", "Communication", "Agile Development"].map(skill => (
                    <span key={skill} style={{
                      fontFamily: "'DM Sans',sans-serif", fontSize: 12,
                      background: "rgba(108,142,245,.08)", color: "#6c8ef5",
                      border: "1px solid rgba(108,142,245,.18)", padding: "5px 13px", borderRadius: 100,
                    }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* ── col 3: tech stack ── */}
          <FadeIn delay={0.2}>
            <div className="skills-col">
              <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>Tech Stack</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {SKILLS.map(s => (
                  <div key={s.category} style={{
                    background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.05)",
                    borderRadius: 12, padding: "12px 16px", transition: "border-color .3s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,212,170,.22)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,.05)"}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                      <span style={{ fontSize: 13 }}>{s.icon}</span>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,.4)", letterSpacing: 1.5, textTransform: "uppercase" }}>{s.category}</span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {s.items.map(item => (
                        <span key={item} style={{
                          fontFamily: "'DM Sans',sans-serif", fontSize: 11,
                          background: "rgba(0,212,170,.07)", color: "#00d4aa",
                          border: "1px solid rgba(0,212,170,.14)", padding: "2px 9px", borderRadius: 100,
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

/* ══════════════════════════════════════════
   PROJECTS
══════════════════════════════════════════ */
function ProjectsSection() {
  const [hovered, setHovered] = useState(null);
  return (
    <section id="projects" style={{ padding: "90px 0", background: "#04060e" }}>
      <div className="section-inner">
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase", whiteSpace: "nowrap" }}>02 / Projects</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.06)" }} />
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#fff", marginBottom: 44, letterSpacing: "-1px" }}>
            Things I've <span style={{ color: "#00d4aa" }}>Built</span>
          </h2>
        </FadeIn>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {PROJECTS.map((proj, i) => (
            <FadeIn key={proj.title} delay={i * 0.1}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: hovered === i ? "rgba(255,255,255,.04)" : "rgba(255,255,255,.02)",
                  border: `1px solid ${hovered === i ? proj.accent + "45" : "rgba(255,255,255,.06)"}`,
                  borderLeft: `3px solid ${proj.accent}`,
                  borderRadius: 18, padding: "clamp(20px,3vw,34px) clamp(20px,4vw,38px)",
                  transition: "all .3s ease", position: "relative",
                }}
              >
                <div className="proj-card-inner">
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                      <span style={{ fontSize: 22 }}>{proj.icon}</span>
                      <div>
                        <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(15px,2vw,19px)", fontWeight: 700, color: "#fff", marginBottom: 2 }}>{proj.title}</h3>
                        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: proj.accent }}>{proj.subtitle}</p>
                      </div>
                    </div>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "rgba(255,255,255,.5)", lineHeight: 1.75 }}>{proj.desc}</p>
                  </div>
                  <div className="proj-tags">
                    {proj.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: "'DM Sans',sans-serif", fontSize: 11, fontWeight: 600,
                        background: proj.accent + "15", color: proj.accent,
                        border: `1px solid ${proj.accent}30`,
                        padding: "4px 11px", borderRadius: 100, whiteSpace: "nowrap",
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

/* ══════════════════════════════════════════
   EXPERIENCE
══════════════════════════════════════════ */
function ExperienceSection() {
  return (
    <section id="experience" style={{ padding: "90px 0", background: "#060c1e" }}>
      <div className="section-inner">
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase", whiteSpace: "nowrap" }}>03 / Experience</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.06)" }} />
          </div>
        </FadeIn>

        <div className="exp-grid">
          <FadeIn delay={0.1}>
            <div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, color: "#fff", marginBottom: 36, letterSpacing: "-1px" }}>
                Work<br /><span style={{ color: "#00d4aa" }}>Experience</span>
              </h2>
              <div style={{ position: "relative", paddingLeft: 22, borderLeft: "1px solid rgba(0,212,170,.2)" }}>
                <div style={{ position: "absolute", left: -6, top: 6, width: 11, height: 11, borderRadius: "50%", background: "#00d4aa", boxShadow: "0 0 10px rgba(0,212,170,.5)" }} />
                <div style={{ background: "rgba(0,212,170,.04)", border: "1px solid rgba(0,212,170,.12)", borderRadius: 14, padding: "24px 26px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 3 }}>Software Engineer Intern</h3>
                      <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#00d4aa" }}>Sri Lanka Telecom</p>
                    </div>
                    <span style={{
                      fontFamily: "'DM Sans',sans-serif", fontSize: 11,
                      background: "rgba(0,212,170,.1)", color: "#00d4aa",
                      border: "1px solid rgba(0,212,170,.2)", padding: "4px 12px", borderRadius: 100, whiteSpace: "nowrap",
                    }}>Feb 2025 – Aug 2025</span>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      "Developed and maintained web-based applications using modern technologies",
                      "Collaborated with development teams to build, test, and improve software solutions",
                      "Worked with APIs, databases, and backend services to enhance system functionality",
                      "Participated in debugging, performance optimization, and problem-solving",
                      "Used Git-based version control and followed agile development practices",
                    ].map((item, i) => (
                      <li key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                        <span style={{ color: "#00d4aa", marginTop: 7, fontSize: 7, flexShrink: 0 }}>▶</span>
                        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,.52)", lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, color: "#fff", marginBottom: 36, letterSpacing: "-1px" }}>
                Leadership &<br /><span style={{ color: "#6c8ef5" }}>Activities</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { role: "Vice President", org: "INTSEC Club", uni: "University of Colombo", icon: "🔐" },
                  { role: "Member", org: "LEO Club", uni: "University of Colombo", icon: "🦁" },
                ].map((act, i) => (
                  <div key={i} style={{
                    background: "rgba(108,142,245,.04)", border: "1px solid rgba(108,142,245,.12)",
                    borderRadius: 14, padding: "22px 24px",
                    display: "flex", gap: 14, alignItems: "center",
                  }}>
                    <span style={{ fontSize: 26 }}>{act.icon}</span>
                    <div>
                      <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 15, fontWeight: 700, color: "#fff" }}>{act.role}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#6c8ef5" }}>{act.org}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.3)", marginTop: 2 }}>{act.uni}</div>
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

/* ══════════════════════════════════════════
   QUALIFICATIONS
══════════════════════════════════════════ */
function QualificationsSection() {
  return (
    <section id="qualifications" style={{ padding: "90px 0", background: "#04060e" }}>
      <div className="section-inner">
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase", whiteSpace: "nowrap" }}>04 / Qualifications</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.06)" }} />
          </div>
        </FadeIn>

        <div className="grid-2">
          <FadeIn delay={0.1}>
            <div>
              <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.32)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 28 }}>Education</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { title: "BSc (Hons) ICT", subtitle: "University of Colombo, Faculty of Technology", date: "Jan 2021 – Present", detail: "CGPA: 3.71", accent: "#00d4aa" },
                  { title: "G.C.E. Advanced Level", subtitle: "Siri Piyarathana Central College, Padukka", date: "Jan 2018 – Dec 2020", detail: "Technology Stream · 1A | 2B's", accent: "#6c8ef5" },
                ].map((edu, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.06)",
                    borderLeft: `2px solid ${edu.accent}`, borderRadius: 14, padding: "22px 24px",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, flexWrap: "wrap", gap: 4 }}>
                      <h4 style={{ fontFamily: "'Syne',sans-serif", fontSize: 16, fontWeight: 700, color: "#fff" }}>{edu.title}</h4>
                      <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.32)" }}>{edu.date}</span>
                    </div>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "rgba(255,255,255,.42)", marginBottom: 10 }}>{edu.subtitle}</p>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, fontWeight: 600, background: edu.accent + "15", color: edu.accent, border: `1px solid ${edu.accent}30`, padding: "3px 11px", borderRadius: 100 }}>{edu.detail}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.32)", letterSpacing: 3, textTransform: "uppercase", marginTop: 36, marginBottom: 22 }}>References</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {REFS.map((r, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.06)", borderRadius: 13, padding: "16px 20px" }}>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{r.name}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#00d4aa", marginBottom: 6 }}>{r.role}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.32)" }}>{r.org}</div>
                    <a href={`mailto:${r.email}`} style={{ display: "block", fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.38)", textDecoration: "none", marginTop: 6 }}>{r.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.32)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 28 }}>Certifications</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {CERTS.map((cert, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.06)",
                    borderRadius: 13, padding: "16px 20px",
                    display: "flex", alignItems: "center", gap: 13,
                    transition: "border-color .3s,background .3s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(0,212,170,.22)"; e.currentTarget.style.background = "rgba(0,212,170,.03)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.06)"; e.currentTarget.style.background = "rgba(255,255,255,.02)"; }}
                  >
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{cert.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600, color: "#fff", marginBottom: 2 }}>{cert.title}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,.38)" }}>{cert.org}</div>
                    </div>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(0,212,170,.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#00d4aa", fontSize: 10 }}>✓</span>
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

/* ══════════════════════════════════════════
   CONTACT
══════════════════════════════════════════ */
function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = () => { if (form.name && form.email && form.message) setSent(true); };

  return (
    <section id="contact" style={{ padding: "90px 0 60px", background: "#060c1e" }}>
      <div className="section-inner">
        <FadeIn>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 56 }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase", whiteSpace: "nowrap" }}>05 / Contact</span>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.06)" }} />
          </div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,5vw,3.4rem)", fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 14, letterSpacing: "-1.5px" }}>
            Let's <span style={{ color: "#00d4aa" }}>Connect</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, color: "rgba(255,255,255,.42)", textAlign: "center", marginBottom: 48, lineHeight: 1.7 }}>
            Open to internships, collaborations, and exciting projects — drop me a message!
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="contact-row">
            {[
              { icon: "📧", label: "Email", value: "sehanhansu@gmail.com", href: "mailto:sehanhansu@gmail.com" },
              { icon: "📱", label: "Phone", value: "+94 70 287 6795", href: "tel:+94702876795" },
              { icon: "🔗", label: "LinkedIn", value: "Connect on LinkedIn", href: "https://www.linkedin.com/in/sehan-gamage-498350287/" },
            ].map(item => (
              <a key={item.label} href={item.href} style={{
                background: "rgba(255,255,255,.02)", border: "1px solid rgba(255,255,255,.07)",
                borderRadius: 13, padding: "14px 22px",
                display: "flex", gap: 11, alignItems: "center",
                textDecoration: "none", transition: "border-color .3s",
                minWidth: 190, flex: "1 1 190px",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(0,212,170,.3)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,.07)"}
              >
                <span style={{ fontSize: 19 }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 10, color: "rgba(255,255,255,.32)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#fff" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <div style={{ textAlign: "center", marginTop: 72, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "rgba(255,255,255,.18)" }}>
            © 2026 Sehan Hansaja · Powered by SH Technology
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   ROOT APP
══════════════════════════════════════════ */
export default function App() {
  const [activeNav, setActiveNav] = useState("Home");

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const match = NAV_LINKS.find(l => l.toLowerCase().replace(/\s+/g, "-") === e.target.id);
          if (match) setActiveNav(match);
        }
      });
    }, { threshold: 0.35 });
    NAV_LINKS.forEach(l => {
      const el = document.getElementById(l.toLowerCase().replace(/\s+/g, "-"));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div style={{ width: "100%", background: "#04060e", minHeight: "100vh" }}>
        <NavBar active={activeNav} setActive={setActiveNav} />
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <QualificationsSection />
        <ContactSection />
      </div>
    </>
  );
}