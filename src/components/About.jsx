import Reveal from './Reveal';
import { ArrowUpRight, Code, Layers, Sparkles, Network } from './Icons';

const capabilities = [
  { icon: Code, title: 'Full-stack development', description: 'Responsive interfaces, structured APIs, and reliable application architecture.' },
  { icon: Sparkles, title: 'Applied AI', description: 'Computer vision and predictive models connected to practical product workflows.' },
  { icon: Layers, title: 'Backend & cloud', description: 'Maintainable services, relational data, and deployment-ready systems.' },
  { icon: Network, title: 'Mobile & IoT', description: 'Connected experiences across mobile applications, sensors, and live data.' },
];

export default function About({ data }) {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="page-width">
        <div className="about-layout">
          <Reveal className="about-intro">
            <p className="eyebrow">A little about me</p>
            <h2 id="about-title">The engineer<br />behind the work<span className="accent-dot">.</span></h2>
            <a className="text-link" href={data.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a>
          </Reveal>
          <Reveal className="about-copy" delay={60}>
            <p className="about-lead">Good software starts with understanding the people who use it.</p>
            <p>{data.about}</p>
            <div className="about-facts"><span>Based in <strong>Colombo, Sri Lanka</strong></span><span>Education <strong>BICT (Honours) · 3.71 CGPA</strong></span></div>
          </Reveal>
        </div>
        <div className="capabilities-grid">
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <Reveal className="capability" key={title} delay={index * 45}>
              <span className="capability-icon"><Icon /></span><h3>{title}</h3><p>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
