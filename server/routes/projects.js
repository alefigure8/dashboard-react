import {Router} from 'express'
import {check} from 'express-validator'
import {createProject} from '../controllers/projects.js'
const router = Router()
import {userAuth} from '../middlewares/auth.js'

router.post('/', 
userAuth,
[check ('name', 'Name is required').not().isEmpty()],
createProject)
router.get('/', userAuth, createProject)

export default router