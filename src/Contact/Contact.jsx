import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Contact Info - Left Side */}
        <div className="flex flex-col gap-4 text-sm md:text-base">
          <a
            href="mailto:rayvaishalisundar@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-white transform hover:scale-105 transition duration-300"
          >
            <FaEnvelope className="text-blue-400" />
            rayvaishalisundar@gmail.com
          </a>

          <a
            href="tel:+917846954967"
            className="flex items-center gap-3 text-gray-300 hover:text-white transform hover:scale-105 transition duration-300"
          >
            <FaPhoneAlt className="text-green-400" />
            +91 78469 54967
          </a>

          <a
            href="https://www.linkedin.com/in/vaishali-sundar-ray-6498392a2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white transform hover:scale-105 transition duration-300"
          >
            <FaLinkedin className="text-blue-500" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Vaishali1359"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-white transform hover:scale-105 transition duration-300"
          >
            <FaGithub className="text-gray-400" />
            GitHub
          </a>
        </div>

        {/* Footer Note - Right Side */}
        <div className="mt-6 md:mt-0 text-sm text-gray-500 md:text-right">
          All rights reserved © <span className="text-white font-medium">Vaishali</span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
