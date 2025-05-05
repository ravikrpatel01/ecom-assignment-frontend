import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            src={product.imageUrl || "https://via.placeholder.com/300"}
            alt={product.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-emerald-700 mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
            <div className="flex justify-between">
              <p className="text-pink-600 font-bold">
                Category:{" "}
                <span className="text-gray-700"> {product.category}</span>{" "}
              </p>
              <p className="text-pink-600 font-bold">
                Price: <span className="text-gray-700"> {product.price} /-</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
