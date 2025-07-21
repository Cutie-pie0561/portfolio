import React, { useState } from 'react';

const Skills = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const skillCategories = [
    {
      id: 'technical',
      title: 'Technical Skills',
      color: '#8c52ff',
      skills: [
        { name: 'Python', level: 90, details: 'NumPy, Pandas, Matplotlib, Scikit-learn' },
        { name: 'SQL', level: 85, details: 'MySQL, PostgreSQL' },
        { name: 'Power BI & Tableau', level: 80, details: 'Data Visualization & Dashboards' },
        { name: 'Web Development', level: 75, details: 'HTML, CSS, JavaScript, React.js' },
        { name: 'Data Analysis', level: 88, details: 'Statistical Analysis & Visualization' },
        { name: 'Machine Learning', level: 82, details: 'Algorithms & Model Building' },
        { name: 'Git & GitHub', level: 85, details: 'Version Control & Collaboration' },
      ]
    },
    {
      id: 'communication',
      title: 'Communication Skills',
      color: '#00ffff',
      skills: [
        { name: 'Professional English', level: 92, details: 'Fluent in written and spoken English' },
        { name: 'Report Writing', level: 88, details: 'Technical documentation and analysis' },
        { name: 'Public Speaking', level: 78, details: 'Presentations and workshops' },
        { name: 'Team Collaboration', level: 90, details: 'Cross-functional team coordination' },
      ]
    },
    {
      id: 'soft',
      title: 'Non-Technical Skills',
      color: '#ff6b35',
      skills: [
        { name: 'Critical Thinking', level: 90, details: 'Analytical problem-solving approach' },
        { name: 'Problem Solving', level: 88, details: 'Creative solutions to complex challenges' },
        { name: 'Self-Learning', level: 95, details: 'Continuous skill development' },
        { name: 'Project Management', level: 80, details: 'Basic project planning and execution' },
        { name: 'Attention to Detail', level: 92, details: 'Precision in analysis and coding' },
      ]
    }
  ];

  const openCard = (categoryId) => {
    setSelectedCard(categoryId === selectedCard ? null : categoryId);
  };

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title neon-text">My Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div 
              key={category.id}
              className={`skill-card ${selectedCard === category.id ? 'expanded' : ''}`}
              onClick={() => openCard(category.id)}
              style={{ '--category-color': category.color }}
            >
              <div className="card-header">
                <h3 className="card-title" style={{ color: category.color }}>
                  {category.title}
                </h3>
                <div className="expand-icon">
                  {selectedCard === category.id ? '−' : '+'}
                </div>
              </div>
              
              {selectedCard === category.id && (
                <div className="card-content">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: category.color
                          }}
                        ></div>
                      </div>
                      <p className="skill-details">{skill.details}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;