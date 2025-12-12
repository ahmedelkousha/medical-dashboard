import { Clock } from "lucide-react"

export default function TodayAppointments({ appointments }) {
  return (
    <div className="pb-2 ">
      {appointments.map((apt) => (
        <div
          key={apt.id}
          className="flex items-center justify-between p-3 bg-card rounded-lg hover:bg-sky-100 cursor-pointer transition-colors"
        >
          <div className="flex items-center gap-3">
            {/* static */}
            <img src="https://img.freepik.com/free-photo/young-handsome-man-wearing-casual-tshirt-blue-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-12963.jpg?semt=ais_hybrid&w=740&q=80" className="w-10 h-10 bg-gray-300 rounded-full" />
            {/* <img src="" className="w-10 h-10 bg-gray-300 rounded-full" /> */}
            <div>
              <p className="text-sm font-semibold">{apt.name}</p>
              <p className="text-xs">{apt.specialty}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium">{apt.time}</p>
            {apt.status === "Ongoing" && (
              <span className="text-xs text-black font-semibold">{apt.status}</span>
            ) }
          </div>
        </div>
      ))}
    </div>
  )
}
