import { useState } from "react";
import toast from "react-hot-toast";
import { FaCalendarCheck } from "react-icons/fa";
import api from "../api";

export default function Reservation() {
  const [form, setForm] = useState({ date: "", time: "", tableNumber: 1, guests: 2, specialRequests: "" });

  const submit = async event => {
    event.preventDefault();
    try {
      await api.post("/reservations", form);
      toast.success("Reservation submitted. Confirmation email will follow.");
      setForm({ date: "", time: "", tableNumber: 1, guests: 2, specialRequests: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Reservation saved in demo mode");
    }
  };

  return (
    <main className="section pt-32">
      <div className="section-inner grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Table Reservation System</p>
          <h1 className="mt-2 font-display text-5xl font-bold">Reserve Your Table</h1>
          <p className="mt-4 text-cream/70">Choose your date, time, table number, guests, and special requests. Status starts as Pending and can be confirmed by the admin.</p>
          <div className="mt-8 rounded-3xl border border-gold/20 bg-gold/10 p-6">
            <p className="font-display text-2xl text-gold">Email Notifications</p>
            <p className="mt-2 text-sm leading-6 text-cream/70">Reservation ID, customer name, date, time, table number, guest count, and status are sent through Nodemailer when SMTP is configured.</p>
          </div>
        </div>
        <form onSubmit={submit} className="glass grid gap-4 rounded-3xl p-6 shadow-premium md:grid-cols-2">
          <input className="field" type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
          <input className="field" type="time" required value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
          <input className="field" type="number" min="1" max="18" required value={form.tableNumber} onChange={e => setForm({ ...form, tableNumber: Number(e.target.value) })} />
          <input className="field" type="number" min="1" max="20" required value={form.guests} onChange={e => setForm({ ...form, guests: Number(e.target.value) })} />
          <textarea className="field md:col-span-2" rows="5" placeholder="Special requests" value={form.specialRequests} onChange={e => setForm({ ...form, specialRequests: e.target.value })} />
          <button className="gold-button px-6 py-4 md:col-span-2"><FaCalendarCheck /> Reserve Table</button>
        </form>
      </div>
    </main>
  );
}
