import React, { useState } from 'react';

const Achievements = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Mock achievement data - replace with actual achievements
  const achievements = [
    {
      id: 1,
      title: 'Data Science Excellence Award',
      organization: 'Dhaanish Ahmed College of Engineering',
      date: 'March 2024',
      description: 'Recognized for outstanding performance in Data Science coursework and practical projects.',
      image: 'https://via.placeholder.com/400x300/8c52ff/ffffff?text=Achievement+Certificate',
      details: 'Achieved top 5% ranking in Data Science track with exceptional project outcomes and academic excellence.'
    },
    {
      id: 2,
      title: 'Machine Learning Project Competition',
      organization: 'Tech Symposium 2024',
      date: 'February 2024',
      description: 'First place winner in inter-college machine learning project competition.',
      image: 'https://via.placeholder.com/400x300/00ffff/000000?text=ML+Competition+Winner',
      details: 'Developed an innovative customer segmentation model that outperformed 50+ competing teams from various colleges.'
    },
    {
      id: 3,
      title: 'Data Visualization Workshop Certification',
      organization: 'Analytics Academy',
      date: 'January 2024',
      description: 'Completed advanced certification in data visualization techniques and best practices.',
      image: 'https://via.placeholder.com/400x300/ff6b35/ffffff?text=Visualization+Expert',
      details: 'Mastered advanced Tableau and Power BI techniques, creating compelling visualizations that tell data stories effectively.'
    },
    {
      id: 4,
      title: 'Python Programming Proficiency',
      organization: 'CodeMaster Institute',
      date: 'December 2023',
      description: 'Advanced certification in Python for Data Science and Machine Learning.',
      image: 'https://via.placeholder.com/400x300/purple/white?text=Python+Master',
      details: 'Demonstrated expertise in NumPy, Pandas, Scikit-learn, and advanced Python libraries for data science applications.'
    }
  ];

  return (
    <section className="achievements-section">
      <div className="container">
        <h2 className="section-title neon-text">My Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className="achievement-card holographic-card"
              onMouseEnter={() => setHoveredCard(achievement.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-inner">
                <div className="achievement-image">
                  <img src={achievement.image} alt={achievement.title} />
                  <div className="holographic-overlay"></div>
                </div>
                
                <div className="achievement-content">
                  <div className="achievement-date neon-orange">{achievement.date}</div>
                  <h3 className="achievement-title neon-text purple">{achievement.title}</h3>
                  <p className="achievement-organization neon-text aqua-blue">{achievement.organization}</p>
                  <p className="achievement-description">{achievement.description}</p>
                  
                  {hoveredCard === achievement.id && (
                    <div className="achievement-details">
                      <div className="details-content">
                        <h4 className="details-title neon-text aqua-blue">Details:</h4>
                        <p className="details-text">{achievement.details}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="achievements-stats">
          <div className="stat-item">
            <span className="stat-number neon-text purple">4+</span>
            <span className="stat-label">Certificates Earned</span>
          </div>
          <div className="stat-item">
            <span className="stat-number neon-text aqua-blue">95%</span>
            <span className="stat-label">Average Score</span>
          </div>
          <div className="stat-item">
            <span className="stat-number neon-text orange">1st</span>
            <span className="stat-label">Competition Rank</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;