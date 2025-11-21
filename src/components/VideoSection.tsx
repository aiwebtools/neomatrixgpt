
import React, { useEffect, useRef, useState } from 'react';

const VideoSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentVideoId, setCurrentVideoId] = useState('SYf8ULSsVrI'); // First video
  const playerRef = useRef<any>(null);
  
  useEffect(() => {
    // Load YouTube iframe API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        videoId: 'SYf8ULSsVrI',
        playerVars: {
          autoplay: 1,
          mute: 0,
          controls: 1,
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
          start: 300, // Start at 5 minutes
          vq: 'hd1080'
        },
        events: {
          onStateChange: (event: any) => {
            // When first video ends, load second video
            if (event.data === (window as any).YT.PlayerState.ENDED && currentVideoId === 'SYf8ULSsVrI') {
              setCurrentVideoId('qMLF5L_h2xo');
              playerRef.current.loadVideoById({
                videoId: 'qMLF5L_h2xo',
                startSeconds: 0
              });
            }
          }
        }
      });
    };

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
            
            <div 
              id="youtube-player"
              className="absolute inset-0 w-full h-full z-10"
            ></div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-matrix-green z-20"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-matrix-green z-20"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-matrix-green z-20"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-matrix-green z-20"></div>
          </div>
        </div>
        
        {/* BECOME IMMORTALIZED Button */}
        <div className="flex justify-center mt-12 mb-6 animate-pulse-glow">
          <a 
            href="/architect" 
            className="neo-button group tracking-wider text-lg border-2 border-matrix-green bg-matrix-black py-3 px-8 hover:bg-matrix-green hover:text-matrix-black transition-all duration-300 shadow-lg shadow-matrix-green/30"
          >
            <span className="font-mono mr-2 font-bold">OPEN THE DOOR</span>
            <svg 
              className="w-5 h-5 inline-block transition-transform group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
