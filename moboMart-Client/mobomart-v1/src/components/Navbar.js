import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from "../assets/android-chrome-192x192.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="MoboMart Logo" className="navbar-logo" />
                </Link>
            </div>
            <div className="left-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/old-smartphone" className="navbar-link">Old Smartphone</Link>
                <Link to="/new-smartphone" className="navbar-link">New Smartphone</Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="auth-buttons">
                <Link to="/login" className="auth-button">Login</Link>
                <Link to="/signup" className="auth-button">Sign Up</Link>
            </div>
        </nav>
    );
};

export default Navbar;
