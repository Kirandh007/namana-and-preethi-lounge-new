import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { quotes } from "../data";

const slides = [
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=85",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=85"
];

export default function QuoteSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex(current => (current + 1) % quotes.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section">
      <div className="section-inner">
        <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-gold/25 shadow-premium">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={slides[index % slides.length]}
              alt="Premium dining"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .8 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-blackwood via-blackwood/55 to-transparent" />
          <div className="relative z-10 flex min-h-[430px] max-w-2xl flex-col justify-center p-8 md:p-14">
            <p className="text-sm font-bold uppercase tracking-[.3em] text-gold">Dining Quotes</p>
            <AnimatePresence mode="wait">
              <motion.h2
                key={quotes[index]}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl"
              >
                “{quotes[index]}”
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
