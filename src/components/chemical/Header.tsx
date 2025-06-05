import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Phone, Mail, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0">
          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-1" data-aos="fade-right" data-aos-delay="200">
              <Phone size={14} />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1" data-aos="fade-left" data-aos-delay="300">
              <Mail size={14} />
              <span>info@innochemtraders.com</span>
            </div>
          </div>
          <div className="text-center md:text-right" data-aos="zoom-in-down" data-aos-delay="400">
            <span>Welcome to Innochem Traders</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-blue-900"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            INNOCHEM TRADERS
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:block text-blue-900 font-medium text-lg cursor-pointer hover:underline"
            data-aos="slide-left"
            data-aos-delay="500"
          >
            Our Solutions
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-blue-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-blue-50 p-4 rounded shadow" data-aos="fade-down">
            <div className="text-blue-900 font-medium text-base cursor-pointer hover:underline">
              Our Solutions
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
