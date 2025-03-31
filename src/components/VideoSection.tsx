
import React, { useEffect, useRef } from 'react';

const VideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 relative opacity-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neo-glow">The Truth Awaits</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Witness the revelation that will challenge everything you think you know about reality.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto perspective">
          <div className="relative matrix-card overflow-hidden aspect-video transform transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-matrix-green/10 backdrop-blur-sm z-0 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/YxpGmoIABWU?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1&vq=hd1080" 
              title="The Matrix Simulation Theory"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full z-10"
            ></iframe>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-matrix-green z-20"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-matrix-green z-20"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-matrix-green z-20"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-matrix-green z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
