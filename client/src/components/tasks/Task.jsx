import React, { useContext } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/Tasks/taskContext'

const Task = ({task, index}) => {
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
        <Draggable
            key={task._id}
            draggableId={task._id}
            index={index}
        >
        {(provided, snapshot) => (
            <li
                className="tarea"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                <p>{task.name}</p>
                <div className="estado">
                    {task.state
                    ?
                            (
                                <button
                                        type='button'
                                        className='completo'
                                        onClick={() => changeStates(task)}
                                >{task.column === 3 ? 'Review' : 'Complete'}</button>
                            )
                    :
                            (
                                <button
                                        type='button'
                                        className='incompleto'
                                        onClick={() => changeStates(task)}
                                >{task.column === 3 ? 'Review' : 'Uncomplete'}</button>
                            )
                    }
                </div>
                <div className="acciones">
                    <button type='button' className='btn-task btn-primario' onClick={()=>selectTask(task)}>Edit</button>
                    <button type='button' className='btn-task btn-secundario' onClick={onClickDelete}>Delete</button>
                </div>
            </li>
       )}
       </Draggable>
    )
}

export default Task
