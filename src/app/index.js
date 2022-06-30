import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import axios from 'axios'

//axios.defaults.baseURL = `http://localhost:${process.env.API_PORT}/api/`
axios.defaults.baseURL = `http://localhost:3000/api/`
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
const authToken = localStorage.getItem('authToken')
if (authToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <App />
)