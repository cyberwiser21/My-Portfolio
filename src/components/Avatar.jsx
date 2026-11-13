import React, { useState } from 'react';

/**
 * Reusable Avatar component for Tejas Patil
 * Displays profile photo with graceful fallback to monogram badge
 */
export default function Avatar({ 
  src = '/profile.jpg', 
  alt = 'Tejas Patil', 
  size = 140, 
  borderGlow = true,
  className = '',
  style = {} 
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className={`avatar-frame ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        padding: '3px',
        background: 'var(--accent-gradient)',
        boxShadow: borderGlow ? '0 8px 30px rgba(59, 130, 246, 0.25)' : 'var(--shadow-card)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        overflow: 'hidden',
        ...style
      }}
      title={alt}
    >
      {!imgFailed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgFailed(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '50%',
            display: 'block'
          }}
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
  );
}
