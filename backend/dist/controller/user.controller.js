"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const types_validation_1 = require("../types-validation");
const zod_1 = require("zod");
const prisma_1 = require("../prisma");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validate request body using zod
        const validationRequestBody = types_validation_1.userValidationSchema.parse(req.body);
        yield prisma_1.prisma.user.create({
            data: {
                name: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.name,
                contactNumber: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.contactNumber,
                email: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.email,
            }
        });
        res.status(201).json({ message: "User created successfully" });
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            res.status(500).send({ validationError: err.errors });
        }
        else
            res.status(500).json({ error: "Something went wrong" });
    }
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((_a = req.params) === null || _a === void 0 ? void 0 : _a.id) {
            const response = yield prisma_1.prisma.user.findFirst({
                where: {
                    id: parseInt(req.params.id)
                },
                include: {
                    groups: {
                        include: {
                            label: true
                        }
                    }
                }
            });
            if (!response)
                res.status(400).send({ message: "invalid id" });
            else
                res.status(200).send({
                    data: response
                });
        }
        else
            res.status(400).json({ error: "Invalid ID" });
    }
    catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const validationRequestBody = types_validation_1.userUpdateValidationSchema.parse(req === null || req === void 0 ? void 0 : req.body);
        if ((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id) {
            const response = yield prisma_1.prisma.user.update({
                where: {
                    id: parseInt(req.params.id)
                },
                data: {
                    name: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.name,
                    contactNumber: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.contactNumber,
                    email: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.email
                }
            });
            if (!response)
                res.status(404).send({ message: "Invalid id" });
            else
                res.status(200).send({ message: "User updated successfully" });
        }
        else {
            res.status(400).json({ error: "Invalid ID" });
        }
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            res.status(500).send({ validationError: err.errors });
        }
        else
            res.status(500).json({ error: "Something went wrong" });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id) {
            const response = yield prisma_1.prisma.user.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            if (!response)
                res.status(404).send({ message: "Invalid id" });
            else
                res.status(200).send({ message: "User deleted successfully" });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
exports.deleteUser = deleteUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma_1.prisma.user.findMany({
            include: {
                groups: {
                    include: {
                        label: true
                    }
                }
            }
        });
        if (!response)
            res.status(400).send({ message: "invalid id" });
        else
            res.status(200).send({
                data: response
            });
    }
    catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
exports.getAllUsers = getAllUsers;
