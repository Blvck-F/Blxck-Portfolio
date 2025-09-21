import React from 'react';
import Me from '../assets/frie.jpeg'


export default function About() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Description */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Je suis BlxckDev, développeur Fullstack passionné par la création d’interfaces intuitives et performantes.
            J’aime que chaque projet soit <span className='font-bold'>pratique, joli et agréable à utiliser</span>. Mon quotidien consiste à concevoir
            le front avec React.js tout en développant le backend avec Django pour offrir des applications complètes et robustes.
          </p>

          <p className="text-gray-700 text-lg md:text-xl mb-6">
            J’ai un intérêt particulier pour le <span className='font-bold'>design responsive l’expérience utilisateur et l’optimisation des performances. </span>
            J’adore transformer des idées en solutions concrètes, faciles à prendre en main pour les utilisateurs.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end md:pl-10 lg:pl-12">
          <img
            src={Me}
            alt="Frie développeur"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover md:ml-4 lg:ml-8"
          />
        </div>
      </div>
    </section>
  );
}
