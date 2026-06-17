import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Sparkles, Smile, ShieldCheck, Clock, Zap, X, ChevronRight 
} from 'lucide-react';

const servicesData = [
  {
    id: 'gbr',
    title: 'Dental Implants & GBR',
    shortDesc: 'Permanent replacement teeth anchored with Guided Bone Regeneration (GBR).',
    icon: ShieldCheck,
    color: 'hsl(187, 85%, 20%)',
    bgSoft: 'var(--color-primary-soft)',
    details: {
      what: 'Guided Bone Regeneration (GBR) is our specialty. When a tooth is lost, jawbone can diminish. We use biocompatible barrier membranes to regrow healthy bone, creating a stable foundation for strong, lifelong implants.',
      comfort: 'Performed under precise local anaesthetic. Patients report feeling a slight pressure, but no pain. We also offer soft music and calming aroma therapy.',
      time: 'Bone integration takes 3-6 months; implant placement is a quick 1-hour session.',
      recovery: 'Very mild soreness for 2-3 days, easily managed with basic painkillers. Normal activities can be resumed immediately.'
    }
  },
  {
    id: 'rct',
    title: 'Painless Root Canal',
    shortDesc: 'Save damaged teeth with advanced rotary instruments and gentle care.',
    icon: Zap,
    color: 'hsl(201, 75%, 28%)',
    bgSoft: 'var(--color-secondary-soft)',
    details: {
      what: 'Modern Root Canal Therapy (RCT) clears away infection from the tooth pulp, cleans the internal canal, and seals it. It relieves the toothache and saves your natural tooth.',
      comfort: 'The primary goal of RCT is to ELIMINATE pain. With our computerized numbing technology, the procedure is as comfortable as getting a standard filling.',
      time: 'Completed in a single or double session (45 minutes each).',
      recovery: 'No downtime. The tooth might feel slightly tender to bite on for 24 hours, but the throbbing pain will be completely gone.'
    }
  },
  {
    id: 'braces',
    title: 'Clear Aligners & Braces',
    shortDesc: 'Straighten your teeth comfortably with invisible custom trays or soft brackets.',
    icon: Smile,
    color: 'hsl(38, 70%, 55%)',
    bgSoft: 'var(--color-accent-soft)',
    details: {
      what: 'Orthodontic solutions designed to align teeth for cosmetic harmony and healthier biting. We offer traditional metal braces, ceramic aesthetic braces, and cutting-edge transparent aligners.',
      comfort: 'Transparent aligners are made of smooth medical-grade plastic, which means no metal wires scraping your cheeks. A gentle pressure is felt only during the first day of each new tray.',
      time: 'Ranges from 6 to 18 months depending on complexity. Checkups are once every 4-6 weeks.',
      recovery: 'Zero recovery needed. Simply remove the trays when eating and brushing.'
    }
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Smile Design',
    shortDesc: 'Veneers, teeth whitening, and contouring for a natural, glowing smile.',
    icon: Sparkles,
    color: 'hsl(187, 85%, 20%)',
    bgSoft: 'var(--color-primary-soft)',
    details: {
      what: 'We customize thin porcelain veneers or composite layers to cover stains, close gaps, or fix chips, creating a balanced, symmetrical, and beautiful smile.',
      comfort: 'Ultra-conservative procedures that preserve 95% of your natural tooth structure. Tooth whitening uses desensitizing gels to prevent any post-procedure sensitivity.',
      time: 'Teeth whitening takes just 45 minutes in-office. Veneers require 2 visits over 7 days.',
      recovery: 'Immediate results. There is no downtime or healing phase required.'
    }
  },
  {
    id: 'family',
    title: 'Pediatric & Family Care',
    shortDesc: 'Comforting dental visits for children and complete dental care for all ages.',
    icon: Heart,
    color: 'hsl(201, 75%, 28%)',
    bgSoft: 'var(--color-secondary-soft)',
    details: {
      what: 'Comprehensive cleanings, sealant coatings to prevent decay, and friendly educational checks designed to make dental clinic visits positive and fun for kids.',
      comfort: 'Our pediatric dentists use "Tell-Show-Do" psychological methods. We show children the tools, explain them as friendly toys, and proceed gently with no surprises.',
      time: 'Routine checkups and cleaning take 30 minutes.',
      recovery: 'No recovery. Kids leave with a smile and a small bravery badge/toy!'
    }
  }
];

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="services" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
          <span className="badge">Specialist Services</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
            Empathetic Dental Care
          </h2>
          <p style={{ fontSize: '1.05rem' }}>
            We provide specialized treatments designed around patient comfort, using advanced technology to minimize dental anxiety.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveModal(service)}
                style={{
                  background: 'var(--color-bg-card)',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '32px',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  y: -6, 
                  boxShadow: 'var(--shadow-lg)',
                  borderColor: 'var(--color-primary-light)'
                }}
              >
                {/* Visual glow on corner */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '60px',
                  height: '60px',
                  background: `radial-gradient(circle at top right, ${service.color}15, transparent 70%)`
                }} />

                {/* Icon wrapper */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: service.bgSoft,
                  color: 'var(--color-text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Icon size={28} />
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                  {service.title}
                </h3>
                
                <p style={{ fontSize: '0.925rem', marginBottom: '24px', flexGrow: 1 }}>
                  {service.shortDesc}
                </p>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '6px', 
                  fontSize: '0.875rem', 
                  fontWeight: 600, 
                  color: 'var(--color-text-primary)' 
                }}>
                  Learn What to Expect
                  <ChevronRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Soothing Detail Modal */}
      <AnimatePresence>
        {activeModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(15, 23, 42, 0.4)',
                backdropFilter: 'blur(4px)',
                zIndex: 100,
                cursor: 'pointer'
              }}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                position: 'fixed',
                top: '5%',
                left: '5%',
                right: '5%',
                maxHeight: '90vh',
                maxWidth: '680px',
                margin: '0 auto',
                background: 'var(--color-bg-card)',
                borderRadius: 'var(--border-radius-lg)',
                padding: '40px',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 101,
                overflowY: 'auto',
                border: '1px solid var(--color-border)'
              }}
              className="service-modal"
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: activeModal.bgSoft,
                    color: 'var(--color-text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {React.createElement(activeModal.icon, { size: 24 })}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-primary)' }}>{activeModal.title}</h3>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  style={{
                    background: 'var(--color-primary-soft)',
                    color: 'var(--color-text-primary)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-normal)'
                  }}
                  className="close-btn"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Content sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '6px', color: 'var(--color-text-primary-light)' }}>
                    What is this treatment?
                  </h4>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{activeModal.details.what}</p>
                </div>

                <div style={{
                  background: 'var(--color-primary-soft)',
                  padding: '16px 20px',
                  borderRadius: 'var(--border-radius-md)',
                  borderLeft: '4px solid var(--color-primary)'
                }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '4px', color: 'var(--color-text-on-soft)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Heart size={14} fill="currentColor" />
                    How will it feel? (Anxiety Relief)
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-on-soft)', margin: 0, lineHeight: '1.5' }}>
                    {activeModal.details.comfort}
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }} className="modal-info-grid">
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-accent)', marginTop: '2px' }}><Clock size={18} /></div>
                    <div>
                      <h5 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Time Required</h5>
                      <p style={{ margin: 0, fontSize: '0.875rem' }}>{activeModal.details.time}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-accent)', marginTop: '2px' }}><ShieldCheck size={18} /></div>
                    <div>
                      <h5 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Recovery & Care</h5>
                      <p style={{ margin: 0, fontSize: '0.875rem' }}>{activeModal.details.recovery}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '36px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="btn btn-secondary"
                  style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    setActiveModal(null);
                    const form = document.getElementById('appointment');
                    if (form) form.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-primary"
                  style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                >
                  Book Treatment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 576px) {
          .modal-info-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
