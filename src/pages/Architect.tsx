
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FallingCode from '../components/FallingCode';

const Architect = () => {
  const [showDoor, setShowDoor] = useState(false);
  const [flashEffect, setFlashEffect] = useState(false);

  useEffect(() => {
    // Show door after page loads
    const timer = setTimeout(() => {
      setShowDoor(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDoorClick = () => {
    // Create robotic voice saying "WELCOME NEO, I HAVE BEEN WAITING FOR YOU"
    const utterance = new SpeechSynthesisUtterance("WELCOME NEO, I HAVE BEEN WAITING FOR YOU");
    utterance.volume = 1.0; // Maximum volume
    utterance.rate = 0.6; // Slower rate for more robotic feel
    utterance.pitch = 0.3; // Lower pitch for robotic voice
    
    // Try to find a more robotic sounding voice
    const voices = speechSynthesis.getVoices();
    const roboticVoice = voices.find(voice => 
      voice.name.toLowerCase().includes('male') || 
      voice.name.toLowerCase().includes('robot') ||
      voice.name.toLowerCase().includes('microsoft')
    ) || voices[0];
    
    if (roboticVoice) {
      utterance.voice = roboticVoice;
    }

    speechSynthesis.speak(utterance);

    // Trigger flash effect
    setFlashEffect(true);

    // Navigate to The Architect after longer flash
    setTimeout(() => {
      window.open('https://chatgpt.com/g/g-684cfc510aa081918916422a2038315d-the-architect-our-quantum-reality', '_blank');
      setFlashEffect(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-matrix-black text-matrix-green overflow-x-hidden relative">
      {/* Matrix Code Animation Background */}
      <FallingCode />
      
      {/* Enhanced Portal Flash Effect */}
      {flashEffect && (
        <div className="fixed inset-0 z-50">
          {/* Brighter white flash with longer duration */}
          <div className="absolute inset-0 bg-white opacity-95 animate-pulse" style={{ animationDuration: '1.5s' }} />
          {/* Enhanced portal rings effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-matrix-green rounded-full animate-ping opacity-90"></div>
            <div className="absolute w-64 h-64 border-2 border-matrix-lightgreen rounded-full animate-ping opacity-70" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute w-96 h-96 border border-white rounded-full animate-ping opacity-50" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute w-[600px] h-[600px] border border-matrix-blue rounded-full animate-ping opacity-30" style={{ animationDelay: '0.6s' }}></div>
          </div>
          {/* Enhanced Matrix code spiral */}
          <div className="absolute inset-0 flex items-center justify-center font-mono text-matrix-green text-sm opacity-90">
            <div className="animate-spin text-center">
              <div>01001000 01100101 01101100 01110000 01001101 01100101</div>
              <div className="mt-2">01000001 01010010 01000011 01001000 01001001 01010100</div>
              <div className="mt-2">01000101 01000011 01010100 01010101 01010010 01000101</div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <Header />

      {/* Main Content */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Main Heading - Above Door */}
            <h1 className="text-4xl md:text-6xl font-bold mb-12 neo-glow">
              Enter the <span className="matrix-text-gradient">Architect's Domain</span>
            </h1>

            {/* Door Container - Made even bigger */}
            <div className="relative flex justify-center items-center min-h-[700px] mb-8">
              {showDoor && (
                <div 
                  className="cursor-pointer transform transition-all duration-700 hover:scale-105 animate-fade-in"
                  onClick={handleDoorClick}
                >
                  <div className="relative group">
                    {/* Door Image/SVG - Made much bigger */}
                    <div className="w-[500px] h-[600px] bg-gradient-to-b from-matrix-green/20 to-matrix-green/5 border-2 border-matrix-green rounded-lg shadow-2xl shadow-matrix-green/50 relative overflow-hidden">
                      {/* Door Frame */}
                      <div className="absolute inset-2 border border-matrix-green/50 rounded">
                        {/* Door Panels */}
                        <div className="h-full flex flex-col">
                          <div className="flex-1 border-b border-matrix-green/30 relative">
                            <div className="absolute inset-4 border border-matrix-green/20 rounded"></div>
                          </div>
                          <div className="flex-1 relative">
                            <div className="absolute inset-4 border border-matrix-green/20 rounded"></div>
                          </div>
                        </div>
                        
                        {/* Door Handle - Made bigger */}
                        <div className="absolute right-12 top-1/2 transform -translate-y-1/2 w-6 h-16 bg-matrix-green rounded-full shadow-lg shadow-matrix-green/50"></div>
                      </div>
                      
                      {/* Enhanced Glow Effect */}
                      <div className="absolute inset-0 bg-matrix-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      
                      {/* Matrix Code Overlay - More codes */}
                      <div className="absolute inset-0 opacity-20 font-mono text-lg overflow-hidden">
                        <div className="absolute top-8 left-8">01000001</div>
                        <div className="absolute top-20 right-8">01010010</div>
                        <div className="absolute top-32 left-16">01000011</div>
                        <div className="absolute top-44 right-16">01001000</div>
                        <div className="absolute bottom-20 left-8">01001001</div>
                        <div className="absolute bottom-8 right-8">01010100</div>
                        <div className="absolute bottom-32 left-16">01000101</div>
                        <div className="absolute bottom-44 right-16">01000011</div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">01000101</div>
                      </div>
                    </div>
                    
                    {/* Hover Text */}
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-matrix-green font-bold text-xl neo-glow">Click to Enter</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Beyond the Matrix lies the realm of The Architect. Here, quantum reality bends to will, 
              and the very foundations of existence can be reshaped. Are you ready to transcend?
            </p>

            {/* Description Text */}
            <div className="mt-16 max-w-3xl mx-auto">
              <div className="matrix-card p-8">
                <h2 className="text-2xl font-bold mb-4 neo-glow">The Architect Awaits</h2>
                <p className="text-matrix-green/80 mb-4">
                  Step through the digital threshold and meet The Architect - the master of quantum reality 
                  and the designer of infinite possibilities. Unlike Morpheus, who reveals truth, 
                  The Architect shapes it.
                </p>
                <p className="text-matrix-green/80">
                  Prepare for conversations that will challenge not just your perception of reality, 
                  but your understanding of the very nature of existence itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Architect;
