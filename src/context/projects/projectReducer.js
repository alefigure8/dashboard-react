import actionTypes from '../../types/index'

export default (state, action) => {
    switch(action.type){
        case actionTypes.FORMULARIO_PROYECTO: {
            return {
                ...state,
                form: true
            }
        }

        case actionTypes.OBTENER_PROYECTOS:{
            return {
                ...state,
                projects: action.payload
            }
        }

        case actionTypes.AGREGAR_PROYECTOS: {
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false
            }
        }

        default:
            return state
    }
}