import { verifyToken } from "../Functions/token.function.js";
import cookieParser from "cookie-parser";
import mongoDb from "../Database/DbConnection.js";
import User from "../Database/UserSchema.js";
const authMiddleware =async (req,res,next) =>{
    const token = req.cookies.Grocery_User;
    console.log(token)
    if(!token){
        return res.status(401).json({
            "message":"Unauthrized Access"
        })
    }
    const verifyTok = verifyToken(token);
    const conn = mongoDb();
    let result =await User.findOne({
        _id: verifyTok
    })
    if(!result){
        return res.status(401).json({
            "message":"Unauthrized Access"
        })
    }

    let data={
        _id: verifyTok,
        username: result.username,
        email: result.email,
        type: result.type,
        createAt: result.createdAt
    }
    req.userData=data;
    next();
}

export { authMiddleware };