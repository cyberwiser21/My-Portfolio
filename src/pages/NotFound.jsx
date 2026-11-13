import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export default function NotFound() {
  useSEO({
    title: '404 - Page Not Found | Tejas Patil',
    description: 'The requested page could not be found.'
  });

  return (
    <div className="page-container not-found-page animate-fade-in" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: 'calc(100vh - 180px)' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <div 
          className="glass-card" 
          style={{ 
            padding: 'clamp(2.5rem, 5vw, 4rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <span 
            className="badge" 
            style={{ 
              color: '#ef4444', 
              borderColor: 'rgba(239, 68, 68, 0.3)', 
              background: 'rgba(239, 68, 68, 0.1)',
              marginBottom: '1rem'
            }}
          >
            404 Error • Page Not Found
          </span>

          <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', fontWeight: 800, margin: '0.5rem 0', lineHeight: 1, background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            404
          </h1>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Lost in Cyberspace?
          </h2>

          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            The link you followed might be broken, outdated, or the page may have been moved. Let's get you back on track:
          </p>

          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}>
            <Link to="/" className="btn btn-primary" style={{ fontSize: '0.9rem' }}>
              Return to Home
            </Link>
            <Link to="/projects" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{ fontSize: '0.9rem' }}>
              Contact Me
            </Link>
          </div>

          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Tip: You can also use the navigation bar above to explore any section.
          </div>
        </div>
      </div>
    </div>
  );
}
