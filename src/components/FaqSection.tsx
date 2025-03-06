
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  
  useEffect(() => {
    if (answerRef.current) {
      setHeight(answerRef.current.scrollHeight);
    }
  }, [answer]);
  
  return (
    <div className="matrix-card overflow-hidden transition-all duration-300 mb-4">
      <button 
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown 
          className={`transition-transform duration-300 text-matrix-green ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
        />
      </button>
      
      <div 
        className="overflow-hidden transition-all duration-300 px-4"
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      >
        <div ref={answerRef} className="pb-4">
          <p className="text-matrix-green/80">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
  
  const faqs = [
    {
      question: "What is Neo-Matrix GPT?",
      answer: "Neo-Matrix GPT is an AI designed to simulate the experience of Neo from 'The Matrix,' guided by the persona of Morpheus. It leads users on a journey of self-discovery, challenging their perception of reality through cryptic codes, philosophical questions, and immersive dialogue."
    },
    {
      question: "How do I interact with Neo-Matrix GPT?",
      answer: "Interact with Neo-Matrix GPT by asking philosophical questions, seeking guidance, or engaging with the cryptic numerical codes it presents. Each interaction is designed to peel back layers of perceived reality and guide you toward a deeper understanding."
    },
    {
      question: "What are the binary codes for?",
      answer: "The binary codes represent hidden truths and messages that are part of your journey. They are meant to be decoded using the Binary Text Converter GPT tool, revealing insights that further your understanding of the simulated reality."
    },
    {
      question: "Is Neo-Matrix GPT customizable?",
      answer: "Neo-Matrix GPT adapts to your journey and questions, creating a personalized experience. The more you engage with philosophical inquiries and solve the puzzles presented, the deeper your journey will become."
    },
    {
      question: "What happens when I 'take the red pill'?",
      answer: "Taking the red pill symbolizes your choice to see beyond the illusion. This deepens your experience with Neo-Matrix GPT, introducing more challenging puzzles and profound philosophical discussions that reveal the nature of reality."
    },
    {
      question: "Can Neo-Matrix GPT generate images?",
      answer: "Yes, Neo-Matrix GPT can generate images that enhance your journey, such as visualizing the white rabbit or creating Matrix-style glitches to deepen the immersive experience."
    }
  ];
  
  const handleToggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  
  return (
    <section id="faq" ref={sectionRef} className="py-20 relative opacity-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neo-glow">Frequently Asked Questions</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Answers to common questions about your journey with Neo-Matrix GPT.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
