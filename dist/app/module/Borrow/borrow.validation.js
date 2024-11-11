"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        bookId: zod_1.z
            .string({ required_error: "Book id is required" })
            .uuid({ message: "Book id is nmo validate UUID format" }),
        memberId: zod_1.z
            .string({ required_error: "Member id is required" })
            .uuid({ message: "Member id is nmo validate UUID format" }),
    }),
});
exports.BorrowValidation = {
    create,
};
