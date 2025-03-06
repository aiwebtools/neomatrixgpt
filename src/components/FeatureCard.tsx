
import React, { useRef, useEffect } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0)';
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="matrix-card h-full transition-all duration-500"
      style={{ 
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 text-matrix-green">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 neo-glow">{title}</h3>
        <p className="text-matrix-green/80 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
