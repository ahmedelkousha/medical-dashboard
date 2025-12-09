export default function PatientSummary({user}) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{user?.name || 'Patient'}</h3>
      <p className="text-sm text-gray-600">Role: Patient</p>
    </div>
  );
}
