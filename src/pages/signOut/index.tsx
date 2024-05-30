import { useContext, useEffect } from 'react';
import { AuthContext } from '../../components/hoc/context/auth';
import { useNavigate } from 'react-router-dom';

const SignOut: React.FC = () => {
  const { setAuthToken, setAppUser } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();
  useEffect(() => {
    setAuthToken?.('');
    setAppUser?.(null);
    navigate('/sign-in');
  }, []);
  return null;
};

export default SignOut;
