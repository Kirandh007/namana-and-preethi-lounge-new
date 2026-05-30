import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { FaCalendarCheck, FaRupeeSign, FaShoppingBag, FaUsers } from "react-icons/fa";
import api from "../api";
import StatCard from "../components/StatCard";

const fallback = {
  totalRevenue: 68450,
  todaysSales: 12800,
  totalOrders: 142,
  totalReservations: 36,
  registeredCustomers: 92,
  topSelling: [{ name: "Masala Dosa", count: 14 }, { name: "Paneer Butter Masala", count: 11 }],
  revenueChart: [{ label: "Mon", value: 4200 }, { label: "Tue", value: 5600 }, { label: "Wed", value: 3900 }, { label: "Thu", value: 7100 }, { label: "Fri", value: 9400 }, { label: "Sat", value: 12800 }]
};

export default function Admin() {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    api.get("/admin/dashboard").then(res => setData(res.data)).catch(() => setData(fallback));
  }, []);

  return (
    <main className="section pt-32">
      <div className="section-inner">
        <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Admin Management</p>
        <h1 className="mt-2 font-display text-5xl font-bold">Professional Dashboard</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-5">
          <StatCard icon={<FaRupeeSign />} label="Total Revenue" value={`₹${Math.round(data.totalRevenue)}`} />
          <StatCard icon={<FaRupeeSign />} label="Today's Sales" value={`₹${Math.round(data.todaysSales)}`} />
          <StatCard icon={<FaShoppingBag />} label="Orders" value={data.totalOrders} />
          <StatCard icon={<FaCalendarCheck />} label="Reservations" value={data.totalReservations} />
          <StatCard icon={<FaUsers />} label="Customers" value={data.registeredCustomers} />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <section className="glass rounded-3xl p-6">
            <h2 className="font-display text-3xl font-bold text-gold">Revenue Charts</h2>
            <div className="mt-6 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.revenueChart}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,248,225,.14)" />
                  <XAxis dataKey="label" stroke="#FFF8E1" />
                  <YAxis stroke="#FFF8E1" />
                  <Tooltip contentStyle={{ background: "#1A1A1A", border: "1px solid #D4AF37", color: "#FFF8E1" }} />
                  <Bar dataKey="value" fill="#D4AF37" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
          <section className="glass rounded-3xl p-6">
            <h2 className="font-display text-3xl font-bold text-gold">Admin Functions</h2>
            <div className="mt-5 grid gap-3">
              {["Add Food Items", "Edit Food Items", "Delete Food Items", "Confirm Reservations", "Manage Orders", "Generate Bills", "Download Reports", "Customer Management"].map(action => (
                <button key={action} className="rounded-2xl border border-cream/12 bg-cream/10 px-4 py-3 text-left font-bold transition hover:border-gold hover:text-gold">{action}</button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
