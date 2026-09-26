import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Close, Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const image = project.images?.[activeImage];

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    dialog.showModal();
    document.body.classList.add('modal-open');
    return () => {
      dialog.close();
      document.body.classList.remove('modal-open');
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, []);

  const closeOnBackdrop = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.target === event.currentTarget && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) onClose();
  };

  return (
    <dialog ref={dialogRef} className="project-modal" aria-labelledby="project-modal-title" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={closeOnBackdrop}>
      <button className="modal-close" onClick={onClose} aria-label="Close project details" autoFocus><Close /></button>
      <div className="project-modal__meta"><span>{project.category}</span><span>{project.year}</span></div>
      <p className="section-index">Project overview</p>
      <h2 id="project-modal-title">{project.title}</h2>
      <h3>{project.subtitle}</h3>
      <p className="project-modal__description">{project.details}</p>
      {image && (
        <div className="project-gallery">
          <figure className="gallery-stage"><img src={image.src} alt={image.alt} /><figcaption aria-live="polite">{image.alt}</figcaption></figure>
          <div className="gallery-thumbs" role="group" aria-label="Project screenshots">
            {project.images.map((item, index) => <button key={item.src} onClick={() => setActiveImage(index)} aria-pressed={activeImage === index} aria-label={`Show screenshot ${index + 1}: ${item.alt}`}><img src={item.src} alt="" loading="lazy" /></button>)}
          </div>
        </div>
      )}
      <div className="project-modal__impact"><span>Project focus</span><strong>{project.impact}</strong></div>
      <div className="project-modal__stack">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
      <div className="project-modal__actions">
        <a href={project.links.demo} onClick={onClose} className="button button--primary">Discuss this project <ArrowUpRight /></a>
        {project.links.code && project.links.code !== '#' && <a href={project.links.code} target="_blank" rel="noreferrer" className="button button--outline"><Github />View source</a>}
      </div>
    </dialog>
  );
}
