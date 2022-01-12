import React, { useContext, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext'
import Project from './Project'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

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
            <TransitionGroup>
                {projects.map(proyecto =>(
                <CSSTransition
                    key={proyecto.id}
                    timeout={300}
                    classNames='proyecto'
                >
                    <Project
                        proyecto={proyecto}
                    />
                </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}

export default ListadoProyectos
