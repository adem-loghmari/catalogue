import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductSpecs from '@/components/ProductSpecs';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <Link href="/catalog" style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', textDecoration: 'underline' }}>
                    &larr; Back to Catalog
                </Link>
            </div>

            <div className="product-layout">
                {/* Style block for grid layout */}
                <style>{`
          .product-layout {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          @media (min-width: 768px) {
            .product-layout {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}</style>

                {/* Product Image */}
                <div style={{
                    backgroundColor: 'var(--secondary)',
                    borderRadius: '0.5rem',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--muted-foreground)',
                    fontSize: '4rem'
                }}>
                    {product.image ? (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9', borderRadius: '0.5rem' }}>
                            📷
                        </div>
                    ) : 'Image'}
                </div>

                {/* Product Details */}
                <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{
                            color: 'var(--primary)',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            {product.category}
                        </span>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0 1rem' }}>{product.name}</h1>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>${product.price.toFixed(2)}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24' }}>
                                <span>★</span>
                                <span style={{ color: 'var(--foreground)', fontWeight: 500 }}>{product.rating}</span>
                                <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>({product.reviews} reviews)</span>
                            </div>
                        </div>
                        <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            {product.fullDescription}
                        </p>

                        <button style={{
                            backgroundColor: 'var(--primary)',
                            color: 'var(--primary-foreground)',
                            padding: '1rem 2rem',
                            borderRadius: '0.375rem',
                            fontSize: '1rem',
                            fontWeight: 600,
                            width: '100%',
                            transition: 'opacity 0.2s'
                        }}
                        // Simple interaction via CSS or inline handlers
                        >
                            Add to Cart
                        </button>
                    </div>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '2rem 0' }} />

                    <ProductSpecs specs={product.specs} />

                    <div style={{ marginTop: '2rem' }}>
                        <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Tags:</h4>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            {product.tags.map(tag => (
                                <span key={tag} style={{
                                    backgroundColor: 'var(--secondary)',
                                    color: 'var(--secondary-foreground)',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '999px',
                                    fontSize: '0.75rem'
                                }}>
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
