import express from "express";
import { getUser, createUser, updateUser, deleteUser } from "../controller/user.controller";


const app = express.Router();

app.route("/").post(createUser);
app.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default app;
