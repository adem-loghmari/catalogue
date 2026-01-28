# Lumina Product Catalog

A premium, modern product catalog website built with Next.js 15 and Tailwind CSS v4.

Designed for professionals, Lumina showcases a high-quality UI with advanced filtering, client-side sorting, and a responsive layout suitable for B2B or tech product showcases.

![Lumina Preview](public/grid.png)

## Features

- **Modern Aesthetic**: Clean, minimalist design using a slate-themed color palette and Inter typography.
- **Advanced Filtering**: Filter products by category and price range using a responsive sidebar.
- **Smart Search**: Real-time product search functionality.
- **Sorting**: Client-side sorting by Newest, Popularity, and Price (Low/High).
- **Product Details**: Dedicated product pages with specifications tables, ratings, and tag clouds.
- **Responsive Design**: Fully optimized layout for mobile, tablet, and desktop viewports.
- **Contact Form**: Interactive contact page with client-side validation and success states.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (configured via CSS variables)
- **State Management**: React Hooks (`useState`, `useMemo`)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/lumina-catalog.git
   cd lumina-catalog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Build for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## Project Structure

- `src/app`: Application routes (Home, Catalog, Product Details, Contact).
- `src/components`: Reusable UI components (Hero, ProductCard, FilterSidebar, etc.).
- `src/lib`: Logic and data layer, including dummy product data (`products.ts`).

## License

This project is open source and available under the [MIT License](LICENSE).
