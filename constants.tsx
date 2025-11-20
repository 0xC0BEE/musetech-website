import { 
  Gem, 
  Cpu, 
  Smartphone, 
  Award, 
  Target, 
  Users, 
  HeartHandshake 
} from 'lucide-react';
import { Brand, CoreValue, ContactInfo } from './types';

export const COMPANY_NAME = "Musetech Solutions FZCO";
export const TAGLINE = "Technology • Wellness • Digital Identity";

export const HERO_COPY = {
  headline: "Three Brands. One Vision.",
  subheadline: "Thoughtfully Curated to Support Modern Growth.",
  description: "Established in Dubai, Musetech Solutions is a proudly Canadian-owned company dedicated to blending innovation with purpose. We create sustainable digital ecosystems through our brands, combining technology, wellness, and creativity to enhance businesses and communities across the UAE."
};

export const BRANDS: Brand[] = [
  {
    id: 'creative-muse',
    name: "Creative Muse Marketing",
    tagline: "Technology that works for your business.",
    description: "We provide modern IT services to help businesses scale with confidence — from professional website development to digital automation and technical support.",
    features: [
      "Website & App Development",
      "Business Software & Automation",
      "Branding + Digital Presence",
      "Ongoing Technical Support"
    ],
    color: "from-blue-600 to-cyan-400",
    textColor: "text-cyan-100",
    icon: Cpu,
    imagePlaceholder: "https://picsum.photos/800/600?random=1",
    ctaText: "Read More"
  },
  {
    id: 'auralis-crystals',
    name: "Auralis Crystals",
    tagline: "Wellness through natural energy.",
    description: "Our crystal shop offers handpicked healing crystals and spiritual tools created to support emotional balance, clarity, and mindful living.",
    features: [
      "Raw & Polished Crystals",
      "Crystal Bracelets & Jewelry",
      "Cleansing & Meditation Tools",
      "Mindful Living Accessories"
    ],
    color: "from-amber-500 to-purple-600",
    textColor: "text-amber-100",
    icon: Gem,
    imagePlaceholder: "https://picsum.photos/800/600?random=2",
    ctaText: "Shop Crystals"
  },
  {
    id: 'tapcard',
    name: "TapCard | Digital Business Cards",
    tagline: "Share your identity in one tap.",
    description: "A smart, eco-friendly alternative to paper business cards. Custom designs you can share instantly via QR, link, or NFC.",
    features: [
      "Modern + Professional Impression",
      "Instantly Updatable Details",
      "One Tap Sharing",
      "Works on Any Device"
    ],
    color: "from-emerald-500 to-slate-800",
    textColor: "text-emerald-100",
    icon: Smartphone,
    imagePlaceholder: "https://picsum.photos/800/600?random=3",
    ctaText: "Get Your Digital Card"
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: "Unified Quality",
    description: "Thoughtfully built brands, not just products.",
    icon: Award
  },
  {
    title: "Purpose-Driven",
    description: "We create with meaning and use.",
    icon: Target
  },
  {
    title: "Modern Approach",
    description: "Simple, practical, people-focused solutions.",
    icon: Users
  },
  {
    title: "Consistent Support",
    description: "We believe in relationships, not transactions.",
    icon: HeartHandshake
  }
];

export const CONTACT_DETAILS: ContactInfo = {
  email: "info@musetechsolutions.net",
  phonePrimary: "+91 00000 00000",
  phoneSecondary: "+91 12345 67890",
  address: "Dubai, UAE",
  socials: [
    { platform: "Facebook", url: "#" },
    { platform: "Instagram", url: "#" }
  ]
};
