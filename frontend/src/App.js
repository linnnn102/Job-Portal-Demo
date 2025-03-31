import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import JobListings from './pages/JobListings';
import CompanyShowcase from './pages/CompanyShowcase';
import Login from './pages/Login';
import PrivateRoute from './components/Auth/PrivateRoute';

const App = () => {
    return (
        <Router>
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
                            <PrivateRoute>
                                <JobListings />
                            </PrivateRoute>
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
                </Routes>
            </div>
        </Router>
    );
};

export default App;