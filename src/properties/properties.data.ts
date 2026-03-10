export interface Property {
  id: number;
  title: string;
  slug: string;
  type: 'sale' | 'rent';
  category: 'residential' | 'commercial' | 'luxury';
  price: number;
  priceLabel: string;
  location: string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  description: string;
  features: string[];
  agentId: number;
  images: string[];
  status: 'available' | 'pending' | 'sold';
  featured: boolean;
  tag?: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: 'The Meridian Penthouse',
    slug: 'meridian-penthouse',
    type: 'sale',
    category: 'luxury',
    price: 4850000,
    priceLabel: '$4,850,000',
    location: '1 Meridian Tower, Manhattan, NY 10001',
    city: 'New York',
    beds: 5,
    baths: 4,
    sqft: 6200,
    yearBuilt: 2021,
    description: 'Occupying the entire top floor of the iconic Meridian Tower, this penthouse redefines urban luxury. Floor-to-ceiling glass walls offer panoramic city views, while the chef\'s kitchen, private terrace, and bespoke finishes set a new standard for refined living.',
    features: ['Private Rooftop Terrace', 'Chef\'s Kitchen', 'Home Theater', 'Smart Home System', 'Concierge Service', 'Private Elevator', 'Wine Cellar', '3-Car Garage'],
    agentId: 1,
    images: ['The Meridian Penthouse.jpg'],
    status: 'available',
    featured: true,
    tag: 'Penthouse'
  },
  {
    id: 2,
    title: 'Harborview Executive Suites',
    slug: 'harborview-executive',
    type: 'rent',
    category: 'commercial',
    price: 18500,
    priceLabel: '$18,500/mo',
    location: '500 Harbor Blvd, Chicago, IL 60601',
    city: 'Chicago',
    beds: 0,
    baths: 4,
    sqft: 4800,
    yearBuilt: 2019,
    description: 'Premier Class A office space in the heart of Chicago\'s financial district. Featuring open-plan layouts, private boardrooms, and panoramic Lake Michigan views. Ideal for growing enterprises seeking a prestigious address with turn-key readiness.',
    features: ['Boardroom x3', 'Fiber Internet', 'Reception Desk', 'Parking x10', 'Gym Access', 'Rooftop Lounge', 'IT Infrastructure', '24/7 Security'],
    agentId: 2,
    images: ['Harborview Executive Suites.jpg'],
    status: 'available',
    featured: true,
    tag: 'Prime Office'
  },
  {
    id: 3,
    title: 'Elmwood Family Estate',
    slug: 'elmwood-family-estate',
    type: 'sale',
    category: 'residential',
    price: 1290000,
    priceLabel: '$1,290,000',
    location: '28 Elmwood Drive, Greenwich, CT 06830',
    city: 'Greenwich',
    beds: 6,
    baths: 5,
    sqft: 5100,
    yearBuilt: 2015,
    description: 'Set on 2.4 private acres in prestigious Greenwich, this colonial-style estate combines timeless architecture with modern amenities. The gourmet kitchen opens to a sun-drenched family room, while the landscaped grounds feature a pool, cabana, and guest house.',
    features: ['Swimming Pool', 'Guest House', 'Gourmet Kitchen', 'Library', 'Home Office', '3-Car Garage', 'Wine Cellar', 'Landscaped Gardens'],
    agentId: 1,
    images: ['Elmwood Family Estate.jpg'],
    status: 'available',
    featured: true,
    tag: 'Estate'
  },
  {
    id: 4,
    title: 'Westside Creative Campus',
    slug: 'westside-creative-campus',
    type: 'rent',
    category: 'commercial',
    price: 9800,
    priceLabel: '$9,800/mo',
    location: '700 Westside Ave, Los Angeles, CA 90028',
    city: 'Los Angeles',
    beds: 0,
    baths: 2,
    sqft: 3200,
    yearBuilt: 2020,
    description: 'A reimagined industrial space in the heart of LA\'s creative corridor. Exposed brick, soaring ceilings, and abundant natural light make this the ideal home for studios, agencies, and tech teams. Private courtyard and on-site parking included.',
    features: ['Exposed Brick', 'Private Courtyard', 'Industrial Ceilings', 'Parking x6', 'High-Speed Internet', 'Loading Dock', 'Break Room', 'ADA Compliant'],
    agentId: 3,
    images: ['Westside Creative Campus.jpg'],
    status: 'available',
    featured: false,
    tag: 'Creative Space'
  },
  {
    id: 5,
    title: 'Seaview Modern Villa',
    slug: 'seaview-modern-villa',
    type: 'sale',
    category: 'luxury',
    price: 3200000,
    priceLabel: '$3,200,000',
    location: '12 Coastal Ridge Road, Miami Beach, FL 33139',
    city: 'Miami',
    beds: 4,
    baths: 4,
    sqft: 4400,
    yearBuilt: 2022,
    description: 'An architectural masterpiece perched on Miami\'s Coastal Ridge with unobstructed Atlantic Ocean views. This contemporary villa features an infinity pool, open-plan interiors, and seamless indoor-outdoor flow designed for the discerning luxury buyer.',
    features: ['Infinity Pool', 'Ocean Views', 'Smart Home', 'Summer Kitchen', 'Home Gym', 'Dock Access', 'Security System', 'Generator'],
    agentId: 3,
    images: ['Seaview Modern Villa.jpg'],
    status: 'available',
    featured: true,
    tag: 'Ocean View'
  },
  {
    id: 6,
    title: 'Midtown Modern Loft',
    slug: 'midtown-modern-loft',
    type: 'rent',
    category: 'residential',
    price: 6500,
    priceLabel: '$6,500/mo',
    location: '340 Park Avenue S, New York, NY 10010',
    city: 'New York',
    beds: 2,
    baths: 2,
    sqft: 1800,
    yearBuilt: 2018,
    description: 'Stylish full-floor loft in a boutique Midtown building. Polished concrete floors, custom cabinetry, and chef\'s appliances throughout. Steps from Madison Square Park with doorman service and a rooftop terrace exclusive to residents.',
    features: ['Doorman', 'Rooftop Access', 'Chef\'s Kitchen', 'In-Unit Laundry', 'Storage Unit', 'Bike Room', 'Gym', 'Pet Friendly'],
    agentId: 2,
    images: ['Midtown Modern Loft.jpg'],
    status: 'available',
    featured: false,
    tag: 'Loft'
  },
];
