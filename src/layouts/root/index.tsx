import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar';

const RootLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="pt-20 md:p-20">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
