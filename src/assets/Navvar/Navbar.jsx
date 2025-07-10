import { label } from 'framer-motion/client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#home1', label: 'Home' },
    // { href: '#home2', label: 'About' },
    { href: '#home2', label: 'Skills' },
    { href: '#home3', label: 'Projects' },
    { href: '#Contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        <div className="text-2xl font-bold text-teal-400 tracking-wide cursor-pointer">
          MyPortfolio
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="relative group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-teal-400 transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-0.5 bg-teal-400 mb-1 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></div>
          <div className="w-6 h-0.5 bg-teal-400 mb-1 transition-opacity duration-300" style={{ opacity: isOpen ? 0 : 1 }}></div>
          <div className="w-6 h-0.5 bg-teal-400 transition-transform duration-300" style={{ transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 bg-black/95 backdrop-blur-md text-center py-6 text-lg font-semibold">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="hover:text-teal-400 transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
