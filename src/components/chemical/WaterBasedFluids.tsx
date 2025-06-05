import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Check } from 'lucide-react';

const WaterBasedFluids = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = [
    {
      title: "Weighting Material",
      items: ["Barite", "Hematite", "Calcium Corbonate (Lime and Marble based)"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Viscosifiers",
      items: ["Bentonite (Treated and untreated)", "Guar Gum", "Xanthan gum", "Attapulgite", "A-Z of Issues"],
      bgColor: "bg-teal-500 text-white"
    },
    {
      title: "Filteration Reducers",
      items: ["Resinated Lignite", "Pregel Starch (Tapioca, Potato and maize based)", "CMC LV/HV", "PAC LV/HV"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Lost Circulation materials",
      items: ["Fibroseal", "Mica", "Quickseal/Nutshell", "Graphite /Graphite blend", "Diatomaceous Earth"],
      bgColor: "bg-teal-500 text-white"
    },
    {
      title: "Lubricants",
      items: ["Extreme pressure water based Lubricant", "Premium ester based lubricant for HT", "Water/Oil dispersible lubricants", "ROP enhancing lubricant"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Thinners & Dispersants",
      items: ["Resinated Lignite", "Grounded Lignite/Caustisized/Chrome lignites", "Chrome Free Lignosulfonates"],
      bgColor: "bg-teal-500 text-white"
    },
    {
      title: "Pipe Freeing Agents",
      items: ["Spotting Fluids Weighted and Non weighted"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Surfactants",
      items: ["Drilling Detergent", "Rigwash", "Mutual solvent", "Well bore cleaning agent"],
      bgColor: "bg-teal-500 text-white"
    },
    {
      title: "Corrosion & Scale Inhibitors",
      items: ["Water/oil soluble film forming Amine corrosion inhibitors", "Organphosphorus based inhibitor (various concentrations)", "Workover and packer fluid corrosion inhibitor"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Shale Inhibitors/Stabilizers",
      items: ["Glycols (Cloud point glycols HC, MC and LC variants)", "Silicates (Sodium and Potassium)", "PHPA", "Sulphonated Asphalt", "Liquid Asphalt"],
      bgColor: "bg-teal-500 text-white"
    },
    {
      title: "Biocide & Scavengers",
      items: ["Triazine/Amine/ Gluteraldehyde based biocides", "H2S Scavenger", "Oxygen Scavenger (Liquid and powder)"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Defoamers and Foamers",
      items: ["Alcohol/Silicone/Glycol/ Aluminium Sterate based defoamers", "Foaming agent (powder/Liquid)"],
      bgColor: "bg-teal-500 text-white"
    },
    {
      title: "Alkalinity control agents",
      items: ["Soda Ash", "Caustic Soda"],
      bgColor: "bg-gray-100"
    },
    {
      title: "Commodities",
      items: ["KCL", "Calcium Chloride", "KoH", "NaCl", "Citric Acid", "HCl"],
      bgColor: "bg-teal-500 text-white"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-gray-900 mb-12" 
          data-aos="fade-up"
        >
          Water Based Drilling Fluids
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${category.bgColor}`} 
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger animation delay
            >
              <h3 className="text-lg font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-2">
                    <Check 
                      size={16} 
                      className={`mt-1 flex-shrink-0 ${category.bgColor.includes('teal') ? 'text-white' : 'text-teal-500'}`} 
                    />
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

export default WaterBasedFluids;
