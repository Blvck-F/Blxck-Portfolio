import React from 'react';
import HTML from '../assets/html-5.png'
import CSS from '../assets/css-3.png'
import JS from '../assets/js.png'
import ReactLogo from '../assets/science.png'
import Tailwind from '../assets/tailwindcss.svg'
import Django from '../assets/django.png'
import Vscode from '../assets/vscode.png'
import Linux from '../assets/linux.png'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Intro */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
        Hello, je suis BlxckDev
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-2xl">
        Je conçois des interfaces agréables et intuitives tout en développant
        des solutions backend avec <span className='text-blue-600 font-bold'>React</span>  et <span className='text-green-700 font-bold' >Django</span>.
        Mon objectif: que chaque utilisateur se sente à l’aise sur mes applications.
      </p>

      {/* Skills / stack */}
      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        <div className='flex gap-2'>
            <img className='w-8 h-8 hover:scale-130 duration-500' src={HTML} alt="" />
            <img className='w-8 h-8 hover:scale-130 duration-500' src={CSS} alt="" />
            <img className='w-8 h-8 hover:scale-130 duration-500' src={JS} alt="" />
            <img className='w-8 h-8 hover:scale-130 duration-500' src={ReactLogo} alt="" />
        </div>
        <div className='flex gap-2'>
            <img className='w-8 h-8 hover:scale-130 duration-500' src={Tailwind} alt="" />
            <img className='w-8 h-8 hover:scale-130 duration-500' src={Django} alt="" />
            <img className='w-8 h-8 hover:scale-130 duration-500' src={Vscode} alt="" />
            <img className='w-8 h-8 hover:scale-130 duration-500' src={Linux} alt="" />
        </div>
      </div>

      {/* CTA */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="px-6 py-3 bg-[#003049] text-white font-bold rounded-lg hover:bg-green-600 duration-500 transition"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-green-600 text-green-600 font-bold rounded-lg hover:bg-green-500 hover:text-white duration-500 transition"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
