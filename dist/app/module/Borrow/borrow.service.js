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
exports.BorrowRecordService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../utils");
const saveBorrowIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield utils_1.prisma.book.findUniqueOrThrow({
        where: { bookId: payload.bookId },
    });
    if (book.availableCopies < 1) {
        throw new utils_1.AppError(http_status_1.default.BAD_REQUEST, "Currently, there are no available copies of this book");
    }
    yield utils_1.prisma.member.findUniqueOrThrow({
        where: { memberId: payload.memberId },
    });
    const result = yield utils_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.book.update({
            where: {
                bookId: payload.bookId,
            },
            data: {
                availableCopies: {
                    decrement: 1,
                },
            },
        });
        const borrowRecord = yield tx.borrowRecord.create({
            data: payload,
        });
        return borrowRecord;
    }));
    return result;
});
const fetchAllBorrowRecords = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield utils_1.prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
        },
        include: {
            book: true,
            member: true,
        },
    });
});
const fetchBorrowRecordFromDB = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield utils_1.prisma.borrowRecord.findUniqueOrThrow({
        where: {
            borrowId,
        },
        include: {
            book: true,
            member: true,
        },
    });
});
const returnBookIntoDB = (borrowId) => __awaiter(void 0, void 0, void 0, function* () {
    const borrowRecord = yield utils_1.prisma.borrowRecord.findUniqueOrThrow({
        where: { borrowId },
    });
    yield utils_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        yield tx.borrowRecord.update({
            where: { borrowId },
            data: {
                returnDate: new Date(),
            },
        });
        yield tx.book.update({
            where: {
                bookId: borrowRecord.bookId,
            },
            data: {
                availableCopies: {
                    increment: 1,
                },
            },
        });
    }));
    return null;
});
const fetchOverdueBorrowRecords = () => __awaiter(void 0, void 0, void 0, function* () {
    // Calculate the date 14 days ago from today
    const fourteenDaysAgo = new Date();
    fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);
    // Find overdue records
    return yield utils_1.prisma.borrowRecord.findMany({
        where: {
            returnDate: null,
            borrowDate: {
                lt: fourteenDaysAgo,
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
});
exports.BorrowRecordService = {
    saveBorrowIntoDB,
    fetchAllBorrowRecords,
    fetchBorrowRecordFromDB,
    returnBookIntoDB,
    fetchOverdueBorrowRecords,
};
