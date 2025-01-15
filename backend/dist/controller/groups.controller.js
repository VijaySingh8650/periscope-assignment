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
exports.getAllGroups = exports.deleteGroup = exports.updateGroup = exports.getGroup = exports.createGroup = void 0;
const types_validation_1 = require("../types-validation");
const zod_1 = require("zod");
const prisma_1 = require("../prisma");
const createGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // validate request body using zod
        const validationRequestBody = types_validation_1.groupValidationSchema.parse(req.body);
        if ((_a = req.params) === null || _a === void 0 ? void 0 : _a.userid) {
            yield prisma_1.prisma.groups.create({
                data: {
                    name: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.name,
                    userId: parseInt(req.params.userid),
                    type: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.type,
                    members: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.members
                }
            });
            res.status(201).json({ message: "Group created successfully" });
        }
        else
            res.status(400).json({ error: "Invalid User ID" });
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            res.status(500).send({ validationError: err.errors });
        }
        else
            res.status(500).json({ error: "Something went wrong" });
    }
});
exports.createGroup = createGroup;
const getGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((_a = req.params) === null || _a === void 0 ? void 0 : _a.id) {
            const response = yield prisma_1.prisma.groups.findFirst({
                where: {
                    id: parseInt(req.params.id)
                },
                include: {
                    label: true
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
exports.getGroup = getGroup;
const updateGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const validationRequestBody = types_validation_1.groupUpdateValidationSchema.parse(req === null || req === void 0 ? void 0 : req.body);
        if ((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id) {
            const response = yield prisma_1.prisma.groups.update({
                where: {
                    id: parseInt(req.params.id)
                },
                data: {
                    name: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.name,
                    type: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.type,
                    members: validationRequestBody === null || validationRequestBody === void 0 ? void 0 : validationRequestBody.members
                }
            });
            if (!response)
                res.status(404).send({ message: "Invalid id" });
            else
                res.status(200).send({ message: "Group updated successfully" });
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
exports.updateGroup = updateGroup;
const deleteGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id) {
            const response = yield prisma_1.prisma.groups.delete({
                where: {
                    id: parseInt(req.params.id)
                }
            });
            if (!response)
                res.status(404).send({ message: "Invalid id" });
            else
                res.status(200).send({ message: "Group deleted successfully" });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});
exports.deleteGroup = deleteGroup;
const getAllGroups = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if ((_a = req.params) === null || _a === void 0 ? void 0 : _a.userid) {
            const response = yield prisma_1.prisma.groups.findMany({
                where: {
                    userId: parseInt(req.params.userid)
                },
                include: {
                    label: true
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
exports.getAllGroups = getAllGroups;
