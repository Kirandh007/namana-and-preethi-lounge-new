import { motion } from "framer-motion";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function FoodCard({ food }) {
  const { addToCart } = useCart();
  const gst = food.price * 0.05;

  return (
    <motion.article layout whileHover={{ y: -8 }} className="overflow-hidden rounded-2xl border border-cream/12 bg-cream/[.07] shadow-premium">
      <div className="h-48 overflow-hidden">
        <img src={food.image} alt={food.name} className="h-full w-full object-cover transition duration-500 hover:scale-110" />
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">{food.category}</p>
            <h3 className="mt-1 font-display text-xl font-bold">{food.name}</h3>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-gold/15 px-3 py-1 text-sm font-bold text-gold"><FaStar /> {food.rating}</span>
        </div>
        <p className="min-h-12 text-sm leading-6 text-cream/68">{food.description}</p>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-black text-gold">₹{food.price}</p>
            <p className="text-xs text-cream/55">GST ₹{gst.toFixed(2)} • Final ₹{(food.price + gst).toFixed(2)}</p>
          </div>
          <button onClick={() => addToCart(food)} className="gold-button px-4 py-3 text-sm"><FaCartPlus /> Add</button>
        </div>
      </div>
    </motion.article>
  );
}
