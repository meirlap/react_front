import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const CreateOrderPage = () => {
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [orderData, setOrderData] = useState({
    CustomerID: '',
    EmployeeID: '',
    OrderDate: '',
    RequiredDate: '',
    ShippedDate: '',
    ShipVia: '',
    Freight: '',
    ShipName: '',
    ShipAddress: '',
    ShipCity: '',
    ShipRegion: '',
    ShipPostalCode: '',
    ShipCountry: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
    fetchEmployees();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await api.get('/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await api.get('/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/orders', orderData);
      console.log('Order created:', response.data);
      navigate(`/customers/${orderData.CustomerID}/orders`);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div>
      <h1>Create Order</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer:</label>
          <select name="CustomerID" onChange={handleChange} required>
            <option value="">Select a customer</option>
            {customers.map(customer => (
              <option key={customer.CustomerID} value={customer.CustomerID}>
                {customer.CompanyName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Employee:</label>
          <select name="EmployeeID" onChange={handleChange} required>
            <option value="">Select an employee</option>
            {employees.map(employee => (
              <option key={employee.EmployeeID} value={employee.EmployeeID}>
                {employee.FirstName} {employee.LastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Order Date:</label>
          <input type="date" name="OrderDate" onChange={handleChange} required />
        </div>
        <div>
          <label>Required Date:</label>
          <input type="date" name="RequiredDate" onChange={handleChange} required />
        </div>
        <div>
          <label>Shipped Date:</label>
          <input type="date" name="ShippedDate" onChange={handleChange} />
        </div>
        <div>
          <label>Ship Via:</label>
          <input type="number" name="ShipVia" onChange={handleChange} required />
        </div>
        <div>
          <label>Freight:</label>
          <input type="number" name="Freight" step="0.01" onChange={handleChange} required />
        </div>
        <div>
          <label>Ship Name:</label>
          <input type="text" name="ShipName" onChange={handleChange} required />
        </div>
        <div>
          <label>Ship Address:</label>
          <input type="text" name="ShipAddress" onChange={handleChange} required />
        </div>
        <div>
          <label>Ship City:</label>
          <input type="text" name="ShipCity" onChange={handleChange} required />
        </div>
        <div>
          <label>Ship Region:</label>
          <input type="text" name="ShipRegion" onChange={handleChange} />
        </div>
        <div>
          <label>Ship Postal Code:</label>
          <input type="text" name="ShipPostalCode" onChange={handleChange} required />
        </div>
        <div>
          <label>Ship Country:</label>
          <input type="text" name="ShipCountry" onChange={handleChange} required />
        </div>
        <button type="submit">Create Order</button>
      </form>
    </div>
  );
};

export default CreateOrderPage;
