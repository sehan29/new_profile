import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Award, Check } from './Icons';

export default function Credentials({ certifications }) {
  return (
    <section className="section credentials-section" id="credentials" aria-labelledby="credentials-title">
      <div className="page-width credentials-layout">
        <Reveal><SectionHeading id="credentials-title" eyebrow="Continued learning" title="Always a student." description="Building deeper knowledge in cloud, data, and software development." /><div className="learning-note"><Award /><span>Curiosity is part of the process.</span></div></Reveal>
        <div className="credentials-list">
          {certifications.map((item, index) => (
            <Reveal className="credential-row" key={item.title} delay={index * 40}>
              <span className={`credential-icon credential-icon--${index}`}><Award /></span>
              <div><p>{item.type}</p><h3>{item.title}</h3><span className="credential-issuer">{item.issuer}</span></div>
              <span className="credential-status"><Check /><span>{item.year}</span></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
