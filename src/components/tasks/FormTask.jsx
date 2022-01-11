import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'

const FormTask = () => {

    const projectsContext = useContext(ProjectContext)

    const {project} = projectsContext

    // No selected project
    if(!project) return null

    return (
        <div className="formulario">
            <form action="">
                <div className="contenedor-input">
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Nombre Tarea'
                        name='name'
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className='btn btn-primario btn-block btn-submit'
                        value='Add Task'
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTask
