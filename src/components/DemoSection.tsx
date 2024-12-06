import React from "react";

const steps = [
  { title: "Step 1", description: "Discover marine currents", icon: "🌊" },
  { title: "Step 2", description: "Explore the ocean's depth", icon: "🐙" },
  { title: "Step 3", description: "Link your organs", icon: "💡" },
  { title: "Step 4", description: "Protect the ecosystem", icon: "🌱" },
  { title: "Step 5", description: "Achieve harmony", icon: "⚖️" },
];

const DemoSection: React.FC = () => (
  <div id="games" className="p-10 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-8">Demo Steps</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {steps.map((step, index) => (
        <div key={index} className="bg-white shadow-md p-4 rounded-lg text-center">
          <div className="text-5xl">{step.icon}</div>
          <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
          <p className="text-gray-600 mt-2">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default DemoSection;
