import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axios';

const CustomerOrdersPage = () => {
  const { customerId } = useParams();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await api.get(`/orders/customer/${customerId}`);
      setOrders(response.data);
    } catch (error) {
      setError('Error fetching orders');
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders, customerId]); // הוספנו את fetchOrders ואת customerId למערך התלויות

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Orders for Customer {customerId}</h1>
      <ul>
        {orders.map(order => (
          <li key={order.OrderID}>
            <strong>Order ID:</strong> {order.OrderID}<br />
            <strong>Order Date:</strong> {order.OrderDate}<br />
            <strong>Required Date:</strong> {order.RequiredDate}<br />
            <strong>Shipped Date:</strong> {order.ShippedDate}<br />
            <strong>Freight:</strong> {order.Freight}<br />
            <strong>Ship Name:</strong> {order.ShipName}<br />
            <strong>Ship Address:</strong> {order.ShipAddress}<br />
            <strong>Ship City:</strong> {order.ShipCity}<br />
            <strong>Ship Region:</strong> {order.ShipRegion}<br />
            <strong>Ship Postal Code:</strong> {order.ShipPostalCode}<br />
            <strong>Ship Country:</strong> {order.ShipCountry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerOrdersPage;
