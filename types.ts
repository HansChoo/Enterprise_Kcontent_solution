import { LucideIcon } from 'lucide-react';

export interface Solution {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  theme: {
    primary: string;
    gradient: string;
    text: string;
    bg: string;
    border: string;
    shadow: string;
  };
}

export interface PricingTier {
  name: string;
  price: string;
  target: string;
  features: string[];
  isRecommended?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

// New interfaces for the visual proposal layout
export interface Benefit {
  title: string;
  description: string;
  icon: any; // LucideIcon
}

export interface FlowStep {
  step: number | string;
  title: string;
  description: string;
}

export interface Resource {
  title: string;
  description: string;
  icon: any; // LucideIcon
}

export interface SolutionDetail {
  id: number;
  catchphrase: string;
  overview: string;
  painPoints: string[];
  
  // New Structured Data for Visual Proposal
  benefits: Benefit[]; // 4 Key Benefits (Grid)
  flowSteps: FlowStep[]; // 5-Step Visual Flow
  resources?: Resource[]; // 3-Column Infrastructure (Equipment, PM, Expert)
  
  keyFeatures: { title: string; desc: string; icon: any }[];
  process: ProcessStep[];
  timeline: string;
  pricing: PricingTier[];
  expectedEffects: string[];
  faq: { q: string; a: string }[];
}

export interface Stat {
  value: string;
  label: string;
}