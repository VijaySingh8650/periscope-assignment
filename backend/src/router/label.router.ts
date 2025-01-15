import express from "express";
import { createLabel, deleteLabel, getAllLabel, getlabel, updateLabel } from "../controller/label.controller";


const app = express.Router();

app.route("/:groupid").post(createLabel);
app.route("/group/:groupid").get(getAllLabel);
app.route("/:id").get(getlabel).patch(updateLabel).delete(deleteLabel);

export default app;
