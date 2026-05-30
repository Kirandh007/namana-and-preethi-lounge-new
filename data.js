export const categories = ["All", "South Indian", "North Indian", "Beverages"];

const images = {
  south: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80",
  north: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
  drinks: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80"
};

const imageForItem = {
  Idli: "https://source.unsplash.com/900x700/?idli,south-indian-breakfast",
  Vada: "https://source.unsplash.com/900x700/?medu-vada,south-indian-food",
  "Idli Vada": "https://source.unsplash.com/900x700/?idli-vada,sambar",
  "Masala Dosa": "https://source.unsplash.com/900x700/?masala-dosa",
  "Plain Dosa": "https://source.unsplash.com/900x700/?plain-dosa",
  "Set Dosa": "https://source.unsplash.com/900x700/?set-dosa",
  "Onion Dosa": "https://source.unsplash.com/900x700/?onion-dosa",
  "Rava Dosa": "https://source.unsplash.com/900x700/?rava-dosa",
  Poori: "https://source.unsplash.com/900x700/?poori,indian-breakfast",
  Pongal: "https://source.unsplash.com/900x700/?ven-pongal,south-indian-food",
  Upma: "https://source.unsplash.com/900x700/?upma,south-indian-breakfast",
  "Bisi Bele Bath": "https://source.unsplash.com/900x700/?bisi-bele-bath,rice",
  "Lemon Rice": "https://source.unsplash.com/900x700/?lemon-rice,indian-food",
  "Curd Rice": "https://source.unsplash.com/900x700/?curd-rice,indian-food",
  "South Indian Meals": "https://source.unsplash.com/900x700/?south-indian-thali,meals",
  Roti: "https://source.unsplash.com/900x700/?roti,indian-bread",
  "Butter Roti": "https://source.unsplash.com/900x700/?butter-roti,indian-bread",
  "Butter Naan": "https://source.unsplash.com/900x700/?butter-naan",
  "Paneer Butter Masala": "https://source.unsplash.com/900x700/?paneer-butter-masala",
  "Dal Fry": "https://source.unsplash.com/900x700/?dal-fry,indian-curry",
  "Dal Tadka": "https://source.unsplash.com/900x700/?dal-tadka",
  "Chana Masala": "https://source.unsplash.com/900x700/?chana-masala",
  "Veg Kolhapuri": "https://source.unsplash.com/900x700/?veg-kolhapuri,indian-curry",
  "Jeera Rice": "https://source.unsplash.com/900x700/?jeera-rice",
  "Veg Biryani": "https://source.unsplash.com/900x700/?veg-biryani",
  "Gobi Manchurian": "https://source.unsplash.com/900x700/?gobi-manchurian",
  "North Indian Thali": "https://source.unsplash.com/900x700/?north-indian-thali",
  Tea: "https://source.unsplash.com/900x700/?indian-tea,chai",
  Coffee: "https://source.unsplash.com/900x700/?filter-coffee",
  "Lime Juice": "https://source.unsplash.com/900x700/?lime-juice",
  "Badam Milk": "https://source.unsplash.com/900x700/?badam-milk,almond-milk",
  Lassi: "https://source.unsplash.com/900x700/?lassi,indian-drink",
  "Soft Drinks": "https://source.unsplash.com/900x700/?soft-drink"
};

export const menuItems = [
  ["Idli", "South Indian", 40], ["Vada", "South Indian", 35], ["Idli Vada", "South Indian", 60],
  ["Masala Dosa", "South Indian", 80], ["Plain Dosa", "South Indian", 60], ["Set Dosa", "South Indian", 70],
  ["Onion Dosa", "South Indian", 90], ["Rava Dosa", "South Indian", 95], ["Poori", "South Indian", 70],
  ["Pongal", "South Indian", 65], ["Upma", "South Indian", 50], ["Bisi Bele Bath", "South Indian", 80],
  ["Lemon Rice", "South Indian", 60], ["Curd Rice", "South Indian", 55], ["South Indian Meals", "South Indian", 130],
  ["Roti", "North Indian", 25], ["Butter Roti", "North Indian", 35], ["Butter Naan", "North Indian", 45],
  ["Paneer Butter Masala", "North Indian", 160], ["Dal Fry", "North Indian", 120], ["Dal Tadka", "North Indian", 130],
  ["Chana Masala", "North Indian", 130], ["Veg Kolhapuri", "North Indian", 150], ["Jeera Rice", "North Indian", 110],
  ["Veg Biryani", "North Indian", 140], ["Gobi Manchurian", "North Indian", 120], ["North Indian Thali", "North Indian", 180],
  ["Tea", "Beverages", 15], ["Coffee", "Beverages", 20], ["Lime Juice", "Beverages", 30],
  ["Badam Milk", "Beverages", 50], ["Lassi", "Beverages", 60], ["Soft Drinks", "Beverages", 40]
].map(([name, category, price], index) => ({
  _id: `demo-${index}`,
  name,
  category,
  price,
  rating: Number((4.6 + (index % 4) * 0.1).toFixed(1)),
  image: imageForItem[name] || (category === "South Indian" ? images.south : category === "North Indian" ? images.north : images.drinks),
  description: "Freshly prepared with premium ingredients, signature spice balance, and lounge-style plating."
}));

export const quotes = [
  "Life is uncertain. Eat dessert first.",
  "Good food is the foundation of genuine happiness.",
  "Calories don't count when dining with friends.",
  "Food tastes better when shared.",
  "Love enters through the kitchen.",
  "People who love to eat are always the best people.",
  "Eat well. Laugh often. Live fully.",
  "Diet starts tomorrow. Today we feast.",
  "Every meal is a celebration.",
  "Food is our common ground."
];

export const galleryImages = [
  ["Interior", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"],
  ["Dining Area", "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1000&q=80"],
  ["Food", "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"],
  ["South Indian", images.south],
  ["North Indian", images.north],
  ["Family Dining", "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"]
];
