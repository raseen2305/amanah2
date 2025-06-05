import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Droplets, TestTube } from 'lucide-react';

const DrillingSolutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right" data-aos-delay="200">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Specialized additives complement the efficiencies of our advanced drilling fluid products by targeting performance-hindering downhole problems that drive up costs and threaten drilling programs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Tailor made fluids and additives for optimal efficiency and reduced cost. Our base fluids and additives are tailored for specific well construction applications. Custom formulation helps operators maintain wellbore stability, optimize ROP, and increase overall drilling efficiency while reducing non performing time and minimizing HSE footprint.
            </p>
          </div>

          <div className="space-y-6">
            <div
              className="flex items-center space-x-4 p-6 bg-blue-50 rounded-lg"
              data-aos="zoom-in-up"
              data-aos-delay="300"
            >
              <div className="bg-red-500 p-3 rounded-full">
                <Droplets className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fluid Additives</h3>
                <p className="text-gray-600">Water-based, Oil and Synthetic additives that address all downhole challenges</p>
              </div>
            </div>

            <div
              className="flex items-center space-x-4 p-6 bg-blue-50 rounded-lg"
              data-aos="zoom-in-up"
              data-aos-delay="500"
            >
              <div className="bg-teal-500 p-3 rounded-full">
                <TestTube className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Water Based Drilling Fluids</h3>
                <p className="text-gray-600">Water-based drilling fluids that deliver cost-effective, efficient performance with minimized environmental impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrillingSolutions;
