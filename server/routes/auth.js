import {Router} from 'express'
import {check} from 'express-validator'
import {authUser} from '../controllers/auth.js'
const router = Router()

router.post('/',
[
    check('email', 'Add a valid e-mail').isEmail(),
    check('password', 'Password must be at least 6 character').isLength({min: 6}),
],
authUser )

export default router