import React, {useState} from 'react'

const NewProject = () => {
    const [project, setProject] = useState({
        name: ''
    })

    const {name} = project

    const onChangeProject = e => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProject = e =>{
        e.preventDefault()
    }

    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
            >
                Nuevo Proyecto
            </button>
            <form
                className='formulario-nuevo-proyecto'
                onSubmit={onSubmitProject}
            >
                <input
                    type="text"
                    className='input-text'
                    name="name"
                    placeholder='Nombre del Proyecto'
                    value={name}
                    onChange={onChangeProject}
                />
                <input type="submit" className='btn btn-primario btn-block' value='Agregar proyecto' />
            </form>
        </>
    )
}

export default NewProject
