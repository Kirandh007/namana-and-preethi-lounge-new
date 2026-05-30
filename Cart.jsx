import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaDownload, FaMinus, FaPlus, FaReceipt } from "react-icons/fa";
import api from "../api";
import InvoiceModal from "../components/InvoiceModal";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, updateQty, clearCart, subtotal, gst, grandTotal } = useCart();
  const { user } = useAuth();
  const [invoice, setInvoice] = useState(null);

  const checkout = async () => {
    if (!user) return toast.error("Please login before checkout");
    const localInvoice = {
      invoiceNumber: `NPL-GST-${Date.now()}`,
      customerName: user.fullName,
      mobile: user.mobile,
      items,
      subtotal,
      gst,
      grandTotal
    };
    try {
      await api.post("/orders", { items: items.map(item => ({ food: item._id, quantity: item.quantity })) });
      toast.success("Order placed and invoice generated");
      clearCart();
    } catch {
      toast.success("Demo invoice generated locally");
    }
    setInvoice(localInvoice);
  };

  return (
    <main className="section pt-32">
      <div className="section-inner grid gap-8 lg:grid-cols-[1fr_380px]">
        <section>
          <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Professional POS Billing</p>
          <h1 className="mt-2 font-display text-5xl font-bold">View Cart</h1>
          <div className="mt-8 space-y-4">
            {items.length === 0 && <div className="glass rounded-3xl p-8 text-center"><p>Your cart is waiting for something delicious.</p><Link to="/menu" className="gold-button mt-5 px-5 py-3">Explore Menu</Link></div>}
            {items.map(item => (
              <div key={item._id} className="glass grid gap-4 rounded-2xl p-4 sm:grid-cols-[96px_1fr_auto] sm:items-center">
                <img src={item.image} alt={item.name} className="h-24 w-24 rounded-xl object-cover" />
                <div>
                  <h3 className="font-display text-2xl font-bold">{item.name}</h3>
                  <p className="text-sm text-cream/65">₹{item.price} each • GST ₹{(item.price * item.quantity * .05).toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="grid h-9 w-9 place-items-center rounded-full bg-cream/10" onClick={() => updateQty(item._id, item.quantity - 1)}><FaMinus /></button>
                  <span className="w-8 text-center text-xl font-bold">{item.quantity}</span>
                  <button className="grid h-9 w-9 place-items-center rounded-full bg-gold text-blackwood" onClick={() => updateQty(item._id, item.quantity + 1)}><FaPlus /></button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <aside className="glass h-fit rounded-3xl p-6 shadow-premium">
          <h2 className="font-display text-3xl font-bold text-gold">GST Bill</h2>
          <div className="mt-6 space-y-4">
            <p className="flex justify-between"><span>Subtotal</span><strong>₹{subtotal.toFixed(2)}</strong></p>
            <p className="flex justify-between"><span>GST 5%</span><strong>₹{gst.toFixed(2)}</strong></p>
            <p className="flex justify-between border-t border-cream/15 pt-4 text-xl"><span>Grand Total</span><strong className="text-gold">₹{grandTotal.toFixed(2)}</strong></p>
          </div>
          <button disabled={!items.length} onClick={checkout} className="gold-button mt-7 w-full px-5 py-4 disabled:opacity-40"><FaReceipt /> Checkout Now</button>
          <button disabled={!items.length} onClick={() => setInvoice({ invoiceNumber: `NPL-GST-${Date.now()}`, customerName: user?.fullName || "Guest", items, subtotal, gst, grandTotal })} className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-gold/35 px-5 py-4 font-bold text-gold disabled:opacity-40"><FaDownload /> Download Invoice</button>
        </aside>
      </div>
      <InvoiceModal invoice={invoice} onClose={() => setInvoice(null)} />
    </main>
  );
}
