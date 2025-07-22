import { createContext, useContext, useEffect, useState } from 'react';
import { getUserInfo } from '@/services/useAuth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const hasSession = localStorage.getItem('hasSession');
      if (!hasSession) {
        setUser(null);
        setLoading(false);
        return;
      }

      const userData = await getUserInfo();
      setUser(userData);
      setLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
