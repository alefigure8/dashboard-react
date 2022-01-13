import express from 'express'
import connectDB from './config/db.js'
import users from './routes/users.js'
import auth from './routes/auth.js'
import projects from './routes/projects.js'
import tasks from './routes/tasks.js'

// port
const PORT = process.env.PORT || 4000

// init express
const app = express()

// mongoose
connectDB()

// middleware
app.use(express.json({extended: true}))
app.use('/api/user', users)
app.use('/api/auth', auth)
app.use('/api/projects', projects)
app.use('/api/tasks', tasks)

// listen server
app.listen(PORT, () => console.log(`Server is ready in port ${PORT}`))