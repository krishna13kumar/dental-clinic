import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, CheckCircle2, ChevronRight, ChevronLeft, CalendarClock, Compass } from './Icons';

const treatmentOptions = [
  { id: 'implant', label: 'Implant & Bone Grafting (GBR)' },
  { id: 'consult', label: 'General Consultation & Checkup' },
  { id: 'pain', label: 'Toothache & Emergency Relief (RCT)' },
  { id: 'braces', label: 'Braces & Invisible Aligners' },
  { id: 'cleaning', label: 'Gentle Scaling & Cleaning' },
  { id: 'cosmetic', label: 'Smile Design & Teeth Whitening' }
];

const timeSlots = [
  { id: 'm1', label: '9:30 AM - 11:00 AM', period: 'Morning' },
  { id: 'm2', label: '11:00 AM - 12:30 PM', period: 'Morning' },
  { id: 'a1', label: '2:30 PM - 4:00 PM', period: 'Afternoon' },
  { id: 'a2', label: '4:00 PM - 5:30 PM', period: 'Afternoon' },
  { id: 'e1', label: '6:00 PM - 7:30 PM', period: 'Evening' },
  { id: 'e2', label: '7:30 PM - 8:30 PM', period: 'Evening' }
];

const getTodayLocalDateString = (dateObj = new Date()) => {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getNextWorkingSlot = () => {
  const dateObj = new Date();
  let dayOfWeek = dateObj.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let timeInMinutes = hours * 60 + minutes;

  // Helper to format date
  const formatDate = (d) => getTodayLocalDateString(d);

  // If Sunday: skip to Monday morning slot
  if (dayOfWeek === 0) {
    const monday = new Date(dateObj);
    monday.setDate(dateObj.getDate() + 1);
    return {
      date: formatDate(monday),
      timeSlot: 'm1'
    };
  }

  // If Saturday and past the last evening slot start time (7:30 PM = 19:30):
  // skip to Monday morning
  if (dayOfWeek === 6 && timeInMinutes >= 19 * 60 + 30) {
    const monday = new Date(dateObj);
    monday.setDate(dateObj.getDate() + 2);
    return {
      date: formatDate(monday),
      timeSlot: 'm1'
    };
  }

  // If weekday and past the last evening slot start time: skip to tomorrow morning
  if (timeInMinutes >= 19 * 60 + 30) {
    const tomorrow = new Date(dateObj);
    tomorrow.setDate(dateObj.getDate() + 1);
    // If tomorrow is Sunday, skip to Monday
    if (tomorrow.getDay() === 0) {
      tomorrow.setDate(tomorrow.getDate() + 1);
    }
    return {
      date: formatDate(tomorrow),
      timeSlot: 'm1'
    };
  }

  // Otherwise, default to today
  let slot = 'm1';
  if (timeInMinutes < 9 * 60 + 30) {
    slot = 'm1';
  } else if (timeInMinutes < 11 * 60) {
    slot = 'm2';
  } else if (timeInMinutes < 14 * 60 + 30) {
    slot = 'a1';
  } else if (timeInMinutes < 16 * 60) {
    slot = 'a2';
  } else if (timeInMinutes < 18 * 60) {
    slot = 'e1';
  } else {
    slot = 'e2';
  }

  return {
    date: formatDate(dateObj),
    timeSlot: slot
  };
};

export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const defaultSlot = getNextWorkingSlot();
  const [formData, setFormData] = useState({
    treatment: '',
    date: defaultSlot.date,
    timeSlot: defaultSlot.timeSlot,
    name: '',
    phone: '',
    email: '',
    notes: '',
    anxietyCare: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number so we can reach you.');
      return;
    }
    setSubmitted(true);
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const selectedTreatmentLabel = treatmentOptions.find(t => t.id === formData.treatment)?.label || 'Consultation';
  const selectedTimeLabel = timeSlots.find(t => t.id === formData.timeSlot)?.label || '';

  return (
    <section id="appointment" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="badge">Booking Wizard</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '16px' }}>
            Book Your Comfort Visit
          </h2>
          <p style={{ fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto' }}>
            Schedule your appointment at your preferred date and time. It takes less than a minute.
          </p>
        </div>

        {/* Wizard Main Container */}
        <div style={{
          background: 'var(--color-bg-card)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-lg)',
          overflow: 'hidden',
          minHeight: '480px',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Progress Indicator */}
          {!submitted && (
            <div style={{ 
              display: 'flex', 
              background: 'var(--color-primary-soft)', 
              borderBottom: '1px solid var(--color-border)' 
            }}>
              {[
                { s: 1, label: 'Treatment', icon: Compass },
                { s: 2, label: 'Date & Time', icon: CalendarClock },
                { s: 3, label: 'Your Details', icon: User }
              ].map((item) => {
                const Icon = item.icon;
                const isActive = step === item.s;
                const isCompleted = step > item.s;
                return (
                  <div 
                    key={item.s}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '16px 12px',
                      fontSize: '0.875rem',
                      fontWeight: isActive || isCompleted ? 700 : 500,
                      color: isActive ? 'var(--color-text-primary)' : isCompleted ? 'var(--color-text-primary-light)' : 'var(--color-text-muted)',
                      borderBottom: isActive ? '3px solid var(--color-text-primary)' : '3px solid transparent',
                      transition: 'var(--transition-normal)',
                      textAlign: 'center'
                    }}
                  >
                    <Icon size={16} />
                    <span className="progress-step-text">{item.label}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Form Content / Body */}
          <div style={{ padding: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <AnimatePresence mode="wait">
              {submitted ? (
                // Step 4: Success Screen
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center',
                    padding: '20px 0'
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                    style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'var(--color-primary-soft)',
                      color: 'var(--color-text-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px'
                    }}
                  >
                    <CheckCircle2 size={44} />
                  </motion.div>

                  <h3 style={{ fontSize: '1.75rem', marginBottom: '12px', color: 'var(--color-text-primary)' }}>Appointment Requested!</h3>
                  
                  <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: '480px', marginBottom: '32px' }}>
                    Thank you, <strong>{formData.name}</strong>. We have registered a tentative slot for you. A care coordinator from GBR Dental Care will call or SMS you shortly at <strong>{formData.phone}</strong> to confirm your slot.
                  </p>

                  <div style={{
                    width: '100%',
                    maxWidth: '440px',
                    background: 'var(--color-primary-bg)',
                    borderRadius: 'var(--border-radius-md)',
                    padding: '20px 24px',
                    textAlign: 'left',
                    border: '1px solid var(--color-border)',
                    marginBottom: '32px'
                  }}>
                    <h4 style={{ fontSize: '1rem', marginBottom: '12px', color: 'var(--color-text-primary)' }}>Reservation Summary</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                      <div><strong>Service:</strong> {selectedTreatmentLabel}</div>
                      <div><strong>Date:</strong> {formData.date}</div>
                      <div><strong>Estimated Time:</strong> {selectedTimeLabel || 'TBD (Our team will arrange)'}</div>
                      <div><strong>Clinic Address:</strong> Opposite to Nellai Supermarket, Perumbakkam, Chennai</div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      const nextSlot = getNextWorkingSlot();
                      setFormData({
                        treatment: '',
                        date: nextSlot.date,
                        timeSlot: nextSlot.timeSlot,
                        name: '',
                        phone: '',
                        email: '',
                        notes: '',
                        anxietyCare: false
                      });
                    }}
                    className="btn btn-secondary"
                  >
                    Book Another Visit
                  </button>
                </motion.div>
              ) : (
                // Wizard steps
                <form onSubmit={handleSubmit} style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-text-primary)' }}>Select Treatment</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                        Choose the treatment or checkup you require. Click "Next" to schedule.
                      </p>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                        gap: '12px',
                        marginBottom: '20px'
                      }}>
                        {treatmentOptions.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => updateField('treatment', opt.id)}
                            style={{
                              padding: '16px 20px',
                              textAlign: 'left',
                              background: formData.treatment === opt.id ? 'var(--color-primary-soft)' : 'transparent',
                              border: '1px solid',
                              borderColor: formData.treatment === opt.id ? 'var(--color-text-primary)' : 'var(--color-border)',
                              borderRadius: 'var(--border-radius-md)',
                              color: formData.treatment === opt.id ? 'var(--color-text-primary)' : 'var(--color-text-main)',
                              fontWeight: formData.treatment === opt.id ? 700 : 500,
                              cursor: 'pointer',
                              transition: 'var(--transition-normal)'
                            }}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-text-primary)' }}>Choose Date & Time</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                        Select your preferred date and convenient time window.
                      </p>

                      <div className="date-time-grid" style={{ gap: '24px', marginBottom: '20px' }}>
                        {/* Date Picker */}
                        <div>
                          <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-text-main)' }}>
                            Appointment Date
                          </label>
                          <input
                            type="date"
                            value={formData.date}
                            min={getTodayLocalDateString()}
                            onChange={(e) => updateField('date', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '14px 18px',
                              border: '1px solid var(--color-border)',
                              borderRadius: 'var(--border-radius-md)',
                              background: 'var(--color-bg-card)',
                              color: 'var(--color-text-main)',
                              fontSize: '0.95rem'
                            }}
                            required
                          />
                        </div>

                        {/* Time Slots */}
                        <div>
                          <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-text-main)' }}>
                            Preferred Time Window
                          </label>
                          <div className="time-slots-grid">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot.id}
                                type="button"
                                onClick={() => updateField('timeSlot', slot.id)}
                                style={{
                                  padding: '12px 4px',
                                  fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)',
                                  textAlign: 'center',
                                  background: formData.timeSlot === slot.id ? 'var(--color-primary)' : 'transparent',
                                  border: '1px solid',
                                  borderColor: formData.timeSlot === slot.id ? 'var(--color-primary)' : 'var(--color-border)',
                                  borderRadius: 'var(--border-radius-sm)',
                                  color: formData.timeSlot === slot.id ? '#fff' : 'var(--color-text-main)',
                                  fontWeight: 600,
                                  cursor: 'pointer',
                                  transition: 'var(--transition-normal)',
                                  whiteSpace: 'nowrap'
                                }}
                              >
                                {slot.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--color-text-primary)' }}>Your Information</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
                        Provide details so we can message you confirmation details.
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                        <div className="name-phone-row" style={{ gap: '16px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-text-main)' }}>Full Name *</label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => updateField('name', e.target.value)}
                              placeholder="e.g. Aditi Sharma"
                              style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--border-radius-md)',
                                background: 'var(--color-bg-card)',
                                color: 'var(--color-text-main)'
                              }}
                              required
                            />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-text-main)' }}>Phone Number *</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => updateField('phone', e.target.value)}
                              placeholder="e.g. +91 98765 43210"
                              style={{
                                width: '100%',
                                padding: '12px 16px',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--border-radius-md)',
                                background: 'var(--color-bg-card)',
                                color: 'var(--color-text-main)'
                              }}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-text-main)' }}>Email (Optional)</label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            placeholder="e.g. aditi@gmail.com"
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: '1px solid var(--color-border)',
                              borderRadius: 'var(--border-radius-md)',
                              background: 'var(--color-bg-card)',
                              color: 'var(--color-text-main)'
                            }}
                          />
                        </div>

                        {/* Empathetic Checkbox for anxiety */}
                        <div style={{
                          background: 'var(--color-primary-soft)',
                          padding: '12px 16px',
                          borderRadius: 'var(--border-radius-md)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginTop: '8px'
                        }}>
                          <input
                            type="checkbox"
                            id="anxietyCare"
                            checked={formData.anxietyCare}
                            onChange={(e) => updateField('anxietyCare', e.target.checked)}
                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                          />
                          <label htmlFor="anxietyCare" style={{ fontSize: '0.85rem', color: 'var(--color-text-on-soft)', cursor: 'pointer', fontWeight: 500 }}>
                            I experience mild to severe dental anxiety (We will take extra care, offer soothing distractions, or provide sedation options).
                          </label>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: 'var(--color-text-main)' }}>Special Comfort Requests (Optional)</label>
                          <textarea
                            value={formData.notes}
                            onChange={(e) => updateField('notes', e.target.value)}
                            placeholder="Tell us anything that will help you relax (e.g. quiet room, noise-canceling headphones, soft headrest...)"
                            rows={3}
                            style={{
                              width: '100%',
                              padding: '12px 16px',
                              border: '1px solid var(--color-border)',
                              borderRadius: 'var(--border-radius-md)',
                              background: 'var(--color-bg-card)',
                              color: 'var(--color-text-main)',
                              resize: 'none'
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Wizard Footer Controls */}
                  <div className="wizard-footer" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '24px',
                    marginTop: '20px'
                  }}>
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: 'var(--color-text-primary)',
                          fontWeight: 600,
                          fontSize: '0.9rem'
                        }}
                      >
                        <ChevronLeft size={16} />
                        Back
                      </button>
                    ) : (
                      <div className="wizard-footer-placeholder" />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={step === 1 && !formData.treatment}
                        className="btn btn-primary"
                        style={{ 
                          padding: '10px 20px', 
                          fontSize: '0.9rem',
                          opacity: (step === 1 && !formData.treatment) ? 0.5 : 1,
                          cursor: (step === 1 && !formData.treatment) ? 'not-allowed' : 'pointer'
                        }}
                      >
                        Continue
                        <ChevronRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-accent"
                        style={{ padding: '12px 24px', fontSize: '0.95rem' }}
                      >
                        Request Appointment Slot
                        <CheckCircle2 size={16} />
                      </button>
                    )}
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .date-time-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (min-width: 577px) {
          .date-time-grid {
            grid-template-columns: 1.1fr 0.9fr;
          }
        }
        
        .time-slots-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .name-phone-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 576px) {
          .name-phone-row {
            grid-template-columns: 1fr;
          }
          .progress-step-text {
            display: none !important;
          }
          .wizard-footer {
            flex-direction: column-reverse;
            gap: 12px;
            align-items: stretch !important;
          }
          .wizard-footer button {
            width: 100%;
            justify-content: center;
            text-align: center;
            display: flex !important;
            padding: 14px 20px !important;
            font-size: 1rem !important;
          }
          .wizard-footer-placeholder {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
