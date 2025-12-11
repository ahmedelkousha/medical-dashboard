import { useState } from "react";

export default function PatientsTable({ patients }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const actionOptions = [
    { label: "Log Consulting", icon: "📋" },
    { label: "Message", icon: "💬" },
  ]
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Patient Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Date of Joining</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
               Gender
              </th>
              
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Diagnose
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Payment
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      <img src={patient.img} alt="" className="w-full h-full object-cover rounded-full"/>
                    </div>
                    <div className="font-medium text-gray-900">
                      {patient.firstName} {patient.lastName}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{patient.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{patient.dateOfJoining}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{patient.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{patient.diagnose}</td>
                
                
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-3 py-1 text-xs font-medium text-gray-600`}
                  >
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{patient.payment}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <div className="relative inline-block">
                    <button onClick={() => setOpenMenuId(openMenuId === patient.id ? null : patient.id)} className="text-gray-400 hover:text-gray-600 transition-colors">
                      ...
                    </button>
                    {openMenuId === patient.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                          {actionOptions.map((option) => (
                            <button
                              key={option.label}
                              onClick={() => {
                                console.log(`${option.label} clicked for ${patient.firstName} ${patient.lastName}`)
                                setOpenMenuId(null)
                              }}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-2"
                            >
                              <span>{option.icon}</span>
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 flex items-center justify-end">
        
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-white rounded border border-gray-200 transition-colors">
            ←
          </button>
          <button className="px-3 py-1 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded transition-colors">
            1
          </button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-white rounded border border-gray-200 transition-colors">
            →
          </button>
        </div>
      </div>
    </div>
  )
}
