import axios from 'axios';

// Replace this with the actual API URL and endpoints
const api = axios.create({
  baseURL: 'https://api.example.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchMarketData = async () => {
  try {
    const response = await api.get('/market');
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    return [];
  }
};
