import {Router} from 'express'
import {check} from 'express-validator'
import {createProject, deleteProject, editProject, getProjects} from '../controllers/projects.js'
const router = Router()
import {userAuth} from '../middlewares/auth.js'

// create porjects
router.post('/', 
userAuth,
[check ('name', 'Name is required').not().isEmpty()],
createProject)

// all projects
router.get('/', userAuth, getProjects)

// edit project
router.put('/:id', userAuth, [check ('name', 'Name is required').not().isEmpty()], editProject)

// delete project
router.delete('/:id', userAuth, deleteProject)

export default router