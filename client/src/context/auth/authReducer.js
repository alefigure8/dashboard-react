import actionTypes from '../../types/index'

const authReucer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_EXITOSO:
        case actionTypes.REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                auth: true,
                message: null,
                loading: false,
            }
        case actionTypes.CERRAR_SESION:
        case actionTypes.LOGIN_ERROR:
        case actionTypes.REGISTRO_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                auth: null,
                token: null,
                user: null,
                loading: false,
                message: action.payload
            }

        case actionTypes.OBTENER_USUARIO:
            return {
                ...state,
                auth: true,
                user: action.payload,
                loading: false,
            }

        default:
            return state
    }
}

export default authReucer