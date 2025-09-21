import React, { useState } from 'react'
import Modal from './Modal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => setIsOpen(prev => !prev)

  return (
    <nav>
      <div className="fixed flex justify-between items-center px-5 top-4 left-1/2 transform -translate-x-1/2 rounded-4xl border-white border-2 w-[250px] md:w-[600px] lg:w-[800px] text-center bg-[#f8f9fa]/60 backdrop-blur-3xl shadow-lg z-20">
        {/* Logo */}
        <div className="flex justify-center items-center gap-2 p-2">
          <a className='font-bold text-lg' href="/">BlxckDev</a>
        </div>

        {/* Menu mobile */}
        <div>
          <button className="cursor-pointer" onClick={toggleModal}>
            <i className="ri-menu-3-line text-2xl lg:hidden"></i>
          </button>
          <div className="hidden lg:inline-block mx-2">
            <ul className="flex gap-4 text-sm font-bold">
              <li>
                <a className="hover:text-stone-400 duration-500 transition" href="/">
                  Accueil
                </a>
              </li>
              <li>
                <a className="hover:text-stone-400 duration-500 transition" href="#skills">
                  Compétences
                </a>
              </li>
              <li>
                <a className="hover:text-stone-400 duration-500 transition" href="#projects">
                  Projets
                </a>
              </li>
              <li>
                <a className="hover:text-stone-400 duration-500 transition" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay menu mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleModal}
        ></div>
      )}
      <Modal isOpen={isOpen} toggleModal={toggleModal} />
    </nav>
  )
}
