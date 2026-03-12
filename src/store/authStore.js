import {create} from 'zustand';
import {saveSession, clearSession, getSession} from '@utils/storage';

const useAuthStore = create(set => ({
  user: null,
  token: null,
  role: null,
  isAuthenticated: false,
  isLoading: true,

  // Initialize from storage on app start
  initAuth: () => {
    const {token, user, role} = getSession();
    if (token && user && role) {
      set({
        token,
        user,
        role,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      set({isLoading: false});
    }
  },

  // Login
  login: (token, data, role) => {
    saveSession(token, data, role);
    set({
      token,
      user: data,
      role: role.toLowerCase(),
      isAuthenticated: true,
      isLoading: false,
    });
  },

  // Logout
  logout: () => {
    clearSession();
    set({
      token: null,
      user: null,
      role: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },

  // Update user data
  updateUser: user => {
    saveSession(
      useAuthStore.getState().token,
      user,
      useAuthStore.getState().role,
    );
    set({user});
  },
}));

export default useAuthStore;