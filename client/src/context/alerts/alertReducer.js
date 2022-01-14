import actionTypes from '../../types/index.js'

const alertReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.MOSTRAR_ALERTA: {
            return {
                alert: action.payload
            }
        }
        case actionTypes.OCULTAR_ALERTA: {
            return {
                alert: null
            }
        }
        default:
            return state;
    }
}

export default alertReducer