'use client';

import React from 'react';

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'popularity';

interface SortSelectProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }) => {
    return (
        <div className="flex items-center gap-3">
            <label htmlFor="sort" className="whitespace-nowrap text-sm text-muted-foreground">Sort by:</label>
            <div className="relative">
                <select
                    id="sort"
                    value={value}
                    onChange={(e) => onChange(e.target.value as SortOption)}
                    className="appearance-none rounded-md border border-border bg-surface py-2 pl-4 pr-10 text-sm font-medium text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer min-w-[180px]"
                >
                    <option value="newest">Newest Arrivals</option>
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SortSelect;
