import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Activity, Smile, ArrowRight, Lightbulb } from 'lucide-react';

const symptomsData = [
  {
    id: 'sensitive',
    title: 'Temperature Sensitivity',
    desc: 'Sharp, brief pain when eating or drinking cold or hot items.',
    possibleCause: 'Usually caused by worn tooth enamel, exposed tooth roots, or a minor cavity.',
    reassurance: 'This is extremely common. We can easily resolve this by applying protective bonding sealants, fluoride treatments, or a simple aesthetic filling, completely painlessly.',
    tips: [
      'Avoid extreme hot or cold liquids for now.',
      'Use a soft-bristled brush and brush in circular motions.',
      'Use a specialized sensitive toothpaste (contains potassium nitrate to block pain pathways).'
    ]
  },
  {
    id: 'ache',
    title: 'Dull, Throbbing Ache',
    desc: 'Constant, continuous dull thumping or pain in a specific tooth or jaw.',
    possibleCause: 'Often caused by decay near the nerve, a dental abscess, or pressure from teeth grinding.',
    reassurance: 'While a toothache is stressful, modern root canals are extremely gentle. Our computerized numbing ensures the procedure is 100% painless. Getting it checked early prevents the infection from spreading.',
    tips: [
      'Rinse with warm salt water to reduce bacteria and swelling.',
      'Apply a cold compress to the outside of your cheek.',
      'Avoid biting down on that specific side of your mouth.'
    ]
  },
  {
    id: 'bleeding',
    title: 'Bleeding or Swollen Gums',
    desc: 'Pink stains in sink or mild swelling in your gums when brushing/flossing.',
    possibleCause: 'Typically early gum inflammation (gingivitis) due to plaque buildup.',
    reassurance: 'Don\'t worry—early gingivitis is completely reversible! A gentle dental scaling (cleaning) is all it takes to restore your gums to health. We use ultra-quiet ultrasonic scalers that don\'t vibrate painfully.',
    tips: [
      'Do NOT stop brushing or flossing—continue very gently.',
      'Rinse with an alcohol-free antibacterial mouthwash.',
      'Stay hydrated to help your body fight gum bacteria.'
    ]
  },
  {
    id: 'damaged',
    title: 'Chipped or Cracked Tooth',
    desc: 'A broken edge or crack after biting something hard or an impact.',
    possibleCause: 'Structural enamel fracture due to biting pressure or teeth grinding.',
    reassurance: 'A chipped tooth can be fixed in a single 30-minute visit! We use composite tooth-colored materials that match your enamel perfectly, making the repair invisible and painless.',
    tips: [
      'If the edge is sharp, cover it with temporary dental wax or sugarless gum.',
      'Rinse with water to clean any debris.',
      'Avoid hot, spicy, or dental-irritating foods.'
    ]
  },
  {
    id: 'missing',
    title: 'Missing Tooth / Gap',
    desc: 'A gap left behind by an extraction or natural loss.',
    possibleCause: 'Lost tooth structure due to past decay or trauma.',
    reassurance: 'We can restore the gap beautifully using dental implants. With our Guided Bone Regeneration (GBR) technique, we rebuild lost bone so your new tooth fits securely and feels exactly like a natural tooth.',
    tips: [
      'Keep the surrounding gums clean by brushing gently.',
      'Chew on the opposite side to avoid food impaction in the socket.',
      'Schedule a consultation early to prevent neighboring teeth from shifting.'
    ]
  }
];

export default function SymptomChecker() {
  // Toggle symptoms on and off (single selection)
  const [activeId, setActiveId] = useState('sensitive'); // Set the first one open by default

  const handleSymptomClick = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  const renderDetails = (symptom) => (
    <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--color-border)' }}>
      {/* What is happening */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px', color: 'var(--color-text-primary-light)' }}>
          What is likely happening?
        </h4>
        <p style={{ fontSize: '0.925rem', lineHeight: '1.6', color: 'var(--color-text-main)' }}>
          {symptom.possibleCause}
        </p>
      </div>

      {/* Reassurance Callout */}
      <div style={{
        background: 'var(--color-primary-soft)',
        padding: '16px 20px',
        borderRadius: 'var(--border-radius-md)',
        marginBottom: '20px',
        borderLeft: '4px solid var(--color-primary)'
      }}>
        <h4 style={{ 
          fontSize: '0.9rem', 
          color: 'var(--color-text-on-soft)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          marginBottom: '6px',
          fontWeight: 700
        }}>
          <Smile size={16} />
          Our Reassurance
        </h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-on-soft)', margin: 0, lineHeight: 1.5 }}>
          {symptom.reassurance}
        </p>
      </div>

      {/* Home Care Tips */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-primary)' }}>
          <Lightbulb size={16} style={{ color: 'var(--color-accent)' }} />
          Symptom Care at Home
        </h4>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {symptom.tips.map((tip, i) => (
            <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: 'var(--color-text-muted)', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>✓</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA Button */}
      <button
        onClick={() => {
          const form = document.getElementById('appointment');
          if (form) {
            form.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="btn btn-primary"
        style={{ width: '100%', padding: '12px 20px', fontSize: '0.9rem' }}
      >
        Discuss {symptom.title} with Doctor
        <ArrowRight size={14} />
      </button>
    </div>
  );

  return (
    <section id="symptoms" style={{ padding: '100px 0', background: 'var(--color-primary-bg)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
          <span className="badge">Interactive Assistant</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
            Symptom Relief Guide
          </h2>
          <p style={{ fontSize: '1.05rem' }}>
            Select what you are feeling. Get immediate home-care tips and see how easily our team can resolve it for you in the same card.
          </p>
        </div>

        {/* Unified Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {symptomsData.map((symptom) => {
            const isOpen = activeId === symptom.id;
            return (
              <motion.div
                key={symptom.id}
                layout
                style={{
                  background: 'var(--color-bg-card)',
                  border: '1px solid',
                  borderColor: isOpen ? 'var(--color-text-primary)' : 'var(--color-border)',
                  borderRadius: 'var(--border-radius-md)',
                  padding: '24px',
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  overflow: 'hidden'
                }}
              >
                {/* Header Button (Selection Area) */}
                <button
                  type="button"
                  onClick={() => handleSymptomClick(symptom.id)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    padding: 0
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--color-accent)' : 'var(--color-border)',
                      transition: 'background-color 0.3s ease'
                    }} />
                    <div>
                      <h3 style={{ 
                        fontSize: '1.15rem', 
                        margin: 0, 
                        color: isOpen ? 'var(--color-text-primary)' : 'var(--color-text-main)',
                        fontWeight: 700,
                        transition: 'color 0.3s ease'
                      }}>
                        {symptom.title}
                      </h3>
                      <p style={{ margin: '4px 0 0 0', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                        {symptom.desc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight 
                    size={20} 
                    style={{ 
                      color: isOpen ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease, color 0.3s ease'
                    }} 
                  />
                </button>

                {/* Expanded Details Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      {renderDetails(symptom)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
