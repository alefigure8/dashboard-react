import Project from '../models/projects.js'
import {validationResult} from 'express-validator'

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