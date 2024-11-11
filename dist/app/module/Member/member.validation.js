"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            message: "Name should be string",
            required_error: "Name is required",
        }),
        email: zod_1.z.string({
            message: "Email should be string",
            required_error: "Email is required",
        }),
        phone: zod_1.z.string({
            message: "Phone should be string",
            required_error: "Phone is required",
        }),
        membershipDate: zod_1.z.preprocess((arg) => {
            if (typeof arg === "string") {
                return new Date(arg);
            }
            return arg;
        }, zod_1.z.date({
            message: "Membership date should be date format",
            required_error: "Membership date is required",
        })),
    }),
});
const update = zod_1.z.object({
    body: create.shape.body.partial(),
});
exports.MemberValidation = {
    create,
    update,
};
