import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-bold mb-4" data-aos="flip-left" data-aos-delay="200">
              AMANAH CHEMPHARM
            </h3>
            <p className="text-gray-400 mb-4" data-aos="zoom-in" data-aos-delay="300">
              Leading chemical trading company providing comprehensive solutions for industrial needs.
            </p>
            <div className="flex space-x-4" data-aos="fade-left" data-aos-delay="400">
              <a href="#"><Facebook size={20} className="hover:text-blue-400" /></a>
              <a href="#"><Twitter size={20} className="hover:text-blue-400" /></a>
              <a href="#"><Linkedin size={20} className="hover:text-blue-400" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-down" data-aos-delay="200">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "About Us", "Our Solutions", "Products", "Contact"].map((link, index) => (
                <li key={index} data-aos="fade-up" data-aos-delay={300 + index * 100}>
                  <a href="#" className="hover:text-white block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="zoom-in-up" data-aos-delay="300">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {["Chemical Trading", "Supply Chain", "Quality Assurance", "Technical Support"].map((service, index) => (
                <li key={index} data-aos="slide-up" data-aos-delay={400 + index * 100}>
                  <a href="#" className="hover:text-white block">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="flip-up" data-aos-delay="400">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex items-start space-x-2" data-aos="fade-right" data-aos-delay="500">
                <MapPin size={16} className="mt-0.5" />
                <span>59-47-A KRISHNAMACHARI ROAD VIRUDHUNAGAR,-626001, India</span>
              </div>
              <div className="flex items-start space-x-2" data-aos="fade-right" data-aos-delay="600">
                <Phone size={16} className="mt-0.5" />
                <span>+91 70100 43342</span>
              </div>
              <div className="flex items-start space-x-2" data-aos="fade-right" data-aos-delay="700">
                <Mail size={16} className="mt-0.5" />
                <span>info@amanahchempharm.com</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm"
          data-aos="zoom-out" data-aos-delay="800"
        >
          <p>&copy; 2025 Amanah Chempharm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
