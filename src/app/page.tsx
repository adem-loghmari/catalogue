import Hero from '@/components/Hero';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Featured Preview Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            marginBottom: '3rem'
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Featured Collection</h2>
              <p style={{ color: 'var(--muted-foreground)' }}>Handpicked for your workspace.</p>
            </div>
            <Link href="/catalog" style={{
              color: 'var(--primary)',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: '4px'
            }}>
              View All
            </Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Placeholder cards for now, we will replace with ProductCard later */}
            {[1, 2, 3].map((item) => (
              <div key={item} style={{
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                backgroundColor: 'white'
              }}>
                <div style={{
                  height: '240px',
                  backgroundColor: 'var(--secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted-foreground)'
                }}>
                  Product Image
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Ergonomic Chair Pro</h3>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', marginBottom: '1rem' }}>High-performance office chair.</p>
                  <p style={{ fontWeight: 600 }}>$299.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
