// src/pages/Signup.js
import React, { useState } from 'react';
import axios from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import '../css/Auth.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate(); // Use navigate hook

    const handleSignup = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords don't match.");
            return;
        }

        try {
            const response = await axios.post('/api/v1/auth/signup', { email, password });
            setSuccessMessage('Account created successfully! Please login.');
            setTimeout(() => {
                navigate('/login'); // Redirect to login page after success
            }, 2000);
        } catch (err) {
            setError('Error creating account. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            {error && <p className="error">{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <form onSubmit={handleSignup} className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default Signup;
