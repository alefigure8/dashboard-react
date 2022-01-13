import jwt from 'jsonwebtoken'

export const userAuth = (req, res, next) => {
   // header
   const token = req.header('x-auth-token')

   if(!token){
       return res.status(401).json({msg: 'User not allowed'})
   }

   // validate
   try {
       const verified = jwt.verify(token, process.env.SECRET)
       req.user = verified.user
       next()
   } catch (error) {
       res.status(401).json({msg: 'Token not valid'})
   }
}