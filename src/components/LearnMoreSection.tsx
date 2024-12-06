import React from "react";

const LearnMoreSection: React.FC = () => (
  <div id="learn-more" className="p-10 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-4">Learn More</h2>
    <p className="text-gray-700 text-center mb-6">
      The ocean and the human body share fascinating similarities. Dive deeper into these parallels to 
      understand how interconnected we truly are with nature.
    </p>
    <div className="text-center">
      <a 
        href="/details" 
        className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
        Explore More
      </a>
    </div>
  </div>
);

export default LearnMoreSection;
