import React from "react";

const HeroSection: React.FC = () => (
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/ocean.jpg")' }}>
    <img 
      src="/body-woman.png" 
      alt="Person on ocean" 
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%]"
    />
    <div className="absolute bottom-10 w-full text-center text-white">
      <h1 className="text-4xl font-bold">The Ocean as Your Body</h1>
      <p className="mt-4 text-lg">Discover step by step how much your body is linked to the ocean.</p>
    </div>
  </div>
);

export default HeroSection;
