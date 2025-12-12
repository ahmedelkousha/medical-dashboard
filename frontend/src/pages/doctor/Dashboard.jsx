import { Link } from "react-router-dom";
import StatCard from "../../components/doctor/StatCard";
import AppointmentList from "../../components/doctor/AppointmentList";
import PatientTable from "../../components/doctor/PatientTable";
import { Building2, CalendarIcon, ChevronDown, ChevronRightIcon, Users, Video } from "lucide-react";
import PatientsStats from "../../components/doctor/PatientsStats";
import TodayAppointments from "../../components/doctor/TodayAppointments";
import Calendar from "../../components/doctor/Calender";
import { appointments, patients, todayAppointments } from "./Data";
import Gender from "../../components/doctor/Gender";

export default function DoctorDashboard() {
  return (
        <main className="bg-[#f9f9f9] p-4 md:p-6 overflow-y-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome, Dr. Stephen</h1>
            <p className="mt-1">Have a nice day at great work</p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard title="Appointments" value="24.4k" icon={CalendarIcon} color="purple" />
            <StatCard title="Total Patient" value="166.3k" icon={Users} color="pink" />
            <StatCard title="Clinic Consulting" value="53.5k" icon={Building2} color="orange" />
            <StatCard title="Video Consulting" value="28.0k" icon={Video} color="blue" />
          </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">
              <article className="col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Appointment Request</h2>
                  <Link to="#" className="text-[#71b5e9] flex items-center gap-2 text-sm font-semibold hover:underline">
                    <span>View All</span> 
                    <ChevronRightIcon className="w-4 h-4"/>
                  </Link>
                </div>
                <AppointmentList appointments={appointments} />
               </article>

              <article className="col-span-1 flex flex-col gap-5">
                <div className="">
                  <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Patients</h3>
                  <div className="bg-white text-slate-400 flex p-1 rounded-md  justify-between items-center gap-3">
                    <p className="">2020</p>
                    <ChevronDown className="w-4 h-4"/>
                  </div>
                  </div>
                  <PatientsStats newPatients='24.4k' oldPatients='166.3k' percentage={15} />
                </div>
                <div className="">
                  <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold">Gender</h3>
                  <div className="bg-white text-slate-400 flex p-1 rounded-md  justify-between items-center gap-3">
                    <p className="">2020</p>
                    <ChevronDown className="w-4 h-4"/>
                  </div>
                  </div>
                  <Gender />
                </div>
              </article>
      
              <article className="col-span-2">
                <h3 className="text-lg font-bold mb-7">Today Appointments</h3>
                <div className="bg-white rounded-2xl ">
                <TodayAppointments appointments={todayAppointments} />
                <Calendar />
                </div>
              </article>
           </section>

            <section className="rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Patients</h2>
                <Link to="#" className="text-[#71b5e9] flex items-center gap-2 text-sm font-semibold hover:underline">
                  <span>View All</span> 
                  <ChevronRightIcon className="w-4 h-4"/>
                </Link>
              </div>
              <PatientTable patients={patients} />
            </section>
        </main>
  );
}
