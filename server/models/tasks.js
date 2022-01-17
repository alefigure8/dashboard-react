import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    state: {type: Boolean, default: false},
    index: {type: Number},
    create:{type: Date, default: Date.now()},
    project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
})

const taskModel = mongoose.model('Tasks', TaskSchema)
export default taskModel