import httpStatus from "http-status";
import { AppResponse, catchAsync } from "../../utils";
import { BookService } from "./book.service";

const createBook = catchAsync(async (req, res) => {
    
  const result = await BookService.saveBookIntoDB(req.body);

  res
    .status(httpStatus.CREATED)
    .json(
      new AppResponse(httpStatus.CREATED, result, "Book created successfully")
    );
});

const getAllBooks = catchAsync(async (req, res) => {
  const result = await BookService.fetchAllBooksFromDB();

  res
    .status(httpStatus.OK)
    .json(
      new AppResponse(httpStatus.OK, result, "Books retrieved successfully")
    );
});

const getBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await BookService.fetchBookFromDB(bookId);

  res
    .status(httpStatus.OK)
    .json(
      new AppResponse(httpStatus.OK, result, "Book retrieved successfully")
    );
});

const updateBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const updateData = req.body;
  const result = await BookService.updateBookIntoDB(bookId, updateData);

  res
    .status(httpStatus.OK)
    .json(new AppResponse(httpStatus.OK, result, "Book updated successfully"));
});

const deleteBook = catchAsync(async (req, res) => {
  const { bookId } = req.params;

  const result = await BookService.deleteBookFromDB(bookId);

  res
    .status(httpStatus.OK)
    .json(new AppResponse(httpStatus.OK, result, "Book successfully deleted"));
});

export const BookController = {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
};
