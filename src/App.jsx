import React from 'react';
import HeaderHero from './components/HeaderHero';
import VideoPitch from './components/VideoPitch';
import Companies from './components/Companies';
import Training from './components/Training';

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <HeaderHero />
      <VideoPitch />
      <Companies />
      <Training />
    </div>
  );
}

export default App;
