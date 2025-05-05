import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Ecommerce</h2>
          <p className="text-gray-400 text-sm">
            Your one-stop shop for all your needs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/products" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-white">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400 text-xl mb-4">
            <a href="#">
              <FaFacebook className="hover:text-white" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-white" />
            </a>
            <a href="#">
              <FaLinkedin className="hover:text-white" />
            </a>
            <a href="#">
              <FaGithub className="hover:text-white" />
            </a>
          </div>
          <div className="flex-col">
            <p>Got questions? We've got answers!</p>
            <div>
              <input
                className="border px-2 py-1 mt-2 focus:outline-none"
                type="email"
                placeholder="example@gmail.com"
              />
              <button className="border py-1 px-4 border-l-0 bg-emerald-500 cursor-pointer">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
