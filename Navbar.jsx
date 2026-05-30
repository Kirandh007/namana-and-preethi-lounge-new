import { Link, NavLink } from "react-router-dom";
import { FaBell, FaShoppingCart, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import logo from "../assets/namana-preethi-logo.png";

const links = [
  ["Home", "/"],
  ["Menu", "/menu"],
  ["Reserve", "/reserve"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
];

export default function Navbar() {
  const { user, logout, isAdmin } = useAuth();
  const { items } = useCart();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cream/10 bg-blackwood/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Namana & Preethi's Lounge logo" className="h-12 w-12 rounded-full border border-gold/40 object-cover shadow-gold" />
          <span>
            <span className="block font-display text-base font-bold leading-tight text-gold md:text-xl">Namana & Preethi's</span>
            <span className="block text-xs uppercase tracking-[.22em] text-cream/70">Lounge</span>
          </span>
        </Link>
        <div className="hidden items-center gap-5 md:flex">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-semibold ${isActive ? "text-gold" : "text-cream/78 hover:text-gold"}`}>
              {label}
            </NavLink>
          ))}
          {isAdmin && <NavLink to="/admin" className="text-sm font-semibold text-cream/78 hover:text-gold">Admin</NavLink>}
        </div>
        <div className="flex items-center gap-2">
          <Link to="/cart" className="relative grid h-10 w-10 place-items-center rounded-full border border-cream/15 bg-cream/10" title="View cart">
            <FaShoppingCart />
            {items.length > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-xs font-black text-blackwood">{items.length}</span>}
          </Link>
          {user ? (
            <>
              <Link to="/dashboard" className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 bg-cream/10" title="Dashboard"><FaBell /></Link>
              <Link to={isAdmin ? "/admin" : "/dashboard"} className="hidden items-center gap-2 rounded-full border border-cream/15 px-3 py-2 text-sm font-bold sm:flex"><FaUserCircle /> {user.fullName?.split(" ")[0]}</Link>
              <button onClick={logout} className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 bg-cream/10" title="Logout"><FaSignOutAlt /></button>
            </>
          ) : (
            <Link to="/auth" className="gold-button px-4 py-2 text-sm">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
