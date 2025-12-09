import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function DoctorRoute() {
  const { user } = useAuth();
  return user?.role === "doctor" ? <Outlet /> : <Navigate to="/login" />;
}
