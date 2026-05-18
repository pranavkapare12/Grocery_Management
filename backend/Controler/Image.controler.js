import { uplode } from "../Functions/fileuplode.functions.js"
import Product from "../Database/ProductSchema.js";
async function fileUplode(req, res) {
    const file = req.file;
    const result = await uplode(file.filename, file.path)
    let storeData = {
        public_id: result.public_id,
        url: result.secure_url,
        product_name: req.body.name,
        price: parseFloat(req.body.price),
        user_id: req.userData._id
    }
    try {
        const result = Product.insertOne(storeData);
        if (result) {
            return res.status(200).json({
                "message": "All is working corectly"
            })
        }
    }
    catch (e) {
        console.log(e)
        return res.status(301).json({
            "message": "error in uploding file"
        })
    }
}

export { fileUplode }