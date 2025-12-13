import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthProvider";
import Login from "./pages/auth/Login";
import PatientDashboard from "./pages/patient/Dashboard";
import PatientAppointments from "./pages/patient/Appointments";
import PatientDoctors from "./pages/patient/Doctors";
import PatientRecords from "./pages/patient/MedicalRecords";
import DoctorDashboard from "./pages/doctor/Dashboard";
import DoctorSchedule from "./pages/doctor/Schedule Timings";
import DoctorPatients from "./pages/doctor/Patients";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminAppointments from "./pages/admin/Appointments";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import PatientRoute from "./routes/PatientRoute";
// import DoctorRoute from "./routes/DoctorRoute";
// import AdminRoute from "./routes/AdminRoute";
import "./styles/globals.css";

createRoot(document.getElementById("root")).render(
  // <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route element={<ProtectedRoute />}> */}
          {/* <Route element={<PatientRoute />}> */}
            <Route path="/" element={<PatientDashboard />} />
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/patient/appointments" element={<PatientAppointments />} />
            <Route path="/patient/doctors" element={<PatientDoctors />} />
            <Route path="/patient/records" element={<PatientRecords />} />
          {/* </Route> */}

          {/* <Route element={<DoctorRoute />}> */}
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/doctor/schedule" element={<DoctorSchedule />} />
            <Route path="/doctor/patients" element={<DoctorPatients />} />
          {/* </Route> */}

          {/* <Route element={<AdminRoute />}> */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/appointments" element={<AdminAppointments />} />
          {/* </Route> */}
        {/* </Route> */}
        {/* <Route path="*" element={<Login/>} /> */}
      </Routes>
    </BrowserRouter>
  // </AuthProvider>
);
