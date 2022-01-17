import {Router} from 'express'
import {check} from 'express-validator'
import {userAuth} from '../middlewares/auth.js'
import { createTask, deleteTask, editIndex, editTask, getTasks } from '../controllers/tasks.js'

const router = Router()

// create
router.post('/', userAuth, [check('name', 'name is required').not().isEmpty()], createTask)

// get
router.get('/', userAuth, getTasks)

// edit
router.put('/:id', userAuth, editTask)

//edit index
router.put('/', userAuth, editIndex)

// delete
router.delete('/:id', userAuth, deleteTask)

export default router