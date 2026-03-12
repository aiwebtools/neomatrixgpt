
import React from 'react';

const FooterBottom: React.FC = () => {
  return (
    <div className="pt-8 border-t border-matrix-green/20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-matrix-green hover:text-matrix-lightgreen transition-colors"
          >
            © 2025 AI WEB TOOLS LLC All rights reserved.
          </a>
        </div>
        
        <div className="flex space-x-6">
          <a 
            href="https://openai.com/policies/privacy-policy/"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-matrix-green hover:text-matrix-lightgreen transition-colors text-sm"
          >
            Privacy Policy
          </a>
          <a 
            href="https://aiwebtools.lovable.app/disclaimers"
            target="_blank" 
            rel="noopener noreferrer"
            className="text-matrix-green hover:text-matrix-lightgreen transition-colors text-sm"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
