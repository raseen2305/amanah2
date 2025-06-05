import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Drilling Fluids Solutions and Products
        </h1>
        <p
          className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          Innochem Traders helps oil & gas operators to increase efficiency and lower costs by designing and engineering drilling fluid additives that accommodate a wide range of drilling environments and demanding applications like HPHT, deep water, shale gas, heavy oil, depleted wells, and etc.
        </p>
        <div
          className="w-24 h-1 bg-white mx-auto rounded"
          data-aos="flip-left"
          data-aos-delay="600"
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
