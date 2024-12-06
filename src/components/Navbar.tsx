
import React from "react";

const Navbar: React.FC = () => (
  <nav className="flex justify-between p-4 bg-blue-700 text-white">
    <div className="font-bold text-xl">OceanBody</div>
    <ul className="flex space-x-6">
      <li><a href="#games" className="hover:underline">Jeux</a></li>
      <li><a href="#visualize" className="hover:underline">Visualisation</a></li>
      <li><a href="#learn-more" className="hover:underline">Apprendre plus</a></li>
    </ul>
  </nav>
);

export default Navbar;
