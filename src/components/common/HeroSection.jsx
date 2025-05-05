import axios from "axios";
import React, { useState, useEffect } from "react";
import { PRODUCT_API } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";
import ProductGrid from "../products/ProductGrid";
import { FiSearch, FiRefreshCw } from "react-icons/fi";
import Navbar from "./Navbar";
import LoadingSpinner from "./LoadingSprinner";
import Footer from "./Footer";
import { toast } from 'react-toastify';

const HeroSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsSearching(true);
        const apiUrl = searchQuery
          ? `${PRODUCT_API.GET_ALL}?search=${encodeURIComponent(searchQuery)}`
          : PRODUCT_API.GET_ALL;

        const response = await axios.get(apiUrl);
        setProducts(response.data);        
      } catch (err) {
        toast.error("Error fetching products!")
        setProducts([]);
      } finally {
        setLoading(false);
        setIsSearching(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ search: input.trim().toLowerCase() });
    } else {
      setSearchParams({});
    }
  };

  const clearSearch = () => {
    setInput("");
    setSearchParams({});
  };

  const hasResults = products.length > 0;
  const isEmptyQuery = !searchQuery;

  if (loading) {
    return (
      <div>
        <Navbar />
        <LoadingSpinner />
        <Footer />
      </div>
    );
  }

  return (
    <section id="home" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 px-7">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Discover Amazing Products
            </h1>
            <p className="text-lg text-gray-600">
              Shop the best quality products at unbeatable prices.
            </p>
            <form onSubmit={handleSearch} className="w-full max-w-md">
              <div className="flex shadow-sm rounded-lg">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Search products by name & brand..."
                  className="flex-1 min-w-0 block w-full px-4 py-3 border rounded-l-lg border-black focus:outline-none"
                  disabled={isSearching}
                />
                <button
                  type="submit"
                  disabled={isSearching || !input.trim()}
                  className="inline-flex items-center px-6 py-3 text-base font-medium rounded-r-lg shadow-sm text-white cursor-pointer bg-blue-400 border border-black border-l-0"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="flex gap-4 pt-2">
              <span className="text-sm text-gray-500">Popular: </span>
              <button
                onClick={() => {
                  setInput("iphone");
                  setSearchParams({ search: "iphone" });
                }}
                className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                iPhone
              </button>
              <button
                onClick={() => {
                  setInput("macbook");
                  setSearchParams({ search: "macbook" });
                }}
                className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                MacBook
              </button>
              <button
                onClick={() => {
                  setInput("smartwatch");
                  setSearchParams({ search: "smartwatch" });
                }}
                className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
              >
                Smart Watch
              </button>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Hero showcase"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {!isEmptyQuery && (
          <div className="mb-8 mt-10">
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">
              {hasResults
                ? `Search Results for "${searchQuery}"`
                : `No results found for "${searchQuery}"`}
            </h4>
            <p className="text-gray-500">
              {hasResults
                ? `Showing ${products.length} ${
                    products.length === 1 ? "item" : "items"
                  }`
                : "Try different keywords or categories"}
            </p>
          </div>
        )}

        {hasResults ? (
          <ProductGrid products={products} />
        ) : (
          !isEmptyQuery && (
            <div className="text-center py-12 bg-gray-50 rounded-lg mt-8">
              <div className="mx-auto max-w-md">
                <FiSearch className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No products matched your search
                </h3>
                <p className="text-gray-500 mb-6">
                  We couldn't find any items matching "{searchQuery}". Try
                  checking spelling or using more general terms.
                </p>
                <button
                  onClick={clearSearch}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  <FiRefreshCw className="mr-2" />
                  Show All Products
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HeroSection;
