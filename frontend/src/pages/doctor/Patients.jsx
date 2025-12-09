import { useEffect, useState } from 'react';
import api from '../../services/api';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  useEffect(()=>{ (async()=>{ const res = await api.get('/users?role=patient'); setPatients(res.data); })(); }, []);
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Patients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patients.map(p=>(
          <div key={p._id} className="p-4 bg-white rounded shadow">
            <div className="font-bold">{p.name}</div>
            <div className="text-sm text-gray-600">{p.email}</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
