'use client';

import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'var(--background)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '4rem'
      }}>
        {/* Logo/Brand */}
        <Link href="/" style={{
          fontWeight: 'bold',
          fontSize: '1.25rem',
          color: 'var(--foreground)'
        }}>
          LUMINA
        </Link>

        {/* Navigation */}
        <nav>
          <ul style={{
            display: 'flex',
            gap: '2rem',
            listStyle: 'none'
          }}>
            <li>
              <Link href="/" style={{
                color: 'var(--muted-foreground)',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'color 0.2s'
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" style={{
                color: 'var(--muted-foreground)',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'color 0.2s'
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}>
                Catalog
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{
                color: 'var(--muted-foreground)',
                fontSize: '0.875rem',
                fontWeight: 500,
                transition: 'color 0.2s'
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button (Desktop only for now) */}
        <Link href="/catalog">
          <button style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem', /* 6px */
            fontSize: '0.875rem',
            fontWeight: 500,
            transition: 'opacity 0.2s'
          }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            View Catalog
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
