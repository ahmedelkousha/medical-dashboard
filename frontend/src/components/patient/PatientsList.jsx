import { useState } from "react"
import AddPatientDialog from "./AddPatientDialog"
import PatientsTable from "./PatientsTable"

export default function PatientsList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    patientName: "",
    dateOfJoining: "",
    status: "",
    payment: "",
  })
  const [patients, setPatients] = useState([
    {
      id: 1,
      firstName: "Albert",
      lastName: "Flores",
      img:"/images/patient.jpeg",
      email: "albert@patient.com",
      phone: "+88 01767766336",
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      diagnose: "Regular checkup",
      dateOfJoining: "03/12/2021",
      status: "In-Treatment",
      payment: "Private Cash",
    },
    {
      id: 2,
      firstName: "Devon",
      lastName: "Lane",
      img:"/images/patient1.jpeg",
      email: "devon@patient.com",
      phone: "+88 01767766337",
      location: "1234 Main St. Los Angeles, California 90001",
      diagnose: "Follow-up visit",
      dateOfJoining: "05/15/2021",
      status: "Out-Patient",
      payment: "Paypal",
    },
    {
      id: 3,
      firstName: "Floyd",
      lastName: "Miles",
      img:"/images/patient.jpeg",
      email: "floyd@patient.com",
      phone: "+88 01767766338",
      location: "5678 Oak Ave. Chicago, Illinois 60601",
      diagnose: "Consultation",
      dateOfJoining: "07/20/2021",
      status: "Intreatment",
      payment: "Log Consulting",
    },
    {
      id: 4,
      firstName: "Jenny",
      lastName: "Wilson",
      img:"/images/patient1.jpeg",
      email: "jenny@patient.com",
      phone: "+88 01767766339",
      location: "9012 Pine Rd. Houston, Texas 77001",
      diagnose: "Initial assessment",
      dateOfJoining: "09/10/2021",
      status: "Out-Patient",
      payment: "Paypal",
    },
    {
      id: 5,
      firstName: "Cody",
      lastName: "Fisher",
      img:"/images/patient.jpeg",
      email: "cody@patient.com",
      phone: "+88 01767766340",
      location: "3456 Elm St. Phoenix, Arizona 85001",
      diagnose: "Treatment plan",
      dateOfJoining: "11/22/2021",
      status: "Intreatment",
      payment: "Payneer",
    },
    {
      id: 6,
      firstName: "Robert",
      lastName: "Fox",
      img:"/images/patient1.jpeg",
      email: "robert@patient.com",
      phone: "+88 01767766341",
      location: "7890 Maple Dr. Philadelphia, Pennsylvania 19101",
      diagnose: "General checkup",
      dateOfJoining: "12/05/2021",
      status: "Out-Patient",
      payment: "Private Cash",
    },
    {
      id: 7,
      firstName: "Annette",
      lastName: "Black",
      img:"/images/patient.jpeg",
      email: "annette@patient.com",
      phone: "+88 01767766342",
      location: "2468 Birch Lane. San Antonio, Texas 78201",
      diagnose: "Diabetes management",
      dateOfJoining: "06/28/2021",
      status: "Intreatment",
      payment: "Paypal",
    },
  ])

  const handleAddPatient = (newPatient) => {
    const patient = {
      id: Math.max(...patients.map((p) => p.id), 0) + 1,
      ...newPatient,
      dateOfJoining: new Date()
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
        .replace(/\//g, "/"),
      status: "In-Treatment",
      payment: "Pending",
    }
    setPatients([...patients, patient])
    setIsDialogOpen(false)
  }
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleClearFilters = () => {
    setFilters({
      patientName: "",
      dateOfJoining: "",
      status: "",
      payment: "",
    })
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Patient List</h1>
            </div>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
            >
              +
              Add Patient
            </button>
          </div>
        </div>
      </div>
      {/* Controls Section */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Records per page selector */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 font-medium">Show</span>
              <div className="relative">
                <select
                  value={recordsPerPage}
                  onChange={(e) => setRecordsPerPage(Number(e.target.value))}
                  className="appearance-none bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 cursor-pointer hover:border-gray-400 transition-colors"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                
              </div>
              <span className="text-sm text-gray-600">entries</span>
            </div>
            {/* Filters button */}
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              
              Filters
            </button>
          </div>
           {isFilterOpen && (
            <div className="mt-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Patient Name Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Patient</label>
                  <input
                    type="text"
                    placeholder="Search patient name"
                    value={filters.patientName}
                    onChange={(e) => handleFilterChange("patientName", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange("status", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">All Status</option>
                    <option value="In-Treatment">In-Treatment</option>
                    <option value="Out-Patient">Out-Patient</option>
                    <option value="Intreatment">Intreatment</option>
                  </select>
                </div>

                {/* Payment Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment</label>
                  <select
                    value={filters.payment}
                    onChange={(e) => handleFilterChange("payment", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="">All Payment</option>
                    <option value="Private Cash">Private Cash</option>
                    <option value="Paypal">Paypal</option>
                    <option value="Payneer">Payneer</option>
                    <option value="Log Consulting">Log Consulting</option>
                  </select>
                </div>
                {/* Date Of Joining Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Of Joining</label>
                  <input
                    type="date"
                    value={filters.dateOfJoining}
                    onChange={(e) => handleFilterChange("dateOfJoining", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PatientsTable patients={patients} />
      </div>

      {/* Add Patient Dialog */}
      <AddPatientDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onSubmit={handleAddPatient} />
    </div>
  )
}
