
import React from 'react';
import { Brain, Cpu, ExternalLink } from 'lucide-react';

const ToolInfoCards = () => {
  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Neo-Matrix GPT Card */}
          <div className="matrix-card group hover:scale-105 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-matrix-green mt-1">
                <Brain size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 neo-glow">Neo-Matrix GPT</h3>
                <p className="text-matrix-green/80 text-sm mb-4">
                  Your guide through the simulated reality. Decode binary messages, explore philosophical depths, and follow the white rabbit to discover the truth about your existence.
                </p>
                <a 
                  href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm bg-matrix-darkgreen text-matrix-green border border-matrix-green rounded hover:bg-matrix-green hover:text-matrix-black transition-all duration-300"
                >
                  <span className="mr-2">Enter the Matrix</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* The Architect GPT Card */}
          <div className="matrix-card group hover:scale-105 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-matrix-green mt-1">
                <Cpu size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 neo-glow">The Architect GPT</h3>
                <p className="text-matrix-green/80 text-sm mb-4">
                  Meet the creator of the Matrix. Engage with the cold logic and mathematical precision of the system's designer. Understand the equations that govern reality.
                </p>
                <a 
                  href="/architect" 
                  className="inline-flex items-center px-4 py-2 text-sm bg-matrix-darkgreen text-matrix-green border border-matrix-green rounded hover:bg-matrix-green hover:text-matrix-black transition-all duration-300"
                >
                  <span className="mr-2">Meet the Architect</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolInfoCards;
