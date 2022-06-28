import { Route, Routes  } from 'react-router-dom';

import React from "react";
import HomePage from '../pages/HomePage';
import AlgoPage from "../pages/AlgoPage";
import LoginPage from '../pages/LoginPage';

function RoutesRoot() {
  return (
    <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="algo/*" element={<AlgoPage />} />
    </Routes>
  );
}

export default RoutesRoot;
