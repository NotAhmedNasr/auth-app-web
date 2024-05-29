import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/root';
import Home from './pages/home';
import SignUp from './pages/signUp';
import AuthContextWrapper from './components/hoc/context/auth';
import SignOut from './pages/signOut';
import SignIn from './pages/signIn';
import { ConfigProvider } from 'antd';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-out',
        element: <SignOut />,
      },
    ],
  },
]);

function App() {
  return (
    <main className="bg-sky-900">
      <AuthContextWrapper>
        <ConfigProvider
          theme={{
            components: {
              Form: {
                labelColor: '#0C4A6E',
                labelFontSize: 16,
              },
              Input: {
                fontSize: 16,
              },
              Menu: {
                itemColor: '#E2E8F0',
                itemHoverColor: '#38BDF8',
                itemSelectedColor: '#38BDF8',
                horizontalItemSelectedColor: '#38BDF8',
              },
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </AuthContextWrapper>
    </main>
  );
}

export default App;
