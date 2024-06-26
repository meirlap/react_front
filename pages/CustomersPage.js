import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';

const CustomersPage = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await api.get('/customers');
      console.log(response.data);
      setCustomers(response.data);
    } catch (error) {
      setError('Error fetching customers');
      console.error('Error fetching customers:', error);
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
      <h1>Customers</h1>
      <ul>
        {customers.map(customer => (
          <li key={customer.CustomerID}>
            <strong>{customer.CompanyName}</strong><br />
            {customer.ContactName} ({customer.ContactTitle})<br />
            <Link to={`/customers/${customer.CustomerID}/orders`}>View Orders</Link>
            <br />
            <Link to={`/customers/${customer.CustomerID}/create-order`}>Create Order</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomersPage;
