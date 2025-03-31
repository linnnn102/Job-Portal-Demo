import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './CompanyShowcase.css';

const CompanyShowcase = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const response = await api.get('/api/companies');
                console.log('Companies response:', response);
                if (response.data && Array.isArray(response.data)) {
                    setCompanies(response.data);
                } else {
                    setError('Invalid company data format');
                }
            } catch (err) {
                console.error('Error fetching companies:', err);
                setError('Failed to fetch companies. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="company-showcase">
            <h1>Featured Companies</h1>
            <div className="companies-grid">
                {companies.map((company) => (
                    <div key={company.id} className="company-card">
                        <div className="company-image">
                            <img src={company.imageUrl} alt={`${company.name}`} />
                        </div>
                        <div className="company-info">
                            <h2>{company.name}</h2>
                            <button className="view-jobs-button">View Jobs</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CompanyShowcase;