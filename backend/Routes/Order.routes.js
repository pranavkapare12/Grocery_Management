import { Router } from "express";
import { makeOrder } from "../Controler/Order.controler.js";
import { authMiddleware } from "../middleware/Auth.middleware.js";
const OrderRouter = Router();

OrderRouter.post("/data",authMiddleware,makeOrder)

export default OrderRouter;