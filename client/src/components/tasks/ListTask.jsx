import React, { useContext, useState, useEffect } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/Tasks/taskContext'
import Task from './Task'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import { DragDropContext, Droppable, Draggable  } from 'react-beautiful-dnd';

const ListTask = () => {

    const projectsContext = useContext(ProjectContext)
    const tasksContext = useContext(TaskContext)

    const {project, projects, deleteProject} = projectsContext
    const {task, indexTask} = tasksContext
    const [getTask, setTask] = useState(task)

    useEffect(() => {
        //const newTask = [... new Set (task)]
        setTask(task)
    }, [task])

    // no projects
    if(projects.length === 0) return <h2>There is no task yet! Add one!</h2>

    // no selected project
    if(!project) return (
    <div className="pick">
        <img src='/img/pic.svg' alt='Pic' />
        <h2>Create a new project or pick one to start!</h2>
    </div>
    )

    const [actualProject] = project

    const onClickDelete = e => {
        e.preventDefault()
        const Confirm = confirm('If you press \"Ok\" project will be deleted')
       if(Confirm){
            deleteProject(actualProject._id)
       }
    }

    const handleOnDragEnd = (result) => {
        const items = Array.from(getTask)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        items.map((item, index) => item.index = index)
        setTask(items)
        indexTask(items)
    }

    return (
        <>
        <h2>{actualProject.name}</h2>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="listado-tareas" >
                {(provided) => (
                    <ul
                        className="listado-tareas"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {task.length === 0
                        ?   (<li className='tareas'>There´s no task yet. Start creating one!</li>)
                        :    getTask.sort((a,b)=> a.index - b.index).map((task, index) =>(
                                    <Draggable
                                        key={task._id}
                                        draggableId={task._id}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                                <Task
                                                    task={task}
                                                    provided={provided}
                                                    snapshot={snapshot}
                                                />
                                        )}
                                    </Draggable>
                                ))}
                         {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
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
