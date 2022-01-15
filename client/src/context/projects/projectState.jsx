import React, { useReducer } from 'react'
 import ProjectContext from './projectContext'
import projectReducer from './projectReducer'
import actionTypes from '../../types/index'
import clientAxios from '../../config/axios'


const ProjectState = (props) => {
    // inir state
    const initialState = {
        projects: [],
        project: null,
        form: false,
        errorform: false,
        message: null
    }

    // init reducer
    const [state, dispatch] = useReducer(projectReducer, initialState)

    // dispatch actions
    const showForm = () => {
        dispatch({type: actionTypes.FORMULARIO_PROYECTO})
    }

    const getProjects = async () => {
        try {
            const response = await clientAxios.get('/api/projects')
        dispatch({type: actionTypes.OBTENER_PROYECTOS, payload: response.data})
        } catch (error) {
            const alert = {
                msg: 'An error has ocurred',
                category: 'alerta-error'
            }
            dispatch({type: actionTypes.PROYECTO_ERROR, payload: alert})
        }
    }

    const addProject = async project => {
        try {
            const response = await clientAxios.post('/api/projects', project)
            dispatch({type: actionTypes.AGREGAR_PROYECTOS, payload: response.data})
        } catch (error) {
            const alert = {
                msg: 'An error has ocurred',
                category: 'alerta-error'
            }
            dispatch({type: actionTypes.PROYECTO_ERROR, payload: alert})
        }
    }

    const validateProject = () => {
        dispatch({type: actionTypes.VALIDAR_FORMULARIO})
    }

    const actualProject = id => {
        dispatch({type: actionTypes.PROYECTO_ACTUAL, payload: id})
    }

    const deleteProject = async id => {
        try {
            await clientAxios.delete(`/api/projects/${id}`)
            dispatch({type: actionTypes.ELIMINAR_PROYECTO, payload: id})
        } catch (error) {
            const alert = {
                msg: 'An error has ocurred',
                category: 'alerta-error'
            }
            dispatch({type: actionTypes.PROYECTO_ERROR, payload: alert})
        }
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                project: state.project,
                form: state.form,
                error: state.errorform,
                message: state.message,
                getProjects,
                addProject,
                showForm,
                validateProject,
                actualProject,
                deleteProject,
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
