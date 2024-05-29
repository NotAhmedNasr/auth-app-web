import { useContext } from 'react';
import { AuthContext } from '../../components/hoc/context/auth';
import { Navigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { authToken, loading } = useContext(AuthContext) ?? {};
  return !loading ? (
    authToken ? (
      <div>
        <h1 className="text-6xl text-center">Welcome to the application</h1>
      </div>
    ) : (
      <Navigate to={'/sign-in'} />
    )
  ) : null;
};

export default Home;
