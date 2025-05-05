import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";

const ProductDetailsCard = ({ product }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button
        onClick={() => navigate(location.state?.from || "/products")}
        className="flex items-center text-lg font-semibold text-black hover:text-black-100 mb-6 transition-colors cursor-pointer"
      >
        <MdOutlineKeyboardDoubleArrowLeft className="h-5 w-5 mr-2" />
        Back to Search
      </button>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mb-8 lg:mb-0">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 w-full h-96 sm:h-[500px]">
              <img
                src={product.imageUrl || "https://via.placeholder.com/800"}
                alt={product.name}
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800";
                }}
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-500 mt-2">{product.brand}</p>
          </div>

          <div className="flex items-center">
            <span className="text-3xl font-bold text-gray-900">
              ₹{product.price?.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="ml-4 text-lg text-gray-500 line-through">
                ₹{product.originalPrice?.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <div className="border-t border-b border-gray-200 py-4">
            <h2 className="text-lg font-medium text-gray-900 mb-3">
              Description
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {product.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Category</h3>
              <p className="text-sm text-gray-900 capitalize">
                {product.category}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Brand</h3>
              <p className="text-sm text-gray-900">{product.brand}</p>
            </div>
          </div>

          <div className="flex space-x-4 pt-6">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center cursor-pointer">
              <MdAddShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </button>
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;