import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({path: 'variables.env'})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: false,
            useUnifiedTopology: true,
        })
        console.log('DB connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB