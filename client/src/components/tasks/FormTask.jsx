import React, { useContext, useEffect, useState } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import TasktContext from '../../context/Tasks/taskContext'

const FormTask = () => {

    const [newTask, setNewTask] = useState({
        name:''
    })
    const {name} = newTask

    const projectsContext = useContext(ProjectContext)
    const {project} = projectsContext

    const tasksContext = useContext(TasktContext)
    const {addTask, errorTask, getTasks, error, selected, editTask} = tasksContext

    useEffect(()=>{
        if(selected !== null) {
            setNewTask(selected)
        } else {
            setNewTask({
                name:''
            })
        }
    },[selected])

    // No selected project
    if(!project) return null

   const [newProject] = project
   const {_id} = newProject

   // submit form
   const onSumbitForm = e => {
        e.preventDefault()

        // validate
        if(name.trim() === ''){
            return errorTask()
        }

        if(!selected){
            // add task
            newTask.project = _id
            addTask(newTask)

        }else {
            // edit task
            editTask(newTask)
        }

         // update tasks
         getTasks(_id)

         // reset form
         setNewTask({
             name: ''
         })
    }

    // change input
    const handleChange = e => {
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="formulario">
            <form onSubmit ={onSumbitForm}>
                <div className="contenedor-input">
                    <input
                        type="text"
                        className='input-text'
                        placeholder='Write a new task'
                        name='name'
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className='btn btn-primario btn-block btn-submit'
                        value={selected ? 'Edit task' : 'Add Task'}
                     />
                </div>
            </form>
            {error ? <p className='mensaje error'>Task´s name is reuiered!</p> : null}
        </div>
    )
}

export default FormTask
