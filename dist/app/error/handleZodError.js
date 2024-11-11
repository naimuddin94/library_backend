"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleZodError = void 0;
const handleZodError = (err) => {
    return {
        statusCode: 400,
        message: "Zod validation error",
        errors: err.issues.map((issue) => ({
            path: issue.path[issue.path.length - 1],
            message: issue.message,
        })),
    };
};
exports.handleZodError = handleZodError;
