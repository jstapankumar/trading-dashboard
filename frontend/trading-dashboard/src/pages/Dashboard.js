import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    // Fetching mock market data (you can replace this with actual API calls)
    axios.get('https://api.example.com/market')
      .then((response) => {
        setMarketData(response.data);
      })
      .catch((error) => console.error('Error fetching market data:', error));
  }, []);

  return (
    <div className="dashboard">
      <p>Market Dashboard</p>
      <ul>
        {marketData.map((data, index) => (
          <li key={index}>{data.name}: ${data.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
