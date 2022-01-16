import React, { useContext, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext'
import Project from './Project'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import AlertContext from '../../context/alerts/alertContext'

const ListadoProyectos = () => {

    // init context
    const projectsContext = useContext(projectContext)
    const {projects, getProjects, message} = projectsContext

    const alertContext = useContext(AlertContext)
    const {alert, showAlert} = alertContext

    // get projects
    useEffect(()=>{
        if(message){
            showAlert(message.msg, message.category)
        }
        getProjects()
    },[message])

    if(projects.length === 0)  return <p>No project yet. Start creating one!.</p>

    return (
        <ul className="listado-proyectos">
            {alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) : null}
            <TransitionGroup>
                {projects.map(proyecto =>(
                <CSSTransition
                    key={proyecto._id}
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
