import mongoDb from "../Database/DbConnection.js";
import Product from "../Database/ProductSchema.js";

async function getData(req, res) {
    let conn = mongoDb();

    if (req.userData.type === "Customer") {
        let products = await Product.find({});
        // console.log(products);
        return res.status(200).json({
            userData: req.userData,
            products
        })
    }

    if (req.userData.type === "Vendor") {
        let result = await Product.find({
            user_id: req.userData._id
        });
        return res.status(200).json({
            userData: req.userData,
            products: result
        })
    }

    res.status(200).json({
        "message": "All is working correctly"
    })
}

async function updateData(req, res) {
    let conn = mongoDb();

    if (req.userData.type === "Vendor") {
        let result = await Product.updateOne({
            _id: req.body._id
        },{
            $set:{
                product_name: req.body.product_name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                category: req.body.category,
                brand: req.body.brand,
                unit: req.body.unit
            }
        })
        if(result.acknowledged ){
            return res.status(200).json({
                "message": "Data Updated Successfully"
            })
        }else{
            return res.status(500).json({
                "message": "Failed to update data"
            })
        }
    }

    if (req.userData.type === "Customer") {
        res.status(401).json({
            "message": "Customers are not allowed to update data"
        })
    }

    res.status(200).json({
        "message": "All is working correctly"
    })
}
export { getData, updateData };