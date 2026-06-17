import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from './Icons';

const reviews = [
  {
    name: 'Aditi Sundar',
    treatment: 'Painless Root Canal',
    rating: 5,
    text: 'I was absolutely terrified of getting a root canal. I kept putting it off until the pain was unbearable. Dr. Yuvaraja was incredibly gentle. He explained every step, used a numbing gel before the injection, and I literally felt zero pain. Highly recommend GBR Dental Care!'
  },
  {
    name: 'Rajesh Kumar',
    treatment: 'Dental Implant & GBR',
    rating: 5,
    text: 'Got my dental implant done here. The Guided Bone Regeneration (GBR) procedure sounded scary, but the doctor walked me through the digital scans and made me feel so comfortable. The surgery was quick, clean, and the recovery was very smooth. Best dental clinic in Perumbakkam.'
  },
  {
    name: 'Priyanka Sen',
    treatment: 'Clear Aligners',
    rating: 5,
    text: 'Extremely professional and clean clinic. The staff are polite and follow very high sterile standards. I got my invisible aligners from here and the results are amazing. They even gave me noise-canceling headphones during my teeth cleanings!'
  },
  {
    name: 'Vikram Karthik',
    treatment: 'Pediatric Care (Son, 6yo)',
    rating: 5,
    text: 'Bringing my son to the dentist used to be a nightmare. The pediatric specialists here are fantastic. They played games, showed him the water sprays as friendly toys, and cleaned his teeth with absolutely no fuss. He even got a brave kid badge at the end!'
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  const currentReview = reviews[index];

  return (
    <section id="testimonials" style={{ padding: '100px 0', background: 'var(--color-primary-bg)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">Patient Testimonials</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
            Real Smiles, Real Stories
          </h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto' }}>
            Read how we help patients overcome dental fear and achieve healthy, beautiful smiles.
          </p>
        </div>

        {/* Testimonial Box */}
        <div style={{ position: 'relative', minHeight: '320px' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                background: 'var(--color-bg-card)',
                borderRadius: 'var(--border-radius-lg)',
                padding: '48px',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '-24px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'var(--color-accent)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', color: 'var(--color-accent)' }}>
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review Text */}
              <p style={{
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: 'var(--color-text-main)',
                fontStyle: 'italic',
                marginBottom: '28px',
                maxWidth: '680px'
              }}>
                "{currentReview.text}"
              </p>

              {/* Reviewer Details */}
              <div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--color-text-primary)', margin: 0, fontWeight: 700 }}>
                  {currentReview.name}
                </h4>
                <span style={{ 
                  fontSize: '0.825rem', 
                  color: 'var(--color-accent)', 
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {currentReview.treatment}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '32px'
          }}>
            <button
              onClick={handlePrev}
              style={{
                background: 'var(--color-bg-card)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)'
              }}
              className="nav-btn"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              style={{
                background: 'var(--color-bg-card)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border)',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-normal)'
              }}
              className="nav-btn"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .nav-btn:hover {
          background: var(--color-primary) !important;
          color: #fff !important;
          border-color: var(--color-primary) !important;
        }
      `}</style>
    </section>
  );
}
