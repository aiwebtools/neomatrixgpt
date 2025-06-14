import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 neo-glass shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <div className="relative h-10 w-10 perspective">
              <div className="absolute inset-0 transform-3d animate-float">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path 
                    d="M20 0 L40 10 L40 30 L20 40 L0 30 L0 10 Z" 
                    fill="none" 
                    stroke="#00FF41" 
                    strokeWidth="1.5"
                    className="animate-pulse-glow"
                  />
                  <path 
                    d="M20 0 L20 40 M0 10 L20 20 L40 10" 
                    fill="none" 
                    stroke="#00FF41" 
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight neo-glow">NEO-MATRIX GPT</h1>
              <p className="text-xs opacity-70">Presented by AiWebTools.Ai</p>
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200 flex items-center space-x-2"
            >
              <span>MATRIX NEO GPT</span>
            </a>
            <Link 
              to="/architect"
              className="flex items-center space-x-2 text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
            >
              <span>FOLLOW THE WHITE RABBIT</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5Z" fill="#ffffff"/>
                <path d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5C12 6.65685 13.3431 8 15 8Z" fill="#ffffff"/>
                <path d="M14.5 21.9999C14.5 21.9999 14.5 21.9999 14.5 21.9999C14.5 20.0669 12.5 14.5 12.5 14.5C12.5 14.5 10.5 20.0669 10.5 21.9999H14.5Z" fill="#ffffff"/>
                <path d="M15 11C15 12.1046 14.1046 13 13 13H12H11C9.89543 13 9 12.1046 9 11V10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V11Z" fill="#ffffff"/>
              </svg>
            </Link>
            <a 
              href="#faq" 
              className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
            >
              DISCLAIMER
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix-green hover:text-matrix-lightgreen transition-colors duration-200"
            >
              MORE AI TOOLS
            </a>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-matrix-green hover:text-matrix-lightgreen transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden neo-glass absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 border-t border-matrix-green/30 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a 
            href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-matrix-green hover:text-matrix-lightgreen py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            MATRIX NEO GPT
          </a>
          <Link 
            to="/architect"
            className="flex items-center space-x-2 py-2 text-matrix-green hover:text-matrix-lightgreen transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>FOLLOW THE WHITE RABBIT</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5Z" fill="#ffffff"/>
              <path d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5C12 6.65685 13.3431 8 15 8Z" fill="#ffffff"/>
              <path d="M14.5 21.9999C14.5 21.9999 14.5 21.9999 14.5 21.9999C14.5 20.0669 12.5 14.5 12.5 14.5C12.5 14.5 10.5 20.0669 10.5 21.9999H14.5Z" fill="#ffffff"/>
              <path d="M15 11C15 12.1046 14.1046 13 13 13H12H11C9.89543 13 9 12.1046 9 11V10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V11Z" fill="#ffffff"/>
            </svg>
          </Link>
          <a 
            href="#faq" 
            className="block text-matrix-green hover:text-matrix-lightgreen py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#disclaimer" 
            className="block text-matrix-green hover:text-matrix-lightgreen py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            DISCLAIMER
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-matrix-green hover:text-matrix-lightgreen py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            MORE AI TOOLS
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
