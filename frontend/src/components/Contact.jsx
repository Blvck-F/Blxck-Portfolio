import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import Succes from "./Succes";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://blxck-backend.onrender.com/api-contact/contact/", {
        name,
        email,
        message,
      });
      if (res.status === 200) {
        setShowModal(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      alert("Erreur lors de l’envoi du message");
    }
  };

  return (
    <section id="contact" className="px-4 py-20 relative bg-gray-50 overflow-hidden">
      {/* Décorations */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-pink-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Texte */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Contactez-moi
          </h2>
          <p className="mb-6 text-lg md:text-xl text-gray-700">
            Vous avez un projet, une idée ou juste envie de dire bonjour ?
            N’hésitez pas à me contacter via le formulaire ou sur mes réseaux.
          </p>

          {/* Réseaux */}
          <div className="flex gap-6 text-2xl text-gray-800">
            <a
              href="https://github.com/Blvck-F"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-transform transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/+2290195292829"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-transform transform hover:scale-125"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:blxcktwo@gmail.com"
              className="hover:text-gray-600 transition-transform transform hover:scale-125"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <div className="flex-1">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white shadow-lg p-6 rounded-xl"
          >
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              className="px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre message"
              className="px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none h-20"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 cursor-pointer duration-500 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>

      {/* Modal de succès */}
      <Succes isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
