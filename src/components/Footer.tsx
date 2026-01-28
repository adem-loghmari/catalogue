'use client';

import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-border bg-background py-16">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">LUMINA</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Premium products for professionals. <br />
                            Quality, design, and innovation.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground">Catalog</h4>
                        <ul className="space-y-2">
                            <li><Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">New Arrivals</Link></li>
                            <li><Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Best Sellers</Link></li>
                            <li><Link href="/catalog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discounts</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground">Subscribe</h4>
                        <p className="mb-4 text-sm text-muted-foreground">
                            Latest news and updates.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            />
                            <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
                    <p>&copy; {new Date().getFullYear()} Lumina Inc. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
