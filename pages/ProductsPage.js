import React, { useState, useEffect } from 'react';
import api from '../api/axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      setError('Error fetching products');
      console.error('Error fetching products:', error);
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
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.ProductID}>
            <strong>{product.ProductName}</strong><br />
            {product.QuantityPerUnit}<br />
            ${product.UnitPrice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
