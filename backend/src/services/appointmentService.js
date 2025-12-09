import Appointment from "../models/Appointment.js";

export const createAppointment = async ({ patient, doctor, date, notes }) => {
  const appt = await Appointment.create({ patient, doctor, date, notes });
  return appt;
};

export const listAppointmentsForUser = async (userId, role) => {
  if (role === "doctor") return Appointment.find({ doctor: userId }).populate("patient", "name email");
  return Appointment.find({ patient: userId }).populate("doctor", "name email");
};
