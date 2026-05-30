import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaSearchPlus, FaTimes } from "react-icons/fa";
import { galleryImages } from "../data";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const filters = ["All", ...new Set(galleryImages.map(([category]) => category))];
  const images = useMemo(() => filter === "All" ? galleryImages : galleryImages.filter(([category]) => category === filter), [filter]);

  return (
    <main className="section pt-32">
      <div className="section-inner">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Premium Gallery</p>
            <h1 className="mt-2 font-display text-5xl font-bold">Dining in Frames</h1>
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {filters.map(item => (
              <button key={item} onClick={() => setFilter(item)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold ${filter === item ? "bg-gold text-blackwood" : "bg-cream/10 text-cream"}`}>{item}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {images.map(([category, src], index) => (
            <motion.button key={src} layout onClick={() => setActive({ category, src })} className={`group relative overflow-hidden rounded-3xl border border-cream/12 shadow-premium ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
              <img src={src} alt={category} className="h-full min-h-72 w-full object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-blackwood/85 to-transparent" />
              <span className="absolute bottom-5 left-5 flex items-center gap-3 font-display text-2xl font-bold"><FaSearchPlus className="text-gold" /> {category}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-black/85 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={() => setActive(null)} className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-cream text-blackwood"><FaTimes /></button>
            <img src={active.src} alt={active.category} className="max-h-[86vh] w-full max-w-5xl rounded-3xl object-contain shadow-premium" />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
