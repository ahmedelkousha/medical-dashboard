import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function PatientRoute() {
  const { user } = useAuth();
  return user?.role === "patient" ? <Outlet /> : <Navigate to="/login" />;
}
