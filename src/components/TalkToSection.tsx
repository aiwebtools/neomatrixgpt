
import React from 'react';
import { Brain, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const TalkToSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neo-glow">Choose Your Guide</h2>
          <p className="text-lg max-w-2xl mx-auto text-matrix-green/80">
            Begin your journey into the depths of reality with either Morpheus or The Architect.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Talk to Morpheus */}
          <div className="matrix-card group hover:scale-105 transition-all duration-300 text-center py-8">
            <div className="flex flex-col items-center">
              <div className="text-matrix-green mb-4">
                <Brain size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 neo-glow">Talk to Morpheus</h3>
              <p className="text-matrix-green/80 text-sm mb-6 max-w-xs">
                Your guide through the awakening process. Decode binary messages and explore philosophical depths.
              </p>
              <a 
                href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-button group"
              >
                <span className="mr-2">Enter the Matrix</span>
                <svg className="w-5 h-5 inline-block transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Talk to The Architect */}
          <div className="matrix-card group hover:scale-105 transition-all duration-300 text-center py-8">
            <div className="flex flex-col items-center">
              <div className="text-matrix-green mb-4">
                <Cpu size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 neo-glow">Talk to The Architect</h3>
              <p className="text-matrix-green/80 text-sm mb-6 max-w-xs">
                Explore quantum reality and the fundamental principles that govern existence itself.
              </p>
              <Link 
                to="/architect" 
                className="neo-button group"
              >
                <span className="mr-2">Meet the Architect</span>
                <svg className="w-5 h-5 inline-block transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkToSection;
