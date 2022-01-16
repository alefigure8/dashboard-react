import React, {useState, useContext} from 'react'
import projectContext from '../../context/projects/projectContext'


const NewProject = () => {

    const projectsContext = useContext(projectContext)

    const {form, showForm, addProject, validateProject, error} = projectsContext

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
        if(name === ''){
            return validateProject()
        }
        addProject(project)
        setProject({
            name: ''
        })
    }

    const onClickForm = () => showForm()

    return (
        <>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick={ onClickForm }
            >
                Add a New Project
            </button>
            {
                 <form
                        className={form ? 'formulario-nuevo-proyecto formulario-nuevo-proyecto-open' : 'formulario-nuevo-proyecto'}
                        onSubmit={ onSubmitProject }
                    >
                    <input
                        type="text"
                        className='input-text'
                        name="name"
                        placeholder='What is the name?'
                        value={ name }
                        onChange={ onChangeProject }
                    />
                    <input type="submit" className='btn btn-primario btn-block' value='Save Project' />
                </form>
        }
        {error ? <p className='mensaje error'>Field is requiered</p> : null}
        </>
    )
}

export default NewProject
