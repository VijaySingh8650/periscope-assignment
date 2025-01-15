import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ErrorHandler, InvalidAPI } from "./global-error";
import UserRouter from "./router/user.router";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();


app.use(cors({
    origin: ["http://localhost:3000"], 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));

app.use(express.json());

app.use("/api/user", UserRouter);

app.use("/*", InvalidAPI); //for invalid API
app.use(ErrorHandler); // for error handling




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);  
})