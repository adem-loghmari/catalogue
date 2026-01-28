'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div style={{
            border: '1px solid var(--border)',
            borderRadius: '0.5rem',
            overflow: 'hidden',
            backgroundColor: 'white',
            transition: 'box-shadow 0.2s, transform 0.2s',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {/* Image Placeholder */}
            <Link href={`/products/${product.id}`}>
                <div style={{
                    height: '240px',
                    backgroundColor: 'var(--secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--muted-foreground)',
                    position: 'relative'
                }}>
                    {product.image ? (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' }}>
                            {/* In a real app we'd use Next.js Image, but strictly placeholder for now as per rules or user context */}
                            <span style={{ fontSize: '3rem' }}>📷</span>
                        </div>
                    ) : 'Product Image'}

                    {(product.isNew || product.isBestSeller) && (
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            backgroundColor: product.isBestSeller ? 'var(--primary)' : '#22c55e',
                            color: 'white',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.25rem',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase'
                        }}>
                            {product.isBestSeller ? 'Best Seller' : 'New'}
                        </div>
                    )}
                </div>
            </Link>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <p style={{
                    fontSize: '0.75rem',
                    color: 'var(--muted-foreground)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                }}>
                    {product.category}
                </p>
                <Link href={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 style={{
                        fontWeight: 600,
                        fontSize: '1.125rem',
                        marginBottom: '0.5rem',
                        lineHeight: 1.4
                    }}>
                        {product.name}
                    </h3>
                </Link>
                <p style={{
                    color: 'var(--muted-foreground)',
                    fontSize: '0.875rem',
                    marginBottom: '1rem',
                    lineHeight: 1.5,
                    flexGrow: 1
                }}>
                    {product.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <p style={{ fontWeight: 600, fontSize: '1.125rem' }}>${product.price.toFixed(2)}</p>
                    <Link href={`/products/${product.id}`}>
                        <button style={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--primary)',
                            textDecoration: 'underline',
                            textUnderlineOffset: '4px'
                        }}>
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
