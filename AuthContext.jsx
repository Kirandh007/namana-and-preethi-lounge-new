import { createContext, useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import api from "../api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("npl_token"));
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("npl_user") || "null"));

  const persist = data => {
    localStorage.setItem("npl_token", data.token);
    localStorage.setItem("npl_user", JSON.stringify(data.user));
    setToken(data.token);
    setUser(data.user);
  };

  const login = async values => {
    const { data } = await api.post("/auth/login", values);
    persist(data);
    toast.success(`Welcome ${data.user.fullName}`);
  };

  const register = async values => {
    const { data } = await api.post("/auth/register", values);
    persist(data);
    toast.success("Registration complete");
  };

  const logout = () => {
    localStorage.removeItem("npl_token");
    localStorage.removeItem("npl_user");
    setToken(null);
    setUser(null);
  };

  const value = useMemo(() => ({ token, user, login, register, logout, isAdmin: user?.role === "admin" }), [token, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
