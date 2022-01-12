import Users from '../models/Users.js'
import bcryptjs from 'bcryptjs'
import {validationResult} from 'express-validator'
import jwt from 'jsonwebtoken'

export const createUser = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array() })
    }

    const {email, password} = req.body
    try {
        let user = await Users.findOne({email})

        // validate mail
        if(user){
            return res.status(400).json({msg: 'User already exist'})
        }

        user = new Users(req.body)

        // hash password
        const salt = await bcryptjs.genSalt(10)
        user.password = await bcryptjs.hash(password, salt)

        // save user
        await user.save()

        // jwt
        const payload = {
            user:{
                id: user._id
            }
        }

        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token) => {
            if(error){
                throw error
            }
            res.json({token})
        })

    } catch (error) {
        console.log(error)
        res.status(400).send('Error')
    }
}