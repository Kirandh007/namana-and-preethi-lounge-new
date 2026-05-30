import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-blackwood/85 px-4 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="font-display text-2xl font-bold text-gold">Namana & Preethi's Lounge</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-cream/70">Where Great Food Meets Great Memories. A luxury restaurant platform crafted for ordering, reservations, billing, and delightful dining moments.</p>
        </div>
        <div className="space-y-3 text-sm text-cream/75">
          <p className="flex gap-3"><FaMapMarkerAlt className="mt-1 text-gold" /> Data Science Department, BIET College, Davangere</p>
          <p className="flex gap-3"><FaEnvelope className="mt-1 text-gold" /> admin@namananpreethilounge.com</p>
          <p className="flex gap-3"><FaPhoneAlt className="mt-1 text-gold" /> +91 98765 43210</p>
        </div>
        <div className="rounded-2xl border border-gold/25 bg-gold/10 p-5">
          <p className="font-display text-lg text-gold">GST Ready</p>
          <p className="mt-2 text-sm text-cream/70">5% GST invoices with QR section, print-ready bill layouts, and downloadable PDF support.</p>
        </div>
      </div>
    </footer>
  );
}
