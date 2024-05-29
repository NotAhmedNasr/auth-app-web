import { PropsWithChildren, createContext, useEffect, useState } from 'react';

export const AuthContext = createContext<{
  authToken: string;
  setAuthToken: (token: string) => void;
  loading: boolean;
} | null>(null);

const AuthContextWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string>('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const authToken = localStorage.getItem('token');
    if (authToken) setToken(authToken);
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
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
