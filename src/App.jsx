import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import SymptomChecker from './components/SymptomChecker';
import About from './components/About';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark theme class on body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  // Section scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Trigger threshold offset
      const sections = ['home', 'services', 'symptoms', 'about', 'appointment'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
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
    <>
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={scrollToSection} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      <main>
        <Hero 
          onBookClick={() => scrollToSection('appointment')} 
          onExploreClick={() => scrollToSection('services')} 
        />
        <Services />
        <SymptomChecker />
        <About />
        <Testimonials />
        <AppointmentForm />
      </main>
      <Footer />
    </>
  );
}
