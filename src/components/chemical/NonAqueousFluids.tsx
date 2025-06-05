import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Check } from 'lucide-react';

const NonAqueousFluids = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const categories = [
    {
      title: "Emulsifiers",
      items: ["Primary Emulsifier", "Secondary Emulsifier"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Rheology Modifiers & Viscosifiers",
      items: ["Rheological modifier to increase LSRV", "Polymeric viscosifier"],
      bgColor: "bg-gray-600 text-white"
    },
    {
      title: "Wetting Agent",
      items: ["Oil wetting agent"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Filterate controllers",
      items: ["Organophilic Lignite", "Natural Asphalt", "OBM FL Reducers", "Quebracho"],
      bgColor: "bg-gray-600 text-white"
    },
    {
      title: "Viscosifiers",
      items: ["Organophilic Clay", "OBM Thinner"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Lost Circulation material",
      items: ["Graphite/ Graphite Blend"],
      bgColor: "bg-gray-600 text-white"
    },
    {
      title: "Corrosion Inhibitor",
      items: ["Oil Soluble variant"],
      bgColor: "bg-gray-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-gray-900 mb-4" 
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Nonaqueous Drilling Fluids
        </h2>
        <p 
          className="text-gray-600 text-lg mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Oil-based & Synthetic based drilling fluid systems designed for a wide range of demanding applications
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${category.bgColor}`}
              data-aos="fade-up"
              data-aos-delay={300 + index * 150} // stagger animation by 150ms per card
            >
              <h3 className="text-lg font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <Check size={16} className={`mt-1 flex-shrink-0 ${category.bgColor.includes('gray-600') ? 'text-white' : 'text-teal-500'}`} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonAqueousFluids;
