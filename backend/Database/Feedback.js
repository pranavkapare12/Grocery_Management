import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    user_id:{
        type: String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phoneno:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
},{timestamps:true})

const feedbackModel = mongoose.model("feedback",feedbackSchema,"feed");

export default feedbackModel;