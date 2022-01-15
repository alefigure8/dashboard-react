import React, {useContext} from 'react'
import AuthContext from '../../context/auth/authContext'

const Bar = () => {
    const authContext = useContext(AuthContext)
    const {user} = authContext
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span></span></p>
            <nav className="nav-principal">
                <a href="#">Cerrar Sesión</a>
            </nav>
        </header>
    )
}

export default Bar