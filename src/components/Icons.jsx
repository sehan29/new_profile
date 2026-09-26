const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const Code = () => <svg {...iconProps}><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" /></svg>;
export const Layers = () => <svg {...iconProps}><path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" /></svg>;
export const Sparkles = () => <svg {...iconProps}><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM3 2v4M1 4h4m15 14v4m-2-2h4" /></svg>;
export const Network = () => <svg {...iconProps}><rect x="9" y="2" width="6" height="6" rx="1.5" /><rect x="2" y="16" width="6" height="6" rx="1.5" /><rect x="16" y="16" width="6" height="6" rx="1.5" /><path d="M12 8v4M5 16v-4h14v4" /></svg>;
export const Briefcase = () => <svg {...iconProps}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M2 12a25 25 0 0 0 20 0m-10 0v3" /></svg>;
export const Graduation = () => <svg {...iconProps}><path d="m2 9 10-5 10 5-10 5-10-5Zm4 2v6c4 3 8 3 12 0v-6m4-2v8" /></svg>;

export const ArrowUpRight = () => (
  <svg {...iconProps}><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
);
export const ArrowRight = () => (
  <svg {...iconProps}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
);
export const Close = () => (
  <svg {...iconProps}><path d="m6 6 12 12"/><path d="m18 6-12 12"/></svg>
);
export const Command = () => (
  <svg {...iconProps}><path d="M18 9a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12Z"/></svg>
);
export const Copy = () => (
  <svg {...iconProps}><rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
);
export const Check = () => (
  <svg {...iconProps}><path d="m5 12 4 4L19 6"/></svg>
);
export const Award = () => (
  <svg {...iconProps}><circle cx="12" cy="8" r="5"/><path d="M8.8 12.2 7 22l5-3 5 3-1.8-9.8"/><path d="m10 8 1.3 1.3L14 6.7"/></svg>
);
export const Download = () => (
  <svg {...iconProps}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
);
export const Github = () => (
  <svg {...iconProps}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5-.1 3.8.5 3.8.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></svg>
);
export const Linkedin = () => (
  <svg {...iconProps}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
export const Mail = () => (
  <svg {...iconProps}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
);
export const Menu = () => (
  <svg {...iconProps}><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>
);
export const Moon = () => (
  <svg {...iconProps}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
export const Sun = () => (
  <svg {...iconProps}><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.42 1.42"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
);
