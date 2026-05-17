import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./Routes/Auth.routes.js";
import filerouter from "./Routes/Image.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

// AUTH ROUTES 
app.use("/auth",authRoutes);

// FILE ROUTES
app.use("/file",filerouter)

app.listen(process.env.PORT , () =>{
    console.log("SERVER IS RUNNING ON PORT "+ process.env.PORT);
})