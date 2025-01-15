"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = exports.InvalidAPI = void 0;
const InvalidAPI = (req, res) => {
    res.status(404).json({ error: "Invalid API Endpoint" });
};
exports.InvalidAPI = InvalidAPI;
const ErrorHandler = (err, req, res) => {
    res.status(500).json({ error: "Something went wrong" });
};
exports.ErrorHandler = ErrorHandler;
