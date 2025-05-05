import React, { useEffect, useState } from "react";
import axios from "axios";
import { PRODUCT_API } from "../../utils/constants";
import ProductCard from "./ProductCard";

const ProductGrid = ({products}) => {
  
  return (
    <>
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Our Product Collection
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover quality items for every need and preference
        </p>
        <div className="mt-4 flex justify-center">
          <div className="w-16 h-1 bg-emerald-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mb-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
