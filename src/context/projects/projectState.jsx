import React, { useEffect, useReducer } from 'react'
 import ProjectContext from './projectContext'
import projectReducer from './projectReducer'
import actionTypes from '../../types/index'
import {v4 as uuidv4} from 'uuid'

const proyectos = [
    {id: 1, name: 'Tienda Virtual' },
    {id: 2, name: 'Intranet'},
    {id: 3, name: 'Diseño Sitio Web'},
    {id: 4, name: 'MERN'},
]

const ProjectState = (props) => {
    // inir state
    const initialState = {
        projects: [],
        project: null,
        form: false,
        errorform: false,
    }

    // init reducer
    const [state, dispatch] = useReducer(projectReducer, initialState)

    // dispatch actions
    const showForm = () => {
        dispatch({type: actionTypes.FORMULARIO_PROYECTO})
    }

    const getProjects = () => {
        dispatch({type: actionTypes.OBTENER_PROYECTOS, payload: proyectos})
    }

    const addProject = project => {
        project.id = uuidv4()
        dispatch({type: actionTypes.AGREGAR_PROYECTOS, payload: project})
    }

    const validateProject = () => {
        dispatch({type: actionTypes.VALIDAR_FORMULARIO})
    }

    const actualProject = id => {
        dispatch({type: actionTypes.PROYECTO_ACTUAL, payload: id})
    }

    const deleteProject = id => {
        dispatch({type: actionTypes.ELIMINAR_PROYECTO, payload: id})
    }

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                project: state.project,
                form: state.form,
                error: state.errorform,
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
