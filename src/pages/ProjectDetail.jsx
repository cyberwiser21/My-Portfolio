import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { projects, personalInfo } from '../data/portfolioData';

export default function ProjectDetail() {
  const { id } = useParams();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  useSEO({
    title: project ? `${project.title} | Case Study - ${personalInfo.name}` : `Project Not Found | ${personalInfo.name}`,
    description: project ? project.shortDescription : 'Project case study overview.',
    keywords: project ? project.technologies.join(', ') : ''
  });

  if (!project) {
    return (
      <div className="page-container" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container">
          <span className="badge" style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
            Project Not Found
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '1rem 0' }}>
            Looking for something else?
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
            We couldn't find a case study with the identifier "{id}".
          </p>
          <Link to="/projects" className="btn btn-primary">
            ← Back to All Projects
          </Link>
        </div>
      </div>
    );
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="page-container project-detail-page">
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link 
            to="/projects" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem', 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'color var(--transition-fast)'
            }}
          >
            ← Back to All Projects
          </Link>
        </div>

        {/* Project Header Banner */}
        <div 
          className="glass-card"
          style={{ 
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '3rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
            <span className="badge" style={{ margin: 0 }}>
              {project.badge}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Category: <strong style={{ color: 'var(--text-primary)' }}>{project.category}</strong>
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
            {project.title}
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '850px', marginBottom: '2.5rem' }}>
            {project.shortDescription}
          </p>

          {/* Metadata Grid: Role, Timeline, Tools */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.75rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border-color)'
            }}
          >
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.35rem' }}>
                My Role
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                {project.role}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.35rem' }}>
                Scope & Timeline
              </div>
              <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                {project.timeline}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, marginBottom: '0.35rem' }}>
                Repository & Links
              </div>
              <div>
                {project.githubUrl ? (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.95rem' }}
                  >
                    GitHub Codebase ↗
                  </a>
                ) : (
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                    Academic Project (Code on Request)
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <section style={{ marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            Tools, Frameworks & Libraries
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {project.tools.map((tool) => (
              <span key={tool} className="tech-chip" style={{ fontSize: '0.85rem', padding: '0.4rem 0.95rem' }}>
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Case Study Deep-Dive: Problem, Process, Results */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '4rem' }}>
          {/* Problem Statement */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.4rem' }}>🎯</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>The Problem & Context</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.975rem' }}>
              {project.problem}
            </p>
          </div>

          {/* Results & Findings */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.4rem' }}>📈</span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>Results & Findings</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.975rem' }}>
              {project.results}
            </p>
          </div>
        </div>

        {/* Process & Methodology */}
        <section className="glass-card" style={{ padding: 'clamp(2rem, 4vw, 3rem)', marginBottom: '4.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
            <span style={{ fontSize: '1.4rem' }}>⚙️</span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Implementation Process</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.75rem' }}>
            {project.process.map((step, idx) => (
              <div 
                key={idx}
                style={{ 
                  background: 'var(--bg-secondary)', 
                  border: '1px solid var(--border-color)', 
                  padding: '1.5rem', 
                  borderRadius: 'var(--radius-md)' 
                }}
              >
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                  Step 0{idx + 1}
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                  {step.step}
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--border-color)'
          }}
        >
          {prevProject ? (
            <Link 
              to={`/projects/${prevProject.id}`} 
              className="btn btn-secondary"
              style={{ fontSize: '0.875rem' }}
            >
              ← Previous: {prevProject.title}
            </Link>
          ) : (
            <Link to="/projects" className="btn btn-secondary" style={{ fontSize: '0.875rem' }}>
              ← View All Projects
            </Link>
          )}

          {nextProject ? (
            <Link 
              to={`/projects/${nextProject.id}`} 
              className="btn btn-primary"
              style={{ fontSize: '0.875rem', marginLeft: 'auto' }}
            >
              Next: {nextProject.title} →
            </Link>
          ) : (
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '0.875rem', marginLeft: 'auto' }}>
              Get in Touch →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

