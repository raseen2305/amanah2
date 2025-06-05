import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConsultingServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Consulting Services</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              INNOCHEM TRADERS experts offer advice and support in key segments in Oil & Gas Industry. Our team of professionals with decades of experience and exposure towards upstream and downstream operations closely work with our customers in an independent manner using their insights into developments and will always remain result oriented. We provide short-term and long-term project assistance based on requirements.
            </p>
          </div>

          {/* Image */}
          <div data-aos="zoom-in" data-aos-delay="400">
            <img 
              src="/assests/consult.jpg" 
              alt="Professional handshake" 
              className="rounded-lg shadow-lg w-full h-80 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;
