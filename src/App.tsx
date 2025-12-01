import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';

interface Highlight {
  title: string;
  description: string;
}

interface Project {
  title: string;
  role: string;
  summary: string;
  link: string;
}

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

interface SocialLinkProps {
  href: string;
  label: string;
}

type FocusKey = 'Video Production' | 'Photography' | 'Video Editing';

const IconBase = ({ children }: { children: ReactNode }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const ArrowRight = () => (
  <IconBase>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </IconBase>
);

const FilmIcon = () => (
  <IconBase>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 5v14" />
    <path d="M17 5v14" />
    <path d="M3 9h4" />
    <path d="M3 15h4" />
    <path d="M17 9h4" />
    <path d="M17 15h4" />
  </IconBase>
);

const MonitorIcon = () => (
  <IconBase>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="m10 9 5 3-5 3V9z" />
  </IconBase>
);

const CameraIcon = () => (
  <IconBase>
    <path d="M5 7h2l1-2h8l1 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" />
    <circle cx="12" cy="13" r="3.5" />
  </IconBase>
);

const PenIcon = () => (
  <IconBase>
    <path d="m16 5 3 3L8 19H5v-3L16 5Z" />
    <path d="M13.5 7.5 16.5 10.5" />
  </IconBase>
);

const PaletteIcon = () => (
  <IconBase>
    <path d="M12 3a9 9 0 1 0 9 9c0-1.1-.9-2-2-2h-1.5a2.5 2.5 0 0 1-2.45-2 2.5 2.5 0 0 0-2.45-2H12Z" />
    <circle cx="6.5" cy="11.5" r="1.2" />
    <circle cx="9.5" cy="7.5" r="1.2" />
    <circle cx="14.5" cy="7.5" r="1.2" />
    <circle cx="17.5" cy="11.5" r="1.2" />
  </IconBase>
);

const highlights: Highlight[] = [
  {
    title: 'Digital Production',
    description: 'Bringing creative ideas to life with thoughtful planning, direction, and delivery.',
  },
  {
    title: 'Video Editing',
    description: 'Rhythmic edits that balance story, pacing, and polish for multiplatform campaigns.',
  },
  {
    title: 'Photography',
    description: 'Clean, cinematic stills that spotlight authentic stories and personalities.',
  },
];

const projects: Project[] = [
  {
    title: 'Women & Wealth Podcast Visuals',
    role: 'Producer · Editor · Motion',
    summary: 'Dynamic social cutdowns and visual identity elevating each episode launch.',
    link: '#',
  },
  {
    title: 'Lifestyle Brand Spot',
    role: 'Director of Photography · Editor',
    summary: 'Vibrant 30s spot crafted for paid and organic placements with tight turnaround.',
    link: '#',
  },
  {
    title: 'University Campaign Series',
    role: 'Producer · Editor',
    summary: 'Multi-video series aligning stakeholder goals with student-centered storytelling.',
    link: '#',
  },
];

const services: Service[] = [
  {
    icon: <FilmIcon />,
    title: 'Video Editing',
    description: 'Narrative structure, pacing, color, and sound that keep audiences engaged.',
  },
  {
    icon: <MonitorIcon />,
    title: 'Digital Production',
    description: 'From discovery to delivery, I manage the details that move projects forward.',
  },
  {
    icon: <CameraIcon />,
    title: 'Videography & Photography',
    description: 'On-set support capturing clean visuals tailored to the platform and audience.',
  },
  {
    icon: <PenIcon />,
    title: 'Scripting & Story',
    description: 'Helping talent and teams communicate clearly with tight scripts and outlines.',
  },
  {
    icon: <PaletteIcon />,
    title: 'Brand-Ready Assets',
    description: 'Social-first exports, templates, and delivery that keep your library organized.',
  },
];

const SocialLink = ({ href, label }: SocialLinkProps) => (
  <a className="pill" href={href} target="_blank" rel="noreferrer">
    {label}
  </a>
);

const focusAreas: Record<FocusKey, { summary: string; bullets: string[] }> = {
  'Video Production': {
    summary:
      'Planning, producing, and directing shoots that are organized, on-brief, and ready for multiplatform distribution.',
    bullets: [
      'Run of show, schedules, and call sheets that keep crews moving',
      'On-set support to capture clean A-roll, B-roll, and sound',
      'Delivery plans tailored for broadcast, web, and social placements',
    ],
  },
  Photography: {
    summary:
      'Cinematic stills with intentional lighting, art direction, and setups that capture authentic personalities.',
    bullets: [
      'Look development, shot lists, and location prep',
      'Portraits, lifestyle, and product captures with detail-rich framing',
      'Color-consistent edits and export-ready delivery folders',
    ],
  },
  'Video Editing': {
    summary:
      'Story-first edits with rhythm, pacing, color, and sound that keep audiences engaged across every platform.',
    bullets: [
      'Assembly, motion-friendly timelines, and sound polishing',
      'Versioning for TikTok, YouTube, Meta, and paid placements',
      'Thumbnail, captioning, and delivery templates for teams',
    ],
  },
};

function App() {
  const [activeFocus, setActiveFocus] = useState<FocusKey>('Video Production');
  const focusContent = useMemo(() => focusAreas[activeFocus], [activeFocus]);

  return (
    <div className="page">
      <div className="glow glow-blue" />
      <div className="glow glow-pink" />
      <div className="shell">
        <header className="hero">
          <div className="hero-glow hero-glow-blue" />
          <div className="hero-glow hero-glow-pink" />
          <div className="hero-copy">
            <div className="eyebrow">Alyssa M. James · Portfolio</div>
            <h1 className="gradient-title">Digital Producer / Editor / Videographer / Photographer</h1>

            <div className="reel-panel hero-reel">
              <div className="reel-header">
                <p className="eyebrow">Demo Reel</p>
                <p className="muted">Front and center—press play to see the energy.</p>
              </div>
              <div className="reel-frame">
                <iframe
                  title="Demo reel"
                  src="https://player.vimeo.com/video/76979871?h=8272103f6e&title=0&byline=0&portrait=0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <p className="lede">
              I’m a Toronto-based creative who blends on-set production, editing, and photography into cohesive
              visuals. From pre-pro to delivery, I keep teams organized and every export on-brand.
            </p>
            <div className="hero-actions">
              <a className="button" href="mailto:hello@alyssamjames.com">
                Let’s build something
              </a>
              <a className="text-link" href="#work">
                See recent work <ArrowRight />
              </a>
            </div>
            <div className="badge-row">
              <span className="pill">Video Editing</span>
              <span className="pill">Digital Production</span>
              <span className="pill">Photography & DP</span>
              <span className="pill">Motion-friendly delivery</span>
            </div>
          </div>

          <div className="scroll-cue" aria-label="Scroll to explore more">
            <span className="pill pill-ghost">Scroll to explore</span>
            <ArrowRight />
          </div>
        </header>

        <section className="section" aria-labelledby="focus-tabs-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explore the craft</p>
              <h2 id="focus-tabs-title">Select an area to see how I work</h2>
            </div>
          </div>

          <div role="tablist" aria-label="Focus areas" className="focus-tabs">
            {(Object.keys(focusAreas) as FocusKey[]).map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={activeFocus === key}
                className={`pill focus-tab ${activeFocus === key ? 'is-active' : ''}`}
                onClick={() => setActiveFocus(key)}
              >
                {key}
              </button>
            ))}
          </div>

          <article className="card focus-card" role="tabpanel" aria-live="polite">
            <p className="eyebrow">{activeFocus}</p>
            <h3>{activeFocus}</h3>
            <p>{focusContent.summary}</p>
            <ul className="focus-list">
              {focusContent.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section" aria-labelledby="highlights-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Focus areas</p>
              <h2 id="highlights-title">How I help teams ship better visuals</h2>
            </div>
            <div className="section-link">
              <a className="text-link" href="#contact">
                Book a chat <ArrowRight />
              </a>
            </div>
          </div>
          <div className="grid">
            {highlights.map((item) => (
              <article key={item.title} className="card">
                <p className="eyebrow">{item.title}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Recent collaborations</h2>
            </div>
            <p className="lede">A mix of campaign, brand, and editorial pieces tailored for social and digital.</p>
          </div>

          <div className="grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <div className="card-top">
                  <a className="pill" href={project.link}>
                    Case study
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p className="eyebrow">{project.role}</p>
                <p>{project.summary}</p>
                <a className="text-link" href={project.link}>
                  View project <ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="services-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 id="services-title">Ways we can work together</h2>
            </div>
          </div>

          <div className="grid services-grid">
            {services.map((service) => (
              <article key={service.title} className="card service">
                <div className="icon-circle">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="callout" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Let’s talk</p>
            <h2 id="contact-title">Ready for your next launch?</h2>
            <p>
              Whether you need an editor to jump into an ongoing campaign, a producer to steady the ship, or
              a fresh visual system for your brand, I’m here to help.
            </p>
            <div className="socials">
              <SocialLink href="mailto:hello@alyssamjames.com" label="Email" />
              <SocialLink href="https://www.linkedin.com/in/alyssamjames/" label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/alyssamjames/" label="Instagram" />
            </div>
          </div>
          <div className="callout-visual">
            <div className="gradient-card">
              <div className="eyebrow">Approach</div>
              <h3>Collaborative, organized, delivery-focused.</h3>
              <p>
                I sync creative vision with production details so your team can stay focused on the story while
                I handle schedules, assets, and final exports.
              </p>
            </div>
            <div className="badge-stack">
              <span className="pill">Story-first edits</span>
              <span className="pill">Platform-ready versions</span>
              <span className="pill">Motion-friendly assets</span>
              <span className="pill">Clean delivery folders</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Alyssa M. James. All rights reserved.</p>
          <div className="footer-links">
            <a className="text-link" href="mailto:hello@alyssamjames.com">
              Say hello <ArrowRight />
            </a>
            <a className="text-link" href="#work">
              View work <ArrowRight />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
