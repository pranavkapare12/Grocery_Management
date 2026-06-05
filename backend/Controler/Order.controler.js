import mongoDb from "../Database/DbConnection.js"
import orderSchema from "../Database/OrderSchema.js";
async function makeOrder(req, res) {
    let conn = mongoDb();
    req.body.customer_id = req.userData._id;

    try {
        let ack = await orderSchema.create(req.body);
        if (ack) {
            return res.status(200).json({
                message: "Data Insert Successfully"
            })
        } else {
            return res.status(401).json({
                message: "error in inserting data"
            })
        }
    } catch (error) {
        console.log(error)
    }

    console.log(req.body)
    return res.status(200).json({
        message: "All is working Correctly"
    })
}

export { makeOrder }