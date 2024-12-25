import React, { useState, useEffect } from 'react';
import axios from '../api/axiosConfig';
import { Link, useLocation } from 'react-router-dom';
import '../css/Home.css';
import logo from "../assets/android-chrome-192x192.png";


const Home = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`/api/v1/products`, {
                    params: {
                        page: page,
                        size: 10,
                        search: searchQuery
                    }
                });
                setProducts(response.data.content);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [page, searchQuery]);

    const handlePrevious = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    return (
        <div className="home-container">
            <h1>{searchQuery ? `Search Results for "${searchQuery}"` : "Mobile Phones"}</h1>
            <div className="card-container">
                
                {products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="card-link">
                        <div className="card">
                            <img
                                src={product.imgUrl ? product.imgUrl : logo}
                                alt={product.title}
                                className="details-image"
                            />
                            <h3 className="card-title">{product.title}</h3>
                            <p className="card-price">Price: rs {product.price}</p>
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

export default Home;
