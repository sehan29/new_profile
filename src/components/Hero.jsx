import { ArrowRight, ArrowUpRight, Github, Linkedin } from './Icons';

const technologies = ['React', 'ASP.NET Core', 'Python', 'Flutter', 'Laravel', 'Azure'];

export default function Hero({ data }) {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="page-width">
        <div className="hero-layout">
          <div className="hero-copy">
            <span className="availability"><i aria-hidden="true" />Open to engineering opportunities</span>
            <p className="hero-introduction">Hello, I’m Sehan Gamage.</p>
            <h1 id="hero-title">Thoughtful software.<br /><span>Real-world impact.</span></h1>
            <p className="hero-summary">A software engineer connecting thoughtful interfaces with dependable systems. I build across web, mobile, AI, and IoT.</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">Explore my work <ArrowUpRight /></a>
              <a className="button button--outline" href="#about">Get to know me <ArrowRight /></a>
            </div>
            <div className="hero-socials">
              <span>Find me on</span>
              <a href={data.github} target="_blank" rel="noreferrer" aria-label="Sehan on GitHub"><Github /></a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" aria-label="Sehan on LinkedIn"><Linkedin /></a>
              <span className="hero-location">{data.location}</span>
            </div>
          </div>
          <figure className="hero-profile">
            <div className="profile-photo">
              <img src={data.profileImage} alt={`${data.name}, software engineer`} fetchPriority="high" width="440" height="480" />
              <span className="photo-label"><i aria-hidden="true" />Software Engineer</span>
            </div>
            <figcaption><span>From an idea to a working product.</span><span className="profile-signature" aria-hidden="true">Sg.</span></figcaption>
          </figure>
        </div>
        <div className="hero-stats" aria-label="Professional highlights">
          {data.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </div>
      <div className="technology-strip">
        <div className="page-width technology-inner"><p>A toolkit built for<br /><strong>real product work</strong></p><ul>{technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></div>
      </div>
    </section>
  );
}
