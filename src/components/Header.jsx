import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Close, Menu } from './Icons';

const links = [['Home', '#home'], ['Work', '#work'], ['About', '#about'], ['Experience', '#experience'], ['Credentials', '#credentials']];

export default function Header({ data, activeSection }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Sehan Gamage, home">
          <span className="brand-symbol">SG</span>
          <span className="brand-text">{data.shortName} Gamage<small>Software Engineer</small></span>
        </a>
        <button ref={toggleRef} className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="main-menu" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <Close /> : <Menu />}</button>
        <div className={`nav-menu ${open ? 'is-open' : ''}`} id="main-menu">
          <div className="nav-links">
            {links.map(([label, href]) => (
              <a className={activeSection === href.slice(1) ? 'active' : ''} aria-current={activeSection === href.slice(1) ? 'location' : undefined} href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </div>
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight /></a>
        </div>
      </nav>
    </header>
  );
}
