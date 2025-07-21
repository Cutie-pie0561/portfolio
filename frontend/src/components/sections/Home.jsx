import React, { useState, useEffect } from 'react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  const texts = [
    "Hello, You!",
    "I'm Mohammed Fareed",
    "Aspiring Data Scientist & AI Engineer"
  ];

  useEffect(() => {
    const typeText = () => {
      if (currentTextIndex < texts.length) {
        if (currentCharIndex < texts[currentTextIndex].length) {
          setTypedText(prev => prev + texts[currentTextIndex][currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => {
            setTypedText('');
            setCurrentCharIndex(0);
            setCurrentTextIndex(prev => prev + 1);
          }, 2000);
        }
      } else {
        setCurrentTextIndex(0);
      }
    };

    const timeout = setTimeout(typeText, 100);
    return () => clearTimeout(timeout);
  }, [currentTextIndex, currentCharIndex, texts]);

  return (
    <section className="home-section">
      <div className="hero-banner"></div>
      <div className="home-content">
        <div className="typewriter-container">
          <h1 className="neon-text aqua-blue typewriter-text">
            {typedText}
            <span className="cursor">|</span>
          </h1>
        </div>
        
        <div className="personal-info">
          <div className="info-section">
            <h2 className="section-subtitle hover-effect">Who Am I?</h2>
            <p className="bio-text">
              I'm a <span className="neon-orange">B.Tech student</span> specializing in 
              <span className="neon-orange"> Artificial Intelligence and Data Science</span> at 
              Dhaanish Ahmed College of Engineering. Passionate about solving 
              <span className="neon-orange"> real-world problems</span> using data, I enjoy building 
              <span className="neon-orange"> predictive models</span>, visualizations, and experimenting 
              with new technologies.
            </p>
          </div>
          
          <div className="info-section">
            <h2 className="section-subtitle hover-effect">My Personal Life</h2>
            <p className="bio-text">
              Based in <span className="neon-orange">Chennai, Tamil Nadu, India</span>, I'm also exploring 
              the intersection of <span className="neon-orange">AI and business decision-making</span>. 
              In my free time, I enjoy <span className="neon-orange">trading</span>, 
              <span className="neon-orange"> tech exploration</span>, writing code, and 
              <span className="neon-orange"> mobile electronics</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;