import React from "react";

// Sous-composant pour l'image du corps humain
const HumanBodyImage: React.FC = () => (
  <div className="flex flex-col items-center">
    <img
      src="/coupe_human.jpg"
      alt="Human cross-section"
      className="w-64 h-auto"
    />
    <p className="mt-4 text-center text-gray-700 font-semibold">Human Body</p>
  </div>
);

// Sous-composant pour l'image de l'océan
const OceanImage: React.FC = () => (
  <div className="flex flex-col items-center">
    <img
      src="/coupe_ocean.jpg"
      alt="Ocean cross-section"
      className="w-64 h-auto"
    />
    <p className="mt-4 text-center text-gray-700 font-semibold">Ocean</p>
  </div>
);

// Sous-composant pour les lignes de liaison
const ConnectionLines: React.FC = () => (
  <div className="relative">
    <div className="absolute top-10 left-0 h-1 w-24 bg-blue-500"></div>
    <div className="absolute top-24 left-0 h-1 w-24 bg-green-500"></div>
    <div className="absolute top-40 left-0 h-1 w-24 bg-yellow-500"></div>
  </div>
);

const VisualizeSection: React.FC = () => (
  <div id="visualize" className="p-10 bg-white ">
    <h2 className="text-3xl font-bold text-center mb-8 ">Visualize Connections</h2>
    <div className="flex justify-center items-center space-x-6 gap-12">
      {/* Image du corps humain */}
      <HumanBodyImage />

      {/* Lignes de liaison entre les deux */}
      <ConnectionLines />

      {/* Image de l'océan */}
      <OceanImage />
    </div>

    <p className="mt-6 text-center text-gray-600">
      Explore how the human body and ocean ecosystems mirror each other in their structures and functions.
    </p>
  </div>
);

export default VisualizeSection;
