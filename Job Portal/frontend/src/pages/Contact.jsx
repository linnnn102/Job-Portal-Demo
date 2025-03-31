import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Here you would typically send the form data to your backend
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="contact">
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>Get in touch with our team</p>
            </section>

            <section className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Have questions about our job portal? We're here to help!</p>
                    
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <p>support@jobportal.com</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p>123 Job Street, Career City, CC 12345</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                    {status === 'sending' && (
                        <p className="status-message sending">Sending message...</p>
                    )}
                    {status === 'success' && (
                        <p className="status-message success">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="status-message error">Failed to send message. Please try again.</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Contact;