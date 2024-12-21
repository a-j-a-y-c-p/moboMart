import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig'; // Ensure you have axios configured here
import '../css/Details.css'; // Optional: Add styling here

const Details = () => {
  const { id } = useParams(); // Get the product ID from the route
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await api.get(`/api/v1/products/${id}`); // Fetch product by ID
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="details-container">
      <h1>{product.title}</h1>
      <img
        src={`https://via.placeholder.com/300?text=${encodeURIComponent(product.title)}`}
        alt={product.title}
        className="details-image"
      />
      <p><strong>Price:</strong> rs {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
};

export default Details;
