import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function AdminRoute() {
  // const { user } = useAuth();
  // return user?.role === "admin" ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet /> ;
}
