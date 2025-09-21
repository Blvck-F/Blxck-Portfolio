import React from 'react';
import HTML from '../assets/html-5.png';
import CSS from '../assets/css-3.png';
import JS from '../assets/js.png';
import ReactLogo from '../assets/science.png';
import Tailwind from '../assets/tailwindcss.svg';
import Django from '../assets/django.png';
import Linux from '../assets/linux.png';
import Database from '../assets/database.png';

export default function Skills() {
  const skills = [
    { name: 'HTML5', img: HTML },
    { name: 'CSS3', img: CSS },
    { name: 'JavaScript', img: JS },
    { name: 'Tailwind', img: Tailwind },
    { name: 'React', img: ReactLogo },
    { name: 'Django', img: Django },
    { name: 'Database', img: Database },
    { name: 'Linux', img: Linux },
  ];

  return (
    <section id="skills" className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Compétences
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-10 justify-items-center items-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 transform transition-all duration-500 hover:scale-110 hover:shadow-lg p-2 rounded-lg bg-white/30 backdrop-blur-md"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <span className="font-bold text-gray-800">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
