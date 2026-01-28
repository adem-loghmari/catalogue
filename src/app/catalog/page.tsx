'use client';

import React, { useState, useMemo } from 'react';
import { products, Category } from '@/lib/products';
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
                        return b.reviews - a.reviews;
                    case 'newest':
                    default:
                        if (a.isNew && !b.isNew) return -1;
                        if (!a.isNew && b.isNew) return 1;
                        return 0;
                }
            });
    }, [selectedCategory, searchTerm, priceRange, sortOption]);

    return (
        <div className="container py-16">
            <div className="mb-12 text-center">
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Catalog</h1>
                <p className="text-lg text-muted-foreground">Explore our range of premium products.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr] lg:gap-12">
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
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1 sm:max-w-md">
                            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                        </div>
                        <SortSelect value={sortOption} onChange={setSortOption} />
                    </div>

                    <p className="text-sm text-muted-foreground">
                        Showing {filteredProducts.length} results
                    </p>

                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </div>
    );
}
