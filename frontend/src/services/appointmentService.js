import api from './api';
export const createAppointment = (data) => api.post('/appointments', data);
export const myAppointments = () => api.get('/appointments/me');
export const allAppointments = () => api.get('/appointments');
