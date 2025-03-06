
import React, { useRef, useEffect } from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = '1';
                cardRef.current.style.transform = 'translateY(0) rotateZ(0deg)';
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
      className="matrix-card h-full relative"
      style={{ 
        opacity: 0,
        transform: 'translateY(20px) rotateZ(1deg)',
        transition: 'opacity 0.8s ease, transform 0.8s ease'
      }}
    >
      <svg className="absolute top-4 left-4 w-10 h-10 text-matrix-green/30" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h3v10h-9zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3v10h-9z" />
      </svg>
      
      <div className="pt-12 pb-4">
        <p className="text-matrix-green mb-6">{quote}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-matrix-darkgreen flex items-center justify-center">
            <span className="text-matrix-green font-bold">{name.charAt(0)}</span>
          </div>
          <div className="ml-3">
            <h4 className="font-bold">{name}</h4>
            <p className="text-matrix-green/70 text-sm">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
