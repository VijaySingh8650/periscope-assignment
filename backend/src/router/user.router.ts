import express from "express";
import { getUser, createUser, updateUser, deleteUser, getAllUsers } from "../controller/user.controller";


const app = express.Router();

app.route("/").post(createUser).get(getAllUsers);
app.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default app;
