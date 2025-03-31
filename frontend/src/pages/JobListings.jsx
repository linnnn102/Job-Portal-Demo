import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './JobListings.css';

const JobListings = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await api.get('/api/jobs');
                // console.log('Full response:', response);
                if (response.data && response.data.jobs) {
                    setJobs(response.data.jobs);
                } else {
                    setError('No jobs data available');
                }
            } catch (err) {
                // console.error('Error fetching jobs:', err);
                setError('Failed to fetch jobs. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="job-listings">
            <h1>Available Jobs</h1>
            <div className="jobs-grid">
                {jobs.map((job) => (
                    <div key={job.id} className="job-card">
                        <h2>{job.title}</h2>
                        <div className="salary">{job.salary}</div>
                        <p className="description">{job.description}</p>
                        <div className="skills-container">
                            <h3>Required Skills:</h3>
                            <div className="skills-list">
                                {job.requiredSkills.map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="job-meta">
                            <h3>Last Updated:</h3>
                            <p className="last-updated">{job.lastUpdated}</p>
                            <a href={job.applyLink} className="apply-button" target="_blank" rel="noopener noreferrer">
                                Apply Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobListings;