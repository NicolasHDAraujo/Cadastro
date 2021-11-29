import { Routes } from 'react-router-dom';

import MyRoute from './myRoute';
import Login from '../interfaces/Login';
import Page404 from '../interfaces/Page404';
import Home from '../interfaces/Home';

function AppRoutes() {
  return (
    <Routes>
      <MyRoute path="*" element={<Page404 />} />
      <MyRoute path="/login" element={<Login />} />
      <MyRoute path="/" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
