import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/products';

interface ProductGridProps {
    products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    if (products.length === 0) {
        return (
            <div style={{
                textAlign: 'center',
                padding: '4rem 0',
                color: 'var(--muted-foreground)'
            }}>
                <p style={{ fontSize: '1.125rem' }}>No products found.</p>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        );
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
        }}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
