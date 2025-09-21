import React from 'react';
import FoodieSpot from '../assets/FoodieSpot.webp';
import QuizApp from '../assets/QuizApp.png';
import Essenza from '../assets/Essenza.png';
import LeFade from '../assets/Lefade.webp';
import Nounou from '../assets/Cheznounou.webp';
import Rezerv from '../assets/Rezerv.png';

export default function Projects() {
  const projects = [
    { title: 'Foodie Spot', img: FoodieSpot, liveLink: 'https://foodie-spot.onrender.com/', githublink: 'https://github.com/Blvck-F/Foodie-Spot' },
    { title: 'Quiz App', img: QuizApp, liveLink: 'http://quiz-app-689m.onrender.com/', githublink: 'https://github.com/Blvck-F/Quiz-App' },
    { title: 'Essenza&Co', img: Essenza, liveLink: 'https://essenzaandco.onrender.com/', githublink: 'https://github.com/Blvck-F/Essenza-co' },
    { title: 'Le Fade', img: LeFade, liveLink: 'https://le-fade.onrender.com/', githublink: 'https://github.com/Farhane360/Le-Fade' },
    { title: 'Chez Nounou', img: Nounou, liveLink: 'https://cheznounou.onrender.com/', githublink: 'https://github.com/Farhane360/Chez-nounou' },
    { title: 'Rezerv', img: Rezerv, liveLink: 'https://rezerv-62g3.onrender.com/', githublink: 'https://github.com/Farhane360/Rezerv' },
  ];

  return (
    <section id="projects" className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Projets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center text-white p-4 gap-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 duration-500 rounded-lg font-bold hover:bg-green-700 transition"
                  >
                    Voir le site
                  </a>
                  <a
                    href={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 duration-500 rounded-lg font-bold hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
