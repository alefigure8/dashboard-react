import React, {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const Bar = () => {
    const authToken = useContext(AuthContext)
    const {userAuth, user, logoutSession} = authToken
    const navigate = useNavigate()
    useEffect(() => {
       userAuth()
    }, [])

    const handleLogout = () => {
        logoutSession()
        navigate('/')
    }
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hello, <span>{user?.name}</span>!</p>
            <nav className="nav-principal">
                <button className='btn btn-blank cerrar-sesion' onClick={handleLogout} >Logout</button>
            </nav>
        </header>
    )
}

export default Bar