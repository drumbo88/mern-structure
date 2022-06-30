import { Route, Routes  } from 'react-router-dom';

import React from "react";
import HomePage from '../pages/HomePage';
import AlgoPage from "../pages/AlgoPage";
import LoginPage from '../pages/LoginPage';
import Error404 from '../pages/Error404';

function RoutesRoot() {
  return (
    <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="algo/*" element={<AlgoPage />} />
        <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default RoutesRoot;
