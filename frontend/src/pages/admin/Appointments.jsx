import { useEffect, useState } from 'react';
import api from '../../services/api';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function AdminAppointments() {
  const [appts, setAppts] = useState([]);
  useEffect(()=>{ (async()=>{ const res = await api.get('/appointments'); setAppts(res.data); })(); }, []);
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">All Appointments</h2>
      <div className="space-y-2">
        {appts.map(a=>(
          <div key={a._id} className="p-3 bg-white rounded shadow">
            <div><strong>Patient:</strong> {a.patient?.name}</div>
            <div><strong>Doctor:</strong> {a.doctor?.name}</div>
            <div><strong>Date:</strong> {new Date(a.date).toLocaleString()}</div>
            <div><strong>Status:</strong> {a.status}</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
