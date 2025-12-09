import { useEffect, useState } from 'react';
import api from '../../services/api';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{ (async()=>{ const res = await api.get('/users'); setUsers(res.data); })(); }, []);
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <div className="space-y-2">
        {users.map(u=>(
          <div key={u._id} className="p-3 bg-white rounded shadow flex justify-between">
            <div>
              <div className="font-bold">{u.name}</div>
              <div className="text-sm text-gray-600">{u.email} • {u.role}</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-yellow-300 rounded">Edit</button>
              <button className="px-3 py-1 bg-red-400 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
