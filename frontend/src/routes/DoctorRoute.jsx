import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function DoctorRoute() {
  return <Outlet />;
}
