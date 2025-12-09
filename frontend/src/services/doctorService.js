import api from './api';
export const listDoctors = () => api.get('/users?role=doctor');
