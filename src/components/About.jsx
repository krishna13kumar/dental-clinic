import React from 'react';
import { motion } from 'framer-motion';
import { Award, Compass, ShieldAlert, HeartHandshake } from './Icons';

export default function About() {
  const highlights = [
    {
      icon: Award,
      title: 'Expert Practitioners',
      desc: 'Led by Dr. Yuvaraja, our team features specialist dental surgeons certified in advanced implant dentistry (GBR) and complex orthodontics.'
    },
    {
      icon: Compass,
      title: 'Digital Diagnostics',
      desc: 'We use high-precision 3D intraoral scanners and ultra-low-radiation digital X-rays to map your treatments with absolute accuracy.'
    },
    {
      icon: ShieldAlert,
      title: 'Sterile Standards',
      desc: 'Our clinic follows a strict 7-stage autoclaving and sterilization routine matching international dental safety protocols.'
    },
    {
      icon: HeartHandshake,
      title: 'Anxiety-Free Philosophy',
      desc: 'From noise-canceling headphones to gentle desensitizing numbing gels, we have designed every detail to soothe dental anxiety.'
    }
  ];

  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--color-bg-card)', position: 'relative' }}>
      <div className="container">
        {/* Main Grid */}
        <div className="about-layout">
          {/* Visual Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
            className="about-image-container"
          >
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              right: '-15px',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--border-radius-lg)',
              border: '2px solid var(--color-primary-soft)',
              zIndex: 1
            }} />
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
              alt="Dr. Yuvaraja and Dr. Uvashri's Modern Clinic"
              style={{
                width: '100%',
                maxHeight: '520px',
                objectFit: 'cover',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
                zIndex: 2
              }}
            />
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="badge">About Our Clinic</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '20px' }}>
              Where Medical Excellence Meets Calm Comfort
            </h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '32px' }}>
              At GBR Dental Care Perumbakkam, we believe a visit to the dentist should feel rejuvenating. We have carefully crafted our clinic environment to replace the stressful sounds and sights of traditional dentistry with warm lighting, gentle scents, and an empathetic care team.
            </p>

            {/* Highlights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px'
            }} className="about-highlights-grid">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'var(--color-primary-soft)',
                      color: 'var(--color-text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '12px'
                    }}>
                      <Icon size={20} />
                    </div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '6px', color: 'var(--color-text-primary)' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '60px 0' }} />

        {/* Meet the Doctors Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
          <span className="badge">Meet the Founders</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '12px' }}>
            Our Lead Specialists
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}>
            Husband and wife in real life, Dr. Yuvaraja and Dr. Uvashri co-founded GBR Dental Care to bring cohesive, family-oriented dentistry to Chennai.
          </p>
        </div>

        {/* Doctors Cards Grid */}
        <div className="doctors-grid">
          {/* Dr. Yuvaraja */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'var(--color-bg-main)',
              borderRadius: 'var(--border-radius-md)',
              padding: '32px 24px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="doctor-card"
          >
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" 
              alt="Dr. Yuvaraja - Implant Surgeon" 
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--color-primary-soft)',
                marginBottom: '20px',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '4px' }}>Dr. Yuvaraja, MDS</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Oral & Maxillofacial Surgeon
            </span>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--color-text-muted)', margin: 0 }}>
              Specializing in dental implants, bone grafting, and Guided Bone Regeneration (GBR). Dr. Yuvaraja focuses on making surgical procedures completely pain-free, utilizing advanced computerized planning.
            </p>
          </motion.div>

          {/* Dr. Uvashri */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              background: 'var(--color-bg-main)',
              borderRadius: 'var(--border-radius-md)',
              padding: '32px 24px',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="doctor-card"
          >
            <img 
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80" 
              alt="Dr. Uvashri - Orthodontist" 
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--color-primary-soft)',
                marginBottom: '20px',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-primary)', marginBottom: '4px' }}>Dr. Uvashri, MDS</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Orthodontist & Pediatric Specialist
            </span>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--color-text-muted)', margin: 0 }}>
              Specializing in transparent aligners, cosmetic braces, and comforting pediatric dental care. Dr. Uvashri loves helping children and adults build aligned, confident smiles in a gentle, playful environment.
            </p>
          </motion.div>
        </div>

        {/* Marriage/Couple Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--color-primary-soft)',
            borderRadius: 'var(--border-radius-md)',
            padding: '24px 32px',
            textAlign: 'center',
            border: '1px dashed var(--color-text-primary-light)',
            maxWidth: '680px',
            margin: '0 auto'
          }}
        >
          <h4 style={{ fontSize: '1.05rem', color: 'var(--color-text-on-soft)', marginBottom: '6px', fontWeight: 700 }}>
            A Family Dedicated to Your Family's Smile
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-on-soft)', margin: 0, lineHeight: '1.6' }}>
            As husband and wife, Dr. Yuvaraja and Dr. Uvashri combine their medical specialties to offer complete, cohesive dental services. Their close partnership ensures a seamless handoff between children's care, alignment therapy, and implant reconstructions, all with a shared commitment to warmth and empathy.
          </p>
        </motion.div>
      </div>

      <style>{`
        .about-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (min-width: 992px) {
          .about-layout {
            grid-template-columns: 0.95fr 1.05fr;
          }
        }
        @media (max-width: 576px) {
          .about-highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .doctors-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          margin-bottom: 40px;
        }
        @media (min-width: 768px) {
          .doctors-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
