import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vaishaliImg from "../assets/Vaishali.jpg"; // Your photo here

const name = "Vaishali".split("");
const jobTitle = ["Software", "Engineer"];

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 300,
    },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      ease: "easeOut",
    },
  }),
};

const Home1 = () => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center bg-black px-6 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        {/* 🔹 Left Side - Animated Text */}
        <div className="flex-1 text-center md:text-left">
          <h1
            key={`name-${animationKey}`}
            className="text-5xl md:text-7xl font-bold mb-4 flex justify-center md:justify-start"
          >
            Hi, I'm&nbsp;
            {name.map((letter, i) => (
              <motion.span
                key={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                custom={i}
                className="text-teal-400 inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.div
            key={`job-${animationKey}`}
            className="flex justify-center md:justify-start mb-6 text-3xl md:text-4xl font-semibold text-gray-300 space-x-4"
          >
            {jobTitle.map((word, i) => (
              <motion.span
                key={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                custom={i}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <p className="text-gray-400 mb-6 max-w-md mx-auto md:mx-0">
            Passionate about crafting beautiful, functional websites. I build
            fast, responsive user interfaces using modern tools like React,
            Tailwind, and Vite.
          </p>

          <a
            href="#projects"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300"
          >
            View My CV
          </a>
        </div>

        {/* 🔸 Right Side - Styled Image */}
        <div className="flex-1 mt-10 md:mt-0 flex flex-col items-center text-center">
  <h3 className="text-xl md:text-2xl font-semibold text-teal-400 mb-4 z-10">
    Vaishali — Front-End Developer
  </h3>

  <div className="relative group">
    <img
      src={vaishaliImg}
      alt="Vaishali"
      className="w-80 h-80 object-cover rounded-full border-4 border-teal-500 shadow-lg transition-transform duration-500 group-hover:scale-105 z-10"
    />
    <div className="absolute inset-0 rounded-full blur-xl opacity-30 bg-teal-400 group-hover:opacity-50 transition duration-500"></div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Home1;
