import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium' }) => {
    return (
        <div className={`loading-spinner ${size}`}>
            <div className="spinner-ring"></div>
            <div className="spinner-text">Loading...</div>
        </div>
    );
};

export default LoadingSpinner; 