"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const app = express_1.default.Router();
app.route("/").post(user_controller_1.createUser).get(user_controller_1.getAllUsers);
app.route("/:id").get(user_controller_1.getUser).patch(user_controller_1.updateUser).delete(user_controller_1.deleteUser);
exports.default = app;
