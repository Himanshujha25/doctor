"use client";
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20">

                <div className="flex items-center space-x-3">
                <div className="bg-white rounded-full p-2 shadow-md">
                  <span className="text-3xl" role="img" aria-label="Smiling Face">😊</span>
                </div>
                <span className="font-extrabold text-2xl text-white tracking-wide drop-shadow-lg">Dr. Serena Blake</span>
                </div>
                {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link href="/" className="text-white font-semibold hover:text-blue-200 transition duration-200 px-3 py-2 rounded-lg hover:bg-blue-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white font-semibold hover:text-blue-200 transition duration-200 px-3 py-2 rounded-lg hover:bg-blue-800">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white font-semibold hover:text-blue-200 transition duration-200 px-3 py-2 rounded-lg hover:bg-blue-800">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#book" className="ml-4 bg-white text-blue-700 font-bold px-5 py-2 rounded-full shadow hover:bg-blue-100 transition duration-200">
                Book Appointment
              </Link>
            </li>
          </ul>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open Menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
        <ul className="flex flex-col bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 px-6 py-4 space-y-2 shadow-lg">
          <li>
            <Link href="/" className="block text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 transition duration-200" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="block text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 transition duration-200" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="block text-white font-semibold px-3 py-2 rounded-lg hover:bg-blue-800 transition duration-200" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="#book" className="block bg-white text-blue-700 font-bold px-5 py-2 rounded-full shadow hover:bg-blue-100 transition duration-200 mt-2 text-center" onClick={() => setMenuOpen(false)}>
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
