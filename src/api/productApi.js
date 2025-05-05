import axios from './api';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

export const fetchProductDetails = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Product not found');
  }
};