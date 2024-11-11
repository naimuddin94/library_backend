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
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../utils");
const saveBookIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistBook = yield utils_1.prisma.book.findFirst({
        where: {
            title: payload.title,
            genre: payload.genre,
            publishedYear: payload.publishedYear,
        },
    });
    if (isExistBook) {
        throw new utils_1.AppError(http_status_1.default.BAD_REQUEST, "Book already exists!");
    }
    return yield utils_1.prisma.book.create({
        data: payload,
    });
});
const fetchAllBooksFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield utils_1.prisma.book.findMany();
});
const fetchBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield utils_1.prisma.book.findUniqueOrThrow({
        where: { bookId },
    });
});
const updateBookIntoDB = (bookId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield utils_1.prisma.book.findUniqueOrThrow({
        where: { bookId },
    });
    return yield utils_1.prisma.book.update({
        where: { bookId },
        data,
    });
});
const deleteBookFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    yield utils_1.prisma.book.findUniqueOrThrow({
        where: { bookId },
    });
    yield utils_1.prisma.book.delete({
        where: { bookId },
    });
    return null;
});
exports.BookService = {
    saveBookIntoDB,
    fetchAllBooksFromDB,
    fetchBookFromDB,
    updateBookIntoDB,
    deleteBookFromDB,
};
