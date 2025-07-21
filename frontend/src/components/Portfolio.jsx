import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import Header from './Header';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Projects from './sections/Projects';
import Internship from './sections/Internship';
import Resume from './sections/Resume';
import ContactMe from './sections/ContactMe';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'home', label: 'Home', component: Home },
    { id: 'skills', label: 'Skills', component: Skills },
    { id: 'achievements', label: 'Achievements', component: Achievements },
    { id: 'projects', label: 'Projects', component: Projects },
    { id: 'internship', label: 'Internship', component: Internship },
    { id: 'resume', label: 'Resume', component: Resume },
    { id: 'contact', label: 'Contact Me', component: ContactMe },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="portfolio-container">
      <Header 
        sections={sections} 
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
      
      <main className="main-content">
        {sections.map(({ id, component: Component }) => (
          <section key={id} id={id} className="section">
            <Component />
          </section>
        ))}
      </main>
    </div>
  );
};

export default Portfolio;