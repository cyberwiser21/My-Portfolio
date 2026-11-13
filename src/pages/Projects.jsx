import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Machine Learning & AI', 'Cybersecurity & Web'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="page-container projects-page">
      <div className="container">
        <div className="section-header">
          <span className="badge">Portfolio</span>
          <h1 className="section-title">Projects & Explorations</h1>
          <p className="section-subtitle">
            Academic explorations and machine learning projects developed using modern deep learning architectures, regression models, and cybersecurity protocols.
          </p>
        </div>

        {/* Category Filter Tabs */}
              < div 
          style={{ 
            display: 'flex',
        justifyContent: 'center',
        gap: '0.85rem',
        flexWrap: 'wrap',
        marginBottom: '3.5rem' 
          }}
        >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'btn btn-primary' : 'btn btn-secondary'}
            style={{
              padding: '0.55rem 1.4rem',
              borderRadius: 'var(--radius-full)',
                fontSize: '0.875rem',
              boxShadow: selectedCategory === cat ? '0 4px 20px var(--accent-glow)' : 'none'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

        {/* Phase 2: Project Cards in Grid Layout */}
        <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <article key={project.id} className="project-card">
                    {/* Card Header & Badge */}
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

                    <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                      {project.title}
                    </h2>
                  </div>

                {/* Card Body */}
                <div className="project-card-body">
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    {project.detailedDescription}
                  </p>

                  {/* Key Highlights */}
                  <div style={{ marginBottom: '1.75rem', background: 'var(--bg-secondary)', padding: '1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      Exploration Focus & Highlights
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {project.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.5 }}>
                          <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>›</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Chips */}
                  <div style={{ marginTop: 'auto', marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Technologies & Libraries
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View GitHub Repository ↗
            </a>
          ) : (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-muted)' }}></span>
              Academic project archive
            </div>
                  )}
      </div>
    </div>
            </article >
          ))
}
        </div >
      </div >
    </div >
  );
}
