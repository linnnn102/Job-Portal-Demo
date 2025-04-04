import React from 'react';
import { Navigate } from 'react-router-dom';

const EmployeeRoute = ({ children }) => {
    const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('userType');

    if (!userId || userType !== 'employee') {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default EmployeeRoute; 