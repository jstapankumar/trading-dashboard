import axios from 'axios';

// Create an instance of axios with default configuration
const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3', // Base URL for CoinGecko API
  headers: { 
    'Content-Type': 'application/json' 
  },
});

// Function to fetch market data from CoinGecko API
export const fetchMarketData = async () => {
  try {
    const response = await api.get('/coins/markets', {
      params: {
        vs_currency: 'usd', // Specify the currency
        order: 'market_cap_desc', // Order by market cap (descending)
        per_page: 10, // Limit the number of coins per page
        page: 1, // Specify the page number
        sparkline: false, // Include sparkline data (optional)
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
    return [];
  }
};

// Function to fetch details of a specific coin
export const fetchCoinDetails = async (coinId) => {
  try {
    const response = await api.get(`/coins/${coinId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for coin ${coinId}:`, error);
    return null;
  }
};

// Function to fetch trending coins (optional)
export const fetchTrendingCoins = async () => {
  try {
    const response = await api.get('/search/trending');
    return response.data.coins;
  } catch (error) {
    console.error('Error fetching trending coins:', error);
    return [];
  }
};

export default api;
