import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Customer Churn Analysis – Jio',
      description: 'Analyzed telecom customer data to identify churn patterns and suggest strategies to reduce customer loss.',
      tools: ['Power BI', 'Excel'],
      image: 'https://images.unsplash.com/photo-1560306990-18fa759c8713?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydHN8ZW58MHx8fGJsdWV8MTc1MzEwNjYyMXww&ixlib=rb-4.1.0&q=85',
      features: [
        'Interactive dashboards',
        'Churn prediction model visuals', 
        'KPI cards and slicers'
      ],
      details: 'This project involved deep analysis of telecom customer behavior patterns, identifying key factors contributing to customer churn such as service usage patterns, billing history, and customer service interactions. The Power BI dashboard provides actionable insights for retention strategies.'
    },
    {
      id: 2,
      title: 'Starbucks Global Sales Report',
      description: 'Developed a dynamic dashboard to visualize sales performance across countries and product categories.',
      tools: ['Tableau'],
      image: 'https://images.unsplash.com/photo-1572025418633-489b46e62332?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxMDY2MTF8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Region-wise sales breakdown',
        'Profit margin insights',
        'Time-based performance trends'
      ],
      details: 'Created comprehensive sales analytics dashboard for Starbucks global operations, featuring interactive visualizations that help stakeholders understand revenue patterns, identify top-performing regions, and track seasonal trends in product sales.'
    },
    {
      id: 3,
      title: '2D Radar Object Tracker',
      description: 'A simulation project to track and visualize object motion in 2D radar space using sensor data.',
      tools: ['Python', 'Matplotlib', 'Tkinter'],
      image: 'https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxkYXRhJTIwZGFzaGJvYXJkfGVufDB8fHxibHVlfDE3NTMxMDY2MTF8MA&ixlib=rb-4.1.0&q=85',
      features: [
        'Live object movement visualization',
        'Basic Kalman Filter integration',
        'User-controlled radar simulation'
      ],
      details: 'Developed a real-time object tracking system that simulates radar detection and tracking capabilities. The system uses mathematical models to predict object trajectories and provides an interactive interface for controlling radar parameters and viewing tracked objects.'
    }
  ];

  const openProject = (projectId) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title neon-text">My Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`project-card ${selectedProject === project.id ? 'expanded' : ''}`}
              onClick={() => openProject(project.id)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="image-overlay">
                  <span className="expand-text">Click to expand</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title neon-text purple">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tools">
                  {project.tools.map((tool, index) => (
                    <span key={index} className="tool-tag neon-orange">{tool}</span>
                  ))}
                </div>
                
                {selectedProject === project.id && (
                  <div className="project-details">
                    <div className="features-section">
                      <h4 className="features-title neon-text aqua-blue">Key Features:</h4>
                      <ul className="features-list">
                        {project.features.map((feature, index) => (
                          <li key={index} className="feature-item">{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="details-section">
                      <h4 className="details-title neon-text aqua-blue">Project Details:</h4>
                      <p className="details-text">{project.details}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;