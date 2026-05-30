import dotenv from "dotenv";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";
import FoodItem from "../models/FoodItem.js";
import { foodItems, imageForCategory, imageForItem } from "./menuData.js";

dotenv.config();

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Promise.all([FoodItem.deleteMany(), Admin.deleteMany()]);

  await FoodItem.insertMany(
    foodItems.map(([name, category, price], index) => ({
      name,
      category,
      price,
      rating: Number((4.6 + (index % 4) * 0.1).toFixed(1)),
      image: imageForItem[name] || imageForCategory[category]
    }))
  );

  await Admin.create({
    name: "Namana & Preethi Admin",
    email: "admin@namananpreethilounge.com",
    password: "Admin@123"
  });

  console.log("Seed completed: admin and full menu created.");
  await mongoose.disconnect();
};

seed().catch(error => {
  console.error(error);
  process.exit(1);
});
