import React from 'react'

  export interface Product {
  id: number;
  name: string;
  category: string;

  price: number;
  oldPrice?: number;

  rating: number;
  image: string;
  isSale?: boolean;

  // Product Details
  description: string;
  details: string;

  // Optional depending on the product
  ingredients?: string;
  material?: string;
  size?: string;

  stock: number;

  benefits: string[];

  // For products like lipstick, foundation, concealer...
  shades?: string[];
}

export const products: Product[] =[
  {
    id: 1,
    name: "Rosewater Hydrating Mist",
    category: "GLOW BEAUTY",
    price: 19.99,
    rating: 5,
    image: "/product_01.jpg",

    description:
      "A refreshing rosewater mist that instantly hydrates and refreshes the skin while giving it a natural healthy glow.",

    details:
      "Perfect for daily use and suitable for normal and dry skin. Spray it directly onto your face whenever your skin needs a refreshing boost.",

    ingredients:
      "Rose Water, Aloe Vera, Glycerin, Vitamin E",

    size: "100ml",
    stock: 25,

    benefits: [
      "Deep hydration",
      "Refreshes the skin",
      "Natural glow",
      "Can be used over makeup",
    ],
  },

  {
    id: 2,
    name: "Silk Lash Extensions",
    category: "LASH CRAFT",
    price: 24.99,
    rating: 4,
    image: "/product_02.jpg",

    description:
      "Lightweight silk lash extensions designed to create a soft, elegant, and naturally fuller lash look.",

    details:
      "Comfortable and lightweight lashes suitable for everyday makeup and special occasions. Easy to apply and style.",

    material: "Premium Silk Fiber",
    size: "12mm - 16mm",
    stock: 18,

    benefits: [
      "Lightweight",
      "Natural appearance",
      "Reusable",
      "Easy to apply",
    ],
  },

  {
    id: 3,
    name: "Charcoal Detoxifying Mask",
    category: "PURE SKIN",
    price: 14.99,
    oldPrice: 19.99,
    rating: 5,
    image: "/product_03.jpg",
    isSale: true,

    description:
      "A deep-cleansing charcoal mask that removes impurities, excess oil, and helps unclog pores.",

    details:
      "Ideal for oily and combination skin. Apply an even layer to clean skin and leave for 10–15 minutes before rinsing.",

    ingredients:
      "Activated Charcoal, Kaolin Clay, Aloe Vera, Green Tea",

    size: "75ml",
    stock: 32,

    benefits: [
      "Deep cleansing",
      "Controls excess oil",
      "Unclogs pores",
      "Smooths skin texture",
    ],
  },

  {
    id: 4,
    name: "Vitamin C Serum",
    category: "PROBO BOTANIC",
    price: 29.99,
    rating: 5,
    image: "/product_04.jpg",

    description:
      "A brightening Vitamin C serum designed to improve skin radiance and reduce the appearance of dark spots.",

    details:
      "A lightweight serum that absorbs quickly and leaves the skin looking brighter, smoother, and more refreshed.",

    ingredients:
      "Vitamin C, Hyaluronic Acid, Vitamin E, Botanical Extracts",

    size: "30ml",
    stock: 20,

    benefits: [
      "Brightens skin",
      "Improves skin tone",
      "Hydrates",
      "Antioxidant care",
    ],
  },

  {
    id: 5,
    name: "Argan Oil Hair Serum",
    category: "HAIR CLUB",
    price: 12.99,
    rating: 4,
    image: "/product_05.jpg",
    isSale: true,

    description:
      "A nourishing argan oil serum that adds shine, reduces frizz, and leaves hair soft and smooth.",

    details:
      "Suitable for dry, damaged, and frizzy hair. Apply a small amount to the ends of damp or dry hair.",

    ingredients:
      "Argan Oil, Jojoba Oil, Vitamin E",

    size: "50ml",
    stock: 28,

    benefits: [
      "Controls frizz",
      "Adds shine",
      "Softens hair",
      "Reduces dryness",
    ],
  },

  {
    id: 6,
    name: "Foundation Skin Finish",
    category: "GLOW BEAUTY",
    price: 34.99,
    rating: 5,
    image: "/product_06.jpg",

    description:
      "A smooth skin-finish foundation offering buildable coverage with a natural radiant finish.",

    details:
      "Designed to blend easily into the skin while creating an even and flawless-looking complexion.",

    size: "30ml",
    stock: 15,

    shades: [
      "Porcelain",
      "Ivory",
      "Natural",
      "Beige",
      "Honey",
      "Caramel",
    ],

    benefits: [
      "Buildable coverage",
      "Natural finish",
      "Easy to blend",
      "Long wearing",
    ],
  },

  {
    id: 7,
    name: "Professional Makeup Brushes",
    category: "LASH CRAFT",
    price: 18.99,
    rating: 4,
    image: "/product_07.jpg",

    description:
      "A professional makeup brush set containing soft and versatile brushes for face and eye makeup.",

    details:
      "Perfect for beginners and makeup lovers who want a complete collection of brushes for creating different makeup looks.",

    material: "Soft Synthetic Bristles",
    size: "12 Pieces",
    stock: 22,

    benefits: [
      "Soft bristles",
      "Easy application",
      "Face and eye brushes",
      "Beginner friendly",
    ],
  },

  {
    id: 8,
    name: "Hydrating Face Wash",
    category: "PURE SKIN",
    price: 15.99,
    rating: 5,
    image: "/product_08.jpg",

    description:
      "A gentle hydrating cleanser that removes dirt, oil, and makeup without leaving the skin feeling dry.",

    details:
      "Suitable for daily use and ideal for normal, dry, and combination skin. Leaves the skin clean and refreshed.",

    ingredients:
      "Aloe Vera, Glycerin, Hyaluronic Acid, Botanical Extracts",

    size: "150ml",
    stock: 30,

    benefits: [
      "Gentle cleansing",
      "Hydrates skin",
      "Removes impurities",
      "Suitable for daily use",
    ],
  },

  {
    id: 9,
    name: "Hyaluronic Acid Moisture Gel",
    category: "PURE SKIN",
    price: 22.00,
    oldPrice: 28.00,
    rating: 5,
    image: "/product_09.jpg",
    isSale: true,

    description:
      "A lightweight moisture gel powered by hyaluronic acid to provide long-lasting hydration.",

    details:
      "Absorbs quickly without a greasy feeling and leaves the skin soft, plump, and refreshed.",

    ingredients:
      "Hyaluronic Acid, Aloe Vera, Glycerin, Vitamin B5",

    size: "50ml",
    stock: 24,

    benefits: [
      "Deep hydration",
      "Lightweight texture",
      "Plumps skin",
      "Non-greasy",
    ],
  },

  {
    id: 10,
    name: "Velvet Nude Lipstick",
    category: "GLOW BEAUTY",
    price: 16.50,
    rating: 4,
    image: "/product_10.jpg",

    description:
      "A creamy nude lipstick with a soft velvet finish that gives your lips an elegant everyday look.",

    details:
      "A smooth formula that glides easily over the lips and provides comfortable, buildable color.",

    size: "3.5g",
    stock: 40,

    shades: [
      "Nude Rose",
      "Soft Beige",
      "Caramel Nude",
      "Dusty Pink",
      "Mocha",
    ],

    benefits: [
      "Velvet finish",
      "Comfortable formula",
      "Highly pigmented",
      "Easy to apply",
    ],
  },

  {
    id: 11,
    name: "Volume Boosting Mascara",
    category: "LASH CRAFT",
    price: 13.99,
    rating: 4,
    image: "/product_11.jpg",

    description:
      "A volumizing mascara that helps create fuller, darker, and beautifully defined lashes.",

    details:
      "The buildable formula allows you to create both natural and dramatic lash looks without clumping.",

    size: "10ml",
    stock: 35,

    benefits: [
      "Adds volume",
      "Defines lashes",
      "Buildable formula",
      "Deep black color",
    ],
  },

  {
    id: 12,
    name: "Tea Tree Spot Treatment",
    category: "PROBO BOTANIC",
    price: 11.49,
    rating: 5,
    image: "/product_12.jpg",

    description:
      "A targeted tea tree treatment designed to help reduce the appearance of blemishes and skin imperfections.",

    details:
      "Apply a small amount directly to blemishes as part of your evening skincare routine.",

    ingredients:
      "Tea Tree Oil, Aloe Vera, Niacinamide, Botanical Extracts",

    size: "15ml",
    stock: 26,

    benefits: [
      "Targets blemishes",
      "Soothes skin",
      "Lightweight formula",
      "Easy spot application",
    ],
  },

  {
    id: 13,
    name: "Keratin Repair Shampoo",
    category: "HAIR CLUB",
    price: 17.99,
    rating: 4,
    image: "/product_13.jpg",

    description:
      "A nourishing keratin shampoo designed to cleanse damaged hair while leaving it smoother and softer.",

    details:
      "Ideal for dry and damaged hair and suitable for regular hair-care routines.",

    ingredients:
      "Keratin, Argan Oil, Aloe Vera, Vitamin E",

    size: "300ml",
    stock: 19,

    benefits: [
      "Cleanses hair",
      "Smooths hair",
      "Helps reduce dryness",
      "Adds softness",
    ],
  },

  {
    id: 14,
    name: "Radiance Glow Face Oil",
    category: "PROBO BOTANIC",
    price: 32.00,
    oldPrice: 40.00,
    rating: 5,
    image: "/product_14.jpg",
    isSale: true,

    description:
      "A luxurious facial oil blend designed to nourish the skin and enhance its natural radiant glow.",

    details:
      "Use a few drops after moisturizer or mix with your favorite skincare products for an extra boost of nourishment.",

    ingredients:
      "Jojoba Oil, Rosehip Oil, Squalane, Vitamin E",

    size: "30ml",
    stock: 17,

    benefits: [
      "Nourishes skin",
      "Enhances glow",
      "Softens skin",
      "Lightweight oil",
    ],
  },

  {
    id: 15,
    name: "Soothing Aloe Vera Gel",
    category: "PURE SKIN",
    price: 9.99,
    rating: 4,
    image: "/product_15.jpg",

    description:
      "A refreshing aloe vera gel that helps soothe and hydrate the skin with a lightweight texture.",

    details:
      "Can be used as a daily moisturizer or after sun exposure to provide a cooling and refreshing feeling.",

    ingredients:
      "Aloe Vera, Glycerin, Cucumber Extract, Vitamin E",

    size: "200ml",
    stock: 38,

    benefits: [
      "Soothes skin",
      "Provides hydration",
      "Cooling sensation",
      "Lightweight texture",
    ],
  },

  {
    id: 16,
    name: "Full Coverage Concealer",
    category: "GLOW BEAUTY",
    price: 18.00,
    rating: 5,
    image: "/product_16.jpg",

    description:
      "A creamy full-coverage concealer that helps hide dark circles, blemishes, and uneven skin tone.",

    details:
      "The blendable formula creates a smooth-looking finish without feeling heavy on the skin.",

    size: "8ml",
    stock: 21,

    shades: [
      "Fair",
      "Light",
      "Medium",
      "Tan",
      "Deep",
    ],

    benefits: [
      "Full coverage",
      "Buildable",
      "Easy to blend",
      "Long wearing",
    ],
  },

  {
    id: 17,
    name: "Precision Eyebrow Pencil",
    category: "LASH CRAFT",
    price: 10.99,
    rating: 4,
    image: "/product_17.jpg",

    description:
      "A precise eyebrow pencil designed to fill, define, and shape brows with a natural-looking finish.",

    details:
      "The fine tip allows you to create hair-like strokes and achieve precise brow definition.",

    size: "0.3g",
    stock: 29,

    shades: [
      "Blonde",
      "Soft Brown",
      "Medium Brown",
      "Dark Brown",
      "Black",
    ],

    benefits: [
      "Precise application",
      "Natural finish",
      "Easy to blend",
      "Long lasting",
    ],
  },

  {
    id: 18,
    name: "Exfoliating Scrub Lotion",
    category: "PURE SKIN",
    price: 21.50,
    rating: 5,
    image: "/product_18.jpg",

    description:
      "A gentle exfoliating body lotion that helps remove dead skin cells and leaves skin smoother and softer.",

    details:
      "Use regularly on the body to improve skin texture and maintain soft, smooth-looking skin.",

    ingredients:
      "AHA, Shea Butter, Glycerin, Vitamin E",

    size: "200ml",
    stock: 16,

    benefits: [
      "Exfoliates skin",
      "Smooths texture",
      "Hydrates",
      "Softens skin",
    ],
  },

  {
    id: 19,
    name: "Deep Hydration Night Cream",
    category: "PROBO BOTANIC",
    price: 36.99,
    oldPrice: 45.00,
    rating: 5,
    image: "/product_19.jpg",
    isSale: true,

    description:
      "A rich overnight moisturizer that deeply hydrates and nourishes the skin while you sleep.",

    details:
      "Apply as the final step of your nighttime skincare routine for soft, hydrated, and refreshed-looking skin.",

    ingredients:
      "Hyaluronic Acid, Shea Butter, Squalane, Vitamin E",

    size: "50ml",
    stock: 14,

    benefits: [
      "Deep hydration",
      "Nourishes skin",
      "Rich texture",
      "Overnight care",
    ],
  },

  {
    id: 20,
    name: "Shine Control Setting Spray",
    category: "GLOW BEAUTY",
    price: 15.00,
    rating: 4,
    image: "/product_20.jpg",

    description:
      "A lightweight setting spray that helps control shine and keeps your makeup looking fresh for longer.",

    details:
      "Mist evenly over your finished makeup from a short distance and allow it to dry naturally.",

    ingredients:
      "Niacinamide, Aloe Vera, Glycerin, Green Tea Extract",

    size: "100ml",
    stock: 27,

    benefits: [
      "Controls shine",
      "Sets makeup",
      "Refreshes skin",
      "Lightweight mist",
    ],
  },


];


export default products