import mongoose from 'mongoose'

let listSchema = new mongoose.Schema({
    title: String,
    items: {
        title: String,
        status: String,
        deadline: String
    }
})

let List = mongoose.model("List", listSchema)

export default List
