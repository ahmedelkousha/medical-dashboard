import { useEffect, useState } from 'react';
import api from '../../services/api';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const load = async ()=> {
    const res = await api.get('/users?role=doctor');
    setDoctors(res.data);
  };
  useEffect(()=>{ load(); }, []);
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctors.map(d=>(
          <div key={d._id} className="p-4 bg-white rounded shadow">
            <div className="font-bold">{d.name}</div>
            <div className="text-sm text-gray-600">{d.specialization}</div>
            <div className="mt-2"><a className="text-blue-600" href={`/patient/appointments?doctor=${d._id}`}>Book</a></div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
