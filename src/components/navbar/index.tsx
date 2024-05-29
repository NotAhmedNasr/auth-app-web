import { Menu, MenuProps } from 'antd';
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../hoc/context/auth';

type MenuItem = Required<MenuProps>['items'][number];

const authenticatedMenuItems: MenuItem[] = [
  {
    label: <Link to="/">Home</Link>,
    key: 'home',
  },
  {
    label: <Link to="sign-out">Sign out</Link>,
    key: 'sign-out',
  },
];

const anonymousMenuItems: MenuItem[] = [
  {
    label: <Link to="sign-up">Sign Up</Link>,
    key: 'sign-up',
  },
];

const NavBar: React.FC = () => {
  const location = useLocation();
  const { authToken, loading } = useContext(AuthContext) ?? {};
  const [current, setCurrent] = useState(location.pathname.split('/')[1]);
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <nav className="flex py-4 px-5 md:px-20 dark:bg-gray-200 font-bold">
      {!loading && (
        <Menu
          className="grow bg-inherit"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={authToken ? authenticatedMenuItems : anonymousMenuItems}
        />
      )}
    </nav>
  );
};

export default NavBar;
