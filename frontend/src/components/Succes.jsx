import React from "react";

export default function Succes({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center animate-[fadeIn_0.3s_ease-in-out]">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Message envoyé !
        </h2>
        <p className="text-gray-700 mb-6">
          Merci de m'avoir contacté, vous aurez un retour d'ici les prochaines heures.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-red-500 text-white rounded-lg font-semibold duration-500 cursor-pointer hover:bg-red-700 transition"
        >
          Fermer
        </button>
      </div>
    </div>
  );
}
