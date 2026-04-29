export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Regular' | 'Premium' | 'Signature';
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Espresso',
    description: 'Ekstraksi kopi murni dengan crema emas yang tebal dan aroma intens.',
    price: 22000,
    category: 'Regular',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Cappuccino',
    description: 'Keseimbangan sempurna antara espresso, steamed milk, dan foam lembut.',
    price: 35000,
    category: 'Regular',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Caffe Latte',
    description: 'Espresso dengan susu yang lebih banyak untuk tekstur creamy yang halus.',
    price: 38000,
    category: 'Regular',
    image: 'https://images.unsplash.com/photo-1570968015861-d38a6b0a2122?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'Cold Brew Nitro',
    description: 'Kopi seduh dingin selama 12 jam dengan sensasi gelembung nitrogen.',
    price: 42000,
    category: 'Premium',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    name: 'Iced Americano',
    description: 'Dua shot espresso disajikan dingin untuk kesegaran maksimal.',
    price: 28000,
    category: 'Regular',
    image: 'https://images.unsplash.com/photo-1551046710-2342feed3067?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    name: 'BrewSpace Signature',
    description: 'Kopi susu spesial dengan sentuhan gula aren organik dan aroma vanila.',
    price: 45000,
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '7',
    name: 'Premium Flat White',
    description: 'Rasio espresso dan micro-foam yang pas untuk pecinta kopi kuat namun lembut.',
    price: 40000,
    category: 'Premium',
    image: 'https://images.unsplash.com/photo-1572286258217-48887a2d744b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '8',
    name: 'Barista Blend',
    description: 'Pilihan biji kopi single origin terbaik bulan ini, diseduh manual (V60).',
    price: 48000,
    category: 'Signature',
    image: 'https://images.unsplash.com/photo-1544787210-2213d242750e?auto=format&fit=crop&q=80&w=400'
  }
];
