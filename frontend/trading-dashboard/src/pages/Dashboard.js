import React, { useState, useEffect } from 'react';
import { fetchMarketData } from '../services/api'; // Import your reusable function

const Dashboard = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const getMarketData = async () => {
      const data = await fetchMarketData(); // Use the reusable function
      setMarketData(data);
    };

    getMarketData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Market Dashboard</h1>
      <ul>
        {marketData.map((coin) => (
          <li key={coin.id}>
            {coin.name}: ${coin.current_price.toFixed(2)} {/* Use current_price */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
