import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-lg">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-300">
            Profile Explorer
          </Link>
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition duration-300">Home</Link>
            <Link to="/admin" className="text-gray-700 hover:text-indigo-600 transition duration-300">Admin</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

