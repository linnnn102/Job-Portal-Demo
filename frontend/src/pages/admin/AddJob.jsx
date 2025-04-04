import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import './AdminPages.css';

const AddJob = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        companyName: '',
        jobTitle: '',
        description: '',
        salary: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await api.post('/create/job', formData);
            navigate('/jobs');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create job');
            setLoading(false);
        }
    };

    return (
        <div className="admin-container">
            <h2>Add New Job</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit} className="admin-form">
                <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salary">Salary</label>
                    <input
                        type="text"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="submit-button"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="button-content">
                            <LoadingSpinner size="small" />
                            <span>Adding Job...</span>
                        </div>
                    ) : (
                        'Add Job'
                    )}
                </button>
            </form>
        </div>
    );
};

export default AddJob; 