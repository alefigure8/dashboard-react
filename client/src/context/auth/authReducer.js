import actionTypes from '../../types/index'

const authReucer = (state, action) => {
    switch (action.type) {
        case actionTypes.REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                auth: true,
                message: null
            }
        case actionTypes.LOGIN_ERROR:
        case actionTypes.REGISTRO_ERROR:
            localStorage.removeItem('token')
            return {
                ...state,
                auth: null,
                token: null,
                message: action.payload
            }
        case actionTypes.OBTENER_USUARIO:
            return {
                ...state,
                user: action.payload
            }
        case actionTypes.LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                auth: true,
                message: null
            }
        default:
            return state
    }
}

export default authReucer