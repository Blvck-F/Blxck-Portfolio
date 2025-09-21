import React from 'react';
import { FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Texte copyright */}
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} BlxckDev. Tous droits réservés.
        </p>

        {/* Réseaux sociaux */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Blvck-F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/+2290195292829"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:blxcktwo@gmail.com"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
