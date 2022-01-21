import React, { useContext, useState, useEffect } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TaskContext from '../../context/Tasks/taskContext'
import Task from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import columnsTask from '../drag/Column'

const ListTask = () => {

    const projectsContext = useContext(ProjectContext)
    const tasksContext = useContext(TaskContext)

    const {project, projects, deleteProject} = projectsContext
    const {task, indexTask} = tasksContext
    const [getTask, setTask] = useState(task)

    // rendering columns
    const [getColumns, setColumns] =  useState(columnsTask)

    useEffect(() => {
        setTask(task)
    }, [task])

    // task into each columns
    getColumns.forEach( col => {
        const colTask = getTask.filter(task => task.column === col.id)
        col.columnTask = colTask
    })

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

    // handle task into columns or between them
    const handleOnDragEnd = (result) => {
        const items = Array.from(getTask)

        // between columns
        if(result.source.droppableId !== result.destination.droppableId) {
            const column = getColumns.filter(col => col.title === result.destination.droppableId)
            const item = items.filter( eachItem => eachItem._id === result.draggableId)[0]
            item.column = column[0].id

        } else { // into columns
            const [reorderedItem] = items.splice(result.source.index, 1)
            items.splice(result.destination.index, 0, reorderedItem)
            items.map((item, index) => item.index = index)
        }
        setTask(items) // rendering task
        indexTask(items) // save index and column number
    }

    return (
        <>
            <h2>{actualProject.name}</h2>
            <div  className='columns'>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    {getColumns.map( ({id, title, columnTask}) => (
                        <div className='column' key={id}>
                            <h2>{title}</h2>
                            <Droppable droppableId={title}>
                                {(provided, snapshot) => (
                                <ul
                                    className= {snapshot.isDraggingOver ? 'listado-tareas-drag ' : 'listado-tareas'}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {columnTask.map((task) =>(
                                        <Task
                                            key={task._id}
                                            task={task}
                                            index={task.index}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </ul>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </DragDropContext>
            </div>
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
