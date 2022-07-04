import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error404 from './pages/Error404';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RoutesRoot from './routes/RoutesRoot';

function App() {

    const [loggedIn, setLoggedIn] = useState(Boolean(axios.defaults.headers.common['Authorization']))
    
    const logout = (e) => {
        setLoggedIn(false)
        localStorage.removeItem('authToken')
        delete axios.defaults.headers.common['Authorization']
    }

    useEffect(() => {
    }, [loggedIn]);

    return (
        <Router className="container vh-100">
            {loggedIn 
                ? <button onClick={logout}>Logout</button> 
                : <h1>Hola React! <LoginPage setLoggedIn={setLoggedIn} /></h1>
            }
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<RoutesRoot />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    )
}

export default App