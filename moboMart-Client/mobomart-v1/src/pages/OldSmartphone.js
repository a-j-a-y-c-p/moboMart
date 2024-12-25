import React, { useState, useEffect } from 'react';
import axios from '../api/axiosConfig';
import { Link } from 'react-router-dom';
import '../css/OldSmartphone.css';
import logo from "../assets/android-chrome-192x192.png";


const OldSmartphone = () => {
        const [products, setProducts] = useState([]);
        const [page, setPage] = useState(0);
        const [totalPages, setTotalPages] = useState(1);
    
        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const response = await axios.get(`/api/v1/old-products?page=${page}&size=10`);
                    setProducts(response.data.content);
                    setTotalPages(response.data.totalPages);
                } catch (error) {
                    console.error("Error fetching products:", error);
                }
            };
    
            fetchProducts();
        }, [page]);

    const handlePrevious = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    return (
        <div className="old-smartphones-page">
            {/* Button to sell phone */}
            <div className="sell-button-container">
                <Link to="/sell-phone" className="sell-button">Sell Your Phone</Link>
            </div>

            <div className="card-container">
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="card-link">
                    <div className="card">
                        <img
                            src={product.image? `data:image/jpeg;base64,${product.image}` : logo} 
                            alt={product.model}
                            className="details-image"
                        />
                        <h3 className="card-title">{product.model}</h3>
                        <p className="card-price">Price: rs {product.expectedPrice}</p>
                    </div>
                </Link>
                ))}
            </div>
            <div className="pagination-controls">
                <button onClick={handlePrevious} disabled={page === 0}>
                    Previous
                </button>
                <span>
                    Page {page + 1} of {totalPages}
                </span>
                <button onClick={handleNext} disabled={page === totalPages - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default OldSmartphone;
