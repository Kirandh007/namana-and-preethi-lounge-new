import { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelopeOpenText, FaMapMarkedAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", mobile: "", message: "" });

  const submit = event => {
    event.preventDefault();
    toast.success("Message sent to lounge team");
    setForm({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <main className="section pt-32">
      <div className="section-inner grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Contact Page</p>
          <h1 className="mt-2 font-display text-5xl font-bold">Visit the Lounge</h1>
          <div className="mt-8 space-y-5 text-cream/76">
            <p className="flex gap-4"><FaMapMarkedAlt className="mt-1 text-gold" /> Namana & Preethi's Lounge, Data Science Department, BIET College, Davangere</p>
            <p className="flex gap-4"><FaEnvelopeOpenText className="mt-1 text-gold" /> admin@namananpreethilounge.com</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-gold/20 shadow-premium">
            <iframe
              title="BIET College Davangere Map"
              src="https://www.google.com/maps?q=BIET%20College%20Davangere&output=embed"
              className="h-80 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
        <form onSubmit={submit} className="glass grid gap-4 rounded-3xl p-6 shadow-premium">
          <input className="field" placeholder="Name" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <input className="field" type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          <input className="field" placeholder="Mobile" required value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} />
          <textarea className="field" rows="7" placeholder="Message" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
          <button className="gold-button px-6 py-4"><FaPaperPlane /> Send Message</button>
        </form>
      </div>
    </main>
  );
}
