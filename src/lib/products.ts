export type Category = 'Electronics' | 'Furniture' | 'Accessories' | 'Stationery';

export interface Product {
    id: string;
    name: string;
    description: string;
    fullDescription: string;
    price: number;
    category: Category;
    rating: number;
    reviews: number;
    image: string;
    tags: string[];
    specs: Record<string, string>;
    isNew?: boolean;
    isBestSeller?: boolean;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'ErgoChair Pro',
        description: 'Ergonomic office chair with lumbar support.',
        fullDescription: 'The ErgoChair Pro is designed for maximum comfort and productivity. It features adjustable lumbar support, breathable mesh back, and a contoured seat cushion. Perfect for long hours at the desk.',
        price: 299.00,
        category: 'Furniture',
        rating: 4.8,
        reviews: 124,
        image: '/images/chair.jpg',
        tags: ['ergonomic', 'office', 'chair'],
        specs: {
            'Material': 'Mesh, Plastic, Metal',
            'Weight Capacity': '300 lbs',
            'Adjustability': 'Height, Tilt, Armrests',
            'Warranty': '2 Years'
        },
        isBestSeller: true
    },
    {
        id: '2',
        name: 'Lumina Desk Lamp',
        description: 'Modern LED desk lamp with adjustable brightness.',
        fullDescription: 'Illuminate your workspace with the Lumina Desk Lamp. It offers 5 color temperatures and 7 brightness levels, all controlled by a touch-sensitive panel. Includes a USB charging port.',
        price: 89.00,
        category: 'Electronics',
        rating: 4.6,
        reviews: 85,
        image: '/images/lamp.jpg',
        tags: ['lighting', 'led', 'smart'],
        specs: {
            'Power': '12W',
            'Color Temperature': '2700K-6500K',
            'Features': 'USB Port, Timer, Night Light',
            'Lifespan': '50,000 hours'
        },
        isNew: true
    },
    {
        id: '3',
        name: 'Minimalist Oak Desk',
        description: 'Solid oak desk with a clean, modern design.',
        fullDescription: 'Crafted from sustainable solid oak, this desk brings warmth and elegance to any office. The minimalist design features a spacious desktop and hidden cable management.',
        price: 450.00,
        category: 'Furniture',
        rating: 4.9,
        reviews: 42,
        image: '/images/desk.jpg',
        tags: ['wood', 'desk', 'minimalist'],
        specs: {
            'Dimensions': '60"W x 30"D x 29"H',
            'Material': 'Solid Oak',
            'Finish': 'Matte Varnish',
            'Assembly': 'Required'
        }
    },
    {
        id: '4',
        name: 'Noise-Cancelling Headphones',
        description: 'Wireless headphones with active noise cancellation.',
        fullDescription: 'Block out distractions with these premium noise-cancelling headphones. They deliver crystal-clear sound, deep bass, and up to 30 hours of battery life.',
        price: 199.00,
        category: 'Electronics',
        rating: 4.7,
        reviews: 210,
        image: '/images/headphones.jpg',
        tags: ['audio', 'wireless', 'music'],
        specs: {
            'Battery Life': '30 Hours',
            'Connectivity': 'Bluetooth 5.2',
            'Noise Cancellation': 'Active (ANC)',
            'Weight': '250g'
        },
        isBestSeller: true
    },
    {
        id: '5',
        name: 'Leather Desk Pad',
        description: 'Premium vegan leather desk pad for a smooth surface.',
        fullDescription: 'Protect your desk and improve mouse tracking with this elegant leather desk pad. Water-resistant and easy to clean, it adds a touch of sophistication to your setup.',
        price: 45.00,
        category: 'Accessories',
        rating: 4.5,
        reviews: 67,
        image: '/images/pad.jpg',
        tags: ['leather', 'desk', 'protection'],
        specs: {
            'Dimensions': '36" x 18"',
            'Material': 'Vegan Leather',
            'Colors': 'Black, Brown, Navy',
            'Thickness': '2mm'
        }
    },
    {
        id: '6',
        name: 'Mechanical Keyboard',
        description: 'Compact mechanical keyboard with tactile switches.',
        fullDescription: 'Experience superior typing with this mechanical keyboard. It features hot-swappable switches, RGB backlighting, and a compact 75% layout to save desk space.',
        price: 129.00,
        category: 'Electronics',
        rating: 4.8,
        reviews: 156,
        image: '/images/keyboard.jpg',
        tags: ['keyboard', 'mechanical', 'gaming'],
        specs: {
            'Switch Type': 'Tactile (Brown)',
            'Layout': '75%',
            'Connectivity': 'USB-C',
            'Keycaps': 'PBT Double-shot'
        },
        isNew: true
    },
    {
        id: '7',
        name: 'Notebook Set',
        description: 'Set of 3 dot-grid notebooks with premium paper.',
        fullDescription: 'Capture your ideas in style with these high-quality notebooks. Each notebook features 80 pages of 100gsm acid-free paper, perfect for fountain pens.',
        price: 24.00,
        category: 'Stationery',
        rating: 4.9,
        reviews: 30,
        image: '/images/notebooks.jpg',
        tags: ['paper', 'writing', 'notes'],
        specs: {
            'Pages': '80 per notebook',
            'Paper Weight': '100gsm',
            'Ruling': 'Dot Grid',
            'Size': 'A5'
        }
    },
    {
        id: '8',
        name: 'Monitor Stand',
        description: 'Aluminum monitor stand with USB hub.',
        fullDescription: 'Elevate your monitor to eye level and organize your desk with this aluminum stand. Included 4-port USB 3.0 hub makes connecting peripherals a breeze.',
        price: 65.00,
        category: 'Accessories',
        rating: 4.6,
        reviews: 92,
        image: '/images/stand.jpg',
        tags: ['monitor', 'organization', 'aluminum'],
        specs: {
            'Material': 'Aluminum Alloy',
            'Load Capacity': '44 lbs',
            'Ports': '4x USB 3.0',
            'Dimensions': '20"W x 8"D x 2"H'
        }
    },
    {
        id: '9',
        name: 'Executive Pen',
        description: 'Metal ballpoint pen with smooth ink flow.',
        fullDescription: 'A pen that feels as good as it looks. Balanced weight, twist mechanism, and smooth-writing ink make this the perfect tool for signing documents.',
        price: 35.00,
        category: 'Stationery',
        rating: 4.7,
        reviews: 45,
        image: '/images/pen.jpg',
        tags: ['writing', 'pen', 'executive'],
        specs: {
            'Material': 'Brass',
            'Ink Color': 'Black',
            'Mechanism': 'Twist',
            'Refillable': 'Yes'
        }
    },
    {
        id: '10',
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse for productivity.',
        fullDescription: 'Designed for comfort, this wireless mouse fits perfectly in your hand. Features ultra-precise tracking and a battery that lasts up to 12 months.',
        price: 55.00,
        category: 'Electronics',
        rating: 4.5,
        reviews: 110,
        image: '/images/mouse.jpg',
        tags: ['mouse', 'wireless', 'ergonomic'],
        specs: {
            'DPI': '4000',
            'Buttons': '6 Programmable',
            'Battery': '1x AA',
            'Connection': '2.4GHz & Bluetooth'
        }
    },
    {
        id: '11',
        name: 'Bookshelf Speakers',
        description: 'Compact speakers with rich, immersive sound.',
        fullDescription: 'Upgrade your office audio with these bookshelf speakers. They deliver room-filling sound with punchy bass and clear highs, perfect for music and calls.',
        price: 149.00,
        category: 'Electronics',
        rating: 4.6,
        reviews: 55,
        image: '/images/speakers.jpg',
        tags: ['audio', 'speakers', 'music'],
        specs: {
            'Power Output': '50W RMS',
            'Connectivity': 'Bluetooth, AUX, RCA',
            'Driver Size': '4 inch',
            'Finish': 'Wood Grain'
        }
    },
    {
        id: '12',
        name: 'Desk Organizer',
        description: 'Bamboo desk organizer for stationery and phone.',
        fullDescription: 'Keep your small items tidy with this eco-friendly bamboo organizer. Features compartments for pens, notes, and a dedicated phone stand.',
        price: 29.00,
        category: 'Accessories',
        rating: 4.8,
        reviews: 78,
        image: '/images/organizer.jpg',
        tags: ['bamboo', 'organization', 'storage'],
        specs: {
            'Material': 'Natural Bamboo',
            'Compartments': '5',
            'Dimensions': '10"W x 5"D x 4"H',
            'Weight': '1.2 lbs'
        }
    }
];
