'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/lib/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            {/* Image Placeholder */}
            <Link href={`/products/${product.id}`} className="block">
                <div className="relative flex h-60 items-center justify-center bg-secondary/5 text-muted-foreground">
                    {product.image ? (
                        <div className="flex h-full w-full items-center justify-center bg-slate-100 text-4xl">
                            📷
                        </div>
                    ) : 'Product Image'}

                    {(product.isNew || product.isBestSeller) && (
                        <div className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-semibold uppercase text-white ${product.isBestSeller ? 'bg-primary' : 'bg-green-500'}`}>
                            {product.isBestSeller ? 'Best Seller' : 'New'}
                        </div>
                    )}
                </div>
            </Link>

            <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {product.category}
                </p>
                <Link href={`/products/${product.id}`}>
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <p className="text-lg font-semibold text-foreground">${product.price.toFixed(2)}</p>
                    <Link href={`/products/${product.id}`}>
                        <button className="text-sm font-medium text-primary decoration-2 underline-offset-4 hover:underline">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
