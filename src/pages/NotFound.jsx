import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div className="container">
        <span className="badge" style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.1)' }}>
          404 Error
        </span>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '1rem 0' }}>
          Page Not Found
        </h1>
        <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
          The page you are looking for doesn't exist or has been moved to another URL.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
}

