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
        <div className="container py-16">
            <div className="mb-8">
                <Link href="/catalog" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    &larr; Back to Catalog
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {/* Product Image */}
                <div className="flex items-center justify-center rounded-2xl bg-secondary/5 h-[400px] sm:h-[500px] text-6xl text-muted-foreground border border-border">
                    {product.image ? (
                        <div className="flex h-full w-full items-center justify-center rounded-2xl">
                            📷
                        </div>
                    ) : 'Image'}
                </div>

                {/* Product Details */}
                <div className="flex flex-col">
                    <div className="mb-2">
                        <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                            {product.category}
                        </span>
                    </div>

                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground">{product.name}</h1>

                    <div className="mb-6 flex items-center gap-4">
                        <span className="text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                        <div className="flex items-center gap-1 text-amber-400">
                            <span>★</span>
                            <span className="font-medium text-foreground">{product.rating}</span>
                            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                        </div>
                    </div>

                    <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                        {product.fullDescription}
                    </p>

                    <div className="mb-10">
                        <button className="w-full rounded-md bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-transform hover:bg-primary/90 hover:-translate-y-0.5 sm:w-auto">
                            Add to Cart
                        </button>
                    </div>

                    <hr className="border-border" />

                    <ProductSpecs specs={product.specs} />

                    <div className="mt-8">
                        <h4 className="mb-3 text-sm font-semibold text-foreground">Tags:</h4>
                        <div className="flex flex-wrap gap-2">
                            {product.tags.map(tag => (
                                <span key={tag} className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary-foreground">
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
