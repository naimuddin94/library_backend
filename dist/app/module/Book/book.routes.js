"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../middleware");
const book_controller_1 = require("./book.controller");
const book_validation_1 = require("./book.validation");
const router = express_1.default.Router();
router
    .route("/")
    .get(book_controller_1.BookController.getAllBooks)
    .post((0, middleware_1.validateRequest)(book_validation_1.BookValidation.create), book_controller_1.BookController.createBook);
router
    .route("/:bookId")
    .get(book_controller_1.BookController.getBook)
    .put((0, middleware_1.validateRequest)(book_validation_1.BookValidation.update), book_controller_1.BookController.updateBook)
    .delete(book_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
