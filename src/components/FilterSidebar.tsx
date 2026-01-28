'use client';

import React from 'react';
import { Category } from '@/lib/products';

interface FilterSidebarProps {
    categories: Category[];
    selectedCategory: Category | 'All';
    onSelectCategory: (category: Category | 'All') => void;
    priceRange: [number, number];
    onPriceChange: (range: [number, number]) => void;
    maxPrice: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
    priceRange,
    onPriceChange,
    maxPrice
}) => {
    return (
        <aside className="w-full">
            {/* Categories */}
            <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Categories</h3>
                <ul className="space-y-1">
                    <li>
                        <button
                            onClick={() => onSelectCategory('All')}
                            className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${selectedCategory === 'All'
                                    ? 'bg-secondary/10 text-primary'
                                    : 'text-muted-foreground hover:bg-muted/10 hover:text-foreground'
                                }`}
                        >
                            All Products
                        </button>
                    </li>
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => onSelectCategory(cat)}
                                className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${selectedCategory === cat
                                        ? 'bg-secondary/10 text-primary'
                                        : 'text-muted-foreground hover:bg-muted/10 hover:text-foreground'
                                    }`}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Filter */}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-foreground">Price Range</h3>
                <div className="mb-4">
                    <input
                        type="range"
                        min="0"
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) => onPriceChange([0, Number(e.target.value)])}
                        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary/20 accent-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$0</span>
                    <span>Up to ${priceRange[1]}</span>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
