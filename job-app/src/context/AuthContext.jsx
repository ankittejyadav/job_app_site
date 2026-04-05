import { createContext, useContext, useState, useEffect } from 'react';
import mockUsers from '../data/mockUsers';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('jobvault_user');
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('jobvault_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('jobvault_user');
    }
  }, [user]);

  function login(email, password) {
    const found = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!found) {
      return { success: false, message: 'Invalid email or password.' };
    }
    const sessionUser = {
      applicantId: found.applicantId,
      email: found.email,
      fullName: found.fullName,
    };
    setUser(sessionUser);
    return { success: true };
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
