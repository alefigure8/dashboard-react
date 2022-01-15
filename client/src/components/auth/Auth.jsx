import React, {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext'
import AuthContext from  '../../context/auth/authContext'
import {useNavigate} from 'react-router-dom'


const Auth = () => {

    // navigate
    const navigate = useNavigate()

    // state
    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    })

    // constext alert
    const alertContext = useContext(AlertContext)
    const {alert, showAlert} = alertContext

    // context auth
    const authContext = useContext(AuthContext)
    const {inisSession, message, auth} = authContext

    const {email, password} = usuario

    useEffect(() => {
        if(message){
           const {msg, category} = message
           return showAlert(msg, category)
        }

        if(auth) {
            navigate('/projects')
        }
    }, [message, auth])

    // on change fields
    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // on submit form
    const onSubmit = e => {
        e.preventDefault()
        if(email.trim() === '' || password.trim()===''){
            return showAlert('All fields are required', 'alerta-error')
        }
        inisSession({email, password})
    }

    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar sesion</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block' value="Iniciar sesión" />
                    </div>
                </form>
                <Link to={'/new-account'} className='enlace-cuenta'>
                    Obtener cuenta
                </Link>
            </div>
        </div>
    )
}

export default Auth
