import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'


const Project = ({proyecto}) => {

    const projectsContext = useContext(projectContext)

    const {actualProject} = projectsContext

    return (
        <li>
            <button
               type='button'
               className='btn btn-blank'
               onClick={() => {
                   actualProject(proyecto.id)
               }}
            >{proyecto.name}</button>
        </li>
    )
}

export default Project
