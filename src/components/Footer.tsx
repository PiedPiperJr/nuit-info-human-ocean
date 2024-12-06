import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-blue-700 text-white py-6">
    <div className="container mx-auto text-center">
      <p className="text-sm">
        © 2024 OceanBody. All rights reserved.
      </p>
      <div className="mt-4">
        <a href="https://twitter.com" className="text-white hover:text-blue-300 mx-2" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://facebook.com" className="text-white hover:text-blue-300 mx-2" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://instagram.com" className="text-white hover:text-blue-300 mx-2" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
