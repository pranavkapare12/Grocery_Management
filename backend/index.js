import express from "express";
import dotenv from "dotenv";
import authRoutes from "./Routes/Auth.routes.js";

dotenv.config();
const app = express();
app.use(express.json());


// AUTH ROUTES 

app.use("/auth",authRoutes);



app.get("/",(req,res) =>{
    res.json({
        message: "Hello World"
    })
})

app.listen(process.env.PORT , () =>{
    console.log("SERVER IS RUNNING ON PORT "+ process.env.PORT);
})