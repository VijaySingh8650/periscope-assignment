"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelUpdateValidationSchema = exports.labelValidationSchema = exports.groupUpdateValidationSchema = exports.groupValidationSchema = exports.userUpdateValidationSchema = exports.userValidationSchema = void 0;
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
exports.groupValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.enum(["Demo", "Clients"]),
    members: zod_1.z.number().optional()
});
exports.groupUpdateValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    userId: zod_1.z.number().optional(),
    type: zod_1.z.enum(["Demo", "Clients"]).optional(),
    members: zod_1.z.number().optional()
});
exports.labelValidationSchema = zod_1.z.object({
    name: zod_1.z.string()
});
exports.labelUpdateValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional()
});
