import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check authentication status when component mounts and when token changes
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(!!token);
        };

        checkAuth();
        // Add event listener for storage changes
        window.addEventListener('storage', checkAuth);
        
        // Custom event listener for auth changes
        window.addEventListener('authChange', checkAuth);

        return () => {
            window.removeEventListener('storage', checkAuth);
            window.removeEventListener('authChange', checkAuth);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        setIsAuthenticated(false);
        // Dispatch auth change event
        window.dispatchEvent(new Event('authChange'));
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-brand">
                    Job Portal
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/jobs" className="nav-link">Jobs</Link>
                    <Link to="/companies" className="nav-link">Companies</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </div>
                <div className="auth-links">
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className="nav-link logout-btn">
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/register" className="nav-link register">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;