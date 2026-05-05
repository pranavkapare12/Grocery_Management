import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    passowrd:{
        type : String,
        retquired : true
    },
    type : {
        type : String,
        required : true,
    },
},{ timestamps : true })

const User = mongoose.model('User' , UserSchema, 'users')

export default User;