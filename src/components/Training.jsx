import React from 'react';
import ordi from '../assets/ordinateur.png';
import Footer from './Footer';

const Training = () => {
  return (
    <section className="relative w-full">
      {/* Background SVG */}
      <div className="absolute inset-0 w-[130%] h-[140%] -top-20 -right-[15%] overflow-hidden">
        <svg 
          className="w-full h-full"
          viewBox="0 0 717 877" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path opacity="0.4" d="M50 150C50 100 60 80 90 60C120 40 200 30 300 30L600 30C700 30 780 40 810 60C840 80 850 100 850 150L850 750C850 800 840 820 810 840C780 860 700 870 600 870L300 870C200 870 120 860 90 840C60 820 50 800 50 750L50 150Z" fill="url(#paint0_linear_10_112)"/>
          <defs>
            <linearGradient id="paint0_linear_10_112" x1="165.709" y1="313.338" x2="550.709" y2="173.838" gradientUnits="userSpaceOnUse">
              <stop offset="0.25" stopColor="#EE1C18"/>
              <stop offset="0.95" stopColor="#FF6600"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Spacer div */}
      <div className="h-16 sm:h-24 md:h-32"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Div 0 - Titre */}
        <div className="text-center mb-8 mt-8 md:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Les Formations aux métiers du CARGO</h2>
          <div className="text-xs sm:text-sm space-y-1 text-white">
            <p>Encore et toujours un texte que</p>
            <p>je m'efforce de lire sans succès, ah décidément</p>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto px-4">
          {/* Div 1 - Texte + bouton */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <p className="text-lg sm:text-xl text-white">Notre IA vous aide à trouver la formation qui vous correspond.</p>
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition text-base sm:text-lg">
              C'est parti
            </button>
          </div>

          {/* Div 2 - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img 
              src={ordi} 
              alt="ordinateur" 
              className="w-[200px] sm:w-[250px] md:w-[300px] max-w-full object-contain" 
            />
          </div>
        </div>

        {/* Bouton en bas centré */}
        <div className="flex justify-center mt-12 px-4">
          <button className="w-full sm:w-auto bg-gradient-to-r from-blue-400 to-blue-800 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition text-base sm:text-lg max-w-[300px]">
            il s'agit encore d'un texte que je n'arrive pas à lire
          </button>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default Training;