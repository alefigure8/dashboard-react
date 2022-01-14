import React, { useReducer } from 'react'
import actionTypes from '../../types/index'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'

const AlertState = ({children}) => {
    const initialState = {
        alert: null
    }
    const [state, dispatch] = useReducer(alertReducer, initialState)

    //funcitons
    const showAlert = (msg, category) => {
        dispatch({type: actionTypes.MOSTRAR_ALERTA, payload: {msg, category}})

        setTimeout(() => {
            dispatch({type: actionTypes.OCULTAR_ALERTA})
        }, 3000);
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState
