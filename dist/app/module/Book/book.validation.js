"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            message: "Title should be string format",
            required_error: "Title is required",
        }),
        genre: zod_1.z.string({
            message: "Genre should be string format",
            required_error: "Genre is required",
        }),
        publishedYear: zod_1.z.number({
            message: "Published year should be number",
            required_error: "Published year is required",
        }),
        totalCopies: zod_1.z.number({
            message: "Total copies should be number",
            required_error: "Total copies is required",
        }),
        availableCopies: zod_1.z.number({
            message: "Available copies should be number",
            required_error: "Available copies is required",
        }),
    }),
});
const update = zod_1.z.object({
    body: create.shape.body.partial(),
});
exports.BookValidation = {
    create,
    update,
};
