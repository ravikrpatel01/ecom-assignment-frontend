import React, { useState, useEffect } from "react";
import ProductDetailsCard from "../components/products/ProductDetailsCard";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PRODUCT_API } from "../utils/constants";
import LoadingSpinner from "../components/common/LoadingSprinner";
import { toast } from 'react-toastify';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; 
    const fetchProduct = async () => {
      try {
        const response = await axios.get(PRODUCT_API.GET_BY_ID(id)); 
        if (isMounted) { 
          setProduct(response.data);
          toast.success('Product fetched successfully!');
        }      
      } catch (error) {
        if (isMounted) {
          toast.error(error.response?.data?.message || 'Failed to fetch product!');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <LoadingSpinner/>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ProductDetailsCard product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;