"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdateValidationSchema = exports.userValidationSchema = void 0;
const zod_1 = require("zod");
exports.userValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    contactNumber: zod_1.z.string().length(10, { message: "Contact number must be of 10 characters" }),
    email: zod_1.z.string()
});
exports.userUpdateValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    contactNumber: zod_1.z.string().length(10, { message: "Contact number must be of 10 characters" }).optional(),
    email: zod_1.z.string().optional()
});
