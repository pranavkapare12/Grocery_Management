import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./Routes/Auth.routes.js";
import filerouter from "./Routes/Image.routes.js";
import cookieParser from "cookie-parser";
import datarouter from "./Routes/Data.routes.js";
import InfoRouter from "./Routes/Info.routes.js"
import OrderRouter from "./Routes/Order.routes.js";

dotenv.config();
const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials: true
}));

app.use(express.json());
app.use(cookieParser())

// AUTH ROUTES 
app.use("/auth",authRoutes);

// FILE ROUTES
app.use("/file",filerouter);

// DATA ROUTES
app.use("/data",datarouter);

// INFO ROUTES
app.use("/info",InfoRouter);

// ORDER ROUTES
app.use("/order",OrderRouter);

app.listen(process.env.PORT , () =>{
    console.log("SERVER IS RUNNING ON PORT "+ process.env.PORT);
})