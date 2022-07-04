import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
  
function LoginPage({setLoggedIn}) {
    const navigate = useNavigate()

    const login = () => {
        axios.post('login')
            .then(res => {
                const token = res.data.token;
                if (!token)
                    throw new Error('Falló la autenticación')
                localStorage.setItem('authToken', token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setLoggedIn(true)
                navigate('/algo')
                //navigate('/home')
            })
            .catch(err => alert(err))
    }
    return (
        <button onClick={login}>
            Login 
        </button>
    )
}

export default LoginPage