import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import logo from "../assets/android-chrome-192x192.png";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [searchBarOpen, setSearchBarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleSearchBar = () => {
        setSearchBarOpen(!searchBarOpen);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);

        if (searchQuery.trim()) {
            navigate(`/?q=${searchQuery}`);
        }
    };

    useEffect(() => {
        setSidebarOpen(false);
    }, [location]);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="MoboMart Logo" className="navbar-logo" />
                </Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/old-smartphone" className="navbar-link">Old Smartphone</Link>
            </div>

            <div className={`navbar-search ${searchBarOpen ? 'open' : ''}`}>
                <input type="text" placeholder="Search..." className="navbar-search-input" value={searchQuery} onChange={handleSearchChange} />
            </div>

            <div className="navbar-links">
                <div className="auth-buttons">
                    <Link to="/login" className="auth-button">Login</Link>
                    <Link to="/signup" className="auth-button">Sign Up</Link>
                </div>
            </div>

            <div className="navbar-icons">
                <div className="icon search-icon" onClick={toggleSearchBar}>
                    <i className="fas fa-search"></i>
                </div>
                <div className="icon sidebar-icon" onClick={toggleSidebar}>
                    <i className="fas fa-bars"></i>
                </div>
            </div>

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button className="sidebar-close-btn" onClick={toggleSidebar}>X</button>
                <div className="sidebar-links">
                    <Link to="/" className="navbar-link" onClick={toggleSidebar}>Home</Link>
                    <Link to="/old-smartphone" className="navbar-link" onClick={toggleSidebar}>Old Smartphone</Link>
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
