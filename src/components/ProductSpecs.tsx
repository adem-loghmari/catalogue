'use client';

import React from 'react';

interface ProductSpecsProps {
    specs: Record<string, string>;
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ specs }) => {
    return (
        <div className="mt-8">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Specifications</h3>
            <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm text-left">
                    <tbody className="divide-y divide-border bg-surface">
                        {Object.entries(specs).map(([key, value]) => (
                            <tr key={key} className="hover:bg-muted/5 transition-colors">
                                <td className="w-1/3 px-6 py-4 font-medium text-muted-foreground bg-muted/5">{key}</td>
                                <td className="px-6 py-4 text-foreground font-medium">{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductSpecs;
