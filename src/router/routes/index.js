import { privateRoutes } from './privateRoutes';
import MainLayout from './../../layout/MainLayout';
import ProtectRoute from './ProtectRoute';

export const getRoutes = () => {
  privateRoutes.forEach((r) => {
    console.log(r);
    r.element = <ProtectRoute route={r}>{r.element}</ProtectRoute>; // Fixed the closing tag
  });

  return {
    path: '/',
    element: <MainLayout />,
    children: privateRoutes,
  };
};
