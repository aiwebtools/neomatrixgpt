
import React, { useEffect, useRef } from 'react';

const ElevenLabsWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set the API key for Eleven Labs
    if (window && typeof window !== 'undefined') {
      (window as any).ELEVENLABS_API_KEY = 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2';
    }

    // After the component mounts, we'll manually insert the custom element
    if (widgetRef.current) {
      const customElement = document.createElement('elevenlabs-convai');
      customElement.setAttribute('agent-id', 'n3MHWTh0w5IAaUo1aAJE');
      
      const button = document.createElement('button');
      button.setAttribute('slot', 'button');
      button.className = 'matrix-convai-button';
      button.textContent = 'USE NEO-MATRIX LIVE VOICE MODE HERE';
      
      // Add inline styles to ensure the styling is applied
      button.style.backgroundColor = 'rgba(0, 59, 0, 0.8)';
      button.style.color = '#00FF41';
      button.style.border = '1px solid #00FF41';
      button.style.padding = '10px 15px';
      button.style.borderRadius = '8px';
      button.style.fontFamily = '"Share Tech Mono", monospace';
      button.style.cursor = 'pointer';
      button.style.transition = 'all 0.3s ease';
      button.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.3)';
      button.style.fontSize = '12px';
      button.style.textTransform = 'uppercase';
      
      // Add hover state through event listeners
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'rgba(0, 255, 65, 0.2)';
        button.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.5)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'rgba(0, 59, 0, 0.8)';
        button.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.3)';
      });
      
      customElement.appendChild(button);
      widgetRef.current.appendChild(customElement);
    }
  }, []);

  return <div ref={widgetRef} className="eleven-labs-widget" />;
};

export default ElevenLabsWidget;
