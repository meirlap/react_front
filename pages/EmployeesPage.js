import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await api.get('/employees');
      console.log(response.data);
      setEmployees(response.data);
    } catch (error) {
      setError('Error fetching employees');
      console.error('Error fetching employees:', error);
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
      <h1>Employees</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.EmployeeID}>
            <strong>{employee.FirstName} {employee.LastName}</strong><br />
            {employee.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesPage;
