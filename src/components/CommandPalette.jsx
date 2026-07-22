import { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Close, Command, Mail } from './Icons';

const destinations = [
  { label: 'Home', hint: 'Hero and introduction', target: '#home' },
  { label: 'About', hint: 'Profile and engineering focus', target: '#about' },
  { label: 'Work', hint: 'Selected software projects', target: '#work' },
  { label: 'Experience', hint: 'Career and education timeline', target: '#experience' },
  { label: 'Certifications', hint: 'Professional learning credentials', target: '#certifications' },
  { label: 'Contact', hint: 'Start a conversation', target: '#contact' },
];

export default function CommandPalette({ isOpen, onClose, email }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return undefined;
    setQuery('');
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const items = useMemo(() => destinations.filter((item) => (
    `${item.label} ${item.hint}`.toLowerCase().includes(query.toLowerCase())
  )), [query]);

  const navigate = (target) => {
    onClose();
    window.setTimeout(() => document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' }), 80);
  };

  if (!isOpen) return null;

  return (
    <div className="command-backdrop" onMouseDown={onClose} role="presentation">
      <section className="command-palette" onMouseDown={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
        <div className="command-search">
          <Command />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search portfolio sections..."
            aria-label="Search portfolio sections"
          />
          <button onClick={onClose} aria-label="Close command menu"><Close /></button>
        </div>
        <div className="command-list">
          <p>Navigate</p>
          {items.map((item) => (
            <button key={item.target} onClick={() => navigate(item.target)}>
              <span><strong>{item.label}</strong><small>{item.hint}</small></span>
              <ArrowRight />
            </button>
          ))}
          <a href={`mailto:${email}`}>
            <span><strong>Email me</strong><small>{email}</small></span>
            <Mail />
          </a>
        </div>
      </section>
    </div>
  );
}
