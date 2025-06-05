import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TechSupport = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          data-aos="fade-right"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Tech Support of High performance mud formulations</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              As a competence center, we combine many years of experience with raw materials and in-depth application knowledge in order to best support you with our individualized services for your formulations or applications.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Operators and service companies are developing new advances in high-performance drilling fluids and techniques in order to enhance wellbore strength and mitigate difficult to drill areas like shale, deepwater and HPHT wells. The industry has evolved to be able to tackle hotter, higher-pressure wells and thousands-of-feet deep extended reach wells while easy to reach resources are being depleted.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              In response we help Operators by developing high-performance drilling fluids to meet environmental regulations while utilizing wellbore-strengthening techniques to preserve the well.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <img 
              src="/assests/about-us.jpg" 
              alt="Industrial facility with engineer" 
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>

        <div 
          className="bg-white p-8 rounded-lg mb-16 shadow-md"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Challenging areas that we cover are as follow</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Shales", "HPHT", "Depleted reservoirs and under pressured zones", "Completion"].map((area, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3"
                data-aos="fade-up"
                data-aos-delay={350 + index * 150}
              >
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-teal-500"></div>
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right" data-aos-delay="500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre Operation Consultancy & Technical Support</h3>
            <p className="text-gray-600 leading-relaxed">
              The technical team of INNOCHEM TRADERS provides our clients with pre operation consultancy and technical support. If you are planning to work in a new geographical location, drill a new formation, use new technologies or products, our team can work with operator and provide information and advices so that they can accurately plan every aspect of their future operations.
            </p>
          </div>
          <div data-aos="fade-left" data-aos-delay="600">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Onsite & Remote Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Once a client is working with INNOCHEM TRADERS we shall be available to offer our support both remotely and onsite if required throughout the whole of the operational process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSupport;
