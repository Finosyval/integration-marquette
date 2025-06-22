import React, { useState } from 'react';
import cargo from '@/assets/cargo.png';

const HeaderHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-screen overflow-hidden">
      {/* Blob SVG en arrière-plan */}
      <svg 
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1000 400" 
        preserveAspectRatio="xMidYMid slice"
        style={{
          zIndex: -1,
          minWidth: '100%',
          minHeight: '100%',
        }}
      >
        <defs>
          <linearGradient id="paint0_linear" x1="50%" y1="0%" x2="50%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#332A82"/>
            <stop offset="1" stopColor="#3360A4"/>
          </linearGradient>
        </defs>
        {/* Forme principale du blob */}
        <path 
          d="
            M0 30 
            C0 13.4315 13.4315 0 30 0 
            H970
            C986.569 0 1000 13.4315 1000 30
            V150
            C1000 160 995 170 985 173
            L800 220
            C750 235 700 245 650 250
            L450 280
            C350 295 250 305 150 310
            C100 312.5 50 315 25 300
            L0 290
            V30
            Z
          "
          fill="url(#paint0_linear)"
        />
        {/* Vague supérieure - ajustée pour rester dans les limites */}
        <path 
          d="
            M800 120
            C750 120 730 200 730 200
            C780 190 830 175 830 175
            L880 160
            L920 150
            C940 150 942 130 938 125
            C938 125 850 120 800 120
          "
          fill="#4B81B7"
          opacity="0.85"
        />
        {/* Vague inférieure - ajustée pour rester dans les limites */}
        <path 
          d="
            M280 200
            C284 150 150 100 150 100
            C130 90 160 180 160 200
            C160 220 165 240 163 260
            C160 280 170 290 175 295
            C175 295 276 250 280 200
          "
          fill="#5F51E2"
          opacity="0.85"
        />
      </svg>

      {/* Contenu */}
      <div className="w-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px] relative">
        {/* Header */}
        <header className="bg-transparent w-full relative z-50">
          <div className="w-[90%] lg:w-[80%] mx-auto py-4">
            {/* Version Mobile */}
            <div className="block lg:hidden">
              {/* Barre supérieure avec logo et hamburger */}
              <div className="flex justify-between items-center">
                <img
                  src={cargo}
                  alt="CargoLogo"
                  className="w-8 h-8 object-contain"
                />
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                  aria-label="Menu"
                >
                  <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {isMenuOpen ? (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Menu mobile déroulant */}
              <div 
                className={`${
                  isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                } transition-all duration-300 ease-in-out overflow-hidden bg-blue-900/90 backdrop-blur-sm mt-4 rounded-lg`}
              >
                <nav className="flex flex-col items-center py-4 space-y-4">
                  <a className="font-bold text-white text-base hover:text-gray-200 transition-colors">Option 1engras</a>
                  <a className="text-white text-base hover:text-gray-200 transition-colors">Option2plusoumoinslong</a>
                  <a className="text-white text-base hover:text-gray-200 transition-colors">Option3encorepluslonguequeopt2</a>
                  <a className="text-white text-base hover:text-gray-200 transition-colors">sizelikeopt1</a>
                  <span className="text-orange-500">🔸</span>
                </nav>
              </div>
            </div>

            {/* Version Desktop */}
            <nav className="hidden lg:flex items-center justify-center gap-6">
              <img
                src={cargo}
                alt="CargoLogo"
                className="w-10 h-10 object-contain"
              />
              <a className="font-bold text-white text-base hover:text-gray-200 transition-colors">Option 1engras</a>
              <a className="text-white text-base hover:text-gray-200 transition-colors">Option2plusoumoinslong</a>
              <a className="text-white text-base hover:text-gray-200 transition-colors">Option3encorepluslonguequeopt2</a>
              <a className="text-white text-base hover:text-gray-200 transition-colors">sizelikeopt1</a>
              <span className="text-orange-500">🔸</span>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center flex flex-col md:flex-row items-center py-4 px-4">
          <div className="mb-6 md:mb-0">
            <h1 className="text-orange-500 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Votre Job board 100%, dédié au secteur CARGO
            </h1>
            <p className="mb-6 text-white text-base sm:text-lg md:text-xl">
              Découvrez tous les jobs disponibles, Vite Cargo !
            </p>
          </div>
          <div className="w-full md:w-[30px] lg:w-8"></div>
          <div className="flex-col space-y-2 w-full md:w-auto">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input
                type="text"
                placeholder="Recherchez un job"
                className="px-4 py-2 rounded w-full sm:w-64 text-black bg-white/90 backdrop-blur-sm focus:bg-white transition-colors"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded text-white transition-colors">
                Rechercher
              </button>
            </div>
            <button className="w-full sm:w-auto text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition bg-gradient-to-r from-blue-400 to-blue-800">
              un cont enu que onnelipat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHero; 