import { createContext, useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = food => {
    setItems(current => {
      const existing = current.find(item => item._id === food._id);
      if (existing) return current.map(item => (item._id === food._id ? { ...item, quantity: item.quantity + 1 } : item));
      return [...current, { ...food, quantity: 1 }];
    });
    toast.success(`${food.name} added to cart`);
  };

  const updateQty = (id, quantity) => {
    setItems(current => current.map(item => (item._id === id ? { ...item, quantity } : item)).filter(item => item.quantity > 0));
  };

  const clearCart = () => setItems([]);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.05;
  const grandTotal = subtotal + gst;

  const value = useMemo(
    () => ({ items, addToCart, updateQty, clearCart, subtotal, gst, grandTotal }),
    [items, subtotal, gst, grandTotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
