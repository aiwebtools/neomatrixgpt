
import React, { useState } from 'react';
import { MessageSquare, Phone } from 'lucide-react';
 
// API key configuration
const ELEVEN_LABS_API_KEY = "sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2";

const ElevenLabsWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      {/* Matrix-themed floating button */}
      <button 
        onClick={toggleWidget}
        className="w-16 h-16 rounded-full bg-matrix-darkgreen border-2 border-matrix-green shadow-lg shadow-matrix-green/40 flex items-center justify-center animate-pulse-glow transition-all duration-300 hover:scale-110"
        aria-label="Open AI Assistant"
      >
        {isOpen ? (
          <Phone className="text-matrix-green w-8 h-8" />
        ) : (
          <MessageSquare className="text-matrix-green w-8 h-8" />
        )}
      </button>
      
      {/* Widget container */}
      <div 
        className={`mt-4 transform transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{
          width: '400px',
          height: '600px',
          maxWidth: '90vw',
          maxHeight: '70vh'
        }}
      >
        {/* Directly embed the Eleven Labs widget */}
        {isOpen && (
          <elevenlabs-convai 
            agent-id="n3MHWTh0w5IAaUo1aAJE"
            className="w-full h-full rounded-xl overflow-hidden border-2 border-matrix-green shadow-lg shadow-matrix-green/30"
          ></elevenlabs-convai>
        )}
      </div>
      
      {/* Custom Matrix-themed label */}
      <div 
        className={`mt-2 px-4 py-2 neo-glass rounded-lg text-center transform transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <span className="text-matrix-green font-matrix text-sm animate-glow">
          USE NEO-MATRIX LIVE VOICE MODE HERE
        </span>
      </div>
    </div>
  );
};

// Add TypeScript global declaration for Eleven Labs widget
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
      }, HTMLElement>;
    }
  }
}

export default ElevenLabsWidget;
