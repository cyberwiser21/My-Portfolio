import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { personalInfo } from '../data/portfolioData';
import './Header.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand-logo" onClick={closeMenu}>
            <span>Tejas</span><span className="brand-highlight">Patil.</span>
          </Link>

          <nav>
            <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="btn btn-primary header-cta" onClick={closeMenu}>
              Get in Touch
            </Link>

            {/* Phase 4: Animated Mobile Hamburger Toggle Button */}
            <button 
              className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu} 
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div 
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
