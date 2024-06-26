import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Northwind Data Viewer</h1>
      <ul>
        <li><Link to="/customers">View Customers</Link></li>
        <li><Link to="/employees">View Employees</Link></li>
        <li><Link to="/products">View Products</Link></li>
        <li><Link to="/orders">View Orders</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
