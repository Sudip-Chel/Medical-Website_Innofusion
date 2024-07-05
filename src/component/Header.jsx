 
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-100">
      <div className="flex items-center">
        <img src=" " alt="Logo" className="h-10 mr-2" />
        <span className="text-xl font-bold text-blue-800">StethoCare_</span>
      </div>
      <nav className="space-x-4">
        <a href="/home" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
        <a href="/service" className="text-gray-700 hover:text-blue-600">Service</a>
        <a href="/review" className="text-gray-700 hover:text-blue-600">Review</a>
        <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
      </nav>
      <button className="bg-blue-200 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded">
        Store →
      </button>
    </header>
  );
};

export default Header;
