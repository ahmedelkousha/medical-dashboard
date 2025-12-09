import { Link } from 'react-router-dom';

export default function Sidebar({role}) {
  return (
    <div className="w-56 bg-white border-r p-4 min-h-[calc(100vh-64px)]">
      <nav className="flex flex-col gap-2">
        <Link to={`/${role}`} className="block p-2 rounded hover:bg-gray-100">Dashboard</Link>
        {role === 'patient' && <>
          <Link to="/patient/appointments" className="block p-2 rounded hover:bg-gray-100">Appointments</Link>
          <Link to="/patient/doctors" className="block p-2 rounded hover:bg-gray-100">Doctors</Link>
          <Link to="/patient/records" className="block p-2 rounded hover:bg-gray-100">Medical Records</Link>
        </>}
        {role === 'doctor' && <>
          <Link to="/doctor/schedule" className="block p-2 rounded hover:bg-gray-100">Schedule</Link>
          <Link to="/doctor/patients" className="block p-2 rounded hover:bg-gray-100">Patients</Link>
        </>}
        {role === 'admin' && <>
          <Link to="/admin/users" className="block p-2 rounded hover:bg-gray-100">Users</Link>
          <Link to="/admin/appointments" className="block p-2 rounded hover:bg-gray-100">Appointments</Link>
        </>}
      </nav>
    </div>
  );
}
