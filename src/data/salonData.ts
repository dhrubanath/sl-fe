/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Global currency symbol - set to Indian Rupee (₹)
export const DEFAULT_CURRENCY = '₹';

export interface SalonInfo {
  name: string;
  tagline: string;
  heroSubtext: string;
  location: string;
  fullAddress: string;
  phones: string[];
  primaryPhone: string;
  email: string;
  whatsappUrl: string;
  hours: string;
  googleMapEmbedUrl: string;
}

export const SALON_INFO: SalonInfo = {
  name: 'Stunning Loka Unisex Salon',
  tagline: 'Where elegance meets personal expression in the heart of Bangalore.',
  heroSubtext:
    'Experience transformative hair artistry, bespoke bridal makeup, and clinical skincare crafted by master stylists for all genders.',
  location: 'BTM Layout, Bangalore',
  fullAddress:
    'No.13, 15th Main Rd, Stage 2, Mahadeshwara Nagar, BTM Layout 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076',
  phones: ['9353239723', '9180275370'],
  primaryPhone: '9353239723',
  email: 'stunningworld21@gmail.com',
  whatsappUrl: 'https://wa.me/919353239723',
  hours: 'Monday – Sunday: 9:00 AM – 9:00 PM',
  // Verified embedded Google Map for BTM Layout 2nd Stage, Bengaluru
  googleMapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.895318617838!2d77.6083541757883!3d12.914441587395724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1501bca96e6d%3A0xe67ba465057a7e8b!2sBTM%202nd%20Stage%2C%20BTM%20Layout%2C%20Bengaluru%2C%20Karnataka%20560076!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
};

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export const SALON_STATS: StatItem[] = [
  {
    value: '500+',
    label: 'Happy Clients',
    description: 'Delighted brides, grooms & style enthusiasts',
  },
  {
    value: '10+',
    label: 'Years Experience',
    description: 'Artistry honed in editorial & salon styling',
  },
  {
    value: '4',
    label: 'Core Services',
    description: 'Hair cuts, bridal makeup, color & skin therapy',
  },
];

export interface OccasionService {
  id: string;
  title: string;
  iconName: 'wedding' | 'party' | 'fashion' | 'camera';
  shortDesc: string;
  features: string[];
  image: string;
  badge: string;
}

export const OCCASION_SERVICES: OccasionService[] = [
  {
    id: 'wedding-makeup',
    title: 'Wedding Makeup',
    iconName: 'wedding',
    shortDesc:
      'Timeless bridal glamour, HD airbrush finish, and personalized consultation for traditional and modern ceremonies.',
    features: ['HD & Airbrush Bridal Artistry', 'Jewelry & Dupatta Draping', 'Pre-Wedding Skin Prep Trial'],
    image:
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=800&q=80',
    badge: 'Signature Craft',
  },
  {
    id: 'party-makeup',
    title: 'Party Makeup',
    iconName: 'party',
    shortDesc:
      'Luminous cocktail, sangeet, and reception looks tailored to compliment your outfit and evening lighting.',
    features: ['Glowy Skin Finish', 'Custom Eye Artistry & Lashes', '12+ Hour Smudge-proof Wear'],
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular',
  },
  {
    id: 'fashion-makeup',
    title: 'Fashion Makeup',
    iconName: 'fashion',
    shortDesc:
      'High-fashion runway and editorial aesthetics featuring bold eyeliner, sculptural contouring, and couture palettes.',
    features: ['High-Fashion Graphic Lines', 'Gloss & Matte Editorial Textures', 'Runway-Ready Hair Pairing'],
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    badge: 'Editorial',
  },
  {
    id: 'photo-shoot',
    title: 'Photo-Shoot',
    iconName: 'camera',
    shortDesc:
      'Flawless camera-ready makeup and hair engineered specifically for high-definition studio and outdoor photography.',
    features: ['Zero Flashback Matte Toning', 'On-Location Touchup Support', 'Portfolio & Commercial Focus'],
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
    badge: 'Studio Grade',
  },
];

export interface PriceItem {
  name: string;
  price: number;
  suffix?: string;
  description: string;
}

export interface PriceCategory {
  id: string;
  category: string;
  subtitle: string;
  iconType: string;
  items: PriceItem[];
}

export const PRICING_CATEGORIES: PriceCategory[] = [
  {
    id: 'hair-cuts',
    category: 'Hair Cuts',
    subtitle: 'Precision styling & bespoke unisex shaping',
    iconType: 'scissors',
    items: [
      {
        name: "Women's Haircut",
        price: 650,
        suffix: '+',
        description: 'Includes consultation, clarifying wash, blowout & heat styling',
      },
      {
        name: 'Stylist Haircut',
        price: 350,
        suffix: '+',
        description: 'Classic barbering, textured fades, or razor layers with tonic',
      },
      {
        name: "Teen's Haircut",
        price: 400,
        suffix: '+',
        description: 'Trendy layered cuts tailored for student lifestyle and easy maintenance',
      },
      {
        name: "Children's Haircut",
        price: 250,
        suffix: '+',
        description: 'Gentle, patient styling for young ones under 12 years old',
      },
    ],
  },
  {
    id: 'make-up',
    category: 'Make Up',
    subtitle: 'From quick daytime polish to grand bridal trials',
    iconType: 'sparkles',
    items: [
      {
        name: 'Regular Makeup',
        price: 2499,
        suffix: '+',
        description: 'Flawless daytime or evening look with skin prep and setting mist',
      },
      {
        name: 'Quick Fix Makeup',
        price: 1499,
        suffix: '+',
        description: '30-minute touchup: radiant base, brow perfection, and nude lips',
      },
      {
        name: 'Just Eyes',
        price: 899,
        suffix: '+',
        description: 'Dramatic smokey eye, cat-wing liner, custom shimmer, and lash boost',
      },
      {
        name: 'Bridal Trial',
        price: 3500,
        suffix: '+',
        description: 'Full bridal look consultation, skin analysis, and half-face test',
      },
    ],
  },
  {
    id: 'hair-color',
    category: 'Hair Color',
    subtitle: 'Glossy dimensions with scalp-protecting botanicals',
    iconType: 'palette',
    items: [
      {
        name: 'Single Process',
        price: 1499,
        suffix: '+',
        description: 'All-over root retouch or monochromatic gloss for luminous depth',
      },
      {
        name: "L'Oreal Color",
        price: 2999,
        suffix: '+',
        description: "Premium ammonia-free L'Oréal Majirel/Inoa infusion with keratin",
      },
      {
        name: 'Full Highlights',
        price: 4999,
        suffix: '+',
        description: 'Dimensional foil balayage across crown, nape, and face framing',
      },
      {
        name: 'Half Highlights',
        price: 2799,
        suffix: '+',
        description: 'Targeted halo or crown highlights for sun-kissed brightness',
      },
    ],
  },
  {
    id: 'skin-care',
    category: 'Skin Care',
    subtitle: 'Nourishing botanical elixirs and deep cellular recovery',
    iconType: 'sparkle',
    items: [
      {
        name: 'Facials',
        price: 1299,
        suffix: '+',
        description: 'Deep pore extraction, ultrasonic rejuvenation, and customized mask',
      },
      {
        name: 'Nutritional Advice',
        price: 799,
        suffix: '+',
        description: 'Holistic skin nutrition, antioxidant routines, and barrier health',
      },
      {
        name: 'Toning',
        price: 1899,
        suffix: '+',
        description: 'Lymphatic drainage massage, micro-current lifting, and jade roll',
      },
      {
        name: 'Regular Skin Care',
        price: 899,
        suffix: '+',
        description: 'Hydrating cleanse, fruit acid peel, and vitamin C infusion therapy',
      },
    ],
  },
];

export interface GalleryItem {
  id: number;
  title: string;
  category: 'Bridal' | 'Hair' | 'Skincare' | 'Party';
  image: string;
  description: string;
  aspect: 'tall' | 'wide' | 'square';
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Royal South Indian Bridal Artistry',
    category: 'Bridal',
    image:
      'https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=80',
    description: 'Traditional gold temple jewelry complement with dewy HD base and kohl eyes.',
    aspect: 'tall',
  },
  {
    id: 2,
    title: 'Vibrant Balayage & Silk Press',
    category: 'Hair',
    image:
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80',
    description: 'Honey caramel melt with glass-hair finish and natural bounce.',
    aspect: 'square',
  },
  {
    id: 3,
    title: 'Cocktail Glam & Smokey Wing',
    category: 'Party',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
    description: 'Chic emerald smokey gradient with satin lip contour for an evening gala.',
    aspect: 'tall',
  },
  {
    id: 4,
    title: 'Luminous Hydra Facial Glow',
    category: 'Skincare',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    description: 'Deep cellular hydration with hyaluronic infusion and rose quartz massage.',
    aspect: 'square',
  },
  {
    id: 5,
    title: 'Modern Reception Bridal Look',
    category: 'Bridal',
    image:
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80',
    description: 'Soft sculpted glam with rose-gold shimmer eyelids and romantic curls.',
    aspect: 'tall',
  },
  {
    id: 6,
    title: 'Executive Precision Fade & Beard Sculpt',
    category: 'Hair',
    image:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80',
    description: 'Crisp razor fade with botanical beard conditioning and scalp massage.',
    aspect: 'square',
  },
  {
    id: 7,
    title: 'Editorial Avant-Garde Beauty',
    category: 'Party',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    description: 'Precision graphic eyeliner with pearlescent highlighter accents.',
    aspect: 'square',
  },
  {
    id: 8,
    title: 'Youth Renewal Botanical Skin Therapy',
    category: 'Skincare',
    image:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80',
    description: 'Calming green tea and peptide complex treatment for barrier renewal.',
    aspect: 'tall',
  },
];

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  title: string;
  location: string;
  rating: number;
  image: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    quote:
      'Awesome place with beautiful people who want you to get well soon. Their suggestions are something that you cannot miss!',
    author: 'Sharon Harper',
    title: 'Femina Miss Asia',
    location: 'Bangalore',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    quote:
      'Stunning Loka crafted my entire wedding week looks! From my Sangeet soft glam to the grand Muhurtham bridal glow, everything was picture-perfect. The team is genuinely attentive and artistic.',
    author: 'Ananya Roy',
    title: 'Bangalore Bride',
    location: 'BTM Layout',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    quote:
      'Finding a truly upscale unisex salon that nails both textured haircuts and pre-event skin detox in South Bangalore was a gamechanger. Highly recommend their stylist team.',
    author: 'Rohan Mehra',
    title: 'Creative Director',
    location: 'Koramangala',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];

export interface ReviewPlatform {
  name: string;
  rating: string;
  reviewsCount: string;
  url: string;
  accent: string;
}

export const REVIEW_PLATFORMS: ReviewPlatform[] = [
  {
    name: 'Google',
    rating: '4.9 ★',
    reviewsCount: '380+ reviews',
    url: 'https://www.google.com/maps/search/?api=1&query=Stunning+Loka+Unisex+Salon+BTM+Layout',
    accent: '#4285F4',
  },
  {
    name: 'Yelp',
    rating: '4.8 ★',
    reviewsCount: '120+ reviews',
    url: 'https://www.yelp.com',
    accent: '#D32323',
  },
  {
    name: 'Facebook',
    rating: '5.0 ★',
    reviewsCount: '210+ votes',
    url: 'https://www.facebook.com',
    accent: '#1877F2',
  },
  {
    name: 'Foursquare',
    rating: '9.4 / 10',
    reviewsCount: 'Top Salon BTM',
    url: 'https://foursquare.com',
    accent: '#F94877',
  },
];
