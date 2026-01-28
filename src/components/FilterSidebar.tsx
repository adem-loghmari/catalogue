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
        <aside style={{ width: '100%' }}>
            {/* Categories */}
            {/* Categories */}
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Categories</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <li>
                        <button
                            onClick={() => onSelectCategory('All')}
                            style={{
                                textAlign: 'left',
                                color: selectedCategory === 'All' ? 'var(--foreground)' : 'var(--muted-foreground)',
                                fontWeight: selectedCategory === 'All' ? 600 : 500,
                                width: '100%',
                                padding: '0.5rem 0.75rem',
                                borderRadius: '0.375rem',
                                backgroundColor: selectedCategory === 'All' ? 'var(--secondary)' : 'transparent',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                if (selectedCategory !== 'All') e.currentTarget.style.backgroundColor = 'var(--accent)';
                                e.currentTarget.style.color = 'var(--foreground)';
                            }}
                            onMouseLeave={(e) => {
                                if (selectedCategory !== 'All') e.currentTarget.style.backgroundColor = 'transparent';
                                if (selectedCategory !== 'All') e.currentTarget.style.color = 'var(--muted-foreground)';
                            }}
                        >
                            All Products
                        </button>
                    </li>
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => onSelectCategory(cat)}
                                style={{
                                    textAlign: 'left',
                                    color: selectedCategory === cat ? 'var(--foreground)' : 'var(--muted-foreground)',
                                    fontWeight: selectedCategory === cat ? 600 : 500,
                                    width: '100%',
                                    padding: '0.5rem 0.75rem',
                                    borderRadius: '0.375rem',
                                    backgroundColor: selectedCategory === cat ? 'var(--secondary)' : 'transparent',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedCategory !== cat) e.currentTarget.style.backgroundColor = 'var(--accent)';
                                    e.currentTarget.style.color = 'var(--foreground)';
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedCategory !== cat) e.currentTarget.style.backgroundColor = 'transparent';
                                    if (selectedCategory !== cat) e.currentTarget.style.color = 'var(--muted-foreground)';
                                }}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Filter */}
            <div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Price Range</h3>
                <div style={{ marginBottom: '1rem' }}>
                    <input
                        type="range"
                        min="0"
                        max={maxPrice}
                        value={priceRange[1]}
                        onChange={(e) => onPriceChange([0, Number(e.target.value)])}
                        style={{ width: '100%', cursor: 'pointer' }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                    <span>$0</span>
                    <span>Up to ${priceRange[1]}</span>
                </div>
            </div>
        </aside>
    );
};

export default FilterSidebar;
