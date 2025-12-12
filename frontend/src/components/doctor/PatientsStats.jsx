import { TrendingUp, User, Users } from "lucide-react"

export default function PatientsStats({ newPatients, oldPatients, percentage }) {
  return (
    <div className="bg-white space-y-4 rounded-2xl shadow-sm">
      <div className="flex items-center gap-3 p-4  rounded-lg">
        <div className="p-2 bg-[#e9f6fe] rounded-full">
          <User className="w-5 h-5 text-[#2fa2e5]" />
        </div>
        <div className="flex-1">
          <div className="flex items-end gap-2">
            <p className="text-2xl font-bold">{newPatients}</p>
          </div>
          <p className="text-xs text-muted-foreground">New Patient</p>
        </div>
            <span className="flex items-center gap-2 text- font-bold text-[#7f7fd5]"><TrendingUp className="w-4 h-4"/> {percentage}%</span>
      </div>

            <div className="flex items-center gap-3 p-4  rounded-lg">
        <div className="p-2 bg-[#fff6e5] rounded-full">
          <User className="w-5 h-5 text-[#f2b030]" />
        </div>
        <div className="flex-1">
          <div className="flex items-end gap-2">
            <p className="text-2xl font-bold">{oldPatients}</p>
          </div>
          <p className="text-xs text-muted-foreground">Old Patient</p>
        </div>
            <span className="flex items-center gap-2 text- font-bold text-[#7f7fd5]"><TrendingUp className="w-4 h-4"/> {percentage}%</span>
      </div>

    </div>
  )
}
