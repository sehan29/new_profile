import { useEffect } from 'react';
import { ArrowUpRight, Close, Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose} role="presentation">
      <section
        className={`project-modal project-modal--${project.accent}`}
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          <Close />
        </button>
        <div className="project-modal__meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <p className="eyebrow">Featured project</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <h3>{project.subtitle}</h3>
        <p className="project-modal__description">{project.details}</p>
        <div className="project-modal__stack">
          {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <div className="project-modal__actions">
          <a href={project.links.demo} onClick={onClose} className="button button--primary">
            Discuss project <ArrowUpRight />
          </a>
          <a href={project.links.code} className="button button--ghost" aria-label="View source code">
            <Github /> Source
          </a>
        </div>
      </section>
    </div>
  );
}
