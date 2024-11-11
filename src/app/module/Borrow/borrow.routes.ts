import express from "express";
import { validateRequest } from "../../middleware";
import { BorrowRecordController } from "./borrow.controller";
import { BorrowValidation } from "./borrow.validation";

const router = express.Router();

router
  .route("/borrow")
  .get(BorrowRecordController.fetchAllBorrowRecords)
  .post(
    validateRequest(BorrowValidation.create),
    BorrowRecordController.createBorrowRecord
  );

router
  .route("/borrow/overdue")
  .get(BorrowRecordController.getOverdueBorrowRecords);

router.route("/return").post(BorrowRecordController.returnBook);

export const BorrowRoutes = router;
