import {Router} from 'express'
import {createUser} from '../controllers/users.js'
import {check} from 'express-validator'
const router = Router()

router.post('/',
[
    check('name', 'Name es required').not().isEmpty(),
    check('email', 'Add a valid e-mail').isEmail(),
    check('password', 'Password must be at least 6 character').isLength({min: 6}),
],
createUser)

export default router