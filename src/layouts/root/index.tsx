import { Outlet } from 'react-router-dom';
import NavBar from '../../components/navbar';

const RootLayout: React.FC = () => {
  return (
    <>
      <NavBar />
      <main className="p-20">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
