import { useEffect, useState } from 'react';
import api from '../../services/api';
import DashboardLayout from '../../components/layout/DashboardLayout';
import PatientsList from '../../components/patient/PatientsList';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  
  return (
    <DashboardLayout>
      <PatientsList />
    </DashboardLayout>
  );
}
