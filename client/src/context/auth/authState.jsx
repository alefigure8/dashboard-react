import React, { useReducer } from 'react'
import actionTypes from '../../types/index'
import Authcontext from '../auth/authContext'
import authReducer from '../auth/authReducer'

const AuthState = ({children}) => {
    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        message: null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    // functions

    return (
       <Authcontext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message
            }}
       >
           {children}
       </Authcontext.Provider>
    )
}

export default AuthState

