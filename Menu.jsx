import { useEffect, useMemo, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import api from "../api";
import FoodCard from "../components/FoodCard";
import { categories, menuItems } from "../data";

export default function Menu() {
  const [foods, setFoods] = useState(menuItems);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    api.get("/foods").then(({ data }) => setFoods(data)).catch(() => setFoods(menuItems));
  }, []);

  const filtered = useMemo(() => foods.filter(food => {
    const matchesCategory = category === "All" || food.category === category;
    const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  }), [foods, search, category]);

  return (
    <main className="section pt-32">
      <div className="section-inner">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Professional Food Menu</p>
            <h1 className="mt-2 font-display text-5xl font-bold">Order Food Online</h1>
            <p className="mt-3 max-w-2xl text-cream/68">Search, filter, add to cart, checkout, and generate a 5% GST invoice.</p>
          </div>
          <div className="glass flex flex-col gap-3 rounded-2xl p-3 sm:flex-row">
            <label className="relative block min-w-64">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <input className="field pl-11" placeholder="Search foods" value={search} onChange={event => setSearch(event.target.value)} />
            </label>
            <label className="relative block">
              <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <select className="field min-w-48 pl-11" value={category} onChange={event => setCategory(event.target.value)}>
                {categories.map(item => <option className="bg-blackwood" key={item}>{item}</option>)}
              </select>
            </label>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(food => <FoodCard key={food._id} food={food} />)}
        </div>
      </div>
    </main>
  );
}
