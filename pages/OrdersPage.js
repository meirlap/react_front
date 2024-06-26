import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await api.get('/orders');
      console.log(response.data);
      setOrders(response.data);
    } catch (error) {
      setError('Error fetching orders');
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.OrderID}>
            <strong>Order ID: {order.OrderID}</strong><br />
            Customer ID: {order.CustomerID}<br />
            Employee ID: {order.EmployeeID}<br />
            Order Date: {new Date(order.OrderDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
