import { useEffect, useState } from 'react';
import api from '../../services/api';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function MedicalRecords() {
  const [records, setRecords] = useState([]);
  useEffect(()=>{ (async()=>{ const res = await api.get('/records/me'); setRecords(res.data); })(); }, []);
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Medical Records</h2>
      <div className="space-y-3">
        {records.map(r=>(
          <div key={r._id} className="p-3 bg-white rounded shadow">
            <div className="font-bold">{r.title}</div>
            <div className="text-sm text-gray-600">{r.description}</div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
