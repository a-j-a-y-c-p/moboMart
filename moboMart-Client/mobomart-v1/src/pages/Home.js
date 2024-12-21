import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = ({ products }) => {
  return (
    <div className="home-container">
      <h1>Mobile Phones</h1>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={`https://via.placeholder.com/150?text=${encodeURIComponent(product.title)}`}
              alt={product.title}
              className="card-image"
            />
            <h3 className="card-title">{product.title}</h3>
            <p className="card-price">Price: rs {product.price}</p>
            <Link to={`/product/${product.id}`} className="details-link">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
