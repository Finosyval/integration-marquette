import React from 'react';
import airFrance from '@/assets/airFrance.png';
import meta from '@/assets/meta.png';
import edf from '@/assets/edf.png';
import amazon from '@/assets/amazon.png';
import entreprise from '@/assets/entreprise.png';

const companyData = [
  {
    name: 'Air France',
    description:
      "Compagnie aérienne leader en Europe. Elle transporte des millions de passagers chaque année à travers le monde.",
    image: airFrance
  },
  {
    name: 'META',
    description:
      "Développe des technologies sociales avancées. Leur mission est de connecter le monde grâce à l'IA et la réalité virtuelle.",
    image: meta
  },
  {
    name: 'EDF',
    description:
      "Fournisseur d'énergie français. L'entreprise investit massivement dans les énergies renouvelables.",
    image: edf
  },
  {
    name: 'AMAZON',
    description:
      "Leader du e-commerce et de la logistique. Amazon innove constamment dans la distribution et les services cloud.",
    image: amazon
  }
];

const Companies = () => {
  return (
    <section className="relative w-full py-20">
      <div className="absolute inset-0 right-[-15%] w-[110%] h-[105%] top-[-2%] overflow-visible">
        <svg 
          className="w-full h-full"
          viewBox="0 0 1200 900" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M50 0C50 0 100 20 250 20C400 20 550 0 700 0C850 0 1000 20 1150 20C1300 20 1150 0 1150 0V850C1150 850 1000 880 850 880C700 880 550 850 400 850C250 850 100 880 50 880C0 880 50 850 50 850V0Z" 
                fill="#EEE9F0" 
                fillOpacity="0.9"/>
          <path d="M478.664 421.509C416.306 412.053 351.4 517.81 351.4 517.81C388.5 525.94 432.09 539.635 459.2 542.938L477 548.85L491 551L504.5 554.5L522.2 559.197C550.722 573.317 572.641 559.323 559.5 548.85C559.5 548.85 532.073 429.607 478.664 421.509Z" 
                fill="#F3EFF2" 
                fillOpacity="0.3"/>
          <path d="M440.548 335.26C465.642 370.325 594 281.5 594 281.5C579.881 260.3 585.5 281.5 510.083 247.064L461.196 230.076L428.5 220C416.777 211.528 398 207.5 398 207.5C398 207.5 417.835 303.521 440.548 335.26Z" 
                fill="#F3EFF2" 
                fillOpacity="0.3"/>
          <path d="M243.737 257.466C271.211 223.948 199.237 155.327 186.323 163.821C173.41 172.316 152.195 185.906 139.281 214.786C126.368 243.666 126.368 239.419 126.368 239.419L115.299 269.149L103.308 307.372C98.5661 320.382 132.824 307.372 132.824 307.372C132.824 307.372 218.87 287.805 243.737 257.466Z" 
                fill="#F3EFF2" 
                fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-8 text-center flex flex-col space-y-10">
        <h2 className="text-blue-700 text-2xl font-bold pt-10">Les Entreprises qui recrutent</h2>
        <div>
          <p>Ceci est un texte que je n&apos;arrive pas à lire</p>
          <p>Ceci aussi est un texte que je n&apos;arrive pas à lire mais plus long que le texte précédent, rien que ça</p>
          <p>C&apos;est un texte que je n&apos;arrive pas à lire</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 py-10">
          {companyData.map((company, index) => (
            <div
              key={index}
              className="relative w-72 h-96 rounded-lg shadow-lg overflow-hidden"
              style={{
                backgroundImage: `url(${entreprise})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            >
              {/* Fond blanc semi-opaque pour la partie texte */}
              <div className="absolute bottom-0 h-[70%] w-full bg-white z-10 px-4 pt-16 text-left">
                <h3 className="text-lg font-bold text-gray-800">{company.name}</h3>
                <p className="text-sm text-gray-700 mt-2">{company.description}</p>
                <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2">
                  <button className="text-white w-[150px] px-4 py-2 rounded shadow hover:opacity-90 transition bg-gradient-to-r from-blue-400 to-blue-800">
                    Voir
                  </button>
                </div>
              </div>

              {/* Logo flottant centré */}
              <img
                src={company.image}
                alt={company.name}
                className="bg-gray-200 absolute top-[15%] left-[20%] w-[60%] h-20 z-20 object-cover"
              />
            </div>
          ))}
        </div>
        <button className="text-white w-[35%] mx-auto px-4 py-2 rounded shadow hover:opacity-90 transition bg-gradient-to-r from-orange-400 to-orange-800 mb-10">
          il s&apos;agit encore d&apos;un texte que je n&apos;arrive pas à lire
        </button>
      </div>
    </section>
  );
};

export default Companies;
