import React from 'react';

const VideoPitch = () => {
  const videoId = "PUWGyXfDBlc";

  return (
    <section className="pt-2 pb-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto"> {/* Conteneur flex */}
          
          {/* Première div (contenu texte) */}
          <div id="div1" className="md:w-1/2 text-center md:text-left">
            <h2 className="text-orange-600 text-xl font-bold mb-4">Postulez avec une vidéo TIK TOK !</h2>
            <p className="text-gray-700 mb-6">Enregistrez une vidéo personnalisée et courte pour vous démarquer.</p>
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-2 rounded-lg shadow-md">
              Participer
            </button>
          </div>
          
          {/* Deuxième div (vidéo) */}
          <div id="div2" className="md:w-1/2 max-w-md">
            <div className="aspect-video rounded-lg shadow-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Exemple de vidéo pitch"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoPitch;