import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export default function Footer() {
  const mapsLink = "https://www.google.com/maps/place/GBR+Dental+Care/@12.8957762,80.1777069,17z/data=!3m1!4b1!4m6!3m5!1s0x3a5261dc2c46fed7:0xa345fb01ebe0ad15!8m2!3d12.895771!4d80.1825778!16s%2Fg%2F11w26cc3_l?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer style={{
      background: 'var(--color-primary-dark)',
      color: '#fff',
      padding: '80px 0 30px 0',
      position: 'relative',
      borderTop: '1px solid var(--color-border)'
    }}>
      {/* Soothing background overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 80% 20%, rgba(var(--color-primary-hue), 80%, 20%, 0.15) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="footer-grid" style={{ marginBottom: '50px' }}>
          {/* Logo & Description */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'var(--color-primary-dark)', fontFamily: 'var(--font-headings)', fontWeight: 'bold', fontSize: '1.1rem' }}>G</span>
              </div>
              <span style={{ fontFamily: 'var(--font-headings)', fontWeight: 700, fontSize: '1.25rem', color: '#fff', letterSpacing: '-0.02em' }}>
                GBR <span style={{ fontWeight: 400, color: 'var(--color-primary-soft)' }}>Dental Care</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '320px', marginBottom: '24px' }}>
              Specialized implantology, advanced Guided Bone Regeneration (GBR), and painless root canal treatments structured around patients with dental anxiety.
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-accent)' }}>
              ISO 9001:2015 Sterile-Certified Clinic
            </div>
          </div>

          {/* Quick Timings */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={16} style={{ color: 'var(--color-accent)' }} />
              Clinic Hours
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '6px' }}>
                <span>Monday - Saturday</span>
                <span style={{ fontWeight: 600, color: '#fff', textAlign: 'right' }}>9:30 AM - 1:00 PM <br /> 4:30 PM - 8:30 PM</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '6px' }}>
                <span>Sunday</span>
                <span style={{ fontWeight: 600, color: '#fff', textAlign: 'right' }}>10:00 AM - 1:00 PM <br /> <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--color-accent)' }}>(Appointments Only)</span></span>
              </li>
            </ul>
          </div>

          {/* Contact Details & Maps Link */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} style={{ color: 'var(--color-accent)' }} />
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  No. 4, Nookampalayam Main Road,<br />
                  Perumbakkam (Opposite Nellai Supermarket),<br />
                  Chennai, Tamil Nadu 600100
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--color-accent)' }} />
                <a href="tel:+919444022334" style={{ color: '#fff', fontWeight: 600 }}>+91 94440 22334</a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--color-accent)' }} />
                <a href="mailto:care@gbrdental.com" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>care@gbrdental.com</a>
              </div>
              <div style={{ marginTop: '8px' }}>
                <a 
                  href={mapsLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#fff',
                    padding: '8px 16px',
                    fontSize: '0.8rem',
                    width: '100%',
                    justifyContent: 'center'
                  }}
                >
                  View on Google Maps
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.5)',
          textAlign: 'center'
        }} className="footer-bottom-row">
          <div>
            © {new Date().getFullYear()} GBR Dental Care. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#services" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Privacy Policy</a>
            <span>•</span>
            <a href="#services" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        @media (min-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 992px) {
          .footer-grid {
            grid-template-columns: 1.2fr 0.9fr 0.9fr;
          }
          .footer-bottom-row {
            flex-direction: row !important;
            justify-content: space-between !important;
          }
        }
      `}</style>
    </footer>
  );
}
