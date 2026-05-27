export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: 'shield' | 'sparkles' | 'lock' | 'code' | 'thumb' | 'shield-coins';
}

export interface ProductCard {
  id: string;
  title: string;
  priceFrom: number;
  status: 'stable' | 'beta';
  verified: boolean;
  gradient: string;     // CSS gradient string for the cover panel
  monogram: string;     // 2-3 letter abbreviation to display on the cover
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
