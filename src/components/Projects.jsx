import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects({ projects, onSelect }) {
  const [filter, setFilter] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(projects.map((item) => item.category))], [projects]);
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter);
  return (
    <section className="section projects-section" id="work" aria-labelledby="work-title"><div className="page-width">
      <Reveal><SectionHeading id="work-title" eyebrow="Selected work" title="Built to make a difference." description="From intelligent agriculture to everyday operations. A closer look at the problems I’ve helped solve." /></Reveal>
      <div className="work-toolbar"><div className="filter-row" role="group" aria-label="Filter projects">{categories.map((category) => <button className={filter === category ? 'active' : ''} aria-pressed={filter === category} onClick={() => setFilter(category)} key={category}>{category === 'All' ? 'All projects' : category}</button>)}</div><span className="project-count" aria-live="polite">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</span></div>
      <div className="project-grid">{visible.map((project, index) => <Reveal className={index === 0 ? 'project-featured' : ''} key={project.id} delay={index * 45}><ProjectCard project={project} featured={index === 0} onOpen={onSelect} /></Reveal>)}</div>
    </div></section>
  );
}
