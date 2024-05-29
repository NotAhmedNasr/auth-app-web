import { useContext } from 'react';
import { AuthContext } from '../../components/hoc/context/auth';
import { Navigate } from 'react-router-dom';

const SignOut: React.FC = () => {
  const { setAuthToken } = useContext(AuthContext) ?? {};
  setAuthToken?.('');
  return <Navigate to={'/sign-up'} />;
};

export default SignOut;
