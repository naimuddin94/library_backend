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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../utils");
const book_service_1 = require("./book.service");
const createBook = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.saveBookIntoDB(req.body);
    res
        .status(http_status_1.default.CREATED)
        .json(new utils_1.AppResponse(http_status_1.default.CREATED, result, "Book created successfully"));
}));
const getAllBooks = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookService.fetchAllBooksFromDB();
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Books retrieved successfully"));
}));
const getBook = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.fetchBookFromDB(bookId);
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Book retrieved successfully"));
}));
const updateBook = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const updateData = req.body;
    const result = yield book_service_1.BookService.updateBookIntoDB(bookId, updateData);
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Book updated successfully"));
}));
const deleteBook = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.BookService.deleteBookFromDB(bookId);
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Book successfully deleted"));
}));
exports.BookController = {
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    deleteBook,
};
