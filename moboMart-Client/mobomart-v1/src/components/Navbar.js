import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import logo from "../assets/android-chrome-192x192.png";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false); // State to handle sidebar visibility
    const [searchBarOpen, setSearchBarOpen] = useState(false); // State to handle search bar visibility
    const location = useLocation();

    // Toggle the sidebar open/close for mobile
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Toggle search bar visibility on mobile
    const toggleSearchBar = () => {
        setSearchBarOpen(!searchBarOpen);
    };

    // Close the sidebar when the user navigates to another page
    useEffect(() => {
        setSidebarOpen(false);
    }, [location]);

    return (
        <nav className="navbar">
            {/* Logo aligned to the left */}
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="MoboMart Logo" className="navbar-logo" />
                </Link>
            </div>

            {/* Links visible directly in the navbar on PC */}
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/old-smartphone" className="navbar-link">Old Smartphone</Link>
                <Link to="/new-smartphone" className="navbar-link">New Smartphone</Link>
            </div>

            {/* Always open search bar on PC */}
            <div className={`navbar-search ${searchBarOpen ? 'open' : ''}`}>
                <input type="text" placeholder="Search..." className="navbar-search-input" />
            </div>

            {/* Icons (for mobile only) */}
            <div className="navbar-icons">
                <div className="icon search-icon" onClick={toggleSearchBar}>
                    <i className="fas fa-search"></i>
                </div>
                <div className="icon sidebar-icon" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            {/* Sidebar (for mobile only) */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="sidebar-close-btn" onClick={toggleSidebar}>X</button>
                <div className="sidebar-links">
                    <Link to="/" className="navbar-link" onClick={toggleSidebar}>Home</Link>
                    <Link to="/old-smartphone" className="navbar-link" onClick={toggleSidebar}>Old Smartphone</Link>
                    <Link to="/new-smartphone" className="navbar-link" onClick={toggleSidebar}>New Smartphone</Link>
                    <div className="auth-buttons">
                        <Link to="/login" className="auth-button" onClick={toggleSidebar}>Login</Link>
                        <Link to="/signup" className="auth-button" onClick={toggleSidebar}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
