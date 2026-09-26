import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from './Icons';

export default function Contact({ data }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch { window.location.href = `mailto:${data.email}`; }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-width contact-panel">
        <div className="contact-copy">
          <span className="availability"><i aria-hidden="true" />Let’s work together</span>
          <h2 id="contact-title">Great things start<br />with a <span>conversation.</span></h2>
          <p>Have a project in mind or a software engineering opportunity? I’d love to hear about it.</p>
          <a className="button button--primary" href={`mailto:${data.email}`}>Say hello <ArrowUpRight /></a>
        </div>
        <div className="contact-details">
          <span className="contact-mail-icon"><Mail /></span>
          <p>Send me a message</p>
          <a className="contact-email" href={`mailto:${data.email}`}>{data.email}<ArrowUpRight /></a>
          <button className="copy-button" onClick={copyEmail}>{copied ? <Check /> : <Copy />}<span aria-live="polite">{copied ? 'Email copied!' : 'Copy email address'}</span></button>
          <div className="contact-socials"><a href={data.linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn<ArrowUpRight /></a><a href={data.github} target="_blank" rel="noreferrer"><Github />GitHub<ArrowUpRight /></a></div>
        </div>
      </div>
    </section>
  );
}
