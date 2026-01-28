import React from 'react';

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    border: '1px solid var(--border)',
                    borderRadius: '0.375rem',
                    backgroundColor: 'white',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    fontFamily: 'inherit'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--foreground)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
            />
        </div>
    );
};

export default SearchBar;
