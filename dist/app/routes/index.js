"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../module/Book/book.routes");
const borrow_routes_1 = require("../module/Borrow/borrow.routes");
const member_routes_1 = require("../module/Member/member.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/members",
        route: member_routes_1.MemberRoutes,
    },
    {
        path: "/books",
        route: book_routes_1.BookRoutes,
    },
    {
        path: "/",
        route: borrow_routes_1.BorrowRoutes,
    },
];
moduleRoutes.forEach((item) => router.use(item.path, item.route));
exports.default = router;
