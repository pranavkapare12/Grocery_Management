import { uplode , deleteFile } from "../Functions/fileuplode.functions.js"
import Product from "../Database/ProductSchema.js";
async function fileUplode(req, res) {
    const file = req.file;
    const result = await uplode(file.filename, file.path)
    let storeData = {
        public_id: result.public_id,
        url: result.secure_url,
        product_name: req.body.name,
        description: req.body.description,
        price: parseFloat(req.body.price),
        stock: parseInt(req.body.stock),
        category: req.body.category,
        brand: req.body.brand,
        user_id: req.userData._id
    }
    try {
        const result =await Product.insertOne(storeData);
        if (result) {
            return res.status(200).json({
                result,
            })
        }
    }
    catch (e) {
        console.log(e)
        return res.status(301).json({
            "message": "error in uploding file"
        })
    }
    return res.status(200).json({
        "message": "All is working corectly"
    })
}

async function fileDelete(req,res){
    const data = req.body;

    const result = await deleteFile(data.public_id);
    if( result.result !== "ok"){
        console.log("error in deleting file");
        return res.status(301).json({
            "message":"error in deleting file"
        })
    }

    const dbResult = await Product.deleteOne({
        _id: data._id
    })

    if(!dbResult.result === false){
        console.log("error in deleting file from database");
        return res.status(301).json({
            "message":"error in deleting file from database"
        })
    }

    return res.status(200).json({
        "message":"All is working correctly"
    })
}

export { fileUplode , fileDelete}