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
exports.BorrowRecordController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const utils_1 = require("../../utils");
const borrow_service_1 = require("./borrow.service");
const createBorrowRecord = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.BorrowRecordService.saveBorrowIntoDB(req.body);
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Book borrowed successfully"));
}));
const returnBook = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = req.body;
    const result = yield borrow_service_1.BorrowRecordService.returnBookIntoDB(borrowId);
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Book returned successfully"));
}));
const fetchAllBorrowRecords = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.BorrowRecordService.fetchAllBorrowRecords();
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, "Borrow record retrieved successfully"));
}));
const getOverdueBorrowRecords = (0, utils_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrow_service_1.BorrowRecordService.fetchOverdueBorrowRecords();
    let message = "Overdue borrow list fetched";
    if (result.length === 0) {
        message = "No overdue books";
    }
    res
        .status(http_status_1.default.OK)
        .json(new utils_1.AppResponse(http_status_1.default.OK, result, message));
}));
exports.BorrowRecordController = {
    createBorrowRecord,
    returnBook,
    fetchAllBorrowRecords,
    getOverdueBorrowRecords,
};
