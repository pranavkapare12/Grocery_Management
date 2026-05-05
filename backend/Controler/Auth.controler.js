import { hashPassword , compareHash } from "../Functions/crypto.js";
import User from "../Database/UserSchema.js";
import mongoDb from "../Database/DbConnection.js";
import { compareSync } from "bcrypt";

async function login (req , res) {
    const { email , password  } = req.body;
    let hash = "$2b$10$FTkOyngSA/uXDYTeEBgeh.0UfqD.FhJxow3XUwXc3rNw6tfmiuW4W"
    let result = await compareHash(password,hash);
    console.log(result);
    
    res.json({
        message : "login is trigger"
    })
}

async function signup(req,res){
    const {username , email , password ,type } = req.body;
    let hash = await hashPassword(password);
    let conn = mongoDb();
    let result = await User.create({
        username : username,
        email : email,
        passowrd : hash,
        type : type
    })
    return res.status(201).json(result);
}

function logout(req , res){
    res.json({
        message : "logout is trigger"
    })
}

export  { login , signup , logout}