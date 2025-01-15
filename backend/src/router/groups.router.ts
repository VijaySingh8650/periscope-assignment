import express from "express";
import { createGroup, deleteGroup, getAllGroups, getGroup, updateGroup } from "../controller/groups.controller";


const app = express.Router();

app.route("/:userid").post(createGroup);
app.route("/user/:userid").get(getAllGroups);
app.route("/:id").get(getGroup).patch(updateGroup).delete(deleteGroup);

export default app;
