
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const FooterContact: React.FC = () => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Contact</h3>
      <ul className="space-y-3">
        <li>
          <a 
            href="tel:4758008096"
            className="flex items-center space-x-2 text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
          >
            <Phone size={16} />
            <span>(475) 800-8096</span>
          </a>
        </li>
        <li>
          <a 
            href="mailto:Contact@ai-webtools.com"
            className="flex items-center space-x-2 text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
          >
            <Mail size={16} />
            <span>Contact@ai-webtools.com</span>
          </a>
        </li>
      </ul>
      
      <div className="mt-8">
        <a 
          href="https://www.aiwebtools.ai"
          target="_blank" 
          rel="noopener noreferrer"
          className="neo-button text-sm px-4 py-2 rounded-full"
        >
          More AI Tools
        </a>
      </div>
    </div>
  );
};

export default FooterContact;
