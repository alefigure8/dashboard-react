import React, {useReducer} from 'react'
import TaskContext from './taskContext'
import TaskReducer from './tasksReducer'
import actionTypes from '../../types/index'
import clientAxios from '../../config/axios'

const TaskState = ({children}) => {

    const initialState = {
    task: [],
    selectedTask: null,
    error: false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const getTasks = async project => {
        try {
            const response = await clientAxios.get('/api/tasks', {params: {project}})
            dispatch({type: actionTypes.TAREAS_PROYECTOS, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }

    const addTask = async task => {
        try {
            const response = await clientAxios.post('/api/tasks', task)
            dispatch({type: actionTypes.AGREGAR_TAREAS, payload: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    const errorTask = () => {
        dispatch({type: actionTypes.VALIDAR_TAREA})
    }

    const deleteTask = async (id, project) => {
        try {
            await clientAxios.delete(`/api/tasks/${id}`, {params:{project}})
            dispatch({type: actionTypes.ELIMINAR_TAREA, payload: id})
        } catch (error) {
            console.log(error)
        }
    }

    const saveActualTask = task => {
        dispatch({type: actionTypes.GUARDAR_TAREA_ACTUAL, payload: task})
    }

    const editTask = async task => {
        try {
            const response = await clientAxios.put(`/api/tasks/${task._id}`, task)
            dispatch({type: actionTypes.EDITAR_TAREA, payload: response.data})
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TaskContext.Provider
            value={{
                task: state.task,
                error: state.error,
                selected: state.selectedTask,
                getTasks,
                addTask,
                errorTask,
                deleteTask,
                saveActualTask,
                editTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskState
