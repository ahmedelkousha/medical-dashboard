import api from './api';
export const listUsers = () => api.get('/users');
export const listPatients = () => api.get('/users?role=patient');
