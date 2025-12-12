import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Calendar() {

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
  const dayNumbers = [3,4,5,6,7,8,9]
  return (
    <div className="pt-2">
      <div className="flex items-center gap-2  mb-2">
        <h3 className="font-semibold lg:pl-5">03 - 09 May, 2021</h3>
        <div className="flex gap-2">
          <button className="p-1 bg-sky-300 hover:bg-sky-500 cursor-pointer rounded">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-1 bg-sky-300 hover:bg-sky-500 cursor-pointer rounded">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 pb-2">
        {weekDays.map((day,i) => (
          <div key={i} className="text-center text-x font-semibold text-gray-400 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center">
            {day}
          </div>
        ))}
        {dayNumbers.map((day) => (
          <div key={day} className="text-center text-x font-semibold hover:bg-sky-100 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>

      <div className="rounded-lg text-white py-7 px-5 flex items-center justify-between"
       style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/017/457/394/small/simple-background-with-gradient-shape-green-vector.jpg')" }}>
        <div className="lg:pl-5">
          <p className="text-xs text-primary-foreground/80">Next Week</p>
          <p className="text-sm font-semibold text-primary-foreground">Upcoming Schedules-2</p>
        </div>
        <button className="px-4 py-2 bg-[#7a6efe] hover:bg-[#7a6efe]/50 cursor-pointer text-white rounded-lg text-sm font-semibold transition-colors">
          Open
        </button>
      </div>
    </div>
  )
}
