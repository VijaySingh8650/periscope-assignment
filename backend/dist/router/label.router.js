"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const label_controller_1 = require("../controller/label.controller");
const app = express_1.default.Router();
app.route("/:groupid").post(label_controller_1.createLabel).get(label_controller_1.getAllLabel);
app.route("/:id").get(label_controller_1.getlabel).patch(label_controller_1.updateLabel).delete(label_controller_1.deleteLabel);
exports.default = app;
