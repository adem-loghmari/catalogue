'use client';

import Link from 'next/link';
import React from 'react';

const Hero = () => {
    return (
        <section className="bg-background py-32 text-center border-b border-border">
            <div className="container flex flex-col items-center gap-8">
                <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl">
                    Simplicity is the ultimate sophistication.
                </h1>
                <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                    Discover our curated collection of premium office essentials designed for the modern professional.
                </p>
                <div className="mt-4 flex gap-4">
                    <Link href="/catalog">
                        <button className="rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:-translate-y-0.5">
                            Browse Catalog
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="rounded-md border border-border bg-background px-8 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary/10">
                            Contact Sales
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
