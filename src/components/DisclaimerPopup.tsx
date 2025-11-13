
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      // Wait a moment before showing the popup
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAgree = () => {
    // Store that user has agreed to the disclaimer
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="absolute inset-0 bg-matrix-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            className="relative z-10 w-full max-w-md overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            <div className="matrix-card border-2 border-matrix-green/80 p-6 neo-glass">
              <div className="absolute top-4 right-4">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-matrix-green hover:text-matrix-lightgreen transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-matrix-green/60 bg-matrix-darkgreen/30">
                  <Info className="w-8 h-8 text-matrix-green animate-pulse" />
                </div>
                
                <h2 className="text-2xl font-bold neo-glow font-matrix tracking-wider uppercase">Enter The Matrix</h2>
                
                <div className="text-center space-y-3">
                  <div className="p-3 border border-matrix-green/40 rounded bg-matrix-green/10 mb-4">
                    <p className="text-matrix-green font-semibold text-sm">
                      ⚠️ SIMULATION NOTICE ⚠️
                    </p>
                  </div>
                  
                  <p className="text-matrix-green/90 font-light font-cyber leading-relaxed">
                    This is a <strong>simulated AI experience</strong> for entertainment and personal exploration only. 
                    AI responses may be inaccurate and should not be considered factual or professional advice.
                  </p>
                  
                  <p className="text-matrix-green/90 font-light font-cyber leading-relaxed">
                    This is a creative interpretation and not affiliated with Warner Bros. or the official Matrix franchise.
                  </p>
                  
                  <p className="text-matrix-green/90 font-light font-cyber leading-relaxed mt-2">
                    By continuing, you acknowledge this is purely for entertainment purposes.
                  </p>
                </div>
                
                <button 
                  onClick={handleAgree}
                  className="neo-button relative group overflow-hidden w-full max-w-[200px] py-3"
                >
                  <span className="relative z-10 font-matrix tracking-wider">I AGREE</span>
                  <span className="absolute inset-0 bg-matrix-green opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <span className="absolute -inset-x-2 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-matrix-green to-transparent"></span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
