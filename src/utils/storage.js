import AsyncStorage from '@react-native-async-storage/async-storage';

// In-memory cache for sync access
let sessionCache = {token: null, user: null, role: null};

// Save session
export const saveSession = async (token, user, role) => {
  sessionCache = {token, user, role};
  await AsyncStorage.setItem('token', token);
  await AsyncStorage.setItem('user', JSON.stringify(user));
  await AsyncStorage.setItem('role', role);
};

// Get session SYNC (used by axios interceptor)
export const getSession = () => sessionCache;

// Get session ASYNC (used by initAuth on app start)
export const getSessionAsync = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');
    const role = await AsyncStorage.getItem('role');
    return {
      token: token || null,
      user: user ? JSON.parse(user) : null,
      role: role || null,
    };
  } catch (e) {
    return {token: null, user: null, role: null};
  }
};

// Clear session
export const clearSession = async () => {
  sessionCache = {token: null, user: null, role: null};
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');
  await AsyncStorage.removeItem('role');
};

// Check if logged in
export const isLoggedIn = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return !!token;
  } catch (e) {
    return false;
  }
};