import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaConciergeBell, FaUtensils } from "react-icons/fa";
import QuoteSlider from "../components/QuoteSlider";
import FoodCard from "../components/FoodCard";
import StatCard from "../components/StatCard";
import { menuItems } from "../data";
import logo from "../assets/namana-preethi-logo.png";

export default function Home() {
  return (
    <>
      <section className="hero-bg relative min-h-screen px-4 pt-28">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-10 pb-12 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <img src={logo} alt="Namana & Preethi's Lounge logo" className="mb-6 h-28 w-28 rounded-full border border-gold/40 object-cover shadow-gold md:h-36 md:w-36" />
            <p className="text-sm font-bold uppercase tracking-[.35em] text-gold">Luxury Restaurant & Lounge</p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight md:text-7xl">Namana & Preethi's Lounge</h1>
            <p className="mt-5 max-w-2xl text-xl font-medium text-cream/82">Where Great Food Meets Great Memories</p>
            <p className="mt-5 max-w-2xl leading-7 text-cream/68">A premium digital dining experience for reservations, online food ordering, GST billing, customer dashboards, and admin control.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/reserve" className="gold-button px-6 py-4"><FaCalendarAlt /> Reserve Table</Link>
              <Link to="/menu" className="gold-button px-6 py-4"><FaConciergeBell /> Order Food Online</Link>
              <Link to="/menu" className="rounded-full border border-gold/40 px-6 py-4 font-bold text-gold transition hover:bg-gold/10"><FaUtensils className="mr-2 inline" /> Explore Menu</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 35 }} animate={{ opacity: 1, x: 0 }} className="grid gap-4 sm:grid-cols-2">
            {menuItems.slice(3, 7).map((item, index) => (
              <div key={item._id} className={`glass overflow-hidden rounded-3xl shadow-premium ${index % 2 ? "translate-y-8" : ""}`}>
                <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <p className="font-display text-xl font-bold text-gold">{item.name}</p>
                  <p className="text-sm text-cream/65">₹{item.price} • GST ready</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner grid gap-5 md:grid-cols-4">
          <StatCard icon={<FaUtensils />} label="Menu Items" value="33+" />
          <StatCard icon={<FaCalendarAlt />} label="Luxury Tables" value="18" />
          <StatCard icon={<FaConciergeBell />} label="GST Billing" value="5%" />
          <StatCard icon={<FaUtensils />} label="Rating" value="4.8" />
        </div>
      </section>
      <QuoteSlider />
      <section className="section pt-0">
        <div className="section-inner">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Chef Selected</p>
              <h2 className="mt-2 font-display text-4xl font-bold">Premium Favorites</h2>
            </div>
            <Link to="/menu" className="gold-button px-5 py-3">View Full Menu</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {menuItems.slice(3, 6).map(food => <FoodCard key={food._id} food={food} />)}
          </div>
        </div>
      </section>
    </>
  );
}
