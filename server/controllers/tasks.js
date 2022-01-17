import Project from '../models/projects.js'
import Tasks from '../models/tasks.js'
import {validationResult} from 'express-validator'

// create task
export const createTask = async (req, res) => {
    // validate
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array() })
    }

    const { project } = req.body

    try {
        // find project
        const findProject = await Project.findById(project)

        // validate project
        if(!findProject) {
            return res.status(404).json({msg: 'Project not found'})
        }

        // validate user
        if(findProject.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not allowed'})
        }

        // save task
        const task  = new Tasks(req.body)
        await task.save()

        res.json(task)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'An error has ocurred' })
    }
}

// get by project
export const getTasks = async (req, res) => {

  try {
    const { project } = req.query

    // find project
    const findProject = await Project.findById(project)

    // validate project
    if(!findProject) {
        return res.status(404).json({msg: 'Project not found'})
    }

    // user different from project
    if(findProject.user.toString() !== req.user.id){
        return res.status(401).json({msg: 'User not allowed'})
    }

    const tasks = await Tasks.find({project})

    res.json(tasks)

  } catch (error) {
    console.log(error)
    return res.status(500).json({ msg: 'An error has ocurred' })
  }
}

// edit Task
export const editTask = async( req, res ) => {
    try {
        const { project, state, name } = req.body

        // find task
        let findTask = await Tasks.findById(req.params.id)
        if(!findTask){
            return res.status(404).json({msg: 'Task not found'})
        }

        // find project
        const findProject = await Project.findById(project)
        if(!findProject) {
            return res.status(404).json({msg: 'Project not found'})
        }

        // user different from project
        if(findProject.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not allowed'})
        }

        // create new task with updates
        const newTask = {}

        newTask.name = name
        newTask.state = state

        // update
        findTask = await Tasks.findByIdAndUpdate({_id: req.params.id}, newTask, {new: true})

        res.json(findTask)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'An error has ocurred' })
    }
}

// edit index
export const editIndex = async (req, res) => {
   try {
    req.body.forEach(async task => {
        const { project, index, _id } = task
       // find task
       let findTask = await Tasks.findById(_id)
       if(!findTask){
           return res.status(404).json({msg: 'Task not found'})
       }

       // find project
       const findProject = await Project.findById(project)
       if(!findProject) {
           return res.status(404).json({msg: 'Project not found'})
       }

       // user different from project
       if(findProject.user.toString() !== req.user.id){
           return res.status(401).json({msg: 'User not allowed'})
       }

       // create new task with updates
       const newTask = {}

       newTask.index = index

        // update
        findTask = await Tasks.findByIdAndUpdate({_id: _id}, newTask, {new: true})

    })
   } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'An error has ocurred' })
   }
}

// delete

export const deleteTask = async (req, res) => {
    try {
        const { project } = req.query

        // find task
        let findTask = await Tasks.findById(req.params.id)
        if(!findTask){
            return res.status(404).json({msg: 'Task not found'})
        }

        // find project
        const findProject = await Project.findById(project)
        if(!findProject) {
            return res.status(404).json({msg: 'Project not found'})
        }

        // user different from project
        if(findProject.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not allowed'})
        }

        await Tasks.findByIdAndRemove(req.params.id)

        res.json({msg: 'Task was deleted'})
  } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'An error has ocurred' })
  }
}