import { motion } from "framer-motion";

export default function StatCard({ icon, label, value }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-5 shadow-premium">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-xl text-gold">{icon}</span>
        <span className="font-display text-3xl font-bold text-gold">{value}</span>
      </div>
      <p className="mt-4 text-sm font-semibold uppercase tracking-[.18em] text-cream/62">{label}</p>
    </motion.div>
  );
}
