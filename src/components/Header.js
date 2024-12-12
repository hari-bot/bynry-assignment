import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold hover:text-indigo-200 transition duration-300"
          >
            Profile Explorer
          </NavLink>
          <div className="space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg hover:text-indigo-200 transition duration-300 ${
                  isActive ? "font-bold border-b-2 border-white pb-1" : ""
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-lg hover:text-indigo-200 transition duration-300 ${
                  isActive ? "font-bold border-b-2 border-white pb-1" : ""
                }`
              }
            >
              Admin
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
