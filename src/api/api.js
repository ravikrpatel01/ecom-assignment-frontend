import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; // Spring Boot's default port

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const searchProducts = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/search?query=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error searching products:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};