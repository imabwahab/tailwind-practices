import React from 'react'

import { useState } from "react";
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-blue-200 shadow-md">
      <nav className="flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-900">Logo</div>

        {/* Hamburger Icon (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-900 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Navigation Links (desktop) */}
        <ul className="hidden md:flex gap-6 text-blue-900 font-medium">
          <li className="cursor-pointer hover:text-amber-700 border-b-2 border-transparent hover:border-amber-700 transition-all duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-amber-700 transition-colors duration-300">
            About
          </li>
          <li className="cursor-pointer hover:text-amber-700 transition-colors duration-300">
            Contact
          </li>
          <li className="cursor-pointer hover:text-amber-700 transition-colors duration-300">
            Help
          </li>
        </ul>

        {/* CV Button (desktop) */}
        <button className="hidden md:inline bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full transition duration-300">
          CV
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-blue-900 font-medium">
            <li className="hover:text-amber-700 border-b hover:border-b-2 hover:border-amber-700 transition-all duration-300">
              Home
            </li>
            <li className="hover:text-amber-700 transition-colors duration-300">
              About
            </li>
            <li className="hover:text-amber-700 transition-colors duration-300">
              Contact
            </li>
            <li className="hover:text-amber-700 transition-colors duration-300">
              Help
            </li>
            <li>
              <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition duration-300">
                CV
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}


export default App