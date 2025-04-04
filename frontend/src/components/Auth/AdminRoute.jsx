import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const userId = localStorage.getItem('userId');
    const userType = localStorage.getItem('userType');

    if (!userId || userType !== 'admin') {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AdminRoute; 