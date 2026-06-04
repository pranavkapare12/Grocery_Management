import mongoDb from "../Database/DbConnection.js";
import feedbackModel from "../Database/Feedback.js";
async function feedback(req,res){
    let conn = mongoDb();
    req.body.user_id = req.userData._id;
    let ack = await feedbackModel.create(req.body)

    return res.status(200).json({
        message: "All is working correctly"
    })
}

export { feedback };