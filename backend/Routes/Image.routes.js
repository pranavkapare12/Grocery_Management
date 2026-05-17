import { Router } from "express";
import { fileUplode } from "../Controler/Image.controler.js";
import { authMiddleware } from "../middleware/Auth.middleware.js";
import multer from "multer";


const uplode = multer({
    dest : "uploads/"
})
const filerouter = Router();



filerouter.post("/uplode",authMiddleware,uplode.single("image") ,fileUplode);

export default filerouter;