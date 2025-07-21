import React, { useState } from 'react';
import { toast } from 'sonner';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mohammed-fareed-c',
      icon: '💼',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Cutie-pie0561',
      icon: '🐱',
      color: '#333'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mohammed_fareed_0561/?__pwa=1',
      icon: '📸',
      color: '#e4405f'
    },
    {
      name: 'Email',
      url: 'mailto:ruzaifareed.06@gmail',
      icon: '📧',
      color: '#ea4335'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/918940820065',
      icon: '💬',
      color: '#25d366'
    },
    {
      name: 'Phone',
      url: 'tel:+918940820065',
      icon: '📞',
      color: '#8c52ff'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          style: {
            background: '#1a1a1a',
            color: '#00ffff',
            border: '1px solid #00ffff',
          },
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          position: '',
          mobile: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again later.', {
        style: {
          background: '#1a1a1a',
          color: '#ff6b35',
          border: '1px solid #ff6b35',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title neon-text">Contact Me</h2>
        
        <div className="contact-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label neon-text aqua-blue">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label neon-text aqua-blue">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company" className="form-label neon-text aqua-blue">
                    Company/Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="position" className="form-label neon-text aqua-blue">
                    Your Position/Role *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="e.g., HR Manager, Tech Lead"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mobile" className="form-label neon-text aqua-blue">
                  Mobile Number (Optional)
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label neon-text aqua-blue">
                  What would you like to tell me? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows="5"
                  placeholder="Tell me about job opportunities, collaborations, or just say hello!"
                />
              </div>

              <button 
                type="submit" 
                className={`submit-btn liquid-morph-element ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                <div className="btn-content">
                  {isSubmitting ? (
                    <>
                      <div className="submit-animation">
                        <div className="liquid-progress"></div>
                      </div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </div>
              </button>
            </form>
          </div>

          <div className="contact-sidebar">
            <div className="contact-info">
              <h3 className="sidebar-title neon-text purple">Let's Connect!</h3>
              <p className="contact-description">
                I'm always excited to discuss <span className="neon-orange">data science opportunities</span>, 
                <span className="neon-orange"> collaboration projects</span>, or just have a chat about 
                the latest trends in <span className="neon-orange">AI and machine learning</span>.
              </p>
            </div>

            <div className="social-links">
              <h4 className="social-title neon-text aqua-blue">Find me on:</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="quick-contact">
              <h4 className="quick-title neon-text purple">Quick Contact</h4>
              <div className="quick-info">
                <div className="info-line">
                  <span className="info-icon neon-orange">📧</span>
                  <span className="info-text">fareed.ds.ai@gmail.com</span>
                </div>
                <div className="info-line">
                  <span className="info-icon neon-orange">📞</span>
                  <span className="info-text">+91 8940820065</span>
                </div>
                <div className="info-line">
                  <span className="info-icon neon-orange">📍</span>
                  <span className="info-text">Chennai, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
