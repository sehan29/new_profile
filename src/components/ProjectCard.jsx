import { ArrowUpRight, Network, Layers } from './Icons';

function ProjectVisual({ project }) {
  if (project.images?.length) {
    return <div className="project-screen"><div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>{project.title}</span></div><img src={project.images[0].src} alt={project.images[0].alt} loading="lazy" /></div>;
  }
  return (
    <div className="project-concept">
      <span className="concept-icon">{project.id === 'slthub' ? <Network /> : <Layers />}</span>
      <strong>{project.title}</strong><p>{project.id === 'slthub' ? 'Bringing teams closer.' : 'Operations, connected.'}</p>
      <div className="concept-flow">{(project.id === 'slthub' ? ['People', 'Messages', 'Connections'] : ['Records', 'Workflows', 'Distribution']).map((label) => <span key={label}>{label}</span>)}</div>
      <small>Project overview</small>
    </div>
  );
}

export default function ProjectCard({ project, featured, onOpen }) {
  return (
    <article className={`project-card project-card--${project.id} ${featured ? 'is-featured' : ''}`}>
      <div className="project-visual"><ProjectVisual project={project} /></div>
      <div className="project-content">
        <div className="project-meta"><span>{project.category}</span><span>{project.year}</span></div>
        <h3><button className="project-open" onClick={() => onOpen(project)} aria-label={`Open ${project.title} project details`}>{project.title}</button></h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="project-footer"><div className="tag-list">{project.stack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div><span className="project-arrow" aria-hidden="true"><ArrowUpRight /></span></div>
        {featured && <span className="project-read" aria-hidden="true">Explore the project <ArrowUpRight /></span>}
      </div>
    </article>
  );
}
