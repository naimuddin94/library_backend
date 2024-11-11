import httpStatus from "http-status";
import { AppResponse, catchAsync } from "../../utils";
import { BorrowRecordService } from "./borrow.service";

const createBorrowRecord = catchAsync(async (req, res) => {
  const result = await BorrowRecordService.saveBorrowIntoDB(req.body);

  res
    .status(httpStatus.OK)
    .json(new AppResponse(httpStatus.OK, result, "Book borrowed successfully"));
});

const returnBook = catchAsync(async (req, res) => {
  const { borrowId } = req.body;

  const result = await BorrowRecordService.returnBookIntoDB(borrowId);

  res
    .status(httpStatus.OK)
    .json(new AppResponse(httpStatus.OK, result, "Book returned successfully"));
});

const fetchAllBorrowRecords = catchAsync(async (req, res) => {
  const result = await BorrowRecordService.fetchAllBorrowRecords();

  res
    .status(httpStatus.OK)
    .json(
      new AppResponse(
        httpStatus.OK,
        result,
        "Borrow record retrieved successfully"
      )
    );
});

const getOverdueBorrowRecords = catchAsync(async (req, res) => {
  const result = await BorrowRecordService.fetchOverdueBorrowRecords();

  let message = "Overdue borrow list fetched";

  if (result.length === 0) {
    message = "No overdue books";
  }

  res
    .status(httpStatus.OK)
    .json(new AppResponse(httpStatus.OK, result, message));
});

export const BorrowRecordController = {
  createBorrowRecord,
  returnBook,
  fetchAllBorrowRecords,
  getOverdueBorrowRecords,
};
