import React, { useContext, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext'
import Project from './Project'

const ListadoProyectos = () => {

    // init context
    const projectsContext = useContext(projectContext)
    const {projects, getProjects} = projectsContext

    // get projects
    useEffect(()=>{
        getProjects()
    },[])

    if(projects.length === 0)  return <p>No tienes proyectos. Comienza creando uno.</p>

    return (
        <ul className="listado-proyectos">
            {projects.map(proyecto => <Project key={proyecto.id} proyecto={proyecto} />)}
        </ul>
    )
}

export default ListadoProyectos
