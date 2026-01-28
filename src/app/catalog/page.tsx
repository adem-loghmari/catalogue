'use client';

import React, { useState, useMemo } from 'react';
import { products, Category, Product } from '@/lib/products';
import ProductGrid from '@/components/ProductGrid';
import FilterSidebar from '@/components/FilterSidebar';
import SearchBar from '@/components/SearchBar';
import SortSelect, { SortOption } from '@/components/SortSelect';

const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
const maxProductPrice = Math.max(...products.map(p => p.price));

export default function CatalogPage() {
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, maxProductPrice]);
    const [sortOption, setSortOption] = useState<SortOption>('newest');

    // Filter and Sort Logic
    const filteredProducts = useMemo(() => {
        return products
            .filter((product) => {
                // Category Filter
                if (selectedCategory !== 'All' && product.category !== selectedCategory) {
                    return false;
                }

                // Search Filter
                if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return false;
                }

                // Price Filter
                if (product.price > priceRange[1]) {
                    return false;
                }

                return true;
            })
            .sort((a, b) => {
                switch (sortOption) {
                    case 'price-low':
                        return a.price - b.price;
                    case 'price-high':
                        return b.price - a.price;
                    case 'popularity':
                        return b.reviews - a.reviews; // Using reviews count as proxy for popularity
                    case 'newest':
                    default:
                        // Just simulate newest by ID or reverse order for this dummy data if we had dates
                        // For now, let's assume higher IDs are newer or use the 'isNew' flag to prioritize
                        if (a.isNew && !b.isNew) return -1;
                        if (!a.isNew && b.isNew) return 1;
                        return 0;
                }
            });
    }, [selectedCategory, searchTerm, priceRange, sortOption]);

    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Catalog</h1>
                <p style={{ color: 'var(--muted-foreground)' }}>Explore our range of premium products.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="catalog-layout">
                {/* Responsive Layout: Sidebar on top for mobile, left for desktop using CSS Grid/Flex */}
                {/* We'll use a simple flex column for mobile and then grid for desktop via inline styles or media queries in globals, but here inline styles are tricky for media queries. 
             Since we set up globals.css, let's assume we can use a class or just standard flex.
             Actually, for a robust responsive layout without Tailwind, we might need a style tag or responsive component.
             Let's try a simple flex wrap approach or a grid with media query substitute.
         */}
                <style>{`
            .catalog-layout {
                grid-template-columns: 1fr;
            }
            @media (min-width: 768px) {
                .catalog-layout {
                    grid-template-columns: 250px 1fr !important;
                }
            }
         `}</style>

                {/* Sidebar */}
                <div>
                    <FilterSidebar
                        categories={uniqueCategories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                        priceRange={priceRange}
                        onPriceChange={setPriceRange}
                        maxPrice={maxProductPrice}
                    />
                </div>

                {/* Main Content */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div style={{ flex: 1, minWidth: '200px' }}>
                            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                        </div>
                        <SortSelect value={sortOption} onChange={setSortOption} />
                    </div>

                    <p style={{ marginBottom: '1rem', color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>
                        Showing {filteredProducts.length} results
                    </p>

                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </div>
    );
}
