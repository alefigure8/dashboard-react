import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import Task from './Task'

const ListTask = () => {

    const projectsContext = useContext(ProjectContext)

    const {project, projects, deleteProject} = projectsContext

    // no projects
    if(projects.length === 0) return <h2>Aún no hay tareas</h2>

    // no selected project
    if(!project) return <h2>Selecciona un proyecto para comenzar</h2>

    const [actualProject] = project

    const taskPrject = [
        {name: 'Elegir plataforma', estado: true},
        {name: 'Elegir Otra Cosa', estado: false},
        {name: 'Elegir Una tercera Cosa', estado: false},
        {name: 'Elegir Una Ultima Cosa', estado: true},
    ]

    const onClickDelete = e => {
        e.preventDefault()
        deleteProject(actualProject.id)
    }

    return (
        <>
        <h2>Project: {actualProject.name}</h2>
        <ul className="listado-tareas">
            {taskPrject.length === 0
            ? (<li className='tareas'>No hay Tareas!</li>)
            : taskPrject.map(task => <Task key={task.name} task={task} /> )
        }

        </ul>

        <button
            type='button'
            className='btn btn-primario'
            onClick={onClickDelete}
        >
            Eliminar Proyecto &times;
        </button>

        </>
    )
}

export default ListTask
