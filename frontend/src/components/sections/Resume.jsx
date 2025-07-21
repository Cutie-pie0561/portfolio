import React, { useState } from 'react';

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Mock resume data - replace with actual resume
  const resumePreview = {
    url: 'https://via.placeholder.com/595x842/1a1a1a/ffffff?text=Mohammed+Fareed+Resume+Preview',
    fileName: 'Mohammed_Fareed_Resume.pdf'
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download animation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real implementation, you would fetch and download the actual resume
    console.log('Downloading resume...');
    
    setIsDownloading(false);
  };

  const handleView = () => {
    // In a real implementation, you would open the resume in a new tab
    window.open(resumePreview.url, '_blank');
  };

  return (
    <section className="resume-section">
      <div className="container">
        <h2 className="section-title neon-text">My Resume</h2>
        
        <div className="resume-content">
          <div className="resume-viewer">
            <div className="resume-preview">
              <img 
                src={resumePreview.url} 
                alt="Resume Preview" 
                className="resume-image"
              />
              <div className="preview-overlay">
                <button 
                  className="view-btn hover-effect"
                  onClick={handleView}
                >
                  <span className="neon-text aqua-blue">👁 View Full Resume</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="resume-actions">
            <div className="action-buttons">
              <button 
                className={`download-btn liquid-morph ${isDownloading ? 'downloading' : ''}`}
                onClick={handleDownload}
                disabled={isDownloading}
              >
                <div className="btn-content">
                  {isDownloading ? (
                    <>
                      <div className="download-animation">
                        <div className="download-progress"></div>
                      </div>
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <span className="download-icon">⬇</span>
                      <span>Download Resume</span>
                    </>
                  )}
                </div>
              </button>
              
              <button 
                className="quick-view-btn hover-effect"
                onClick={handleView}
              >
                <span className="neon-text purple">Quick View</span>
              </button>
            </div>
            
            <div className="resume-info">
              <div className="info-item">
                <span className="info-label">File Type:</span>
                <span className="info-value neon-orange">PDF</span>
              </div>
              <div className="info-item">
                <span className="info-label">Last Updated:</span>
                <span className="info-value neon-orange">January 2025</span>
              </div>
              <div className="info-item">
                <span className="info-label">File Size:</span>
                <span className="info-value neon-orange">245 KB</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resume-highlights">
          <h3 className="highlights-title neon-text aqua-blue">Resume Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon neon-text purple">🎓</div>
              <div className="highlight-content">
                <h4>Education</h4>
                <p>B.Tech in AI & Data Science</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon neon-text aqua-blue">💼</div>
              <div className="highlight-content">
                <h4>Experience</h4>
                <p>2+ Internships in Data Science</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon neon-text orange">🏆</div>
              <div className="highlight-content">
                <h4>Achievements</h4>
                <p>4+ Certifications & Awards</p>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon neon-text purple">🚀</div>
              <div className="highlight-content">
                <h4>Projects</h4>
                <p>3+ Completed Data Science Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;