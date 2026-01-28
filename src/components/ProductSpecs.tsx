import React from 'react';

interface ProductSpecsProps {
    specs: Record<string, string>;
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ specs }) => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Specifications</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <tbody>
                    {Object.entries(specs).map(([key, value]) => (
                        <tr key={key} style={{ borderBottom: '1px solid var(--border)' }}>
                            <td style={{ padding: '0.75rem 0', color: 'var(--muted-foreground)', width: '40%' }}>{key}</td>
                            <td style={{ padding: '0.75rem 0', fontWeight: 500 }}>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductSpecs;
