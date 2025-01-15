"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const global_error_1 = require("./global-error");
const user_router_1 = __importDefault(require("./router/user.router"));
dotenv_1.default.config();
const port = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}));
app.use(express_1.default.json());
app.use("/api/user", user_router_1.default);
app.use("/*", global_error_1.InvalidAPI); //for invalid API
app.use(global_error_1.ErrorHandler); // for error handling
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
