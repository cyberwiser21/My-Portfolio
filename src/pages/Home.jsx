import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, aboutMe, projects, skillCategories, services } from '../data/portfolioData';

export default function Home() {
  return (
    <div className="page-container home-page">
      <div className="container">
          {/* Phase 2: Styled Hero Section with Call-To-Action Buttons */}
          <section className="hero-section">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className="badge">
                <span className="badge-pulse-dot"></span>
                {personalInfo.statusBadge}
              </span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>📍 {personalInfo.location}</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="section-title" style={{ display: 'inline', fontSize: 'inherit' }}>{personalInfo.name}</span>
            </h1>

            <p className="hero-role">
              {personalInfo.role}
            </p>

            <p className="hero-tagline">
              "{personalInfo.tagline}"
            </p>

            <div className="btn-group" style={{ justifyContent: 'center', marginBottom: '2.5rem' }}>
              <Link to="/projects" className="btn btn-primary">
                View My Projects →
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Services Offered
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>

          {/* Social Quick-Access Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub Profile ↗
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.875rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn ↗
            </a>
          </div>
        </section>

            {/* About Overview Teaser */}
            <section style={{ margin: '4rem 0 6rem' }}>
              <div
                style={{
                  background: 'linear-gradient(145deg, rgba(22, 28, 42, 0.8), rgba(15, 20, 32, 0.9))',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(2rem, 4vw, 3.25rem)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center',
                  boxShadow: 'var(--shadow-card)'
                }}
              >
                <div>
                  <span className="badge">About Me</span>
                  <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                    Engineering practical software & exploring Artificial Intelligence
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
                    {aboutMe.intro[0]}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: 1.8 }}>
                    {aboutMe.intro[1]}
                  </p>
                  <Link to="/about" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
                    Read Full Story & Journey →
                  </Link>
                </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {aboutMe.philosophy.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{ padding: '1.35rem' }}
                >
                  <h4 style={{ fontSize: '1.025rem', color: 'var(--text-primary)', marginBottom: '0.35rem', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Phase 2: Project Cards with Grid Layout */}
          <section style={{ margin: '5rem 0' }}>
            <div className="section-header">
              <span className="badge">Featured Work</span>
              <h2 className="section-title">Projects & Explorations</h2>
              <p className="section-subtitle">
                Academic explorations and software projects showcasing hands-on application of deep learning, predictive modeling, and cybersecurity concepts.
              </p>
            </div>

                  < div className="projects-grid" >
                  {
                    projects.map((project) => (
                      <article key={project.id} className="project-card">
                        <div className="project-card-header">
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                            <span
                              style={{
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: 'var(--accent-primary)',
                                background: 'rgba(99, 102, 241, 0.1)',
                                border: '1px solid rgba(99, 102, 241, 0.25)',
                                padding: '0.3rem 0.75rem',
                                borderRadius: 'var(--radius-full)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                              }}
                            >
                      {project.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {project.category}
                    </span>
                  </div>

                          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                            {project.title}
                          </h3>
                        </div>

                        <div className="project-card-body">
                          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                            {project.shortDescription}
                          </p>

                          {/* Highlights Bullet Points */}
                          <div style={{ marginBottom: '1.5rem', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                              {project.highlights.slice(0, 2).map((h, i) => (
                                <li key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.45rem', lineHeight: 1.45 }}>
                                  <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>›</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                            {/* Tech stack chips */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.75rem' }}>
                              {project.technologies.map((tech) => (
                                <span key={tech} className="tech-chip">
                                  {tech}
                                </span>
                              ))}
                            </div>

                        {/* Card Action Link */}
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)', marginTop: 'auto' }}>
                          {project.githubUrl ? (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-secondary"
                              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                              GitHub ↗
                            </a>
                          ) : (
                            <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                              Academic exploration
                            </span>
                          )}

                          <Link
                            to="/projects"
                            style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.875rem', marginLeft: 'auto' }}
                          >
                            View Details →
                          </Link>
                        </div>
                      </div>
              </article>
            ))}
    </div>
        </section >

{/* Technical Skills Snapshot */ }
<section style={{ margin: '5rem 0' }}>
  <div className="section-header">
    <span className="badge">Technical Stack</span>
    <h2 className="section-title">Skills & Capabilities</h2>
    <p className="section-subtitle">
      Structured into functional areas reflecting current engineering studies and practical project experience.
    </p>
  </div>

    <div className="skills-grid">
      {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                {cat.category}
              </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {cat.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        background: 'rgba(99, 102, 241, 0.08)',
                        color: 'var(--text-primary)',
                        border: '1px solid rgba(99, 102, 241, 0.22)',
                        padding: '0.4rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-primary)' }}></span>
                      {skill}
                    </span>
                  ))}
                </div>
            </div>
            ))}
  </div>
</section>

  {/* Services Showcase */}
  <section style={{ margin: '5rem 0' }}>
    <div className="section-header">
      <span className="badge">Developing Capabilities</span>
      <h2 className="section-title">Services Offered</h2>
      <p className="section-subtitle">
        Beginner-friendly technical support and tasks I can deliver reliably and transparently.
      </p>
    </div>

    <div className="services-grid">
      {services.map((service, index) => (
              <div key={service.id} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--accent-primary)',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}
                >
                  0{index + 1}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>
                  {service.description}
                </p>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Best for: </strong>
                  {service.suitableFor}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {service.skills.map((s) => (
                    <span key={s} className="tech-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
  </div>

<div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
  <Link to="/services" className="btn btn-secondary">
    View All Services & Process →
  </Link>
</div>
        </section >

  {/* Call to Action Banner */ }
  < section
style = {{
  margin: '5rem 0 2rem',
    padding: '3.5rem 2rem',
      borderRadius: 'var(--radius-lg)',
        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(168, 85, 247, 0.18) 100%)',
          border: '1px solid rgba(99, 102, 241, 0.35)',
            textAlign: 'center',
              boxShadow: 'var(--shadow-card)'
}}
        >
          <span className="badge">Get Connected</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', fontWeight: 800, marginBottom: '0.85rem' }}>
            Looking for an enthusiastic intern or junior developer?
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 2.25rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
            I am always eager to learn, solve practical problems, and contribute to meaningful codebases and technical projects.
          </p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">
              Send a Message →
            </Link>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-secondary">
              Email Me Directly
            </a>
          </div>
        </section >
      </div >
    </div >
  );
}
