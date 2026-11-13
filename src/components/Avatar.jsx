import React, { useState } from 'react';

/**
 * Highly reactive, responsive Avatar component for Tejas Patil
 * Includes ambient breathing glow, spring hover physics, online badge, and monogram fallback
 */
export default function Avatar({ 
  src = '/profile.jpg', 
  alt = 'Tejas Patil', 
  size = 140, 
  showStatusDot = true,
  className = '',
  style = {} 
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div 
      className={`avatar-interactive-wrapper ${className}`}
      style={style}
      title={alt}
    >
      {/* Ambient glowing aura */}
      <div className="avatar-ambient-pulse" aria-hidden="true" />

      {/* Circular Avatar Ring Frame */}
      <div
        className="avatar-frame"
        style={{
          width: `${size}px`,
          height: `${size}px`
        }}
      >
        {!imgFailed ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImgFailed(true)}
            className="avatar-img"
            loading="eager"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: `${Math.round(size * 0.35)}px`,
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              userSelect: 'none'
            }}
          >
            TP
          </div>
        )}
      </div>

      {/* Reactive Status Indicator */}
      {showStatusDot && (
        <span 
          className="avatar-status-dot" 
          title="Open for Internships & Opportunities"
          aria-label="Available for work"
        />
      )}
    </div>
  );
}
