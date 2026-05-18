import mongoose, { Schema } from "mongoose"
const ProductSchema = new Schema({
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
    description:{
        type:String
    },
    price:{
        type:Number,
        require:true
    },
    stock:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    brand:{
        type:String
    },
    user_id:{
        type:String,
        require:true
    }
},{ timestamps:true })

const Product = mongoose.model("Product",ProductSchema,"Products");
export default Product;