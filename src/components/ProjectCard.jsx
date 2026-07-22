import { ArrowUpRight } from './Icons';

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <button
      className={`project-card project-card--${project.accent}`}
      onClick={() => onOpen(project)}
      aria-label={`Open ${project.title} project details`}
      style={{ '--project-index': index }}
    >
      <div className="project-card__topline">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <div className="project-card__visual" aria-hidden="true">
        <span className="project-orbit project-orbit--one" />
        <span className="project-orbit project-orbit--two" />
        <span className="project-node project-node--one" />
        <span className="project-node project-node--two" />
        <strong>{String(index + 1).padStart(2, '0')}</strong>
      </div>
      <div className="project-card__body">
        <p>{project.subtitle}</p>
        <h3>{project.title}</h3>
        <span className="project-card__impact">{project.impact}</span>
        <div className="project-card__footer">
          <div className="project-stack-preview">
            {project.stack.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <span className="round-icon"><ArrowUpRight /></span>
        </div>
      </div>
    </button>
  );
}
