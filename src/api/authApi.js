import api from './index';

export const authApi = {
  // Teacher login
  teacherLogin: payload => api.post('/teacherLogin', payload),

  // Student login
  studentLogin: payload => api.post('/studentLogin', payload),

  // Parent login
  parentLogin: payload => api.post('/parentLogin', payload),

  // Logout
  logout: () => api.post('/logout'),
};