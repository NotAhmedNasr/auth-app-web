import { useContext } from 'react';
import { AuthContext } from '../../components/hoc/context/auth';
import { Link, Navigate } from 'react-router-dom';
import SignInForm from '../../components/forms/signIn';
import { Divider } from 'antd';

const SignIn: React.FC = () => {
  const { authToken, loading } = useContext(AuthContext) ?? {};

  return !loading ? (
    !authToken ? (
      <div className="m-auto xl:w-5/12 bg-slate-100 p-5 md:py-5 md:px-10 md:rounded-sm shadow-lg">
        <h1 className="text-5xl font-semibold text-sky-900 text-center p-2 mb-10">
          Sign In
        </h1>
        <SignInForm />
        <div className="text-center">
          Don't have an account{' '}
          <Link className="text-cyan-800 underline" to={'/sign-up'}>
            Sign up
          </Link>{' '}
          instead.
        </div>
        <Divider />
      </div>
    ) : (
      <Navigate to={'/'} />
    )
  ) : null;
};

export default SignIn;
