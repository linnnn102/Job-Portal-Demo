import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import JobListings from './pages/JobListings';
import CompanyShowcase from './pages/CompanyShowcase';
import Login from './pages/Login';
import PrivateRoute from './components/Auth/PrivateRoute';
import AdminRoute from './components/Auth/AdminRoute';
import EmployeeRoute from './components/Auth/EmployeeRoute';
import UserManagement from './pages/admin/UserManagement';
import AddJob from './pages/admin/AddJob';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/jobs"
                    element={
                        <EmployeeRoute>
                            <JobListings />
                        </EmployeeRoute>
                    }
                />
                <Route
                    path="/companies"
                    element={
                        <PrivateRoute>
                            <CompanyShowcase />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/admin/users"
                    element={
                        <AdminRoute>
                            <UserManagement />
                        </AdminRoute>
                    }
                />
                <Route
                    path="/add-job"
                    element={
                        <AdminRoute>
                            <AddJob />
                        </AdminRoute>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;