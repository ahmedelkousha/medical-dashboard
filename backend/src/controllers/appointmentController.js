import * as apptService from "../services/appointmentService.js";

export const createAppt = async (req, res) => {
  try {
    const body = req.body;
    body.patient = req.user._id;
    const appt = await apptService.createAppointment(body);
    res.json(appt);
  } catch (err) { res.status(400).json({ message: err.message }); }
};

export const listMine = async (req, res) => {
  const appts = await apptService.listAppointmentsForUser(req.user._id, req.user.role);
  res.json(appts);
};
