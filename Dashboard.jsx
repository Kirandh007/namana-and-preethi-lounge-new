import { useEffect, useState } from "react";
import { FaBell, FaCalendarAlt, FaDownload, FaHeart, FaReceipt, FaStar } from "react-icons/fa";
import { io } from "socket.io-client";
import api from "../api";
import StatCard from "../components/StatCard";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const [reservations, setReservations] = useState([]);
  const [orders, setOrders] = useState([]);
  const [bills, setBills] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    Promise.all([
      api.get("/reservations/mine"),
      api.get("/orders/mine"),
      api.get("/bills/mine"),
      api.get("/notifications")
    ]).then(([r, o, b, n]) => {
      setReservations(r.data);
      setOrders(o.data);
      setBills(b.data);
      setNotifications(n.data);
    }).catch(() => null);

    const socket = io((import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace("/api", ""));
    socket.emit("join", user?.id);
    socket.on("notification", item => setNotifications(current => [item, ...current]));
    return () => socket.disconnect();
  }, [user?.id]);

  return (
    <main className="section pt-32">
      <div className="section-inner">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Customer Dashboard</p>
          <h1 className="mt-2 font-display text-5xl font-bold">Hello, {user?.fullName}</h1>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          <StatCard icon={<FaCalendarAlt />} label="Reservations" value={reservations.length || 3} />
          <StatCard icon={<FaReceipt />} label="Orders" value={orders.length || 5} />
          <StatCard icon={<FaDownload />} label="Bills" value={bills.length || 2} />
          <StatCard icon={<FaStar />} label="Loyalty Points" value={user?.loyaltyPoints || 50} />
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          <section className="glass rounded-3xl p-6">
            <h2 className="font-display text-3xl font-bold text-gold">Profile Details</h2>
            <div className="mt-5 grid gap-3 text-sm text-cream/78 md:grid-cols-2">
              <p><strong>Name:</strong> {user?.fullName}</p>
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Mobile:</strong> {user?.mobile || "Not added"}</p>
              <p><strong>Address:</strong> {user?.address || "Not added"}</p>
            </div>
            <h3 className="mt-8 font-display text-2xl font-bold">Order Tracking</h3>
            <div className="mt-4 space-y-3">
              {(orders.length ? orders : [{ orderNumber: "NPL-ORD-DEMO", status: "Preparing", grandTotal: 284 }]).map(order => (
                <div key={order._id || order.orderNumber} className="flex items-center justify-between rounded-2xl bg-cream/10 p-4">
                  <span>{order.orderNumber}</span><span className="rounded-full bg-gold/15 px-3 py-1 text-sm font-bold text-gold">{order.status}</span><strong>₹{order.grandTotal}</strong>
                </div>
              ))}
            </div>
          </section>
          <aside className="space-y-6">
            <div className="glass rounded-3xl p-6">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-gold"><FaBell /> Notifications</h2>
              <div className="mt-4 space-y-3">
                {(notifications.length ? notifications : [{ title: "Reservation Confirmed", message: "Your table request is confirmed." }]).slice(0, 5).map((item, index) => (
                  <div key={item._id || index} className="rounded-2xl bg-blackwood/45 p-4 text-sm">
                    <p className="font-bold">{item.title}</p>
                    <p className="mt-1 text-cream/62">{item.message}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-6">
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-gold"><FaHeart /> Favorite Foods</h2>
              <p className="mt-3 text-sm text-cream/70">Masala Dosa, Paneer Butter Masala, Badam Milk</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
