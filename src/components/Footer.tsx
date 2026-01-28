'use client';

import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            backgroundColor: 'var(--accent)',
            padding: '4rem 0 2rem 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '2rem',
                    marginBottom: '4rem'
                }}>
                    {/* Brand Column */}
                    <div>
                        <h3 style={{
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            marginBottom: '1rem'
                        }}>LUMINA</h3>
                        <p style={{
                            color: 'var(--muted-foreground)',
                            fontSize: '0.875rem',
                            lineHeight: 1.6
                        }}>
                            Premium products for professionals. <br />
                            Quality, design, and innovation.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontSize: '0.875rem'
                        }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link href="/" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>About Us</Link></li>
                            <li><Link href="/contact" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Careers</Link></li>
                            <li><Link href="/contact" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontSize: '0.875rem'
                        }}>Catalog</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li><Link href="/catalog" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>New Arrivals</Link></li>
                            <li><Link href="/catalog" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Best Sellers</Link></li>
                            <li><Link href="/catalog" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>Discounts</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 style={{
                            fontWeight: 600,
                            marginBottom: '1rem',
                            fontSize: '0.875rem'
                        }}>Subscribe</h4>
                        <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                            Latest news and updates.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="email" placeholder="Enter your email" style={{
                                padding: '0.5rem',
                                borderRadius: '0.375rem',
                                border: '1px solid var(--border)',
                                width: '100%',
                                fontSize: '0.875rem'
                            }} />
                            <button style={{
                                backgroundColor: 'var(--primary)',
                                color: 'var(--primary-foreground)',
                                padding: '0.5rem 1rem',
                                borderRadius: '0.375rem',
                                fontSize: '0.875rem',
                                fontWeight: 500
                            }}>Join</button>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--muted-foreground)',
                    fontSize: '0.75rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Lumina Inc. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
