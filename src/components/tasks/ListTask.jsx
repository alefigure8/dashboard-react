import React from 'react'
import Task from './Task'

const ListTask = () => {

    const taskPrject = [
        {name: 'Elegir plataforma', estado: true},
        {name: 'Elegir Otra Cosa', estado: false},
        {name: 'Elegir Una tercera Cosa', estado: false},
        {name: 'Elegir Una Ultima Cosa', estado: true},
    ]
    return (
        <>
        <h2>Project: Tienda Virtual</h2>
        <ul className="listado-tareas">
            {taskPrject.length === 0
            ? (<li className='tareas'>No hay Tareas!</li>)
            : taskPrject.map(task => <Task key={task.name} task={task} /> )
        }

        </ul>

        <button
            type='button'
            className='btn btn-primario'
        >
            Eliminar Proyecto &times;
        </button>

        </>
    )
}

export default ListTask
