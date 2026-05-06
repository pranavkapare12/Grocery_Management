import { hashPassword , compareHash } from "../Functions/crypto.functions.js";
import User from "../Database/UserSchema.js";
import mongoDb from "../Database/DbConnection.js";
import { compareSync } from "bcrypt";
import generateToken from "../Functions/token.function.js";
import cookieParser  from 'cookie-parser'


async function login (req , res) {
    const { email , password  } = req.body;
    let conn = mongoDb();
    const userDbResult = await User.findOne({
        email: email
    })

    if (!userDbResult){
        return res.status(400).json({
            message:"INVALID USER NAME OR PASSWORD"
        })
    }

    let result = await compareHash(password,userDbResult.password);
    if(!result){
        return res.status(400).json({
            message:"INVALID USER NAME OR PASSWORD"
        })
    }
    
    const userData={
        username : userDbResult.username,
        email : userDbResult.email,
        type : userDbResult.type,
        createAt : userDbResult.createdAt
    }
    let getCookie = generateToken(result._id);
    res.cookie('Grocery_User',getCookie)
    return res.status(201).json(userData)
}

async function signup(req,res){
    const {username , email , password ,type } = req.body;
    let conn = mongoDb();

    let ack = await User.findOne({
        email : email
    })

    if (ack){
        return res.status(400).json({
            message: "USER ALREADY EXIST"
        })
    }
    let hash = await hashPassword(password);

    let result = await User.create({
        username : username,
        email : email,
        password : hash,
        type : type
    })

    const userData={
        username : result.username,
        email : result.email,
        type : result.type,
        createAt : result.createdAt
    }

    let getToken = generateToken(result._id);
    res.cookie('Grocery_User',getToken);
    return res.status(201).json(userData);
}

function logout(req , res){
    res.clearCookie('Grocery_User');
    res.status(200).json({message : "Cookie Clear"})
}

export  { login , signup , logout}