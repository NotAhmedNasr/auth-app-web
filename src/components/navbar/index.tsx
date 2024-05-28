import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: <Link to="home">Home</Link>,
    key: 'home',
  },
  {
    label: <Link to="sign-up">Sign Up</Link>,
    key: 'sign-up',
  },
];

const NavBar: React.FC = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname.split('/')[1]);
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <nav>
      <Menu
        className="grow py-4 px-5 md:px-20 dark:bg-gray-200 font-bold [&>li]:text-white"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </nav>
  );
};

export default NavBar;
