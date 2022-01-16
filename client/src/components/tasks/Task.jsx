import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/Tasks/taskContext'

const Task = ({task}) => {

    // project id
    const projectsContext = useContext(ProjectContext)
    const {project} = projectsContext
    const [getProject] = project

    // get tasks and delete task
    const tasksContext = useContext(TaskContext)
    const {getTasks, deleteTask, editTask, saveActualTask} = tasksContext

    // delete task
    const onClickDelete = e => {
        e.preventDefault()
        deleteTask(task._id, getProject._id)
        getTasks(getProject._id)
    }

    const changeStates = task => {
        if(task.state){
            task.state = false
        } else {
            task.state = true
        }
        editTask(task)
    }

    const selectTask = task => {
        saveActualTask(task)
    }

    return (
       <li className="tarea sombra">
           <p>{task.name}</p>
           <div className="estado">
               {task.state
               ?
                    (
                        <button
                                type='button'
                                className='completo'
                                onClick={() => changeStates(task)}
                        >Complete</button>
                    )
               :
                    (
                        <button
                                type='button'
                                className='incompleto'
                                onClick={() => changeStates(task)}
                        >Uncomplete</button>
                    )
               }
           </div>
           <div className="acciones">
               <button type='button' className='btn btn-primario' onClick={()=>selectTask(task)}>Edit</button>
               <button type='button' className='btn btn-secundario' onClick={onClickDelete}>Delete</button>
           </div>
       </li>
    )
}

export default Task
