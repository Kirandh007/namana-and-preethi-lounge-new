import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, admin = false }) {
  const { user, isAdmin } = useAuth();
  if (!user) return <Navigate to="/auth" replace />;
  if (admin && !isAdmin) return <Navigate to="/dashboard" replace />;
  return children;
}
