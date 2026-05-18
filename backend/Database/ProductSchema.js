import mongoose, { Schema } from "mongoose"
const Schema = new Schema({
    public_id:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    product_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        require:true
    },
    user_id:{
        type:String,
        require:true
    }
},{timestamp:true})

const Product = mongoose.model("Product",Schema,"Products");
export default Product;