import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GrMenu } from "react-icons/gr";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-transparent shadow-md  w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="poppins-bold text-2xl font-bold text-primary hover:text-white duration-500 transition-shadow">
            New Mangala
          </div>

          {/* Desktop Menu */}
          <div className="poppins-medium hidden md:flex space-x-8 text-xl font-semibold">
            <Link to="/" className="text-primary hover:text-white">
              Home
            </Link>

            <Link to="/doctors" className="text-primary hover:text-white">
              Doctors
            </Link>

            <Link to="/contact" className="text-primary hover:text-white">
              Contact
            </Link>

            <Link to="/about" className="text-primary hover:text-white">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 focus:outline-none"
            >
              {isOpen ? <GrClose /> : <GrMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="h-screen poppins-medium md:hidden text-center text-2xl  bg-transparent backdrop-blur-sm shadow-lg">
          <Link
            to="/"
            className="block px-4 py-2 text-primary hover:bg-secondary"
          >
            Home
          </Link>

          <Link
            to="/doctors"
            className="block px-4 py-2 text-primary hover:bg-secondary"
          >
            Doctors
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-primary hover:bg-secondary"
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-primary hover:bg-secondary"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
