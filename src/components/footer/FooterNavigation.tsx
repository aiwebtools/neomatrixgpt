
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FooterNavigation: React.FC = () => {
  const location = useLocation();

  const handleArchitectClick = (e: React.MouseEvent) => {
    if (location.pathname === '/architect') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Navigation</h3>
      <ul className="space-y-3">
        <li>
          <a 
            href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
          >
            MATRIX NEO GPT
          </a>
        </li>
        <li>
          <Link 
            to="/architect"
            onClick={handleArchitectClick}
            className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
          >
            Meet The Architect
          </Link>
        </li>
        <li>
          <a 
            href="#faq" 
            className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
          >
            FAQ
          </a>
        </li>
        <li>
          <a 
            href="#disclaimer" 
            className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
          >
            Disclaimer
          </a>
        </li>
        <li>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
          >
            More AI Tools
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;
