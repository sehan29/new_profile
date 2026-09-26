import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Briefcase, Graduation, Code } from './Icons';

export default function Experience({ experience, skills }) {
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="page-width">
        <Reveal><SectionHeading id="experience-title" eyebrow="Experience & expertise" title="Learning. Building. Growing." description="A foundation in engineering, shaped by real projects and the people I’ve worked with." /></Reveal>
        <div className="experience-layout">
          <div className="timeline">
            {experience.map((item, index) => (
              <Reveal className="timeline-item" key={item.role} delay={index * 60}>
                <span className="timeline-icon">{index === 0 ? <Briefcase /> : <Graduation />}</span>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span><h3>{item.role}</h3><p className="timeline-company">{item.company}</p>
                  <p className="timeline-description">{item.description}</p>
                  <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="toolkit" delay={80}>
            <div className="toolkit-heading"><Code /><h3>My technical toolkit</h3></div>
            <p className="toolkit-intro">The technologies I bring to the table.</p>
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-group" key={group}><h4>{group}</h4><div>{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
