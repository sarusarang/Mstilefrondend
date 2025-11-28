type ProductVariant = {
    name: string;
    length: number | string;
    width: number | string;
    height: number | string;
    weight?: number | string;
};



type Product = {
    id: string;
    title: string;
    subtitle?: string;
    heroDescription: string;
    image?: string;
    advantages: string[];
    variants: ProductVariant[];
};



export const PRODUCTS: Product[] = [
    {
        id: "porotherm-plus",
        title: "Porotherm Plus",
        subtitle: "From Wienerberger India — future of construction",
        heroDescription:
            "Porotherm Plus, from Wienerberger India, represents the future of construction, setting a new benchmark for durability and strength. Designed for exceptional performance and unwavering reliability, it is the ultimate choice for robust construction.",
        image: "https://bengaltile.com/storage/app/public/product_image/WallCladdingHD1.webp",
        advantages: [
            "Strength: 3X stronger than conventional bricks",
            "Features an extremely robust design",
            "It is an ideal choice for both load and non-load bearing walls",
            "It is easy to install and built to last",
            "It is lightweight, resulting in faster construction",
            "Offers effortless & sturdy load fixing",
            "Provides superior thermal insulation for ultimate comfort",
            "It is the preferred choice by builders",
            "It is a vertically perforated brick with high crushing strength",
        ],
        variants: [
            { name: "POROTHERM PLUS 200", length: 400, width: 200, height: 200, weight: 11.4 },
            { name: "POROTHERM PLUS 150", length: 400, width: 150, height: 200, weight: 8.6 },
            { name: "POROTHERM PLUS 100", length: 400, width: 100, height: 200, weight: 6.7 },
        ],
    },
    {
        id: "porotherm-exteria",
        title: "Porotherm FB Exteria",
        subtitle: "Terracotta exposed masonry — sustainable & aesthetic",
        heroDescription:
            "The Porotherm FB Exteria is a special brick launched by Wienerberger specifically for terracotta exposed masonry. Exposed brickwork adds a unique character and is both sustainable and versatile.",
        image: "https://bengaltile.com/storage/app/public/product_image/WallCladdingHD1.webp",
        advantages: [
            "Unmatched strength and durability, lasting for generations",
            "45% better thermal insulation, which helps save energy",
            "Low water absorption with minimal risk of dampness",
            "60% lighter than conventional building materials",
            "The lighter weight results in easy and faster construction 13and structural savings",
            "Less mortar usage ensuing huge cost savings",
            "Gives maximum fire protection",
            "Offers excellent design flexibility, providing stunning aesthetic appeal",
            "Accredited as a natural and green building material",
        ],
        variants: [
            { name: "POROTHERM EXTERIA FB 200", length: "400 22", width: "200 23", height: 200 },
            { name: "POROTHERM EXTERIA FB 150", length: "400 33", width: "150 34", height: 200 },
            { name: "POROTHERM EXTERIA FB 200H", length: "200 44", width: "200 45", height: 200 },
            { name: "POROTHERM EXTERIA FB 150H", length: "200 55", width: "150 56", height: 200 },
        ],
    },
    {
        id: "porotherm-hp",
        title: "Porotherm HP",
        subtitle: "Advanced lightweight, eco-friendly walling solutions",
        heroDescription:
            "Porotherm HP Bricks are advanced, lightweight, and eco-friendly clay walling solutions designed for faster, stronger, and energy-efficient construction. Manufactured using natural materials, they offer superior thermal insulation and reduced structural load.",
        image: "https://bengaltile.com/storage/app/public/product_image/WallCladdingHD1.webp",
        advantages: [
            "Light weight – up to 60% less weight than conventional walling material",
            "Excellent thermal insulation",
            "High compressive strength",
            "Natural and green product",
            "Faster construction and ease of handling",
            "Unlimited life and maximum fire protection",
        ],
        variants: [
            { name: "Porotherm HP200", length: 400, width: 200, height: 200, weight: 11.1 },
            { name: "Porotherm HP150", length: 400, width: 150, height: 200, weight: 8.8 },
            { name: "Porotherm HP100", length: 400, width: 100, height: 200, weight: 6.3 },
            { name: "Porotherm HP200H", length: 200, width: 200, height: 200, weight: 5.8 },
            { name: "Porotherm HP150H", length: 200, width: 150, height: 200, weight: 4.2 },
            { name: "Porotherm HP100H", length: 200, width: 100, height: 200, weight: 3.1 },
        ],
    },
];