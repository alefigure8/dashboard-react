import Project from '../models/projects.js'
import {validationResult} from 'express-validator'

// create projects
export const createProject = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array() })
    }
    try {
        const project = new Project(req.body)
        project.user = req.user.id
        await project.save()
        res.json(project)
    } catch (error) {
        console.log(error)
        res.status(500).send('Error')
    }
}

// get projects

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({user: req.user.id})
        res.json(projects)
    } catch (error) {
        res.status(500).json({msg: 'An error has ocurred'})
    }
}

// edit project
export const editProject = async (req, res) => {

    // validate request
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array() })
    }

    const {name} = req.body
    const updateProject = {}

    if(name){
        updateProject.name = name
    }

    try {
        // seach project in mongoose
        let searchProject = await Project.findById(req.params.id)

        // project not founded
        if(!searchProject){
            return res.status(404).json({msg: 'Project not found'})
        }

        // user different from project
        if(searchProject.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not allowed'})
        }

        searchProject = await Project.findByIdAndUpdate({_id: req.params.id}, {$set: updateProject}, {new: true})

        res.json(searchProject)
    } catch (error) {
        res.status(500).json({msg: 'An error has ocurred'})
    }
}

// delte project
export const deleteProject = async (req, res) => {
    try {
        let deleteProject = await Project.findById(req.params.id)

        // project not founded
        if(!deleteProject){
            return res.status(404).json({msg: 'Project not found'})
        }

        // user different from project
        if(deleteProject.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'User not allowed'})
        }

        await Project.findOneAndRemove({_id: req.params.id})

        res.json({msg: 'task was deleted'})

    } catch (error) {
        res.status(500).json({msg: 'An error has ocurred'})
    }
}