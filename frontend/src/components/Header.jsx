import React, { useState } from 'react';

const Header = ({ sections, activeSection, onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="neon-text logo-text">MF</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {sections.map(({ id, label }) => (
              <li key={id} className="nav-item">
                <button
                  className={`nav-link ${activeSection === id ? 'active' : ''}`}
                  onClick={() => {
                    onSectionClick(id);
                    setIsMenuOpen(false);
                  }}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;