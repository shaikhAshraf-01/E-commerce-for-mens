import jeansJacket1 from "../productForShop/jeansJacket1.png";
import leatherJacket1 from "../productForShop/leatherJacket1.png";
import winterJacket1 from "../productForShop/winterjacket1.png";
import shirt1 from "../productForShop/shirt1.png";
import shirt2 from "../productForShop/shirt2.png";
import bag1 from "../productForShop/bag1.png";
import creatine1 from "../productForShop/creatine1.png";
import gymbottle1 from "../productForShop/gymbottle1.png";
import hoodie1 from "../productForShop/hoodie1.png";
import tshirt1 from "../productForShop/tshirt1.png";
import smartwatch1 from "../productForShop/smartwatch1.png";
import sportShoes1 from "../productForShop/sportShoes1.jpg";
import trackpant1 from "../productForShop/trackpant1.png";
import sunglass1 from "../productForShop/sunglass1.png";
import wintercap from "../productForShop/wintercap.png";
import pant1 from "../productForShop/pant1.png";
import sportShoes2 from "../productForShop/sportShoes2.png";
import accessories from "../productForShop/accessories.png";
export const heroImage = [
    jeansJacket1,
    hoodie1,
    winterJacket1,
    shirt1,
    shirt2
];
   export const categoryimages = [
    { id: 1, name: "Formal Shirts", image: shirt2 },
    { id: 2, name: "Pants", image: pant1 },
    { id: 3, name: "Winter Jackets", image: winterJacket1 },
    { id: 4, name: "Footwear", image: sportShoes2 },
    { id: 5, name: "Accessories", image: accessories },
    { id: 6, name: "T-Shirts", image: tshirt1 },
    { id: 7, name: "Hoodies", image: hoodie1 }
];
export const FeaturedProductImages=[
    {id:1, name:"Black Hoodie ", price:899, image:hoodie1},
    {id:2, name:"Branded T-Shirt ", price:399, image:tshirt1},
    {id:3, name:" Smart Watch ", price:399, image:smartwatch1},
    {id:4, name:"Sport Shoes ", price:399, image:sportShoes1},
    {id:5, name:"Track Pant ", price:399, image:trackpant1},
    {id:6, name:"Sun Glasses ", price:399, image:sunglass1},
    {id:7, name:"Gym Sheakers ", price:399, image:gymbottle1},
    {id:8, name:"Creatines ", price:399, image:creatine1},
    {id:9, name:"Bag ", price:399, image:bag1},
    {id:10, name:"Winter Cap ", price:399, image:wintercap},

]




export const product = [
  // --- HERO & CATEGORY IMAGES CONVERTED ---
  {
    id: 101,
    category: "jackets",
    name: "Classic Denim Jeans Jacket",
    brand: "Generic",
    price: 1499,
    image: jeansJacket1,
    description: "Stylish and durable denim jacket perfect for layering in any season.",
    colors: ["Blue"],
    rating: 4.5,
    reviews: 12,
    stock: 15,
    inStock: true,
    specifications: {
      sizes: ["S", "M", "L", "XL"],
      material: "100% Cotton Denim",
      fit: "Regular",
      sleeve: "Full Sleeve",
      neck: "Collar",
      washCare: "Machine Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 102,
    category: "jackets",
    name: "Premium Faux Leather Jacket",
    brand: "Generic",
    price: 2499,
    image: leatherJacket1,
    description: "Sleek and comfortable leather jacket providing a sharp, modern silhouette.",
    colors: ["Black"],
    rating: 4.7,
    reviews: 18,
    stock: 8,
    inStock: true,
    specifications: {
      sizes: ["M", "L", "XL"],
      material: "Faux Leather",
      fit: "Slim Fit",
      sleeve: "Full Sleeve",
      neck: "Collar",
      washCare: "Dry Clean Only",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 103,
    category: "jackets",
    name: "Cozy Winter Jacket",
    brand: "Generic",
    price: 1999,
    image: winterJacket1,
    description: "Insulated winter jacket designed to keep you warm during cold weather.",
    colors: ["Navy Blue"],
    rating: 4.6,
    reviews: 25,
    stock: 12,
    inStock: true,
    specifications: {
      sizes: ["M", "L", "XL"],
      material: "Polyester",
      fit: "Regular",
      sleeve: "Full Sleeve",
      neck: "High Neck",
      washCare: "Machine Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 104,
    category: "shirts",
    name: "Casual Cotton Shirt",
    brand: "Generic",
    price: 699,
    image: shirt1,
    description: "Breathable cotton shirt suitable for everyday casual outings.",
    colors: ["White"],
    rating: 4.2,
    reviews: 30,
    stock: 20,
    inStock: true,
    specifications: {
      sizes: ["S", "M", "L"],
      material: "100% Cotton",
      fit: "Regular",
      sleeve: "Full Sleeve",
      neck: "Collar",
      washCare: "Machine Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 105,
    category: "shirts",
    name: "Premium Formal Shirt",
    brand: "Generic",
    price: 799,
    image: shirt2,
    description: "Crisp formal shirt tailored for office wear and professional meetings.",
    colors: ["Light Blue"],
    rating: 4.4,
    reviews: 14,
    stock: 18,
    inStock: true,
    specifications: {
      sizes: ["M", "L", "XL"],
      material: "Cotton Blend",
      fit: "Slim Fit",
      sleeve: "Full Sleeve",
      neck: "Collar",
      washCare: "Machine Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 106,
    category: "pants",
    name: "Classic Slim Fit Trousers",
    brand: "Generic",
    price: 899,
    image: pant1,
    description: "Versatile and comfortable trousers perfect for semi-formal setups.",
    colors: ["Grey"],
    rating: 4.3,
    reviews: 9,
    stock: 14,
    inStock: true,
    specifications: {
      sizes: ["30", "32", "34", "36"],
      material: "Poly-Cotton",
      fit: "Slim Fit",
      sleeve: "N/A",
      neck: "N/A",
      washCare: "Machine Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 107,
    category: "footwear",
    name: "Casual Sports Shoes v2",
    brand: "Generic",
    price: 1299,
    image: sportShoes2,
    description: "Lightweight walking shoes built with a cushioned sole for everyday stability.",
    colors: ["White/Blue"],
    rating: 4.5,
    reviews: 41,
    stock: 11,
    inStock: true,
    specifications: {
      sizes: ["7", "8", "9", "10"],
      material: "Mesh and Rubber",
      fit: "Regular",
      sleeve: "N/A",
      neck: "N/A",
      washCare: "Wipe with clean cloth",
      madeIn: "India",
      warranty: "3 Months"
    }
  },
  {
    id: 108,
    category: "accessories",
    name: "Premium Utility Belt & Wallet Set",
    brand: "Generic",
    price: 499,
    image: accessories,
    description: "Essential accessories bundle to easily clean up your everyday style setup.",
    colors: ["Brown"],
    rating: 4.1,
    reviews: 5,
    stock: 25,
    inStock: true,
    specifications: {
      sizes: ["Free Size"],
      material: "Synthetic Leather",
      fit: "Adjustable",
      sleeve: "N/A",
      neck: "N/A",
      washCare: "Wipe with dry cloth",
      madeIn: "India",
      warranty: ""
    }
  },

  // --- FEATURED PRODUCTS CONVERTED ---
  {
    id: 1,
    category: "hoodies",
    name: "Black Hoodie",
    brand: "Generic",
    price: 899,
    image: hoodie1,
    description: "Premium oversized cotton hoodie for everyday comfort and style.",
    colors: ["Black"],
    rating: 4.8,
    reviews: 21,
    stock: 10,
    inStock: true,
    specifications: {
      sizes: ["S", "M", "L"],
      material: "100% Cotton Fleece",
      fit: "Oversized",
      sleeve: "Full Sleeve",
      neck: "Hooded",
      washCare: "Machine Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 2,
    category: "tshirts",
    name: "Branded T-Shirt",
    brand: "Nike",
    price: 399,
    image: tshirt1,
    description: "Premium everyday casual cotton T-shirt for optimal comfort.",
    colors: ["White", "Black"],
    rating: 4.6,
    reviews: 34,
    stock: 15,
    inStock: true,
    specifications: {
      sizes: ["M", "L", "XL"],
      material: "100% Cotton",
      fit: "Regular",
      sleeve: "Half Sleeve",
      neck: "Round Neck",
      washCare: "Machine Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 3,
    category: "accessories",
    name: "Smart Watch",
    brand: "Generic",
    price: 399,
    image: smartwatch1,
    description: "Feature-packed budget smart watch keeping track of your active daily schedule.",
    colors: ["Black"],
    rating: 4.2,
    reviews: 55,
    stock: 7,
    inStock: true,
    specifications: {
      sizes: ["Free Size"],
      material: "Silicon Strap",
      fit: "Adjustable",
      sleeve: "N/A",
      neck: "N/A",
      washCare: "Water Resistant",
      madeIn: "India",
      warranty: "6 Months"
    }
  },
  {
    id: 4,
    category: "footwear",
    name: "Sport Shoes",
    brand: "Generic",
    price: 399,
    image: sportShoes1,
    description: "Comfortable running athletic footwear structured with a flexible grip sole.",
    colors: ["Black", "Grey"],
    rating: 4.4,
    reviews: 19,
    stock: 5,
    inStock: true,
    specifications: {
      sizes: ["8", "9", "10"],
      material: "Mesh fabric",
      fit: "Regular",
      sleeve: "N/A",
      neck: "N/A",
      washCare: "Hand Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 5,
    category: "trackpants",
    name: "Track Pant",
    brand: "Generic",
    price: 399,
    image: trackpant1,
    description: "Flexible performance trackpants perfect for intensive athletic workout routines.",
    colors: ["Dark Grey"],
    rating: 4.3,
    reviews: 12,
    stock: 14,
    inStock: true,
    specifications: {
      sizes: ["M", "L", "XL"],
      material: "Polyester Blend",
      fit: "Athletic Fit",
      sleeve: "N/A",
      neck: "N/A",
      washCare: "Machine Wash",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 6,
    category: "accessories",
    name: "Sun Glasses",
    brand: "Generic",
    price: 399,
    image: sunglass1,
    description: "Stylish protective sunglasses guarding against daily glare and harsh sun rays.",
    colors: ["Black"],
    rating: 4.5,
    reviews: 8,
    stock: 22,
    inStock: true,
    specifications: {
      sizes: ["Standard"],
      material: "Polycarbonate",
      fit: "Regular",
      sleeve: "N/A",
      neck: "N/A",
      washCare: "Wipe with microfiber cloth",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 7,
    category: "fitness",
    name: "Gym Shakers",
    brand: "Generic",
    price: 399,
    image: gymbottle1,
    description: "Leak-proof high capacity shaker bottle built for quick fitness protein mixes.",
    colors: ["Clear Black"],
    rating: 4.0,
    reviews: 16,
    stock: 30,
    inStock: true,
    specifications: {
      sizes: ["700ml"],
      material: "BPA-Free Plastic",
      fit: "Ergonomic Grip",
      sleeve: "N/A",
      neck: "N/A",
      washCare: "Hand Wash Recommended",
      madeIn: "India",
      warranty: ""
    }
  },
  {
    id: 8,
    category: "fitness",
    name: "Creatines",
    brand: "Generic",
    price: 399,
    image: creatine1,
    description: "Pure micronized creatine supplement helping accelerate lean workout strength.",
    colors: ["Unflavored"],
    rating: 4.7,
    reviews: 89,
    stock: 40,
    inStock: true,
    specifications: {
      sizes: ["250g"],
material: "Creatine Monohydrate",fit: "Powder",sleeve: "N/A",neck: "N/A",washCare: "Store in a cool dry place",madeIn: "India",warranty: ""}},{id: 9,category: "bags",name: "Bag",brand: "Generic",price: 399,image: bag1,description: "Spacious multi-compartment casual backpack tailored for commuters.",colors: ["Black/Blue"],rating: 4.4,reviews: 23,stock: 12,inStock: true,specifications: {sizes: ["30L"],material: "Waterproof Nylon",fit: "Adjustable Straps",sleeve: "N/A",neck: "N/A",washCare: "Wipe with damp cloth",madeIn: "India",warranty: "1 Year"}},
{id: 10,category: "accessories",name: "Winter Cap",brand: "Generic",price: 399,image: wintercap,description: "Soft insulated knit beanie protecting comfortably against chilly environments.",colors: ["Black Knit"],rating: 4.5,reviews: 15,stock: 18,inStock: true,specifications: {sizes: ["Stretchable Free Size"],material: "Acrylic Wool",fit: "Snug Fit",sleeve: "N/A",neck: "N/A",washCare: "Hand Wash",madeIn: "India",warranty: ""}}];