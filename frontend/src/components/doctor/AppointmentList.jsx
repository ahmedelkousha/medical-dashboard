import { Check, X } from "lucide-react"


export default function AppointmentList({ appointments }) {
  return (
    <div className="bg-[#ffffff] rounded-2xl shadow-sm flex flex-col gap-5">
      {appointments.map((apt) => (
        <div key={apt.id} className="flex items-center justify-between hover:bg-sky-100 rounded-2xl p-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full">
              {/* static image */}
              <img src="https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80" alt={apt.name} className="w-full h-full object-cover rounded-full" />
              {/* <img src={apt.avatar} alt={apt.name} className="w-full h-full object-cover rounded-full" /> */}
            </div>
            <div className="text-[#595d63] flex flex-col gap-2">
              <p className="font-semibold text-sm">{apt.name}</p>
              <p className="text-xs">
                {apt.age} {apt.age === 45 ? "Male" : "Female"}, {apt.date} {apt.time}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {apt.status === "confirmed" ? (
              <span className="px-3 py-1 bg-blue-100  text-[#7f7fd5] text-xs rounded-md">
                Confirmed
              </span>
            ) : apt.status === "declined" ?  (
              <span className="px-3 py-1 bg-[#feeeef]  text-[#e65a68] text-xs rounded-md">
                Declined
              </span>
            ): (
              <>
              <span className="px-1 py-1 border border-[#e65a68] text-xs rounded-md">
                <X className="inline-block w-4 h-4 mr-1 text-[#e65a68]"/> 
              </span>
              <span className="px-1 py-1 border border-[#7f7fd5] text-xs rounded-md">
                <Check className="inline-block w-4 h-4 mr-1 text-[#7f7fd5]"/> 
              </span>
              </>
            )}           
          </div>
        </div>
      ))}
    </div>
  )
}
