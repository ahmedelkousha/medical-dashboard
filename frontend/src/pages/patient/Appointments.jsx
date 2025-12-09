import { useEffect, useState } from 'react';
import api from '../../services/api';
import Modal from '../../components/common/Modal';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function Appointments() {
  const [appts, setAppts] = useState([]);
  const [open, setOpen] = useState(false);
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');

  const load = async () => {
    const res = await api.get('/appointments/me');
    setAppts(res.data);
  };

  useEffect(()=>{ load(); }, []);

  const create = async () => {
    await api.post('/appointments', { doctor, date, notes: '' });
    setOpen(false); setDoctor(''); setDate('');
    load();
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Appointments</h2>
        <Button onClick={()=>setOpen(true)} className="bg-blue-600 text-white">New</Button>
      </div>

      <div className="space-y-3">
        {appts.map(a=>(
          <div key={a._id} className="p-3 bg-white rounded shadow">
            <div><strong>Doctor:</strong> {a.doctor?.name || a.doctor}</div>
            <div><strong>Date:</strong> {new Date(a.date).toLocaleString()}</div>
            <div><strong>Status:</strong> {a.status}</div>
          </div>
        ))}
      </div>

      <Modal open={open} onClose={()=>setOpen(false)} title="New Appointment">
        <div className="space-y-2">
          <Input placeholder="Doctor ID" value={doctor} onChange={e=>setDoctor(e.target.value)} />
          <Input type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} />
          <div className="text-right">
            <Button onClick={create} className="bg-blue-600 text-white">Create</Button>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
}
