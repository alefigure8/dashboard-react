import React, {useState, useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import AlertContext from '../../context/alerts/alertContext'
import AuthContext from  '../../context/auth/authContext'

const NewAccount = () => {

    // navigate
    const navigate = useNavigate()

    // constext alert
    const alertContext = useContext(AlertContext)
    const {alert, showAlert} = alertContext

    //context auth
    const authContext = useContext(AuthContext)
    const {userRegister, message, auth} = authContext

    useEffect(() => {
            if(message){
               const {msg, category} = message
               return showAlert(msg, category)
            }

            if(auth) {
                navigate('/projects')
            }
    }, [message, auth])

    // user state
    const [usuario, setUsuario] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const {name, email, password, confirm} = usuario

    // change input & and set user state
    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    // submit data from user
    const onSubmit = e => {
        e.preventDefault()

        // validate empty fields
        if(name.trim() === '' || email.trim() === '' || password.trim() === ''|| confirm.trim() === '' ){
            return showAlert('All fields are required', 'alerta-error')
        }

        // validate password length character
        if(password.length < 6){
            return showAlert('Password required at least 6 characters', 'alerta-error')
        }

        // validate confirm password
        if(password !== confirm){
            return showAlert('Confirm Password is not the same', 'alerta-error')

        }

        userRegister({
            name,
            email,
            password
        })

    }

    return (
        <div className="form-usuario">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1 className='h1-form'>Obtener una cuenta</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={onChange}
                            />
                    </div>
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
                        <label htmlFor="email">Confirmar Password</label>
                        <input
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Repite tu password"
                            value={confirm}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className='btn btn-primario btn-block' value="Registrar" />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    )
}

export default NewAccount
