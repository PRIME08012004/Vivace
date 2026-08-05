export type CatalogProduct = {
  id: number;
  slug: string;
  name: string;
  description?: string;
  priceInPaise: number;
  image: string;
  displayPrice: string;
};

/** Static catalog matching homepage product cards. Prices in INR (paise). */
export const PRODUCTS: CatalogProduct[] = [
  {
    id: 1,
    slug: "fall-resist-conditioner",
    name: "FALL RESIST 3X CONDITIONER (192.5 ML)",
    description: "Strengthening conditioner for fall-prone hair.",
    priceInPaise: 19900,
    image: "/conditioner.png",
    displayPrice: "₹199",
  },
  {
    id: 2,
    slug: "hyaluron-night-cream",
    name: "Hyaluron Moisture Hydra Filling Night Cream",
    description: "Overnight moisture for soft, hydrated hair.",
    priceInPaise: 14900,
    image: "/cream.png",
    displayPrice: "₹149",
  },
  {
    id: 3,
    slug: "extraordinary-oil-serum",
    name: "L'Oréal Paris Extraordinary Oil Serum",
    description: "Lightweight oil serum for shine and smoothness.",
    priceInPaise: 22900,
    image: "/Exoil-serum.png",
    displayPrice: "₹229",
  },
  {
    id: 4,
    slug: "total-repair-shampoo",
    name: "L'Oréal Paris Total Repair 5 Repairing Shampoo",
    description: "Repairing shampoo for damaged hair.",
    priceInPaise: 24900,
    image: "/shampoo.png",
    displayPrice: "₹249",
  },
];

export function getProductById(id: number): CatalogProduct | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): CatalogProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function formatINR(paise: number): string {
  return `₹${(paise / 100).toFixed(0)}`;
}
