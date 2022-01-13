import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    create: {type: Date, default: Date.now()},

})

const userModel = mongoose.model('Project', ProjectSchema)
export default userModel