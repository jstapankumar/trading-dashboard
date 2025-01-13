import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Welcome to Trading Dashboard!</div>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<div>Your Portfolio</div>} />
      </Routes>
    </Router>
  );
};

export default App;
