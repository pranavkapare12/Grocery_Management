import { Router } from "express";
import { makeOrder } from "../Controler/Order.controler.js";
const OrderRouter = Router();

OrderRouter.post("/data",makeOrder)

export default OrderRouter;