import { LucideIcon } from 'lucide-react';

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  textColor: string;
  icon: LucideIcon;
  imagePlaceholder: string; // Using gradients or abstract shapes for now
  ctaText: string;
  websiteUrl: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactInfo {
  email: string;
  phonePrimary: string;
  phoneSecondary: string;
  address: string;
  socials: {
    platform: string;
    url: string;
  }[];
}