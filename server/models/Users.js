import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    create: {type: Date, default: Date.now() },

})

const userModel = mongoose.model('Users', UserSchema)
export default userModel