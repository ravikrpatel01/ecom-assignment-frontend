import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-2 bg-emerald-400 h-[80px] w-full flex items-center justify-center sticky top-0 z-50">
      <div className="flex justify-between w-full items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <img
            width={50}
            height={50}
            className="img-thumbnail rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8D11kuBUnxx8U-KkQhOSILh6y0ztqLKWxg&s"
            alt="Logo"
          />
          <h3 className="text-2xl font-bold text-white">Ecommerce</h3>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-6 text-lg text-white font-semibold">
            <Link to="/">
              <li className="hover:text-emerald-100 transition">Home</li>
            </Link>
            <li className="hover:text-emerald-100 transition">Shop</li>
            <li className="hover:text-emerald-100 transition">Categories</li>
            <li className="hover:text-emerald-100 transition">Today's Deals</li>
            <li className="hover:text-emerald-100 transition">About Us</li>
            <Link
              to="#footer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("footer")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <li className="hover:text-emerald-100 transition">Contact</li>
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <div className="cursor-pointer hover:text-emerald-100 transition">
            <FaCartPlus size={24} color="white" />
          </div>
          <div>
            <Link to="/login">
              <button className="border border-white px-6 py-1 cursor-pointer bg-blue-400 text-white hover:bg-blue-500 transition rounded">
                Login
              </button>
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <div className="cursor-pointer hover:text-emerald-100 transition">
            <FaCartPlus size={24} color="white" />
          </div>
          <button 
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-emerald-500 shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-lg text-white font-semibold">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-emerald-100 transition py-2 border-b border-emerald-400">Home</li>
            </Link>
            <li className="hover:text-emerald-100 transition py-2 border-b border-emerald-400">Shop</li>
            <li className="hover:text-emerald-100 transition py-2 border-b border-emerald-400">Categories</li>
            <li className="hover:text-emerald-100 transition py-2 border-b border-emerald-400">Today's Deals</li>
            <li className="hover:text-emerald-100 transition py-2 border-b border-emerald-400">About Us</li>
            <Link
              to="#footer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("footer")?.scrollIntoView({
                  behavior: "smooth",
                });
                setIsMenuOpen(false);
              }}
            >
              <li className="hover:text-emerald-100 transition py-2">Contact</li>
            </Link>
          </ul>
          <div className="p-4 flex justify-center">
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <button className="border border-white px-8 py-2 w-full cursor-pointer bg-blue-400 text-white hover:bg-blue-500 transition rounded">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;