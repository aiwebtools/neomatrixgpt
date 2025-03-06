
import React, { useEffect, useRef } from 'react';

const FallingCode: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ';
    const columns = Math.floor(window.innerWidth / 20);
    const drops: number[] = Array(columns).fill(0);
    
    const createRaindrop = (x: number, y: number, char: string, delay: number, duration: number) => {
      const element = document.createElement('div');
      element.className = 'matrix-rain-char';
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
      element.style.fontSize = `${Math.random() * 6 + 10}px`;
      element.style.opacity = `${Math.random() * 0.5 + 0.5}`;
      element.style.animationDuration = `${duration}s`;
      element.style.animationDelay = `${delay}s`;
      element.textContent = char;
      container.appendChild(element);
      
      // Remove element after animation completes
      setTimeout(() => {
        if (container.contains(element)) {
          container.removeChild(element);
        }
      }, (delay + duration) * 1000);
    };
    
    const createRain = () => {
      for (let i = 0; i < columns; i++) {
        const x = i * 20;
        const y = drops[i] * 20;
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const delay = Math.random() * 2;
        const duration = Math.random() * 2 + 2;
        
        createRaindrop(x, y, char, delay, duration);
        
        // Randomly reset some drops to the top
        if (Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    };
    
    const rainInterval = setInterval(createRain, 150);
    
    const handleResize = () => {
      // Clear existing drops
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Reset columns and drops for new window size
      const newColumns = Math.floor(window.innerWidth / 20);
      drops.length = newColumns;
      for (let i = 0; i < newColumns; i++) {
        drops[i] = Math.floor(Math.random() * 15);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(rainInterval);
      window.removeEventListener('resize', handleResize);
      while (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return <div ref={containerRef} className="matrix-rain-container" />;
};

export default FallingCode;
