import { useContext } from 'react';
import { AuthContext } from '../../components/hoc/context/auth';
import { Navigate } from 'react-router-dom';
import SignInForm from '../../components/forms/signIn';

const SignIn: React.FC = () => {
  const { authToken, loading } = useContext(AuthContext) ?? {};

  return !loading ? (
    !authToken ? (
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl text-center p-2">Sign In</h1>
        <SignInForm />
      </div>
    ) : (
      <Navigate to={'/'} />
    )
  ) : null;
};

export default SignIn;
