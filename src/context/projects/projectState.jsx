import React, { useReducer } from 'react'
 import ProjectContext from './projectContext'
import projectReducer from './projectReducer'

const ProjectState = (props) => {
    const initialState = {
        form: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    return (
        <ProjectContext.Provider
            value={{
                form: state.form
            }}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState
