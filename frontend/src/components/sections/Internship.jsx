import React, { useState } from 'react';

const Internship = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [certificateViewer, setCertificateViewer] = useState(null);

  // Mock internship data - replace with actual internship details
  const internships = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      role: 'Data Science Intern',
      duration: 'June 2024 - August 2024',
      location: 'Chennai, Tamil Nadu',
      description: 'Worked on customer analytics and predictive modeling projects using Python and machine learning techniques.',
      achievements: [
        'Developed customer churn prediction model with 87% accuracy',
        'Created interactive dashboards using Power BI',
        'Collaborated with cross-functional teams on data-driven solutions',
        'Presented findings to senior management team'
      ],
      certificate: 'https://via.placeholder.com/600x400/8c52ff/ffffff?text=TechCorp+Solutions+Certificate',
      skills: ['Python', 'Machine Learning', 'Power BI', 'SQL', 'Statistical Analysis']
    },
    {
      id: 2,
      company: 'DataViz Analytics',
      role: 'Business Intelligence Intern',
      duration: 'January 2024 - March 2024',
      location: 'Remote',
      description: 'Focused on business intelligence solutions and data visualization for retail clients.',
      achievements: [
        'Built comprehensive sales analytics dashboard',
        'Optimized data pipeline reducing processing time by 40%',
        'Conducted market research and competitive analysis',
        'Trained junior analysts on Tableau best practices'
      ],
      certificate: 'https://via.placeholder.com/600x400/00ffff/000000?text=DataViz+Analytics+Certificate',
      skills: ['Tableau', 'SQL', 'Data Modeling', 'Business Analysis', 'ETL Processes']
    }
  ];

  const openInternship = (internshipId) => {
    setSelectedInternship(internshipId === selectedInternship ? null : internshipId);
  };

  const viewCertificate = (certificate, e) => {
    e.stopPropagation();
    setCertificateViewer(certificate);
  };

  const closeCertificateViewer = () => {
    setCertificateViewer(null);
  };

  return (
    <section className="internship-section">
      <div className="container">
        <h2 className="section-title neon-text">My Internships</h2>
        
        <div className="internships-grid">
          {internships.map((internship) => (
            <div 
              key={internship.id}
              className={`internship-card ${selectedInternship === internship.id ? 'expanded' : ''}`}
              onClick={() => openInternship(internship.id)}
            >
              <div className="card-header">
                <div className="company-info">
                  <h3 className="company-name neon-text purple">{internship.company}</h3>
                  <p className="role-title neon-text aqua-blue">{internship.role}</p>
                  <div className="internship-meta">
                    <span className="duration neon-orange">{internship.duration}</span>
                    <span className="location">{internship.location}</span>
                  </div>
                </div>
                
                <button 
                  className="certificate-btn"
                  onClick={(e) => viewCertificate(internship.certificate, e)}
                  title="View Certificate"
                >
                  <span className="neon-text">📜</span>
                </button>
              </div>
              
              <div className="card-content">
                <p className="internship-description">{internship.description}</p>
                
                {selectedInternship === internship.id && (
                  <div className="internship-details">
                    <div className="achievements-section">
                      <h4 className="subsection-title neon-text aqua-blue">Key Achievements:</h4>
                      <ul className="achievements-list">
                        {internship.achievements.map((achievement, index) => (
                          <li key={index} className="achievement-item">
                            <span className="bullet neon-orange">▸</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="skills-section">
                      <h4 className="subsection-title neon-text aqua-blue">Technologies Used:</h4>
                      <div className="skills-tags">
                        {internship.skills.map((skill, index) => (
                          <span key={index} className="skill-tag neon-orange">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certificate Viewer Modal */}
      {certificateViewer && (
        <div className="certificate-viewer-overlay" onClick={closeCertificateViewer}>
          <div className="certificate-viewer" onClick={(e) => e.stopPropagation()}>
            <button className="close-viewer" onClick={closeCertificateViewer}>
              <span className="neon-text">×</span>
            </button>
            <div className="certificate-container">
              <img src={certificateViewer} alt="Certificate" className="certificate-image" />
              <div className="certificate-watermark">
                <span className="watermark-text">Certificate Preview - Download Not Available</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Internship;