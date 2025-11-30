import { ArrowRight, Camera, Film, MonitorPlay, Palette, PenTool } from 'lucide-react';

const highlights = [
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

const projects = [
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

const services = [
  {
    icon: <Film />,
    title: 'Video Editing',
    description: 'Narrative structure, pacing, color, and sound that keep audiences engaged.',
  },
  {
    icon: <MonitorPlay />,
    title: 'Digital Production',
    description: 'From discovery to delivery, I manage the details that move projects forward.',
  },
  {
    icon: <Camera />,
    title: 'Videography & Photography',
    description: 'On-set support capturing clean visuals tailored to the platform and audience.',
  },
  {
    icon: <PenTool />,
    title: 'Scripting & Story',
    description: 'Helping talent and teams communicate clearly with tight scripts and outlines.',
  },
  {
    icon: <Palette />,
    title: 'Brand-Ready Assets',
    description: 'Social-first exports, templates, and delivery that keep your library organized.',
  },
];

const stats = [
  { label: 'Years producing', value: '8+' },
  { label: 'Campaign videos delivered', value: '250+' },
  { label: 'Platforms optimized', value: 'YouTube · TikTok · Meta · Broadcast' },
];

const SocialLink = ({ href, label }) => (
  <a className="pill" href={href} target="_blank" rel="noreferrer">
    {label}
  </a>
);

function App() {
  return (
    <div className="page">
      <div className="glow glow-blue" />
      <div className="glow glow-pink" />

      <header className="shell hero">
        <p className="eyebrow">Alyssa M. James · Digital Producer & Video Editor</p>
        <h1>
          I craft clean, story-driven video for brands, podcasts, and creators—
          with a producer&apos;s eye and an editor&apos;s rhythm.
        </h1>
        <p className="lede">
          From discovery through delivery, I collaborate with teams to plan, capture, and polish visuals
          that feel intentional across every channel.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#projects">
            View featured work <ArrowRight size={18} />
          </a>
          <a className="secondary" href="#contact">
            Book a project
          </a>
        </div>
        <div className="chips">
          <span className="chip">Video Editing</span>
          <span className="chip">Production Management</span>
          <span className="chip">Podcast Visuals</span>
          <span className="chip">Lifestyle & Documentary</span>
        </div>
      </header>

      <section className="shell highlights" aria-label="Highlights">
        {highlights.map((item) => (
          <article key={item.title} className="panel">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="shell stats" aria-label="Stats">
        {stats.map((item) => (
          <div key={item.label} className="stat">
            <span className="stat-value">{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </div>
        ))}
      </section>

      <section id="projects" className="shell section" aria-label="Featured work">
        <div className="section-header">
          <p className="eyebrow">Featured work</p>
          <h2>Storytelling for screens big and small</h2>
          <p className="section-description">
            A selection of campaigns, social-first series, and narrative edits that bring clarity and style.
          </p>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <div className="card-top">
                <span className="pill pill-ghost">{project.role}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <a className="text-link" href={project.link}>
                View details <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section services" aria-label="Services">
        <div className="section-header">
          <p className="eyebrow">How I help</p>
          <h2>End-to-end creative support</h2>
          <p className="section-description">
            Whether you need a trusted editor, an on-set producer, or someone to steer delivery, I keep the
            process organized and collaborative.
          </p>
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

      <section className="shell callout" id="contact">
        <div>
          <p className="eyebrow">Let&apos;s collaborate</p>
          <h2>Ready for a polished launch?</h2>
          <p className="section-description">
            I partner with marketers, founders, and production teams to deliver standout visuals on schedule.
          </p>
          <div className="hero-actions">
            <a className="primary" href="mailto:hello@alyssamjames.com">
              Email Alyssa <ArrowRight size={18} />
            </a>
            <a className="secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              View LinkedIn
            </a>
          </div>
          <div className="socials">
            <SocialLink href="https://www.instagram.com" label="Instagram" />
            <SocialLink href="https://www.youtube.com" label="YouTube" />
            <SocialLink href="https://www.vimeo.com" label="Vimeo" />
          </div>
        </div>
        <div className="callout-visual">
          <div className="badge-stack">
            <span className="pill">Timeline master</span>
            <span className="pill">Story-led edits</span>
            <span className="pill">Platform-ready exports</span>
          </div>
          <div className="gradient-card">
            <p className="eyebrow">Featured skill</p>
            <h3>Social-first post-production</h3>
            <p>
              Creating TikTok, Reels, and YouTube deliverables that honor each platform&apos;s cadence while
              keeping the narrative tight.
            </p>
          </div>
        </div>
      </section>

      <footer className="shell footer">
        <div>
          <p className="eyebrow">Alyssa M. James</p>
          <h3>Digital Producer · Video Editor · Photographer</h3>
          <p className="section-description">
            Crafting intentional visuals rooted in story, delivered with efficiency.
          </p>
        </div>
        <div className="footer-links">
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
          <a href="mailto:hello@alyssamjames.com">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
