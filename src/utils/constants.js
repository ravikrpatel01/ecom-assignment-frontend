export const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const PRODUCT_API = {
  LOGIN: `${API_BASE_URL}/login`,
  SIGN_UP: `${API_BASE_URL}/signup`,
  GET_ALL: `${API_BASE_URL}/products`,
  GET_BY_ID: (id) => `${API_BASE_URL}/products/${id}`,
};
