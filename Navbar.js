import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiCompass, FiBell, FiMessageSquare, FiUser } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-2xl font-bold text-red-600">YouTube Clone</Link>
      </div>
      
      <div className="flex-1 mx-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-0 top-0 h-full px-4 bg-gray-100 rounded-r-full border-l border-gray-300">
            🔍
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <FiHome className="text-xl cursor-pointer" />
        <FiCompass className="text-xl cursor-pointer" />
        <FiBell className="text-xl cursor-pointer" />
        <FiMessageSquare className="text-xl cursor-pointer" />
        <FiUser className="text-xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;