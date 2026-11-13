import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, aboutMe, skillCategories } from '../data/portfolioData';

export default function About() {
  return (
    <div className="page-container about-page">
      <div className="container">
        <div className="section-header">
          <span className="badge">Get to know me</span>
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Information Technology engineering student with a strong focus on software engineering, deep learning, and practical problem-solving.
          </p>
        </div>

        {/* Bio & Profile Visual */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
            marginBottom: '5rem'
          }}
        >
          {/* Profile Card / Avatar Graphic */}
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '380px',
              margin: '0 auto',
              padding: '2.75rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            {/* Avatar Badge */}
            <div
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'var(--accent-gradient)',
                padding: '3px',
                marginBottom: '1.5rem',
                boxShadow: '0 0 30px var(--accent-glow)'
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#ffffff'
                }}
              >
                TP
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.25rem' }}>{personalInfo.name}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.75rem' }}>
              IT Engineering Student
            </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.75rem' }}>
                <span>📍 {personalInfo.location}</span>
                <span>•</span>
                <span style={{ color: 'var(--status-green)', fontWeight: 500 }}>● Open for Roles</span>
              </div>

              {/* Quick Profile Details */}
                <div style={{ width: '100%', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', textAlign: 'left', fontSize: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Degree</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>B.E. Information Tech</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Focus</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Software & ML</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Status</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Undergraduate</span>
                  </div>
                </div>
              </div>

              {/* Natural Story & Introduction */}
              <div>
                <span className="badge">Background & Mindset</span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', fontWeight: 800, marginBottom: '1.35rem', lineHeight: 1.3, letterSpacing: '-0.02em' }}>
                  Driven by curiosity, coding practical solutions, and continuous growth.
                </h2>

                {aboutMe.intro.map((paragraph, idx) => (
                  <p
                    key={idx}
                    style={{
                      color: 'var(--text-secondary)',
                      marginBottom: '1.2rem',
                      lineHeight: 1.85,
                      fontSize: '1rem'
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="btn-group" style={{ marginTop: '2rem' }}>
                  <Link to="/contact" className="btn btn-primary">
                    Contact Me →
                  </Link>
                  <Link to="/projects" className="btn btn-secondary">
                    Explore Projects
                  </Link>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub Profile ↗
                  </a>
                </div>
              </div>
            </div>

              {/* Phase 2: Technical Skills Grid */}
              <section style={{ margin: '5rem 0' }}>
                <div className="section-header">
                  <span className="badge">Knowledge Base</span>
                  <h2 className="section-title">Technical Skills</h2>
                  <p className="section-subtitle">
                    A comprehensive breakdown of programming languages, frameworks, and tools I use in my academic and independent work.
                  </p>
                </div>

          <div className="skills-grid">
            {skillCategories.map((group, index) => (
              <div key={index} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div 
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: 'var(--radius-sm)', 
                      background: 'rgba(99, 102, 241, 0.1)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'var(--accent-primary)',
                      fontWeight: 700
                    }}
                  >
                    0{index + 1}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                    {group.category}
                  </h3>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  {group.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginTop: 'auto' }}>
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        padding: '0.45rem 0.95rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)' }}></span>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
                  ))}
              </div>
            </section>

                {/* Education Timeline */}
                <section style={{ margin: '5rem 0 3rem' }}>
                  <div className="section-header">
                    <span className="badge">Academic Journey</span>
                    <h2 className="section-title">Education & Milestones</h2>
                    <p className="section-subtitle">
                      Formal academic foundation combined with continuous self-initiated project explorations.
                    </p>
                  </div>

                  <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    <div className="glass-card" style={{ padding: '2.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          Bachelor of Engineering (B.E.) in Information Technology
                        </h3>
                        <span style={{ fontSize: '0.825rem', color: 'var(--accent-primary)', fontWeight: 600, background: 'rgba(99, 102, 241, 0.1)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)' }}>
                          Undergraduate • In Progress
                        </span>
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.85rem', fontWeight: 500 }}>
                        Engineering College • India
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        Undertaking comprehensive coursework in computer systems, object-oriented programming, relational databases (SQL), data structures and algorithms, and applied machine learning.
                      </p>
                    </div>

                      <div className="glass-card" style={{ padding: '2.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                            Self-Driven Project Development & Learning
                          </h3>
                          <span style={{ fontSize: '0.825rem', color: '#a5b4fc', fontWeight: 600, background: 'rgba(99, 102, 241, 0.1)', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)' }}>
                            Continuous
                          </span>
                        </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.85rem', fontWeight: 500 }}>
                        Independent Explorations & Open Source
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                        Designing and completing hands-on projects including deep learning biomedical signal classification with ResNet50, predictive blood glucose regression modeling with Scikit-learn, and domain anti-spoofing verification with Python Flask.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
          </div>
          );
}
