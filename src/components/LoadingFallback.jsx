import React from 'react';

export default function LoadingFallback() {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        gap: '1rem'
      }}
      role="status"
      aria-live="polite"
    >
      <div 
        style={{
          width: '40px',
          height: '40px',
          border: '3px solid rgba(99, 102, 241, 0.15)',
          borderTopColor: 'var(--accent-primary)',
          borderRadius: '50%',
          animation: 'spin 0.75s linear infinite'
        }}
      />
      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
        Loading content...
      </span>
    </div>
  );
}

