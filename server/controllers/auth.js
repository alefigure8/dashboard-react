import Users from '../models/Users.js'
import bcryptjs from 'bcryptjs'
import {validationResult} from 'express-validator'
import jwt from 'jsonwebtoken'

export const authUser = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors:errors.array() })
    }

    const {email, password} = req.body

    try {
        // search user
        let user = await Users.findOne({email})
        if(!user){
            return res.status(400).json({msg: 'User no exist'})
        }

        // validate password
        const correctPass = await bcryptjs.compare(password, user.password)
        if(!correctPass){
            return res.status(400).json({msg: 'Password is wrong'})
        }

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
    }

}