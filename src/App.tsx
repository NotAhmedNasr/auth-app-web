import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/root';
import Home from './pages/home';
import SignUp from './pages/signUp';
import AuthContextWrapper from './components/hoc/context/auth';
import SignOut from './pages/signOut';

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
        path: 'sign-out',
        element: <SignOut />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <AuthContextWrapper>
        <RouterProvider router={router} />
      </AuthContextWrapper>
    </main>
  );
}

export default App;
