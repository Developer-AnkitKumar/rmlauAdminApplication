
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

// export const loginUser = async (credentials) => {
//   return await axios.post(`${API_URL}/login`, credentials);
// };

export const loginUser = async (userData) => {
  try {
    const response = await axios.post('/api/login', userData); // Replace with your API endpoint
    return response;
  } catch (error) {
    throw error; // Handle errors properly
  }
};

export const fetchVerificationDetails = async (email) => {
  return await axios.get(`${API_URL}/verify/${email}`);
};