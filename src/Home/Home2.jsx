import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiFigma } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-400" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-300" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-300" },
  { name: "Figma", icon: <SiFigma />, color: "text-pink-300" },
];

const internships = [
  {
    company: "App Tax" ,
    role: "Internship",
    role: "Associate Software Developer Intern",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.084657763011!2d78.03089517504396!3d21.02832248061859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c091a1480a65%3A0xb7bcde1fdf206807!2sAppTax!5e0!3m2!1sen!2sin!4v1720600000000",
  },
  {
    company: "Dolphin Technology",
    role: "Job",
    role: "Junior Software Developer",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.716236614351!2d79.08355627504805!3d21.19783508047816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bd66a0df73c5%3A0x4fdde5dfe8c04d26!2sDolphin%20Technology!5e0!3m2!1sen!2sin!4v1720600000000",
  },
];

export default function Home2() {
  return (
    <section
      className="min-h-screen bg-black text-white px-6 py-16 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-16">

        {/* === Left: Skills === */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold mb-8 text-teal-400 text-center md:text-left">
            🚀 My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/10 p-4 rounded-xl flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
              >
                <div className={`text-4xl mb-2 ${skill.color}`}>
                  {skill.icon}
                </div>
                <p className="text-sm font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* === Right: Internships === */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl font-bold mb-8 text-yellow-400 text-center md:text-left">
            💼 Job
          </h2>
          <div className="space-y-8">
             
            {internships.map((item, i) => {
              const isHighlighted = item.company === "Dolphin Technology";
              return (
                <div
                  key={i}
                  className={`bg-white/5 border rounded-xl overflow-hidden shadow-lg hover:shadow-teal-600 transition
                    ${
                      isHighlighted
                        ? "border-teal-400 shadow-teal-500/80 bg-white/10"
                        : "border-white/10"
                    }`}
                >
                  <div className="p-4">
                    <h3
                      className={`text-lg font-bold ${
                        isHighlighted ? "text-teal-400" : ""
                      }`}
                    >
                        
                      {item.company}
                    </h3>
                    <p className="text-sm text-gray-300">{item.role}</p>
                  </div>
                  <iframe
                    src={item.embed}
                    className="w-full h-48 border-t border-white/10"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
