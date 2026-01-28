import Hero from '@/components/Hero';
import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  // Get first 3 products for featured section
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />

      {/* Featured Preview Section */}
      <section className="container">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Featured Collection</h2>
            <p className="mt-2 text-muted-foreground">Handpicked for your workspace.</p>
          </div>
          <Link href="/catalog" className="text-sm font-semibold text-primary decoration-2 underline-offset-4 hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
