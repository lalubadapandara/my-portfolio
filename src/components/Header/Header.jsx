import React, { useState } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="bg-white/50 text-black p-4 shadow-lg rounded-b-2xl">
        <div className="flex items-center justify-between ml-auto mr-auto">
          <Link to="/" className="text-2xl font-bold">
            Lalu
          </Link>

          {/* Mobile menu toggle button */}
          <button
            className="block text-black cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <MdMenuOpen className="text-3xl" />
            ) : (
              <MdMenu className="text-3xl" />
            )}
          </button>

          {/* Navbar links */}
          <ul
            className={`md:flex md:space-x-6 md:items-center absolute md:static top-16 left-0 w-full bg-[#f0f8ff] md:w-auto md:bg-transparent md:flex-row transition-all duration-300 ease-in-out ${
              isOpen ? "h-[200px]" : "h-[0px]"
            }`}
          >
            <li>
              <Link
                to="/"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block ${
                  isOpen ? "" : "max-md:hidden"
                } pr-4 pl-4 pt-2 pb-2 hover:text-gray-600`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
