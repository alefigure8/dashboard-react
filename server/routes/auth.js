import {Router} from 'express'
import {check} from 'express-validator'
import {authUser, userSignIn} from '../controllers/auth.js'
import {userAuth} from '../middlewares/auth.js'
const router = Router()

// Init session
router.post('/', authUser )

//

router.get('/', userAuth, userSignIn)

export default router