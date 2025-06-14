
import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FallingCode from '../components/FallingCode';

const Architect = () => {
  const [showDoor, setShowDoor] = useState(false);
  const [flashEffect, setFlashEffect] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Show door after page loads
    const timer = setTimeout(() => {
      setShowDoor(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDoorClick = () => {
    // Play sound effect with higher volume
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.play().catch(() => {
        // Handle audio play failure silently
      });
    }

    // Trigger flash effect
    setFlashEffect(true);

    // Navigate to The Architect after longer flash
    setTimeout(() => {
      window.open('https://chatgpt.com/g/g-684cfc510aa081918916422a2038315d-the-architect-our-quantum-reality', '_blank');
      setFlashEffect(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-matrix-black text-matrix-green overflow-x-hidden relative">
      {/* Matrix Code Animation Background */}
      <FallingCode />
      
      {/* Portal-like Flash Effect */}
      {flashEffect && (
        <div className="fixed inset-0 z-50">
          {/* Bright white flash */}
          <div className="absolute inset-0 bg-white animate-pulse" style={{ animationDuration: '1.2s' }} />
          {/* Portal rings effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-matrix-green rounded-full animate-ping opacity-75"></div>
            <div className="absolute w-64 h-64 border-2 border-matrix-lightgreen rounded-full animate-ping opacity-50" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute w-96 h-96 border border-white rounded-full animate-ping opacity-25" style={{ animationDelay: '0.4s' }}></div>
          </div>
          {/* Matrix code spiral */}
          <div className="absolute inset-0 flex items-center justify-center font-mono text-matrix-green text-xs opacity-80">
            <div className="animate-spin">
              01001000 01100101 01101100 01110000 01001101 01100101
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
            
            {/* Door Container - Made even bigger */}
            <div className="relative flex justify-center items-center min-h-[600px] mb-8">
              {showDoor && (
                <div 
                  className="cursor-pointer transform transition-all duration-700 hover:scale-105 animate-fade-in"
                  onClick={handleDoorClick}
                >
                  <div className="relative group">
                    {/* Door Image/SVG - Made much bigger */}
                    <div className="w-96 h-[500px] bg-gradient-to-b from-matrix-green/20 to-matrix-green/5 border-2 border-matrix-green rounded-lg shadow-2xl shadow-matrix-green/50 relative overflow-hidden">
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
                        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 w-5 h-12 bg-matrix-green rounded-full shadow-lg shadow-matrix-green/50"></div>
                      </div>
                      
                      {/* Enhanced Glow Effect */}
                      <div className="absolute inset-0 bg-matrix-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                      
                      {/* Matrix Code Overlay - More codes */}
                      <div className="absolute inset-0 opacity-20 font-mono text-base overflow-hidden">
                        <div className="absolute top-8 left-8">01000001</div>
                        <div className="absolute top-20 right-8">01010010</div>
                        <div className="absolute top-32 left-16">01000011</div>
                        <div className="absolute top-44 right-16">01001000</div>
                        <div className="absolute bottom-20 left-8">01001001</div>
                        <div className="absolute bottom-8 right-8">01010100</div>
                        <div className="absolute bottom-32 left-16">01000101</div>
                        <div className="absolute bottom-44 right-16">01000011</div>
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

            <h1 className="text-4xl md:text-6xl font-bold mb-6 neo-glow">
              Enter the <span className="matrix-text-gradient">Architect's Domain</span>
            </h1>
            
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

        {/* Enhanced Audio Element for Louder Sound Effect */}
        <audio ref={audioRef} preload="auto">
          <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMeAUOX2u/GenQeATN1zO2CUyQdaTGPoBcjKjOJeGq1bwjhBJzr8cfVlGdRU6LV6VcfKlaPplWj3AUlJHnUzoOrZjFoTnq1qlhD" type="audio/wav" />
        </audio>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Architect;
