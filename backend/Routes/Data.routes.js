import { Router } from "express";
import { authMiddleware } from "../middleware/Auth.middleware.js";
import { getData } from "../Controler/Data.controler.js";
const datarouter = Router();

datarouter.get("/",authMiddleware,getData);

export default datarouter;