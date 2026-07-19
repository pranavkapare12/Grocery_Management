import { Router } from "express";

import { login, signup, logout ,loginWithGoogle , loginWithGoogle_CreateUser } from "../Controler/Auth.controler.js";

const router = Router();

router.get('/health', (req,res)=>{
    res.status(200).json({message : "Server is running"})
})

router.post('/login',login)

router.post('/signup',signup)

router.post('/logout',logout)

router.post('/google',loginWithGoogle)

router.post('/google/create',loginWithGoogle_CreateUser);

export default router;