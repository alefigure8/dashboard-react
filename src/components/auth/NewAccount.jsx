import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const NewAccount = () => {
    const [usuario, setUsuario] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const {name, email, password, confirm} = usuario

    const onChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una cuenta</h1>
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
