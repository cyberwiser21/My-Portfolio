import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { projects, personalInfo } from '../data/portfolioData';

export default function Projects() {
  useSEO({
    title: `Projects & Explorations | ${personalInfo.name}`,
    description: `Explore machine learning research, deep learning architectures, and software engineering projects developed by ${personalInfo.name}.`,
    keywords: 'ECG Arrhythmia Classification, Glucose Prediction, Email Spoofing Checker, Deep Learning, Python Projects'
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Machine Learning & AI', 'Cybersecurity & Web'];

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((p) => {
      p.technologies.forEach((t) => techSet.add(t));
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  // Filter projects by category, tech tag, and keyword search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      // Tech match
      const matchesTech =
        selectedTech === 'All' || project.technologies.includes(selectedTech);

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesTech && matchesSearch;
    });
  }, [selectedCategory, selectedTech, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedTech('All');
    setSearchQuery('');
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedTech !== 'All' || searchQuery.trim() !== '';

  return (
    <div className="page-container projects-page">
      <div className="container">
        <div className="section-header">
          <span className="badge">Portfolio</span>
          <h1 className="section-title">Projects & Explorations</h1>
          <p className="section-subtitle">
            Explore academic machine learning research, predictive regression modeling, and cybersecurity domain analysis tools.
          </p>
        </div>

        {/* Phase 4: Search & Interactive Filter Control Center */}
        <div 
          className="glass-card"
          style={{
            padding: '1.75rem 2rem',
            marginBottom: '3rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {/* Top Row: Search Input & Result Counter */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '260px', maxWidth: '420px' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, tech (e.g. Python, ResNet50)..."
                className="search-filter-input"
                style={{ width: '100%', paddingLeft: '2.5rem' }}
              />
              <span style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '0.9rem', top: '50%', transform: 'translateY(-50%)', background: 'none', color: 'var(--text-muted)', fontSize: '0.9rem' }}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Showing <strong style={{ color: 'var(--text-primary)' }}>{filteredProjects.length}</strong> of {projects.length} projects
              </span>
              {hasActiveFilters && (
                <button
                  onClick={resetFilters}
                  className="btn btn-secondary"
                  style={{ padding: '0.35rem 0.85rem', fontSize: '0.8rem', borderRadius: 'var(--radius-full)' }}
                >
                  Reset Filters ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
              Filter by Category
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? 'btn btn-primary' : 'btn btn-secondary'}
                  style={{
                    padding: '0.45rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.825rem',
                    boxShadow: selectedCategory === cat ? '0 4px 15px var(--accent-glow)' : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills Filter */}
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
              Filter by Technology
            </div>
            <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`tech-chip ${selectedTech === tech ? 'active' : ''}`}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.775rem',
                    cursor: 'pointer',
                    background: selectedTech === tech ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                    color: selectedTech === tech ? '#ffffff' : 'var(--text-secondary)',
                    borderColor: selectedTech === tech ? 'var(--accent-primary)' : 'var(--border-color)',
                    boxShadow: selectedTech === tech ? '0 2px 10px var(--accent-glow)' : 'none'
                  }}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Phase 4: Empty Filter State */}
        {filteredProjects.length === 0 ? (
          <div 
            className="glass-card" 
            style={{ 
              textAlign: 'center', 
              padding: '4rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔎</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>No projects match your current filters</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
              Try adjusting your search terms or clearing the selected category and technology filters.
            </p>
            <button onClick={resetFilters} className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Reset All Filters
            </button>
          </div>
        ) : (
          /* Projects Grid */
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                {/* Card Header & Badge */}
                <div className="project-card-header">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span 
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem', 
                        fontWeight: 700, 
                        color: 'var(--accent-primary)', 
                        background: 'var(--accent-subtle)', 
                        border: '1px solid var(--border-accent)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        lineHeight: 1,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {project.category}
                    </span>
                    <span 
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '0.8rem', 
                        color: 'var(--text-muted)',
                        fontWeight: 500,
                        lineHeight: 1
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    <Link to={`/projects/${project.id}`} style={{ color: 'inherit' }}>
                      {project.title}
                    </Link>
                  </h2>
                </div>

                {/* Card Body */}
                <div className="project-card-body">
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                    {project.shortDescription}
                  </p>

                  {/* Highlights */}
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
                        <span 
                          key={tech} 
                          className="tech-chip"
                          onClick={() => setSelectedTech(tech)}
                          style={{ cursor: 'pointer' }}
                          title={`Click to filter by ${tech}`}
                        >
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
                        className="btn btn-secondary"
                        style={{ padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub Repo
                      </a>
                    ) : null}

                    <Link 
                      to={`/projects/${project.id}`}
                      className="btn btn-primary"
                      style={{ padding: '0.55rem 1.15rem', fontSize: '0.85rem', marginLeft: project.githubUrl ? 'auto' : '0' }}
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
