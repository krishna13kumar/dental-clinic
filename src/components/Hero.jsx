import React from 'react';
import { Shield, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ onBookClick, onExploreClick }) {
  // Container animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Item animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        padding: '140px 0 100px 0',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Decorative calm background elements */}
      <div className="ambient-glow" style={{ top: '-10%', left: '-5%' }} />
      <div className="ambient-glow-secondary" style={{ bottom: '10%', right: '-5%' }} />

      <div className="container">
        <div className="hero-layout">
          {/* Text Left */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
          >
            {/* Trust badge */}
            <motion.div variants={itemVariants} className="badge" style={{ gap: '6px' }}>
              <Shield size={14} />
              Your Comfort is Our Priority
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              variants={itemVariants}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontWeight: 800,
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '20px'
              }}
            >
              Gentle Care for <br />
              <span style={{ 
                background: 'var(--color-text-brand-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                A Healthier Smile
              </span>
            </motion.h1>

            {/* Subtext - Reassuring & Friendly */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontSize: '1.15rem',
                color: 'var(--color-text-muted)',
                maxWidth: '540px',
                marginBottom: '32px',
                lineHeight: 1.7
              }}
            >
              At <strong>GBR Dental Care</strong>, we combine advanced digital diagnostics with a warm, spa-like atmosphere in Perumbakkam. Our painless treatments and expert team are dedicated to keeping your family smiling.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                width: '100%',
                marginBottom: '40px'
              }}
            >
              <button 
                onClick={onBookClick}
                className="btn btn-primary"
                style={{ fontSize: '1rem' }}
              >
                Schedule Appointment
                <ArrowRight size={16} />
              </button>
              <button 
                onClick={onExploreClick}
                className="btn btn-secondary"
                style={{ fontSize: '1rem' }}
              >
                Explore Services
              </button>
            </motion.div>

            {/* Highlighted Value Statements */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                paddingTop: '24px',
                borderTop: '1px solid var(--color-border)',
                width: '100%'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Anxiety-Free Methods</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Advanced Guided Regeneration (GBR)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-accent)' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>100% Sterile Environment</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Graphical Right Screen */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            style={{ position: 'relative', width: '100%', justifySelf: 'center' }}
            className="hero-image-container"
          >
            {/* Visual background circle decorative */}
            <div style={{
              position: 'absolute',
              top: '5%',
              left: '5%',
              width: '90%',
              height: '90%',
              borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
              background: 'linear-gradient(45deg, var(--color-primary-soft) 0%, var(--color-secondary-soft) 100%)',
              zIndex: -1,
            }} />

            {/* Main Image */}
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
              alt="GBR Dental Care Modern Dental Suite" 
              style={{
                width: '100%',
                maxHeight: '480px',
                objectFit: 'cover',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid var(--color-bg-card)',
              }}
            />

            {/* Floating Badge 1 - Happy smiles */}
            <motion.div 
              className="float-animation"
              style={{
                position: 'absolute',
                bottom: '8%',
                left: '-5%',
                background: 'var(--color-bg-card)',
                borderRadius: 'var(--border-radius-md)',
                padding: '12px 20px',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--color-accent-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)'
              }}>
                <Heart size={18} fill="currentColor" />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>10,000+</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 500 }}>Happy Smiles</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 - High-tech */}
            <motion.div 
              className="float-animation"
              style={{
                position: 'absolute',
                top: '12%',
                right: '-5%',
                background: 'var(--color-bg-card)',
                borderRadius: 'var(--border-radius-md)',
                padding: '12px 20px',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                border: '1px solid var(--color-border)',
                animationDelay: '1.5s'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--color-primary-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-primary)'
              }}>
                <Sparkles size={18} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Advanced</h4>
                <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 500 }}>GBR Implants</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .hero-layout {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
      `}</style>
    </section>
  );
}
