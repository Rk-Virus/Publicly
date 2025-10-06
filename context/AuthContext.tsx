// context/AuthContext.tsx
'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  userId: string | null;
  token: string | null;
  addLogin: (userId: string, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const addLogin = (id: string, tok: string) => {
    setUserId(id);
    setToken(tok);
    // optional: save to localStorage/sessionStorage for persistence
    localStorage.setItem('userId', id);
    localStorage.setItem('token', tok);
  };

  const logout = () => {
    setUserId(null);
    setToken(null);
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ userId, token, addLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
