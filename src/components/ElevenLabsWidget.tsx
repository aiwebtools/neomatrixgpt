
import React, { useEffect } from 'react';

const ElevenLabsWidget = () => {
  useEffect(() => {
    // Set the API key for Eleven Labs
    if (window && typeof window !== 'undefined') {
      (window as any).ELEVENLABS_API_KEY = 'sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2';
    }
  }, []);

  return (
    <div className="eleven-labs-widget">
      <elevenlabs-convai agent-id="n3MHWTh0w5IAaUo1aAJE">
        <button slot="button" className="matrix-convai-button">USE NEO-MATRIX LIVE VOICE MODE HERE</button>
      </elevenlabs-convai>
    </div>
  );
};

export default ElevenLabsWidget;
