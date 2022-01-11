import actionTypes from "../../types";


export default (state, action) => {
       switch (action.type) {
        case actionTypes.TAREAS_PROYECTOS: {
            return {
                ...state,
                task: state.tasks.filter(task => task.projectID === action.payload)
            }
        }

        case actionTypes.AGREGAR_TAREAS: {
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
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
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        }
        case actionTypes.EDITAR_TAREA:
        case actionTypes.ESTADO_TAREA: {
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
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