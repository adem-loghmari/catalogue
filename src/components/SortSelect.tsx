import React from 'react';

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'popularity';

interface SortSelectProps {
    value: SortOption;
    onChange: (value: SortOption) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ value, onChange }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label htmlFor="sort" style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>Sort by:</label>
            <select
                id="sort"
                value={value}
                onChange={(e) => onChange(e.target.value as SortOption)}
                style={{
                    padding: '0.6rem 2rem 0.6rem 1rem',
                    borderRadius: '0.375rem',
                    border: '1px solid var(--border)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.5rem center',
                    backgroundSize: '1rem',
                    appearance: 'none',
                    minWidth: '200px'
                }}
            >
                <option value="newest">Newest Arrivals</option>
                <option value="popularity">Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
            </select>
        </div>
    );
};

export default SortSelect;
