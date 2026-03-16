import api from './index';

export const studentApi = {
  // Get student profile by id, role and email
  getStudentById: async (id, role, email) => {
    try {
      if (!id || !role || !email) {
        throw new Error('User credentials are missing.');
      }

      const response = await api.get(`/getStudentById/${id}`, {
        params: {role, email},
      });

      return response.data;

    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Failed to fetch student profile.';

      console.error(`[StudentApi] getStudentById failed: ${message}`);
      throw new Error(message);
    }
  },
};