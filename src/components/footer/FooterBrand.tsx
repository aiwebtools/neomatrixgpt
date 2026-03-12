
import React from 'react';

const FooterBrand: React.FC = () => {
  return (
    <div className="md:col-span-2">
      <a 
        href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-2 mb-4"
      >
        <div className="relative h-10 w-10">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <path 
              d="M20 0 L40 10 L40 30 L20 40 L0 30 L0 10 Z" 
              fill="none" 
              stroke="#00FF41" 
              strokeWidth="1.5"
            />
            <path 
              d="M20 0 L20 40 M0 10 L20 20 L40 10" 
              fill="none" 
              stroke="#00FF41" 
              strokeWidth="1"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight">NEO-MATRIX GPT</h3>
          <p className="text-xs opacity-70">Presented by AiWebTools.Ai</p>
        </div>
      </a>
      
      <a 
        href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 mb-4 text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
      >
        <span>FOLLOW THE WHITE RABBIT</span>
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5Z" fill="#ffffff"/>
          <path d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5C12 6.65685 13.3431 8 15 8Z" fill="#ffffff"/>
          <path d="M14.5 21.9999C14.5 21.9999 14.5 21.9999 14.5 21.9999C14.5 20.0669 12.5 14.5 12.5 14.5C12.5 14.5 10.5 20.0669 10.5 21.9999H14.5Z" fill="#ffffff"/>
          <path d="M15 11C15 12.1046 14.1046 13 13 13H12H11C9.89543 13 9 12.1046 9 11V10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V11Z" fill="#ffffff"/>
        </svg>
      </a>
      
      <p className="text-matrix-green/80 mb-6">
        Unlock the truth of your reality. Neo-Matrix GPT leads you on a journey of awakening, challenging your perception through cryptic codes and philosophical exploration.
      </p>
      
      <div className="flex space-x-4">
        <a 
          href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 neo-glass rounded-full flex items-center justify-center hover:bg-matrix-green/10 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </a>
        
        <a 
          href="https://aiwebtools.lovable.app/?via=aiwebtools"
          target="_blank" 
          rel="noopener noreferrer"
          className="w-10 h-10 neo-glass rounded-full flex items-center justify-center hover:bg-matrix-green/10 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
