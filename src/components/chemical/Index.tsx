
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import DrillingSolutions from './DrillingSolutions';
import WaterBasedFluids from './WaterBasedFluids';
import NonAqueousFluids from './NonAqueousFluids';
import TechSupport from './TechSupport';
import ConsultingServices from './ConsultingServices';
import Footer from './Footer';

const Chemicals = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DrillingSolutions />
      <WaterBasedFluids />
      <NonAqueousFluids />
      <TechSupport />
      <ConsultingServices />
      <Footer />
    </div>
  );
};

export default Chemicals;
