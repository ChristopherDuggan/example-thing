import mongoose from 'mongoose'

let mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectionString = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/lists'

mongoose.connect(connectionString, mongooseConfig)

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))

export default mongoose.connection
