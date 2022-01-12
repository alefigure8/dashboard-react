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
                form: false,
                errorform: false
            }
        }

        case actionTypes.VALIDAR_FORMULARIO: {
            return {
                ...state,
                errorform: true
            }
        }

        case actionTypes.PROYECTO_ACTUAL: {
            return {
                ...state,
                project: state.projects.filter(project => project.id === action.payload)
            }
        }

        case actionTypes.ELIMINAR_PROYECTO: {
            return {
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload),
                project: null
            }
        }

        default:
            return state
    }
}