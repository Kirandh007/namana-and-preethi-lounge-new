import { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../context/AuthContext";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ fullName: "", mobile: "", email: "", address: "", password: "", confirmPassword: "" });
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const submit = async event => {
    event.preventDefault();
    try {
      if (mode === "login") await login({ email: form.email, password: form.password });
      else await register(form);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Authentication failed");
    }
  };

  const forgot = async () => {
    await api.post("/auth/forgot-password", { email: form.email }).catch(() => null);
    toast.success("Password reset instructions sent if the account exists");
  };

  return (
    <main className="section pt-32">
      <div className="section-inner grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.28em] text-gold">Customer Portal</p>
          <h1 className="mt-2 font-display text-5xl font-bold">{mode === "login" ? "Welcome Back" : "Create Account"}</h1>
          <p className="mt-4 text-cream/70">Register, login, manage your profile, reserve tables, order food, download GST bills, and collect loyalty points.</p>
          <div className="mt-8 rounded-3xl border border-gold/20 bg-gold/10 p-6">
            <p className="font-bold text-gold">Default Admin Login</p>
            <p className="mt-2 text-sm">admin@namananpreethilounge.com</p>
            <p className="text-sm">Admin@123</p>
          </div>
        </div>
        <form onSubmit={submit} className="glass rounded-3xl p-6 shadow-premium">
          <div className="mb-6 grid grid-cols-2 rounded-full border border-cream/15 p-1">
            <button type="button" onClick={() => setMode("login")} className={`rounded-full py-3 font-bold ${mode === "login" ? "bg-gold text-blackwood" : ""}`}>Login</button>
            <button type="button" onClick={() => setMode("register")} className={`rounded-full py-3 font-bold ${mode === "register" ? "bg-gold text-blackwood" : ""}`}>Register</button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {mode === "register" && (
              <>
                <input className="field" placeholder="Full Name" required value={form.fullName} onChange={e => setForm({ ...form, fullName: e.target.value })} />
                <input className="field" placeholder="Mobile Number" required value={form.mobile} onChange={e => setForm({ ...form, mobile: e.target.value })} />
                <input className="field md:col-span-2" placeholder="Address" required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
              </>
            )}
            <input className="field md:col-span-2" type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <input className="field md:col-span-2" type="password" placeholder="Password" required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
            {mode === "register" && <input className="field md:col-span-2" type="password" placeholder="Confirm Password" required value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} />}
          </div>
          <button className="gold-button mt-6 w-full px-6 py-4">{mode === "login" ? <FaLock /> : <FaUserPlus />} {mode === "login" ? "Login" : "Create Premium Account"}</button>
          {mode === "login" && <button type="button" onClick={forgot} className="mt-4 flex w-full items-center justify-center gap-2 text-sm font-bold text-gold"><FaEnvelope /> Forgot Password</button>}
        </form>
      </div>
    </main>
  );
}
