import { Router } from "express";

import { login, signup, logout ,loginWithGoogle } from "../Controler/Auth.controler.js";

const router = Router();

router.post('/login',login)

router.post('/signup',signup)

router.post('/logout',logout)

router.post('/google',loginWithGoogle)

export default router;