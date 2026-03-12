import {MMKV} from 'react-native-mmkv';

// Create storage instance
let storage;

try {
  storage = new MMKV({
    id: 'pjsofttech-storage',
    encryptionKey: 'pjsofttech-secret-key',
  });
} catch (e) {
  console.log('MMKV init error:', e);
}

// Save session
export const saveSession = (token, user, role) => {
  storage.set('token', token);
  storage.set('user', JSON.stringify(user));
  storage.set('role', role);
};

// Get session
export const getSession = () => {
  try {
    const token = storage.getString('token');
    const user = storage.getString('user');
    const role = storage.getString('role');
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
export const clearSession = () => {
  storage.delete('token');
  storage.delete('user');
  storage.delete('role');
};

// Check if logged in
export const isLoggedIn = () => {
  try {
    const token = storage.getString('token');
    return !!token;
  } catch (e) {
    return false;
  }
};

export {storage};