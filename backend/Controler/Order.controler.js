import mongoDb from "../Database/DbConnection.js"
import orderSchema from "../Database/OrderSchema.js";
async function makeOrder(req, res) {
    let conn = mongoDb();
    try {
        let data = req.body;
        data.customer_id = req.userData._id;
        console.log(data)
        let ack = await orderSchema.create(req.body);
        if (ack) {
            return res.status(200).json({
                message: "Data Insert Successfully",
                ack
            })
        } else {
            return res.status(401).json({
                message: "error in inserting data"
            })
        }
    } catch (error) {
        console.log(error)
    }
    return res.status(200).json({
        message: "All is working Correctly"
    })
}

export { makeOrder }