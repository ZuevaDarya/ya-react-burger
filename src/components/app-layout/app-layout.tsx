import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/app-header';

function AppLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}

export default AppLayout;
