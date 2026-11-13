import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { personalInfo } from '../data/portfolioData';

// Replace with your Formspree endpoint (e.g. "https://formspree.io/f/mqkrzyov")
// If left empty or on submission error, the form seamlessly opens your email client directly.
const FORMSPREE_ENDPOINT = "";

export default function Contact() {
  useSEO({
    title: `Contact Me | ${personalInfo.name}`,
    description: `Connect with ${personalInfo.name} for internship opportunities, student projects, or beginner-friendly software development collaborations.`,
    keywords: 'Contact Tejas Patil, Hire Developer, Internships, Collaboration, Freelance'
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copied, setCopied] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Validate form fields
  const validate = (data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (data.subject.trim() && data.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters long.';
    }

    if (!data.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters so I can understand your inquiry.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time error clearance on correction
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const currentErrors = validate(formData);
    if (currentErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: currentErrors[name] }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setStatus('submitting');
    setFeedbackMessage('');

    if (FORMSPREE_ENDPOINT) {
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setFeedbackMessage(`Thank you, ${formData.name}! Your message has been received. I will reply to you shortly.`);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTouched({});
        } else {
          throw new Error('Formspree submission failed.');
        }
      } catch (err) {
        setStatus('error');
        setFeedbackMessage('Failed to deliver through web service. Opening your default email client instead...');
        launchMailtoClient();
      }
    } else {
      // Direct client email launch
      setTimeout(() => {
        launchMailtoClient();
        setStatus('success');
        setFeedbackMessage(`Thank you, ${formData.name}! Your message draft has been prepared and opened in your email client.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
      }, 500);
    }
  };

  const launchMailtoClient = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name} via Portfolio`);
    const body = encodeURIComponent(
      `Hello Tejas,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page-container contact-page">
      <div className="container">
        <div className="section-header">
          <span className="badge">Get in Touch</span>
          <h1 className="section-title">Contact Me</h1>
          <p className="section-subtitle">
            Whether you have an internship opportunity, a freelance project, or just want to connect, feel free to reach out.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            maxWidth: '1050px',
            margin: '0 auto'
          }}
        >
          {/* Contact Details & Direct Connect */}
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.85rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
              Let's connect and build something practical.
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8, fontSize: '0.975rem' }}>
              I am based in India and actively looking for internship roles, student collaboration opportunities, and beginner-friendly software tasks. I make sure to respond promptly to all messages.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {/* Email Card with Copy Feature */}
              <div 
                className="glass-card"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.25rem',
                  padding: '1.35rem'
                }}
              >
                <div 
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: 'var(--accent-subtle)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--accent-primary)',
                    flexShrink: 0
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Email Address</div>
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    style={{ fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all', fontSize: '0.95rem' }}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className="btn btn-secondary"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem', flexShrink: 0 }}
                  title="Copy email address to clipboard"
                >
                  {copied ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Location Card */}
              <div 
                className="glass-card"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.25rem',
                  padding: '1.35rem'
                }}
              >
                <div 
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: 'var(--radius-sm)', 
                    background: 'var(--accent-subtle)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--accent-primary)',
                    flexShrink: 0
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>Location</div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem' }}>{personalInfo.location} (Remote Available)</div>
                </div>
              </div>
            </div>

            {/* Social Network Profiles */}
            <h4 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', fontWeight: 700 }}>
              Social Profiles
            </h4>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                style={{ fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub Profile ↗
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                style={{ fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          {/* Phase 4: Validated Interactive Contact Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              Send a Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Fill in the form to get in touch. Form validation ensures all required details are captured cleanly.
            </p>

            {/* Success Feedback Alert */}
            {status === 'success' && (
              <div 
                style={{ 
                  background: 'rgba(34, 197, 94, 0.15)', 
                  border: '1px solid rgba(34, 197, 94, 0.35)', 
                  padding: '1.25rem', 
                  borderRadius: 'var(--radius-sm)', 
                  color: '#4ade80', 
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  lineHeight: 1.6
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>✓</span>
                <div>{feedbackMessage}</div>
              </div>
            )}

            {/* Error Feedback Alert */}
            {status === 'error' && (
              <div 
                style={{ 
                  background: 'rgba(239, 68, 68, 0.15)', 
                  border: '1px solid rgba(239, 68, 68, 0.35)', 
                  padding: '1.25rem', 
                  borderRadius: 'var(--radius-sm)', 
                  color: '#f87171', 
                  fontSize: '0.9rem',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6
                }}
              >
                <div>{feedbackMessage}</div>
                <button 
                  onClick={launchMailtoClient} 
                  className="btn btn-secondary" 
                  style={{ marginTop: '0.75rem', padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                >
                  Click to Open Email Client Manually ✉
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  Your Name <span style={{ color: '#f87171' }}>*</span>
                </label>
                <input 
                  id="contact-name"
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Alex Johnson" 
                  className={`form-input ${touched.name && errors.name ? 'input-error' : ''}`}
                />
                {touched.name && errors.name && (
                  <div className="field-error-text">
                    <span>⚠</span> {errors.name}
                  </div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  Your Email Address <span style={{ color: '#f87171' }}>*</span>
                </label>
                <input 
                  id="contact-email"
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. alex@company.com" 
                  className={`form-input ${touched.email && errors.email ? 'input-error' : ''}`}
                />
                {touched.email && errors.email && (
                  <div className="field-error-text">
                    <span>⚠</span> {errors.email}
                  </div>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  Subject (Optional)
                </label>
                <input 
                  id="contact-subject"
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Internship / Project Inquiry" 
                  className={`form-input ${touched.subject && errors.subject ? 'input-error' : ''}`}
                />
                {touched.subject && errors.subject && (
                  <div className="field-error-text">
                    <span>⚠</span> {errors.subject}
                  </div>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  Your Message <span style={{ color: '#f87171' }}>*</span>
                </label>
                <textarea 
                  id="contact-message"
                  name="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project, timeline, or internship requirements..." 
                  className={`form-input ${touched.message && errors.message ? 'input-error' : ''}`}
                  style={{ resize: 'vertical' }}
                />
                {touched.message && errors.message && (
                  <div className="field-error-text">
                    <span>⚠</span> {errors.message}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary" 
                disabled={status === 'submitting'}
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {status === 'submitting' ? (
                  <>
                    <span style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></span>
                    Sending Message...
                  </>
                ) : (
                  'Send Message →'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
