import React from 'react'
import Bar from '../layout/Bar'
import Sidebar from '../layout/Sidebar'
import FormTask from '../tasks/FormTask'
import ListTask from '../tasks/ListTask'

const Projects = () => {
    return (
        <div className="contenedor-app">
           <Sidebar />
            <div className="seccion-principal">
                <Bar />
                <main>
                    <FormTask />
                    <div className="contenedor-tareas">
                        <ListTask />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Projects
