import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <h1>About Our Job Portal</h1>
                <p>Connecting talented professionals with their dream careers</p>
            </section>

            <section className="about-content">
                <div className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        We strive to create a seamless connection between job seekers and employers,
                        making the job search process more efficient and effective for everyone involved.
                    </p>
                </div>

                <div className="about-section">
                    <h2>What We Offer</h2>
                    <ul>
                        <li>Curated job listings from top companies</li>
                        <li>Company profiles and insights</li>
                        <li>Career resources and guidance</li>
                        <li>User-friendly interface</li>
                        <li>Secure and reliable platform</li>
                    </ul>
                </div>

                <div className="about-section">
                    <h2>For Job Seekers</h2>
                    <p>
                        Our platform provides you with access to thousands of job opportunities,
                        company insights, and career resources to help you make informed decisions
                        about your career path.
                    </p>
                </div>

                <div className="about-section">
                    <h2>For Employers</h2>
                    <p>
                        We help companies find the best talent by providing a platform to showcase
                        their opportunities and company culture to a wide audience of qualified candidates.
                    </p>
                </div>
            </section>

            <section className="contact-cta">
                <h2>Get in Touch</h2>
                <p>Have questions? We're here to help!</p>
                <a href="/contact" className="contact-button">
                    Contact Us
                </a>
            </section>
        </div>
    );
};

export default About;