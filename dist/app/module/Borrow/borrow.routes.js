"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const middleware_1 = require("../../middleware");
const borrow_controller_1 = require("./borrow.controller");
const borrow_validation_1 = require("./borrow.validation");
const router = express_1.default.Router();
router
    .route("/borrow")
    .get(borrow_controller_1.BorrowRecordController.fetchAllBorrowRecords)
    .post((0, middleware_1.validateRequest)(borrow_validation_1.BorrowValidation.create), borrow_controller_1.BorrowRecordController.createBorrowRecord);
router
    .route("/borrow/overdue")
    .get(borrow_controller_1.BorrowRecordController.getOverdueBorrowRecords);
router.route("/return").post(borrow_controller_1.BorrowRecordController.returnBook);
exports.BorrowRoutes = router;
