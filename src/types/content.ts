export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: 'performance' | 'support' | 'updates' | 'security' | 'activation' | 'warranty';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactChannel {
  kind: 'whatsapp' | 'call';
  label: string;
  value: string;
  href: string;
}

export interface FeatureGroup {
  /** sanitized category label (e.g. "Input & Sensitivity") */
  category: string;
  /** icon key for the group */
  icon: 'tune' | 'overlay' | 'panel' | 'map' | 'shield' | 'broom' | 'gamepad' | 'stream';
  items: string[];
}

export interface PricingPlan {
  label: string;   // "7 Days"
  days: number;
  price: number;
}

export interface ProductCard {
  id: string;             // slug used in the route, e.g. "fortnite"
  gameName: string;       // factual game identifier, e.g. "Fortnite"
  title: string;          // sanitized product title, e.g. "Fortnite Player Assist"
  kind: string;           // category label, e.g. "Player Assist"
  tagline: string;        // short subtitle
  priceFrom: number;
  status: 'active' | 'beta';
  verified: boolean;
  gradient: string;       // CSS gradient string for the cover panel
  monogram: string;       // short wordmark text shown on the cover
  description: string;    // overview paragraph
  features: FeatureGroup[];
  compatibility: {
    releaseDate: string;
    platforms: string;
    os: string;
    recording: string;
  };
  plans: PricingPlan[];
}

export interface StatCard {
  value: string;
  label: string;
  icon: 'trophy' | 'users' | 'shield-check';
}

export interface BenefitCard {
  title: string;
  description: string;
  visual: 'percent' | 'shield-glow' | 'pricing' | 'editor' | 'payments' | 'version' | 'refund' | 'changelog';
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
