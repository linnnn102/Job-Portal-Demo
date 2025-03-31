import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Find Your Dream Job</h1>
                    <p>Connect with top companies and opportunities that match your skills and aspirations.</p>
                    <Link to="/jobs" className="cta-button">
                        Browse Jobs
                    </Link>
                </div>
            </section>

            <section className="features">
                <div className="feature-card">
                    <h2>Latest Job Listings</h2>
                    <p>Browse through our curated list of the latest job opportunities from top companies.</p>
                    <Link to="/jobs" className="feature-link">
                        View Jobs →
                    </Link>
                </div>
                <div className="feature-card">
                    <h2>Featured Companies</h2>
                    <p>Explore profiles of leading companies and learn about their culture and opportunities.</p>
                    <Link to="/companyShowcase" className="feature-link">
                        View Companies →
                    </Link>
                </div>
                <div className="feature-card">
                    <h2>Career Resources</h2>
                    <p>Access helpful resources to improve your job search and career development.</p>
                    <Link to="/about" className="feature-link">
                        Learn More →
                    </Link>
                </div>
            </section>

            <section className="cta-section">
                <h2>Ready to Start Your Job Search?</h2>
                <p>Create an account to access exclusive job listings and company profiles.</p>
                <Link to="/login" className="cta-button">
                    Get Started
                </Link>
            </section>
        </div>
    );
};

export default Home;