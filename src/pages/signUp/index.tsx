import { useContext } from 'react';
import SignUpForm from '../../components/forms/signUp';
import { AuthContext } from '../../components/hoc/context/auth';
import { Navigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const { authToken, loading } = useContext(AuthContext) ?? {};

  return !loading ? (
    !authToken ? (
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl text-center p-2">sign up</h1>
        <SignUpForm />
      </div>
    ) : (
      <Navigate to={'/'} />
    )
  ) : null;
};

export default SignUp;
