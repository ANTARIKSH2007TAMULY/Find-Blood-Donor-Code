import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-red-700 text-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGQMav2bhYC_mB5PoJJaBJBLKzJOmsaoo-w&s"
            alt="Blood Donor Logo"
            className="h-12 sm:h-16 w-auto object-contain"
          />
        </div>

        {/* Title */}
        <div className="hidden md:block">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center">
            Find-My-Donor 🩸
          </h1>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg sm:text-xl hover:text-red-200 transition duration-200">
            Home
          </Link>
          <Link to="/donors" className="text-lg sm:text-xl hover:text-red-200 transition duration-200">
            Donors
          </Link>
          <Link to="/requests" className="text-lg sm:text-xl hover:text-red-200 transition duration-200">
            Requests
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-600 px-4 pt-2 pb-4 space-y-2">
          <Link
            to="/"
            className="block text-white text-lg hover:text-red-200 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/donors"
            className="block text-white text-lg hover:text-red-200 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Donors
          </Link>
          <Link
            to="/requests"
            className="block text-white text-lg hover:text-red-200 transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            Requests
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;