
import React from 'react';
import FooterBrand from './footer/FooterBrand';
import FooterNavigation from './footer/FooterNavigation';
import FooterContact from './footer/FooterContact';
import FooterBottom from './footer/FooterBottom';

const Footer: React.FC = () => {
  return (
    <footer className="neo-glass border-t border-matrix-green/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <FooterBrand />
          <FooterNavigation />
          <FooterContact />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
