import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext'
import taskContext from '../../context/Tasks/taskContext'


const Project = ({proyecto}) => {

    const projectsContext = useContext(projectContext)
    const tasksContext = useContext(taskContext)

    const {actualProject} = projectsContext
    const {getTasks} = tasksContext

    const onClickProject = id => {
        actualProject(id)
        getTasks(id)
    }

    return (
        <li>
            <button
               type='button'
               className='btn btn-blank'
               onClick={() => {
                onClickProject(proyecto.id)
               }}
            >{proyecto.name}</button>
        </li>
    )
}

export default Project
