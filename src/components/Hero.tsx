'use client';

import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section style={{
            padding: '8rem 0',
            backgroundColor: 'var(--accent)',
            textAlign: 'center',
            borderBottom: '1px solid var(--border)'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
            }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    maxWidth: '800px',
                    color: 'var(--primary)'
                }}>
                    Simplicity is the ultimate sophistication.
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--muted-foreground)',
                    maxWidth: '600px',
                    lineHeight: 1.6
                }}>
                    Discover our curated collection of premium office essentials designed for the modern professional.
                </p>
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    marginTop: '1rem'
                }}>
                    <Link href="/catalog">
                        <button style={{
                            backgroundColor: 'var(--primary)',
                            color: 'var(--primary-foreground)',
                            padding: '0.75rem 2rem',
                            borderRadius: '0.375rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            transition: 'transform 0.2s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                            Browse Catalog
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button style={{
                            backgroundColor: 'var(--background)',
                            color: 'var(--foreground)',
                            border: '1px solid var(--border)',
                            padding: '0.75rem 2rem',
                            borderRadius: '0.375rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            transition: 'background-color 0.2s'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--background)'}>
                            Contact Sales
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
