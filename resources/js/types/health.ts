// resources/js/types/health.ts

export interface Feature {
    value: string;
    label: string;
  }

  export interface HealthPack {
    id: string;
    title: string;
    price: string;
    color: string;
    features: Feature[];
    isFeatured?: boolean;
  }
