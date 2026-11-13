import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { services, personalInfo } from '../data/portfolioData';

export default function Services() {
  useSEO({
    title: `Services & Offerings | ${personalInfo.name}`,
    description: `Beginner-friendly technical services in Python scripting, SQL databases, React frontend development, and Streamlit dashboards offered by ${personalInfo.name}.`,
    keywords: 'Python Automation, SQL Queries, React Development, Streamlit Dashboards, Technical Documentation'
  });

  return (
    <div className="page-container services-page animate-fade-in">
      <div className="container">
        <div className="section-header">
          <span className="badge">Developing Capabilities</span>
          <h1 className="section-title">Services & Offerings</h1>
          <p className="section-subtitle">
            Honest, beginner-friendly technical services and tasks I can assist with as an Information Technology student.
          </p>
        </div>

        {/* Transparency Disclaimer Banner */}
        <div
          className="glass-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto 3.5rem',
            padding: '1.75rem 2.25rem',
            background: 'rgba(99, 102, 241, 0.08)',
            borderColor: 'rgba(99, 102, 241, 0.25)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.25rem'
          }}
        >
          <div style={{ fontSize: '1.6rem' }}>💡</div>
          <div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                Transparent Work Philosophy
              </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.7, margin: 0 }}>
                  I believe in complete honesty regarding my technical capabilities. I do not claim senior-level expertise; instead, I offer diligent, enthusiastic, and dependable execution for beginner-to-intermediate tasks, backed by responsive communication and a fast learning curve.
                </p>
              </div>
          </div>

          {/* Services Grid */}
            <div className="services-grid" style={{ marginBottom: '5rem' }}>
              {services.map((service, index) => (
                  <div key={service.id} className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column' }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '42px',
                        height: '42px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(99, 102, 241, 0.12)',
                        color: 'var(--accent-primary)',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        marginBottom: '1.25rem'
                      }}
                    >
                      0{index + 1}
                    </div>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--text-primary)' }}>
                      {service.title}
                    </h3>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
                      {service.description}
                    </p>

                    {/* Best suited for */}
                    <div
                      style={{
                        background: 'var(--bg-secondary)',
                        padding: '1.1rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-color)',
                        marginBottom: '1.5rem',
                        fontSize: '0.85rem'
                      }}
                    >
                        <div style={{ color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.06em' }}>
                          Ideal For
                        </div>
                          <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                            {service.suitableFor}
                          </div>
                        </div>

                        {/* Skills Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                          {service.skills.map((skill) => (
                              <span key={skill} className="tech-chip">
                                {skill}
                              </span>
                ))}
                            </div>
            </div>
          ))}
                      </div>

                      {/* Collaboration Process */}
                      <section
                        className="glass-card"
                        style={{
            padding: 'clamp(2rem, 4vw, 3.25rem)',
                          marginBottom: '4.5rem'
                        }}
                      >
                        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
                          <span className="badge">Collaboration Process</span>
                          <h2 className="section-title">How I Approach Work</h2>
                          <p className="section-subtitle">
                            Structured, communicative, and transparent at every milestone.
                          </p>
                        </div>

                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem'
                          }}
                        >
                          {[
                            {
                              step: "1. Scope Discussion",
                              detail: "We review your requirements, determine feasibility, and align on expected deliverables."
                            },
                            {
                              step: "2. Transparent Estimate",
                              detail: "I share what I can accomplish, how long it will take, and ask clarifying questions upfront."
                            },
                            {
                              step: "3. Iterative Updates",
                              detail: "Regular check-ins with code or preview links so you are always in the loop."
                            },
                            {
                              step: "4. Clean Delivery",
                              detail: "Well-documented code, clear instructions, and follow-up support for smooth handoff."
                            }
                          ].map((s, idx) => (
                              <div key={idx} style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                                  {s.step}
                                </h4>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                  {s.detail}
                                </p>
                              </div>
            ))}
                            </div>
        </section>

                      {/* Call to Action */}
                      <div style={{ textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                          Have a task or project you need help with?
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                          Send over the details and let's see how I can support your goals.
                        </p>
                        <div className="btn-group" style={{ justifyContent: 'center' }}>
                          <Link to="/contact" className="btn btn-primary">
                            Contact Me to Discuss →
                          </Link>
                          <a href={`mailto:${personalInfo.email}`} className="btn btn-secondary">
                            Direct Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  );
}
