import React from 'react'

const FormTask = () => {
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
