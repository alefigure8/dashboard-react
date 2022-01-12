import React, {useReducer} from 'react'
import TaskContext from './taskContext'
import TaskReducer from './tasksReducer'
import actionTypes from '../../types/index'
import {v4} from 'uuid'

const TaskState = ({children}) => {

    const initialState = {
        tasks: [
            {id: 10, name: 'Elegir plataforma', estado: true, projectID: 1},
            {id: 20, name: 'Elegir Otra Cosa', estado: false, projectID: 2},
            {id: 30, name: 'Elegir Una tercera Cosa', estado: false, projectID: 3},
            {id: 40, name: 'Elegir Una Ultima Cosa', estado: true, projectID: 4},
            {id: 50, name: 'Elegir plataforma', estado: true, projectID: 4},
            {id: 60, name: 'Elegir Otra Cosa', estado: false, projectID: 1},
            {id: 70, name: 'Elegir Una tercera Cosa', estado: false, projectID: 2},
            {id: 80, name: 'Elegir Una Ultima Cosa', estado: true, projectID: 3},
            {id: 90, name: 'Elegir plataforma', estado: true, projectID: 3},
            {id: 100, name: 'Elegir Otra Cosa', estado: false, projectID: 4},
            {id: 110, name: 'Elegir Una tercera Cosa', estado: false, projectID: 1},
            {id: 120, name: 'Elegir Una Ultima Cosa', estado: true, projectID: 2},
            {id: 130, name: 'Elegir plataforma', estado: true, projectID: 2},
            {id: 140, name: 'Elegir Otra Cosa', estado: false, projectID: 3},
            {id: 150, name: 'Elegir Una tercera Cosa', estado: false, projectID: 4},
            {id: 160, name: 'Elegir Una Ultima Cosa', estado: true, projectID: 1},
    ],
    task: null,
    selectedTask: null,
    error: false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState)

    const getTasks = id => {
        dispatch({type: actionTypes.TAREAS_PROYECTOS, payload: id})
    }

    const addTask = task => {
        task.id = v4()
        dispatch({type: actionTypes.AGREGAR_TAREAS, payload: task })
    }

    const errorTask = () => {
        dispatch({type: actionTypes.VALIDAR_TAREA})
    }

    const deleteTask = id => {
        dispatch({type: actionTypes.ELIMINAR_TAREA, payload: id})
    }

    const changeState = task => {
        dispatch({type: actionTypes.ESTADO_TAREA, payload: task})
    }

    const saveActualTask = task => {
        dispatch({type: actionTypes.GUARDAR_TAREA_ACTUAL, payload: task})
    }

    const editTask = task => {
        dispatch({type: actionTypes.EDITAR_TAREA, payload: task})

    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                task: state.task,
                error: state.error,
                selected: state.selectedTask,
                getTasks,
                addTask,
                errorTask,
                deleteTask,
                changeState,
                saveActualTask,
                editTask
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}

export default TaskState
