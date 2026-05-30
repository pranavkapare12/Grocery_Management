import { hashPassword, compareHash } from "../Functions/crypto.functions.js";
import User from "../Database/UserSchema.js";
import mongoDb from "../Database/DbConnection.js";
import { compareSync } from "bcrypt";
import { generateToken } from "../Functions/token.function.js";
import cookieParser from 'cookie-parser'


async function login(req, res) {
    const { email, password } = req.body;
    let conn = mongoDb();
    const userDbResult = await User.findOne({
        email: email
    })

    if (!userDbResult) {
        return res.status(400).json({
            message: "INVALID USER NAME OR PASSWORD"
        })
    }

    let result = await compareHash(password, userDbResult.password);
    if (!result) {
        return res.status(400).json({
            message: "INVALID USER NAME OR PASSWORD"
        })
    }


    let getCookie = generateToken(userDbResult._id);
    const userData = {
        _id: userDbResult._id,
        username: userDbResult.username,
        email: userDbResult.email,
        type: userDbResult.type,
        createAt: userDbResult.createdAt
    }
    res.cookie('Grocery_User', getCookie, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    req.userData = userData;
    return res.status(201).json(userData)
}

async function signup(req, res) {
    const { username, email, password, type } = req.body;
    let conn = mongoDb();
    let ack = await User.findOne({
        email: email
    })

    if (ack) {
        return res.status(409).json({
            message: "USER ALREADY EXIST"
        })
    }
    let hash = await hashPassword(password);

    let result = await User.create({
        username: username,
        email: email,
        password: hash,
        type: type
    })


    let getToken = generateToken(result._id);
    const userData = {
        _id: result._id,
        username: result.username,
        email: result.email,
        type: result.type,
        createAt: result.createdAt
    }
    res.cookie('Grocery_User', getToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    return res.status(201).json(userData);
}

function logout(req, res) {
    res.clearCookie('Grocery_User', {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/"
    });
    res.status(200).json({ message: "Cookie Clear" })
}

async function loginWithGoogle(req, res){
    console.log(req.body);

    if (req.body.email === "") {
        return res.status(400).json({
            message: "EMAIL IS REQUIRED"
        })
     }
    let conn = mongoDb();
    let result = await User.findOne({
        email: req.body.email
    })
    if (result){
        return res.status(200).json({
            message: "USER FOUND",
            result
        })
    }else{
        return res.status(200).json({
            message: "USER NOT FOUND"
        })
    }
    res.status(200).json({ message: "All is Working Correctly" })
}

async function loginWithGoogle_CreateUser(req, res){
    let conn = mongoDb();
    console.log(req.body);

    if (req.body.email === "" || req.body.name === "" || req.body.type === "") {
        return res.status(400).json({
            message: "EMAIL , NAME AND TYPE ARE REQUIRED"
        })
     }

     let ack = await User.insertOne({
        username: req.body.username,
        email: req.body.email,
        password: req.body.fir_pass,
        type: req.body.type
     })

     if (ack){
        return res.status(201).json({
            message: "USER CREATED SUCCESSFULLY",
            ack
        })
     }else{
        return res.status(500).json({
            message: "FAILED TO CREATE USER"
        })
     }

    res.status(200).json({ message: "All is Working Correctly" })
}

export { login, signup, logout ,loginWithGoogle , loginWithGoogle_CreateUser}; 