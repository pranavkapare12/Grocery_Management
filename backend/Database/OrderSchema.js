import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    payment:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    pincode:{
        type:String,
        require:true
    },
    product:{
        type:Array,
        require:true
    },
    total:{
        type:Number,
        require:true
    },customer_id:{
        type:String,
        required:true
    }
},{timestamps:true})

const orderSchema = mongoose.model("Order",Schema,"OrderDetails");

export default orderSchema;