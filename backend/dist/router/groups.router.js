"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const groups_controller_1 = require("../controller/groups.controller");
const app = express_1.default.Router();
app.route("/:userid").post(groups_controller_1.createGroup).get(groups_controller_1.getAllGroups);
app.route("/:id").get(groups_controller_1.getGroup).patch(groups_controller_1.updateGroup).delete(groups_controller_1.deleteGroup);
exports.default = app;
