import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Contact Us</h1>
                <p style={{ color: 'var(--muted-foreground)', maxWidth: '600px', margin: '0 auto' }}>
                    Have questions about our products or need a custom quote? We're here to help.
                </p>
            </div>

            <div className="contact-layout">
                <style>{`
            .contact-layout {
                display: grid;
                grid-template-columns: 1fr;
                gap: 4rem;
            }
            @media (min-width: 768px) {
                .contact-layout {
                    grid-template-columns: 1fr 1fr;
                    gap: 6rem;
                }
            }
        `}</style>

                {/* Contact Info */}
                <div>
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Get in Touch</h3>
                        <p style={{ color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>
                            Email: <a href="mailto:hello@lumina.com" style={{ color: 'var(--primary)' }}>hello@lumina.com</a>
                        </p>
                        <p style={{ color: 'var(--muted-foreground)' }}>
                            Phone: +1 (555) 123-4567
                        </p>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Office</h3>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                            123 Business Avenue<br />
                            Suite 400<br />
                            New York, NY 10001<br />
                            USA
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Hours</h3>
                        <p style={{ color: 'var(--muted-foreground)' }}>
                            Monday - Friday: 9am - 6pm EST
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
