import { lazy } from 'react';

const Login = lazy(() => import('../../views/auth/Login'));
const Home = lazy(() => import('../../views/pages/Home'));
const Register = lazy(() => import('../../views/auth/Register'));
const AdminLogin = lazy(() => import('../../views/auth/AdminLogin'));
const UnAuthorized = lazy(() => import('../../views/UnAuthorized'));

const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/unauthorized',
    element: <UnAuthorized />,
  },
];

export default publicRoutes;
