'use client';

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (submitted) {
        return (
            <div style={{
                backgroundColor: '#f0fdf4', // green-50
                border: '1px solid #bbf7d0', // green-200
                color: '#166534', // green-800
                padding: '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center'
            }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
                <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                    style={{ marginTop: '1rem', textDecoration: 'underline', fontWeight: 500 }}
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '0.375rem',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '0.375rem',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div>
                <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '0.375rem',
                        fontFamily: 'inherit'
                    }}
                />
            </div>

            <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid var(--border)',
                        borderRadius: '0.375rem',
                        fontFamily: 'inherit',
                        resize: 'vertical'
                    }}
                />
            </div>

            <button
                type="submit"
                style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    padding: '0.75rem 2rem',
                    borderRadius: '0.375rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    alignSelf: 'start'
                }}
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
