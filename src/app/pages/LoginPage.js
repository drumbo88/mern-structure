import React from 'react'
import axios from 'axios'
import useNavigate from 'react-router-dom'
  
function LoginPage() {
    const navigate = useNavigate()

    const login = () => {
        axios.post('/login')
            .then(res => {
                if (!res.token)
                    throw new Error('Falló la autenticación')
                localStorage.setItem('authToken', res.token)
                axios.defaults.headers.common['auth-token'] = `Bearer ${res.token}`;
                navigate('/home')
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