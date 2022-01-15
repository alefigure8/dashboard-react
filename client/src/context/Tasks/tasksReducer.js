import actionTypes from "../../types";


export default (state, action) => {
       switch (action.type) {
        case actionTypes.TAREAS_PROYECTOS: {
            return {
                ...state,
                task: action.payload
            }
        }

        case actionTypes.AGREGAR_TAREAS: {
            return {
                ...state,
                task: [action.payload, ...state.task],
                error: false
            }
        }

        case actionTypes.VALIDAR_TAREA: {
            return {
                ...state,
                error: true
            }
        }

        case actionTypes.ELIMINAR_TAREA: {
            return {
                ...state,
                task: state.task.filter(task => task._id !== action.payload)
            }
        }
        case actionTypes.EDITAR_TAREA: {
            return {
                ...state,
                task: state.task.map(task => task._id === action.payload._id ? action.payload : task),
                selectedTask: null
            }
        }

        case actionTypes.GUARDAR_TAREA_ACTUAL: {
            return {
                ...state,
                selectedTask: action.payload
            }
        }

        default:
            return state;
    }
}