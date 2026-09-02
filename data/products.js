// data/products.js
//
// Single source of truth for product data. Consolidated from the
// pre-existing `/products` listing and `/product-details/[id]` detail
// page so both views (and any future ones) stay in sync.
//
// Note on scope: this is a wholesale/bulk manufacturing catalog — there
// is no live e-commerce pricing yet, so `pricing` intentionally only
// carries the quantity-tier structure already used by the existing
// quote-request flow, not invented per-unit rates.

export const CATEGORIES = [
  { slug: "buckets", label: "Buckets" },
  { slug: "accessories", label: "Accessories" },
  { slug: "other", label: "Other" },
];

// Quantity tiers already present in the original quote-request form.
// Reused as-is for the "bulk pricing" tier display.
export const QUANTITY_TIERS = ["50-100", "100-500", "500+"];

export const COMPANY = {
  brand: "AT-ONE",
  tagline: "Sparkles your home..!",
  legalName: "HJMR Industries",
  gst: "27AAPFH4059M1ZQ",
  iec: "AAPFH4059M",
  location: "Vasai, Palghar, Maharashtra",
  established: "2022",
  phoneDisplay: "+91 97645 02585",
  phoneDial: "+919764502585",
  whatsapp: "919764502585",
  email: "contact@hjmr.com",
};

export const PRODUCTS = [
  {
    id: 1,
    slug: "classic-spin-mop-bucket",
    name: "Classic Spin Mop Bucket",
    sku: "HJMR-CLS-101",
    category: "buckets",
    moq: 50,
    material: "High-Grade PP Plastic",
    capacity: "5 Liters",
    rod: "Standard Steel",
    included: "1 Bucket, 1 Rod, 1 Refill",
    description:
      "Our best-selling classic model. Lightweight, durable, and perfect for daily household cleaning. Designed for bulk affordability.",
    image: "/1/image1.png",
    images: ["/1/image1.png", "/1/image2.png", "/1/image3.png"],
  },
  {
    id: 2,
    slug: "deluxe-360-mop-set",
    name: "Deluxe 360° Mop Set",
    sku: "HJMR-DLX-202",
    category: "buckets",
    moq: 50,
    material: "Virgin Plastic (PP)",
    capacity: "6 Liters",
    rod: "Premium Stainless Steel",
    included: "1 Bucket, 1 Heavy Rod, 2 Refills",
    description:
      "Engineered for durability. Features a built-in liquid dispenser slot and reinforced spin gears for commercial or heavy home use.",
    image: "/1/image2.png",
    images: ["/1/image1.png", "/1/image2.png", "/1/image3.png"],
  },
  {
    id: 3,
    slug: "premium-wheel-bucket",
    name: "Premium Wheel Bucket",
    sku: "HJMR-WHL-303",
    category: "buckets",
    moq: 50,
    material: "Impact-Resistant Virgin PP",
    capacity: "7 Liters",
    rod: "Telescopic Stainless Steel",
    included: "1 Wheel Bucket, 1 Rod, 2 Refills",
    description:
      "Designed with heavy-duty wheels and a pull handle. Eliminates the need to lift heavy water buckets. Top choice for large homes and offices.",
    image: "/1/image3.png",
    images: ["/1/image1.png", "/1/image2.png", "/1/image3.png"],
  },
  {
    id: 4,
    slug: "microfiber-refill-r1",
    name: "Microfiber Refill (R-1)",
    sku: "HJMR-REF-R1",
    category: "accessories",
    moq: 50,
    material: "100% Microfiber",
    capacity: "N/A",
    rod: "N/A",
    included: "Bulk Packed Refills",
    description:
      "High-absorption R-1 refills that trap dirt effectively. Washable design ensures long-lasting utility. Universal fit for most spin mops.",
    image: "/1/image2.png",
    images: ["/1/image1.png", "/1/image2.png", "/1/image3.png"],
  },
  {
    id: 5,
    slug: "steel-mop-rod",
    name: "Steel Mop Rod",
    sku: "HJMR-ROD-01",
    category: "accessories",
    moq: 50,
    material: "Stainless Steel + Plastic Grips",
    capacity: "N/A",
    rod: "Adjustable Lock Mechanism",
    included: "1 Rod Assembly",
    description:
      "Replacement telescopic rods with a smooth spinning mechanism. Features a sturdy clip lock for adjusting height.",
    image: "/cleaning-mop/image.png",
    images: ["/cleaning-mop/image.png"],
  },
  {
    id: 6,
    slug: "floor-cleaning-solution",
    name: "Floor Cleaning Solution",
    sku: "HJMR-LIQ-500",
    category: "other",
    moq: 50,
    material: "Eco-Friendly Formula",
    capacity: "500ml / 5 Liters",
    rod: "N/A",
    included: "Bottled / Cans",
    description:
      "Factory-direct floor cleaner optimized for use with our microfiber mops. Leaves a streak-free shine and pleasant aroma.",
    image: "/1/image4.png",
    images: ["/1/image4.png", "/1/image2.png", "/1/image3.png"],
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

export function getCategoryLabel(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function getRelatedProducts(product, count = 3) {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, count);
}
