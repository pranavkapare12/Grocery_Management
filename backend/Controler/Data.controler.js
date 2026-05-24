import mongoDb from "../Database/DbConnection.js";
import Product from "../Database/ProductSchema.js";

async function getData(req,res){
    let conn = mongoDb();

    if (req.userData.type === "Customer"){
        let result = await Product.find({});
        return res.status(200).json({
            userData: req.userData,
            data : result
        })
    }

    if (req.userData.type === "Vendor"){
        let result = await Product.find({
            user_id: req.userData._id
        });
        return res.status(200).json({
            userData: req.userData,
            products : result
        })
    }
    
    res.status(200).json({
        "message":"All is working correctly"
    })
}
export { getData };