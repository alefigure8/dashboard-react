import React, { useReducer } from 'react'
import actionTypes from '../../types/index'
import Authcontext from '../auth/authContext'
import authReducer from '../auth/authReducer'
import clientAxios from '../../config/axios'
import tokenAuth from '../../config/tokenAuth'

const AuthState = ({children}) => {
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null,
        loading: true
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    // user register
    const userRegister = async data => {
        try {
            const response = await clientAxios.post('/api/user', data)
            dispatch({type: actionTypes.REGISTRO_EXITOSO, payload: response.data})
            userAuth()
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({type: actionTypes.REGISTRO_ERROR, payload: alert})
        }
    }

    // get user data
    const userAuth = async () => {
        const token = localStorage.getItem('token')

        // header
        if(token){
            tokenAuth(token)
        }

        try {
            const response = await clientAxios.get('/api/auth')
            dispatch({type: actionTypes.OBTENER_USUARIO, payload: response.data})
        } catch (error) {
            dispatch({type: actionTypes.LOGIN_ERROR})
        }
    }

    // init session
    const inisSession = async data => {
        try {
            const response = await clientAxios.post('/api/auth', data)
            dispatch({type: actionTypes.LOGIN_EXITOSO, payload: response.data})
            userAuth()
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            console.log(error.response.data)
            dispatch({type: actionTypes.LOGIN_ERROR, payload: alert})
        }
    }

     const logoutSession = () => {
        dispatch({type: actionTypes.CERRAR_SESION})
    }

    return (
       <Authcontext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                loading: state.loading,
                userAuth,
                userRegister,
                inisSession,
                logoutSession
            }}
       >
           {children}
       </Authcontext.Provider>
    )
}

export default AuthState

