import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { AppUser } from '../../../../lib/types/user';

export const AuthContext = createContext<{
  authToken: string;
  user: AppUser | null;
  setAuthToken: (token: string) => void;
  setAppUser: (user: AppUser | null) => void;
  loading: boolean;
} | null>(null);

const AuthContextWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string>('');
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const authToken = localStorage.getItem('token');
    if (authToken) setToken(authToken);
    const user = localStorage.getItem('user');
    if (user) setUser(JSON.parse(user));
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authToken: token,
        setAuthToken: (token) => {
          localStorage.setItem('token', token);
          setToken(token);
        },
        user,
        setAppUser: (user) => {
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
        },
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
