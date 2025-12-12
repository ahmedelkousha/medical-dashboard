import { MoreVertical } from "lucide-react"

export default function PatientTable({ patients }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-[#ebeff2] rounded-2xl">
          <tr >
            <th className="px-4 py-3 text-left text-s font-semibold text-slate-500">Patient Name</th>
            <th className="px-4 py-3 text-left text-s font-semibold text-slate-500">Visit Id</th>
            <th className="px-4 py-3 text-left text-s font-semibold text-slate-500">Date</th>
            <th className="px-4 py-3 text-left text-s font-semibold text-slate-500">Gender</th>
            <th className="px-4 py-3 text-left text-s font-semibold text-slate-500">Diseases</th>
            <th className="px-4 py-3 text-left text-s font-semibold text-slate-500">Status</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="hover:bg-slate-300/50 transition-colors">
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                               {/* static image */}
              <img src="https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80" alt={patient.name} className="w-10 h-10 object-cover rounded-full" />
              {/* <img src={patient.avatar} alt={patient.name} className="w-full h-full object-cover rounded-full" /> */}
          
                  <span className="text-sm">{patient.name}</span>
                </div>
              </td>
              <td className="px-4 py-3 text-sm">{patient.visitId}</td>
              <td className="px-4 py-3 text-sm">{patient.date}</td>
              <td className="px-4 py-3 text-sm">{patient.gender}</td>
              <td className="px-4 py-3 text-sm">{patient.disease}</td>
              <td className="px-4 py-3">
                <span className="px-3 py-1 text-xs rounded-full">
                  {patient.status}
                </span>
                <button className="p-1 hover:bg-muted rounded transition-colors">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
