import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
}, {timestamps: true});

const userModel = mongoose.model('users3', userSchema)

export default userModel;