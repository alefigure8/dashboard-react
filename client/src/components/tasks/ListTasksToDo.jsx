import React from 'react'
import Task from './Task'

const ListTasksToDo = ( {DragDropContext, Droppable, Draggable, handleOnDragEnd, getTask, task}) => {
    return (
        <div className='column'>
            <h2>To Do</h2>
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
        </div>
    )
}

export default ListTasksToDo
