import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar';

const RootLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="p-20">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
