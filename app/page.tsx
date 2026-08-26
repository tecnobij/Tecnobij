"use client";

import { useState } from "react";
import logoAsset from "./public/logo.png";
import buildSoftwareAsset from "./public/build_software3.jpg";
import dashboardAsset from "./public/build_software4.jpg";
import teamBuildAsset from "./public/build_software2.jpg";
import { projects } from "./projects";
import { ProjectMockup } from "./project-mockup";
import raisoniAsset from "./public/Ghraisoni.png";
import sveriAsset from "./public/sveri.png";

const whatsappUrl = "https://wa.me/9421009299?text=Hello!%20Tecnobij%20admin%20I%20am%20interested%20in%20your%20services!";

function ArrowUpRight({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDownRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5 19 19M19 9v10H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z" fill="currentColor" />
      <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" fill="currentColor" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="2.8" width="14" height="18.4" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10 18h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.7 12h16.6M12 3.2c2.2 2.4 3.3 5.3 3.3 8.8S14.2 18.4 12 20.8c-2.2-2.4-3.3-5.3-3.3-8.8S9.8 5.6 12 3.2Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 3 9 4.8-9 4.8-9-4.8L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m4.3 12.2-1.3.7 9 4.8 9-4.8-1.3-.7M4.3 16.7 3 17.4l9 4.8 9-4.8-1.3-.7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <span className="check" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="m2.2 6.2 2.2 2.1 5.4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

const services = [
  { number: "01", title: "Custom Business Software", text: "Custom platforms designed around your workflow." },
  { number: "02", title: "Billing & Invoicing", text: "Simple, scalable billing systems for day-to-day operations." },
  { number: "03", title: "Vendor Management", text: "Centralize vendors, orders, and operations." },
  { number: "04", title: "CRM & Automation", text: "Turn repetitive work into automated workflows." },
  { number: "05", title: "Mobile Application", text: "Intuitive mobile apps that keep your business connected." },
  { number: "06", title: "Website Development", text: "Fast, polished websites built to support growth." },
  { number: "08", title: "Custom Business Software", text: "Purpose-built software for the way your business actually works—secure, scalable, and ready to evolve.", icon: <CodeIcon />, features: ["Built for your workflow", "Secure & scalable architecture", "Integrations that fit"] },
];

const partners = [
  {
    id: "raisoni",
    name: "G.H. Raisoni College",
    shortName: "G.H. Raisoni",
    description: "In collaboration with G.H. Raisoni College, Tecnobij Solutions aims to promote industry-academia collaboration through technology initiatives, student development, training, internships and real-world projects.",
    website: "https://ghrce.raisoni.net/",
    image: raisoniAsset.src,
  },
  {
    id: "sveri",
    name: "SVERI College",
    shortName: "SVERI",
    description: "Through our collaboration with SVERI College, we work towards creating opportunities for students through industry exposure, technology training, internships and practical projects.",
    website: "https://www.sveri.ac.in/",
    image: sveriAsset.src,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePartner, setActivePartner] = useState<(typeof partners)[number] | null>(null);

  return (
    <main>
      <section className="hero" id="hero">
        <nav className="nav container">
          <a className="brand" href="#hero" aria-label="Tecnobij home">
            <span className="brand-logo-crop"><img src={logoAsset.src} alt="" /></span>
            <span>tecnobij<span className="brand-dot">.</span></span>
          </a>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="mobile-nav-cta" href={whatsappUrl}>Let&apos;s Talk <span aria-hidden="true">→</span></a>
          </div>
          <a className="nav-cta" href={whatsappUrl}>Let&apos;s Talk <span aria-hidden="true">→</span></a>
          <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span>
          </button>
        </nav>

        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow light"><span className="eyebrow-line"></span> Digital products, made personal</div>
            <h1>Build software that moves your business <em>forward.</em></h1>
            <p className="hero-description">Tecnobij designs and builds custom websites, mobile apps, and business software that simplify operations and help teams grow.</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#contact">Start a Project <span aria-hidden="true">→</span></a>
              <a className="text-link light-link" href="#services">Explore Our Work <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="hero-product-grid"></div>
            <div className="hero-product-window">
              <div className="hero-product-bar"><span className="window-dots"><i></i><i></i><i></i></span><span>tecnobij / command center</span><span>•••</span></div>
              <div className="hero-product-layout">
                <div className="hero-product-sidebar"><b>Workspace</b><span className="is-active">Overview</span><span>Projects</span><span>Automation</span><span>Insights</span><span>Settings</span><div className="sidebar-user"><i>TB</i><span>Team workspace<small>12 members</small></span></div></div>
                <div className="hero-product-main">
                  <div className="product-heading"><div><small>MONDAY, AUGUST 26</small><b>Good morning, team</b></div><span className="product-avatar">AS</span></div>
                  <div className="product-summary"><span><small>Active projects</small><b>24</b><em>+12.5%</em></span><span><small>Tasks completed</small><b>1,284</b><em>+18.2%</em></span><span><small>Team velocity</small><b>87%</b><em>On track</em></span></div>
                  <div className="product-lower-grid">
                    <div className="product-chart"><div className="chart-label"><b>Project velocity</b><span>Last 30 days⌄</span></div><div className="chart-area"><i></i><i></i><i></i><i></i><i></i><b>↗</b></div><div className="chart-axis"><span>01</span><span>08</span><span>15</span><span>22</span><span>30</span></div></div>
                    <div className="product-flow"><div className="flow-heading"><b>Live workflow</b><span>● Live</span></div><div className="flow-step"><i className="flow-icon flow-orange">✦</i><span><b>New brief received</b><small>Website redesign</small></span><em>09:42</em></div><div className="flow-connector"></div><div className="flow-step"><i className="flow-icon flow-blue">✓</i><span><b>Design approved</b><small>Client portal v2</small></span><em>10:18</em></div><div className="flow-connector"></div><div className="flow-step"><i className="flow-icon flow-green">↗</i><span><b>Build in progress</b><small>CRM automation</small></span><em>Now</em></div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-product-badge"><span>✦</span><b>Built around your business</b><small>Clear systems. Better momentum.</small></div>
            <div className="hero-product-status"><i></i> SYSTEMS ONLINE</div>
          </div>
        </div>
        <div className="hero-bottom container">
          <div className="hero-scroll"><span className="scroll-line"></span> Scroll to discover</div>
          <div className="hero-location">Based in Pune, India <span>↗</span></div>
        </div>
      </section>

      <section className="intro section-pad">
        <div className="container who-grid">
          <div className="who-copy">
            <div className="section-kicker">/  who we are</div>
            <h2>Technology should<br />feel like a <span>tailwind,</span><br />not a roadblock.</h2>
            <p className="who-intro">We build digital solutions that empower businesses, streamline operations, and create meaningful experiences for users.</p>
            <div className="who-values">
              <div className="who-value"><span className="who-value-icon"><Check /></span><span><b>People first</b><small>We listen, understand, and build for real people.</small></span></div>
              <div className="who-value"><span className="who-value-icon"><CodeIcon /></span><span><b>Clean &amp; scalable</b><small>Modern, maintainable software that grows with you.</small></span></div>
              <div className="who-value"><span className="who-value-icon who-value-icon-spark"><SparkIcon /></span><span><b>Results driven</b><small>We focus on impact that moves your business forward.</small></span></div>
            </div>
            <div className="who-actions"><a className="button button-dark" href="#about">More about Tecnobij <ArrowUpRight size={15} /></a><a className="story-link" href={whatsappUrl}><span className="story-play">▶</span><span><b>Start a conversation</b><small>Let&apos;s talk in 15 minutes</small></span></a></div>
          </div>
          <div className="who-visual">
            <div className="who-visual-grid"></div>
            <img className="who-main-image" src={buildSoftwareAsset.src} alt="Product team reviewing a software dashboard" />
            <div className="who-chip who-chip-top"><span className="chip-icon"><SparkIcon /></span><span><b>Building Digital<br />Products</b><small>Dashboards, apps &amp;<br />AI-powered systems</small></span></div>
            <div className="who-dashboard-preview"><img src={dashboardAsset.src} alt="" /><span><b>Business dashboard</b><small>Clear data. Better decisions.</small></span></div>
            <div className="who-orbit who-orbit-one"></div><div className="who-orbit who-orbit-two"></div>
            <div className="who-dots who-dots-left">· · ·<br />· · ·<br />· · ·</div><div className="who-dots who-dots-right">· · ·<br />· · ·<br />· · ·</div>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="what-hero">
          <div className="container what-hero-inner">
            <div className="what-hero-copy">
              <div className="eyebrow what-eyebrow"><span className="eyebrow-line"></span> What we build</div>
              <h2>Built around your<br /><em>ambition.</em></h2>
              <p>From first sketch to final launch, we take responsibility for building the digital tools that make your business better.</p>
              <div className="what-build-list">
                {services.slice(0, 6).map((service) => (
                  <article className="what-build-item" key={service.number}>
                    <span className="what-build-number">{service.number}</span>
                    <div><h3>{service.title}</h3><p>{service.text}</p></div>
                  </article>
                ))}
              </div>
            </div>
            <div className="dashboard-art" aria-hidden="true">
              <div className="dashboard-window">
                <div className="dashboard-bar"><span className="window-dots"><i></i><i></i><i></i></span><span>tecnobij / workspace</span><span>⌕</span></div>
                <div className="dashboard-content">
                  <div className="dashboard-side"><b>Overview</b><span>Projects</span><span>Messages</span><span>Analytics</span><span>Settings</span></div>
                  <div className="dashboard-main"><div className="dashboard-title">Performance <b>+32.4%</b></div><div className="dashboard-chart"><span></span><span></span><span></span><span></span><span></span><b>↗</b></div><div className="dashboard-stats"><span><b>120+</b><small>Projects<br />completed</small></span><span><b>50+</b><small>Clients<br />worldwide</small></span></div><div className="dashboard-pill"><span>✦</span> Your vision</div></div>
                </div>
              </div>
              <div className="solution-chip"><span>✦</span><b>Our Solution</b><small>Powerful. Scalable.<br />Future-ready.</small></div>
              <div className="dashboard-orbit"></div><div className="dashboard-spark">✦</div>
            </div>
          </div>
        </div>
        <div className="container service-panel">
          <div className="service-list redesigned-service-list">
            {services.map((service) => (
              <article className="redesigned-service-card" key={service.number}>
                <div className="redesigned-service-number">{service.number}</div>
                <div className="redesigned-service-icon">{service.icon}</div>
                <div className="redesigned-service-body"><h3>{service.title}</h3><p>{service.text}</p></div>
                <ul className="service-features">{service.features?.map((feature) => <li key={feature}><Check /> {feature}</li>)}</ul>
                <div className="redesigned-service-arrow"><ArrowUpRight size={17} /></div>
              </article>
            ))}
          </div>
          <div className="service-metrics"><div><span className="metric-icon">◎</span><b>100+</b><small>Happy clients<br />businesses that trust our solutions</small></div><div><span className="metric-icon">✦</span><b>120+</b><small>Projects delivered<br />successful projects across industries</small></div><div><span className="metric-icon">◈</span><b>3+</b><small>Years of experience<br />delivering excellence since our inception</small></div><div><span className="metric-icon">♧</span><b>10+</b><small>Team members<br />talented individuals driving our success</small></div></div>
        </div>
      </section>

      <section className="why section-pad" id="why">
        <div className="container">
          <div className="why-heading">
            <div><div className="section-kicker">/  the tecnobij difference</div><h2>Why businesses<br /><span>choose Tecnobij.</span></h2></div>
            <p>Good software starts with understanding the business behind it. We bring clarity, care, and technical depth to every build.</p>
          </div>
          <div className="why-grid">
            <article className="why-card why-card-orange"><span className="why-number">01</span><span className="why-icon"><Check /></span><h3>Business-first thinking</h3><p>We understand the workflow before writing the code.</p></article>
            <article className="why-card why-card-blue"><span className="why-number">02</span><span className="why-icon"><CodeIcon /></span><h3>Built around you</h3><p>No unnecessary features or bloated systems.</p></article>
            <article className="why-card why-card-purple"><span className="why-number">03</span><span className="why-icon"><LayersIcon /></span><h3>Scalable technology</h3><p>Architecture designed to grow with your business.</p></article>
            <article className="why-card why-card-green"><span className="why-number">04</span><span className="why-icon"><SparkIcon /></span><h3>Long-term partnership</h3><p>We don&apos;t disappear after deployment.</p></article>
          </div>
        </div>
      </section>

      <section className="selected-work section-pad" id="work">
        <div className="container">
          <div className="selected-work-heading">
            <div><div className="section-kicker">/  selected work</div><h2>Real businesses.<br /><span>Real software.</span></h2></div>
            <p>From agriculture and healthcare to SaaS and education, these are some of the real-world systems and digital experiences Tecnobij has helped bring to life.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.slug}>
                <ProjectMockup project={project} />
                <div className="project-card-content"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.shortDescription}</p><a className="project-link" href={"/projects/" + project.slug}>View Case Study <span aria-hidden="true">→</span></a></div>
              </article>
            ))}
          </div>
          <div className="selected-work-cta"><div><b>Have a project in mind?</b><span>Let&apos;s build something meaningful together.</span></div><a className="button button-lime" href="#contact">Start Your Project <span aria-hidden="true">→</span></a></div>
        </div>
      </section>

      <section className="partners section-pad" id="partners">
        <div className="container">
          <div className="partners-heading">
            <div>
              <div className="section-kicker">/  technology partnerships</div>
              <h2>Technology that connects<br /><i>industry &amp; academia.</i></h2>
            </div>
            <p>We connect classroom learning with real-world technology—creating space for students, institutions, and industry to grow together.</p>
          </div>
          <p className="partner-context">Tecnobij builds software for organizations and partners with colleges to turn technology learning into practical training, internships, and real-world projects.</p>
          <div className="partner-benefits">
            <div><span className="partner-benefit-icon benefit-orange"><span>⌂</span></span><span><b>Student Development</b><small>Training, internships, and<br />real-world exposure.</small></span></div>
            <div><span className="partner-benefit-icon benefit-purple"><span>♧</span></span><span><b>Industry Collaboration</b><small>Solving real problems through<br />innovation and technology.</small></span></div>
            <div><span className="partner-benefit-icon benefit-green"><span>✦</span></span><span><b>Knowledge Exchange</b><small>Workshops, seminars, and<br />technical sessions.</small></span></div>
            <div><span className="partner-benefit-icon benefit-blue"><span>▣</span></span><span><b>Stronger Together</b><small>Long-term partnerships for<br />mutual growth.</small></span></div>
          </div>
          <div className="partner-grid">
            {partners.map((partner) => (
              <article className={`partner-card partner-card-${partner.id}`} key={partner.id}>
                <div className="partner-card-top"><span>MoU / 0{partner.id === "raisoni" ? "1" : "2"}</span><span className="partner-status"><span></span> Active collaboration</span></div>
                <div className="partner-photo-box">
                  <img className="partner-photo-bg" src={partner.image} alt="" aria-hidden="true" loading="lazy" />
                  <img className="partner-photo-main" src={partner.image} alt={`${partner.name} MoU partnership`} loading="lazy" />
                  <div className="partner-photo-shade"></div>
                  <div className="partner-photo-lockup"><span className={`partner-photo-mark ${partner.id}`}>{partner.id === "raisoni" ? "GH" : "S"}</span><span><b>{partner.id === "raisoni" ? "G.H. Raisoni" : "SVERI"}</b><small>{partner.id === "raisoni" ? "College" : "College of Engineering"}</small></span></div>
                </div>
                <div className="partner-card-copy"><div className="partner-label">MoU Partner</div><h3>{partner.name}</h3><p>{partner.description}</p></div>
                <button className="partner-action" type="button" onClick={() => setActivePartner(partner)}>View partnership <ArrowUpRight size={16} /></button>
                <span className="partner-handshake" aria-hidden="true">♧</span>
              </article>
            ))}
          </div>
          <div className="partner-metrics"><div><span className="partner-metric-icon metric-orange">▣</span><span><b>2+</b><strong>Academic Partners</strong><small>Strong collaborations<br />and growing.</small></span></div><div><span className="partner-metric-icon metric-purple">♧</span><span><b>200+</b><strong>Students Impacted</strong><small>Through training, internships<br />and live projects.</small></span></div><div><span className="partner-metric-icon metric-green">▣</span><span><b>20+</b><strong>Workshops &amp; Sessions</strong><small>Knowledge sharing and<br />skill development.</small></span></div><div><span className="partner-metric-icon metric-blue">☆</span><span><b>10+</b><strong>Live Projects</strong><small>Real-world solutions<br />building future-ready talent.</small></span></div></div>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <img className="about-team-image" src={teamBuildAsset.src} alt="Tecnobij product team collaborating on a software build" />
            <div className="about-visual-top"><span>TECNOBIJ / 2026</span><span>STUDIO_001</span></div>
            <div className="about-lines"><span></span><span></span><span></span><span></span><span></span></div>
            <div className="about-quote">&ldquo;The best<br /><em>software</em> feels<br />inevitable.&rdquo;</div>
            <div className="about-stamp"><SparkIcon /><span>Purpose<br />over noise</span></div>
            <div className="about-visual-bottom"><span>18° 31&apos; N</span><span>73° 51&apos; E</span></div>
          </div>
          <div className="about-copy">
            <div className="section-kicker">/  the tecnobij approach</div>
            <h2>Big enough to deliver.<br /><span>Close enough to care.</span></h2>
            <p>We partner with organizations, institutions, and SMEs to build custom solutions that automate processes, unlock efficiency, and give people more time for what matters.</p>
            <div className="promise-list">
              <div className="promise-item"><span className="promise-icon"><Check /></span><span><b>People-first partnership</b></span></div>
              <div className="promise-item"><span className="promise-icon"><CodeIcon /></span><span><b>Clear, scalable software</b></span></div>
              <div className="promise-item"><span className="promise-icon"><SparkIcon /></span><span><b>Accountable from start to launch</b></span></div>
            </div>
            <div className="about-actions"><a className="button button-dark" href={whatsappUrl}>Meet your new tech partner <ArrowUpRight size={16} /></a><a className="about-watch" href="#process"><span>▶</span><b>See how we work</b></a></div>
          </div>
        </div>
      </section>

      <section className="process section-pad" id="process">
        <div className="container">
          <div className="process-top">
            <div className="process-title"><div className="section-kicker">/  how we work</div><h2>A clear path from<br /><i>idea</i> to <span>impact.</span></h2><div className="process-title-line"></div></div>
            <div className="process-intro"><p>No layers of jargon. No disappearing acts. Just a thoughtful, collaborative process that keeps the right things moving.</p><div className="process-principles"><div><span className="principle-icon principle-orange"><span>♧</span></span><span><b>Collaborative</b><small>We work with you,<br />not just for you.</small></span></div><div><span className="principle-icon principle-blue"><span>◎</span></span><span><b>Intentional</b><small>Every step is planned<br />with purpose.</small></span></div><div><span className="principle-icon principle-green"><span>ϟ</span></span><span><b>Impact-driven</b><small>Solutions that create<br />measurable results.</small></span></div></div></div>
          </div>
          <div className="process-cards process-cards-legacy">
            <article className="process-card process-card-orange"><div className="process-card-image"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=85" alt="Team discussing a project brief" /><span className="process-number">01</span><span className="process-card-arrow">›</span></div><div className="process-card-body"><span className="process-card-icon"><CodeIcon /></span><h3>Understand</h3><div className="process-underline"></div><p>We get curious about your goals, people, and the problem worth solving.</p><a href="#contact">Explore <ArrowUpRight size={15} /></a></div></article>
            <article className="process-card process-card-blue"><div className="process-card-image"><img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=85" alt="Planning a digital product" /><span className="process-number">02</span><span className="process-card-arrow">›</span></div><div className="process-card-body"><span className="process-card-icon"><SparkIcon /></span><h3>Shape</h3><div className="process-underline"></div><p>We turn insight into a clear plan, focused scope, and considered experience.</p><a href="#contact">Explore <ArrowUpRight size={15} /></a></div></article>
            <article className="process-card process-card-purple"><div className="process-card-image"><img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=85" alt="Code on a laptop screen" /><span className="process-number">03</span><span className="process-card-arrow">›</span></div><div className="process-card-body"><span className="process-card-icon"><CodeIcon /></span><h3>Build</h3><div className="process-underline"></div><p>We craft, test, and refine software that works beautifully in the real world.</p><a href="#contact">Explore <ArrowUpRight size={15} /></a></div></article>
            <article className="process-card process-card-green"><div className="process-card-image"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=85" alt="Analytics chart showing business growth" /><span className="process-number">04</span><span className="process-card-arrow">›</span></div><div className="process-card-body"><span className="process-card-icon"><GlobeIcon /></span><h3>Grow</h3><div className="process-underline"></div><p>We stay in your corner, helping your product evolve as you do.</p><a href="#contact">Explore <ArrowUpRight size={15} /></a></div></article>
          </div>
          <div className="process-cards process-cards-new">
            <article className="process-stage stage-orange"><span className="stage-number">01</span><div><h3>Understand</h3><p>Discovery, requirements &amp; business goals.</p></div><span className="stage-arrow">→</span></article>
            <article className="process-stage stage-blue"><span className="stage-number">02</span><div><h3>Shape</h3><p>Architecture, UX &amp; product strategy.</p></div><span className="stage-arrow">→</span></article>
            <article className="process-stage stage-purple"><span className="stage-number">03</span><div><h3>Build</h3><p>Development, testing &amp; deployment.</p></div><span className="stage-arrow">→</span></article>
            <article className="process-stage stage-green"><span className="stage-number">04</span><div><h3>Grow</h3><p>Optimization, support &amp; scaling.</p></div><span className="stage-arrow">→</span></article>
          </div>
          <div className="process-cta"><div className="process-cta-message"><span className="process-cta-icon"><SparkIcon /></span><span>From day one to what&apos;s next,<br />we&apos;re with you <em>every step</em> of the way.</span></div><div className="process-cta-divider"></div><strong>Let&apos;s build something that matters.</strong><a className="process-cta-button" href={whatsappUrl}>Start a conversation <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <div className="contact-kicker"><SparkIcon /> Have a good idea?</div>
          <h2>Let&apos;s make<br /><em>something</em> happen.</h2>
          <p>Tell us what you&apos;re working on. We&apos;ll bring the coffee and the right questions.</p>
          <div className="contact-actions"><a className="button button-lime" href={whatsappUrl}>Start your project <ArrowUpRight size={17} /></a><a className="contact-email" href="mailto:contact@tecnobij.com">contact@tecnobij.com <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="contact-shape shape-one"></div><div className="contact-shape shape-two"></div>
      </section>

      {activePartner && (
        <div className="partner-modal-backdrop" role="presentation" onClick={() => setActivePartner(null)}>
          <div className="partner-modal" role="dialog" aria-modal="true" aria-labelledby="partner-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label="Close partnership details" onClick={() => setActivePartner(null)}>×</button>
            <div className="partner-modal-image"><img src={activePartner.image} alt={`${activePartner.name} MoU signing`} /><div className="modal-image-caption"><span>Industry + academia</span><span>01 / 02</span></div></div>
            <div className="partner-modal-content"><div className="section-kicker">/  partnership spotlight</div><h2 id="partner-modal-title">{activePartner.name}</h2><div className="modal-badge">MoU Partner</div><p>{activePartner.description}</p><a className="button button-dark" href={activePartner.website} target="_blank" rel="noreferrer">Visit college website <ArrowUpRight size={16} /></a></div>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-cta"><span className="footer-cta-icon"><SparkIcon /></span><h2>Let&apos;s build something<br /><em>remarkable together.</em></h2><div className="footer-cta-divider"></div><p>Have a project in mind or just want to say hi?<br />We&apos;d love to hear from you.</p><a className="footer-cta-button" href="#contact">Start your project <ArrowUpRight size={17} /></a></div>
          <div className="footer-main">
            <div className="footer-brand-block"><a className="brand footer-brand" href="#hero"><span className="brand-logo-crop"><img src={logoAsset.src} alt="" /></span><span>tecnobij<span className="brand-dot">.</span></span></a><div className="footer-tagline">Custom software. Smart systems.<br /><i>Real business impact.</i></div><div className="footer-socials"><a href="#contact" aria-label="LinkedIn">in</a><a href="#contact" aria-label="Instagram">ig</a><a href={whatsappUrl} aria-label="WhatsApp">wa</a></div></div>
            <div className="footer-column"><h3>Services</h3><a href="#services">Web Development</a><a href="#services">Mobile App Development</a><a href="#services">AI/ML Development</a><a href="#services">CRM Software</a><a href="#services">ERP Software</a><a href="#services">IT Consultations</a></div>
            <div className="footer-column"><h3>Company</h3><a href="#about">About Tecnobij</a><a href="#process">How We Work</a><a href="#partners">Academic Partners</a><a href="#contact">Contact Us</a></div>
            <div className="footer-column"><h3>Our solutions</h3><a href="#services">Domain &amp; Hosting</a><a href="#services">Custom Business Software</a><a href="#services">Web Applications</a><a href="#services">Mobile Applications</a></div>
            <div className="footer-column footer-contact-column"><h3>Contact us</h3><a href="#contact"><span className="footer-contact-icon">⌖</span><span>Pune, Maharashtra<br />India</span></a><a href="tel:+917620638650"><span className="footer-contact-icon">⌕</span><span>+91 7620638650</span></a><a href="mailto:contact@tecnobij.com"><span className="footer-contact-icon">@</span><span>contact@tecnobij.com</span></a></div>
          </div>
          <div className="footer-values"><div><span className="footer-value-icon value-orange">✦</span><span><b>Purposeful solutions</b><small>We build software around your real needs.</small></span></div><div><span className="footer-value-icon value-blue">◇</span><span><b>Reliable delivery</b><small>Quality, performance, and care in every build.</small></span></div><div><span className="footer-value-icon value-green">♧</span><span><b>Client first</b><small>Your growth and success stay at the centre.</small></span></div><div><span className="footer-value-icon value-purple">◌</span><span><b>Here to support</b><small>Expert guidance whenever you need it.</small></span></div></div>
          <div className="footer-bottom"><span>© 2026 Tecnobij Solutions. All rights reserved.</span><span className="footer-made">Made with intention <span className="footer-heart">♥</span></span><span className="footer-mark">✳</span></div>
        </div>
      </footer>
    </main>
  );
}
