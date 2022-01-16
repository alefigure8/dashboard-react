import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/Tasks/taskContext'
import Task from './Task'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListTask = () => {

    const projectsContext = useContext(ProjectContext)
    const tasksContext = useContext(TaskContext)

    const {project, projects, deleteProject} = projectsContext
    const {task} = tasksContext

    // no projects
    if(projects.length === 0) return <h2>There is no task yet! Add one!</h2>

    // no selected project
    if(!project) return <h2>Pick a project to start!</h2>

    const [actualProject] = project

    const onClickDelete = e => {
        e.preventDefault()
        const Confirm = confirm('If you press \"Ok\" project will be deleted')
       if(Confirm){
            deleteProject(actualProject._id)
       }
    }

    return (
        <>
        <h2>{actualProject.name}</h2>
        <ul className="listado-tareas">
            {task.length === 0
            ?   (<li className='tareas'>There´s no task yet. Start creating one!</li>)
            :   <TransitionGroup>
                    {task.map(task =>(
                        <CSSTransition
                             key={task._id}
                             timeout={300}
                             classNames='tarea'
                        >
                            <Task
                                task={task}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
        }

        </ul>

        <button
            type='button'
            className='btn btn-primario'
            onClick={onClickDelete}
        >
            Delete Project &times;
        </button>

        </>
    )
}

export default ListTask
