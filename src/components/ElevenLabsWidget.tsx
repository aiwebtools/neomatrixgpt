
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
      
      customElement.appendChild(button);
      widgetRef.current.appendChild(customElement);
    }
  }, []);

  return <div ref={widgetRef} className="eleven-labs-widget" />;
};

export default ElevenLabsWidget;
