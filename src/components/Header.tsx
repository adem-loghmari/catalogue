'use client';

import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="text-xl font-bold text-foreground">
          LUMINA
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Catalog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button (Desktop) */}
        <Link href="/catalog">
          <button className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            View Catalog
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
