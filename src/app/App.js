import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error404 from './pages/Error404';
import HomePage from './pages/HomePage';
import RoutesRoot from './routes/RoutesRoot';

function App() {
    return (
        <Router className="container vh-100">
            <h1>Hola React!</h1>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<RoutesRoot />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    )
}

export default App