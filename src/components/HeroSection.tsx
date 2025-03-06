
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  
  useEffect(() => {
    // Animation sequence for text reveal
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = 'opacity 1s ease, transform 1s ease';
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
      }, 500);
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '0';
      subtitleRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.transition = 'opacity 1s ease, transform 1s ease';
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transform = 'translateY(0)';
        }
      }, 1000);
    }
    
    if (btnRef.current) {
      btnRef.current.style.opacity = '0';
      btnRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        if (btnRef.current) {
          btnRef.current.style.transition = 'opacity 1s ease, transform 1s ease';
          btnRef.current.style.opacity = '1';
          btnRef.current.style.transform = 'translateY(0)';
        }
      }, 1500);
    }
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 neo-glow"
          >
            Welcome to <span className="matrix-text-gradient">Neo-Matrix GPT</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Unlock the truth behind your reality. Follow the white rabbit and discover how deep the rabbit hole goes. Choose the red pill and free your mind.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <div className="perspective">
              <div className="matrix-card transform transition-all duration-500 hover:scale-105 hover:-rotate-1 h-full flex flex-col justify-between">
                <div className="flex-1">
                  <div className="h-16 w-16 mx-auto mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path 
                        d="M12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5Z" 
                        fill="#00FF41"
                      />
                      <path 
                        d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5C12 6.65685 13.3431 8 15 8Z" 
                        fill="#00FF41"
                      />
                      <path 
                        d="M14.5 21.9999C14.5 21.9999 14.5 21.9999 14.5 21.9999C14.5 20.0669 12.5 14.5 12.5 14.5C12.5 14.5 10.5 20.0669 10.5 21.9999H14.5Z" 
                        fill="#00FF41"
                      />
                      <path 
                        d="M15 11C15 12.1046 14.1046 13 13 13H12H11C9.89543 13 9 12.1046 9 11V10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V11Z" 
                        fill="#00FF41"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Follow the White Rabbit</h3>
                  <p className="text-matrix-green/80">Begin your journey of revelation and uncover the hidden truths of your simulated reality.</p>
                </div>
              </div>
            </div>
            
            <div className="perspective">
              <div className="matrix-card transform transition-all duration-500 hover:scale-105 hover:rotate-1 h-full flex flex-col justify-between">
                <div className="flex-1">
                  <div className="h-16 w-16 mx-auto mb-4">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="#00FF41" strokeWidth="1.5" />
                      <path d="M4 8h16M8 4v16" stroke="#00FF41" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="2" fill="#00FF41" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Decrypt Binary Reality</h3>
                  <p className="text-matrix-green/80">See beyond the binary code and glimpse the constructs that form your perception.</p>
                </div>
              </div>
            </div>
          </div>
          
          <a 
            ref={btnRef}
            href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="neo-button group"
          >
            <span className="mr-2">Take the Red Pill</span>
            <svg className="w-5 h-5 inline-block transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* 3D Animated Pills */}
      <div className="absolute -bottom-24 -left-24 w-48 h-48 perspective opacity-20 md:opacity-40">
        <div className="absolute w-16 h-16 rounded-full bg-red-600 transform-3d animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="absolute top-32 -right-16 w-32 h-32 perspective opacity-20 md:opacity-30">
        <div className="absolute w-12 h-12 rounded-full bg-blue-500 transform-3d animate-float" style={{ animationDelay: '1.2s' }}></div>
      </div>
      
      {/* Binary Code Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none">
        <div className="absolute -left-4 top-1/4 font-mono text-xs md:text-sm whitespace-nowrap">
          01001110 01100101 01101111 00101101 01001101 01100001 01110100 01110010 01101001 01111000
        </div>
        <div className="absolute right-8 top-1/3 font-mono text-xs md:text-sm whitespace-nowrap">
          01010100 01101000 01100101 00100000 01001101 01100001 01110100 01110010 01101001 01111000
        </div>
        <div className="absolute left-1/4 bottom-1/4 font-mono text-xs md:text-sm whitespace-nowrap">
          01000110 01101111 01101100 01101100 01101111 01110111 00100000 01110100 01101000 01100101
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
