import React from "react";

const Home3 = () => {
  const projects = [
    {
      title: "Padho India",
      description:
        "A learning platform focused on making education accessible for all students across India. Built with MERN stack.",
      liveLink: "https://padho-india.onrender.com",
    },
    {
      title: "Flipit - Shopping Website",
      description:
        "A modern e-commerce platform offering smooth shopping experience, product filtering, and cart features.",
      liveLink: "https://flipit.co.in/",
    },
    {
      title: "NTPL Company Website",
      description:
        "A static business website for NTPL with multiple sections like services, about us, and contact.",
      liveLink: "https://ayush1464.github.io/Ntpl/",
    },
  ];

  return (
    <section
      id="home3"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-full">
        <h2 className="text-4xl font-bold text-center mb-12">🚀 My Live Projects</h2>

        {/* Centered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5 shadow-xl min-h-[450px]"
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{project.description}</p>

              <div className="relative w-full" style={{ paddingTop: "75%" }}>
                <iframe
                  src={project.liveLink}
                  title={project.title}
                  className="absolute top-0 left-0 w-full h-full rounded-lg border border-teal-500 shadow-inner"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home3;
