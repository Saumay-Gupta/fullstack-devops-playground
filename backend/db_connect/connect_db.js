import mongoose from "mongoose";


const connectDB = async() => {
    try {
        await mongoose.connect(`${process.env.MONGO_DB}`)
        console.log('DB connect successfully')
    } catch (error) {
        console.log('Error in connection DB.')
    }
}

export default connectDB;