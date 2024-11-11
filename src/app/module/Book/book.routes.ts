import express from "express";
import { validateRequest } from "../../middleware";
import { BookController } from "./book.controller";
import { BookValidation } from "./book.validation";

const router = express.Router();

router
  .route("/")
  .get(BookController.getAllBooks)
  .post(validateRequest(BookValidation.create), BookController.createBook);

router
  .route("/:bookId")
  .get(BookController.getBook)
  .put(validateRequest(BookValidation.update), BookController.updateBook)
  .delete(BookController.deleteBook);

export const BookRoutes = router;
