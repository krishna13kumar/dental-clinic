import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, PhoneCall } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeSection, setActiveSection, darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile width for non-sticky absolute positioning
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'symptoms', label: 'Symptom Assistant' },
    { id: 'about', label: 'About Us' },
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    
    // Smooth scroll to the section
    const element = document.getElementById(id);
    if (element) {
      const offset = isMobile ? 24 : 96; // Less offset on mobile since nav scrolls away
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className="glass"
      style={{
        position: isMobile ? 'absolute' : 'fixed',
        zIndex: 50,
        top: isMobile ? '20px' : scrolled ? '12px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 32px)', // 16px margin on each side
        maxWidth: '1200px',
        borderRadius: 'var(--border-radius-full)',
        padding: isMobile ? '14px 0' : scrolled ? '10px 0' : '16px 0',
        boxShadow: isMobile ? 'var(--shadow-sm)' : scrolled ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transition: 'top 0.4s cubic-bezier(0.25, 1, 0.5, 1), padding 0.4s cubic-bezier(0.25, 1, 0.5, 1), background 0.4s ease, box-shadow 0.4s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <span style={{ color: '#fff', fontFamily: 'var(--font-headings)', fontWeight: 'bold', fontSize: '1.15rem' }}>G</span>
          </div>
          <span style={{ 
            fontFamily: 'var(--font-headings)', 
            fontWeight: 700, 
            fontSize: 'clamp(1.15rem, 4.5vw, 1.35rem)', 
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
            transition: 'color 0.4s ease'
          }}>
            GBR <span style={{ fontWeight: 400, color: 'var(--color-secondary-light)' }}>Dental Care</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-menu-container">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '28px', alignItems: 'center' }}>
            {navItems.map((item) => (
              <li key={item.id} style={{ position: 'relative' }}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-headings)',
                    fontWeight: 500,
                    color: activeSection === item.id ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                    transition: 'var(--transition-normal)',
                    fontSize: '0.95rem',
                    padding: '6px 0'
                  }}
                  className="nav-link"
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        borderRadius: '2px',
                        background: 'linear-gradient(90deg, var(--color-text-primary) 0%, var(--color-accent) 100%)'
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderLeft: '1px solid var(--color-border)', paddingLeft: '16px' }}>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: 'var(--color-primary-soft)',
                color: 'var(--color-text-primary)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition-normal)'
              }}
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Quick Action Button */}
            <button
              onClick={() => handleNavClick('appointment')}
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              <PhoneCall size={14} />
              Book Visit
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div style={{ display: 'flex', alignItems: 'center' }} className="mobile-menu-buttons">
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px'
            }}
            className="menu-hamburger"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              overflow: 'hidden',
              background: 'var(--color-bg-card)',
              borderBottom: '1px solid var(--color-border)',
              display: 'block',
              borderRadius: 'var(--border-radius-md)',
              marginTop: '12px'
            }}
            className="mobile-drawer"
          >
            <div className="container" style={{ padding: '16px 24px 24px 24px' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        width: '100%',
                        padding: '10px 0',
                        fontSize: '1.1rem',
                        fontFamily: 'var(--font-headings)',
                        fontWeight: 600,
                        color: activeSection === item.id ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                
                {/* Theme Selector inside Mobile Menu */}
                <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                  <span style={{ fontFamily: 'var(--font-headings)', fontWeight: 600, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Appearance</span>
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    style={{
                      background: 'var(--color-primary-soft)',
                      color: 'var(--color-text-primary)',
                      padding: '8px 16px',
                      borderRadius: 'var(--border-radius-full)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      fontWeight: 600,
                      fontSize: '0.85rem'
                    }}
                  >
                    {darkMode ? <Sun size={14} /> : <Moon size={14} />}
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </li>

                <li style={{ paddingTop: '8px' }}>
                  <button
                    onClick={() => handleNavClick('appointment')}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '12px' }}
                  >
                    <PhoneCall size={16} />
                    Book Appointment
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Styling for Responsive Navbar via CSS in JS helper */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu-container {
            display: flex !important;
          }
          .mobile-menu-buttons {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
