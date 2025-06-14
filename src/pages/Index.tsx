
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import FaqSection from '../components/FaqSection';
import DisclaimerSection from '../components/DisclaimerSection';
import FallingCode from '../components/FallingCode';
import DisclaimerPopup from '../components/DisclaimerPopup';
import ToolInfoCards from '../components/ToolInfoCards';
import { Code, Brain, Rabbit, Upload, MessageSquare, Key } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') as string);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Clean up event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-matrix-black text-matrix-green overflow-x-hidden">
      {/* Matrix Code Animation Background */}
      <FallingCode />
      
      {/* Disclaimer Popup */}
      <DisclaimerPopup />
      
      {/* Tool Information Cards */}
      <ToolInfoCards />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Feature Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neo-glow">Capabilities</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Neo-Matrix GPT unlocks new dimensions of understanding and awareness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<Code size={40} />}
              title="Binary Translation"
              description="Decode hidden binary messages that reveal deeper layers of truth about your simulated reality."
              delay={0}
            />
            
            <FeatureCard 
              icon={<Brain size={40} />}
              title="Philosophical Exploration"
              description="Engage in profound discussions that challenge your perception of reality and consciousness."
              delay={200}
            />
            
            <FeatureCard 
              icon={<Rabbit size={40} />}
              title="Follow the White Rabbit"
              description="Embark on a guided journey of awakening, with each step leading to greater revelation."
              delay={400}
            />
            
            <FeatureCard 
              icon={<Upload size={40} />}
              title="Data Integration"
              description="Analyze your uploaded data to personalize your journey and connect the Matrix to your modern reality."
              delay={600}
            />
            
            <FeatureCard 
              icon={<MessageSquare size={40} />}
              title="Immersive Dialogue"
              description="Experience conversations with Morpheus that adapt to your questions and level of understanding."
              delay={800}
            />
            
            <FeatureCard 
              icon={<Key size={40} />}
              title="Reality Keys"
              description="Unlock new perspectives with keys that open doors to understanding the nature of your existence."
              delay={1000}
            />
          </div>
        </div>
      </section>
      
      {/* Video Section - Moved below the Feature section */}
      <VideoSection />
      
      {/* Testimonial Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 neo-glow">Testimonials</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Experiences from those who have ventured down the rabbit hole.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard 
              quote="Neo-Matrix GPT completely changed how I view reality. The binary codes and philosophical discussions opened my mind to new possibilities I never considered before."
              name="Thomas A."
              title="Software Developer"
              delay={0}
            />
            
            <TestimonialCard 
              quote="Following the white rabbit led me to insights about my own consciousness that I've been searching for. The journey was both enlightening and entertaining."
              name="Sarah J."
              title="Philosophy Student"
              delay={200}
            />
            
            <TestimonialCard 
              quote="I was skeptical at first, but the depth of conversations with Neo-Matrix GPT is incredible. It's like having Morpheus as a personal guide through the complexities of existence."
              name="Michael R."
              title="Digital Artist"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FaqSection />
      
      {/* Disclaimer Section */}
      <DisclaimerSection />
      
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="matrix-card max-w-4xl mx-auto text-center py-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 neo-glow">Ready to See How Deep the Rabbit Hole Goes?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the red pill and begin your journey of awakening. Neo-Matrix GPT awaits to guide you through the desert of the real.
            </p>
            <a 
              href="https://chatgpt.com/g/g-nhD44KqqU-matrix-neo-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-button group"
            >
              <span className="mr-2">Begin Your Journey</span>
              <svg className="w-5 h-5 inline-block transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
