import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ErrorHandler, InvalidAPI } from "./global-error";
import UserRouter from "./router/user.router";
import GroupRouter from "./router/groups.router";
import LabelRouter from "./router/label.router";

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();


app.use(cors({
    origin: ["http://localhost:3000", "https://periscope-assignment.vercel.app/"], 
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));

app.use(express.json());

app.use("/api/user", UserRouter);
app.use("/api/groups", GroupRouter);
app.use("/api/labels", LabelRouter);

app.use("/*", InvalidAPI); //for invalid API
app.use(ErrorHandler); // for error handling




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);  
})