import { Book } from "@prisma/client";
import httpStatus from "http-status";
import { AppError, prisma } from "../../utils";

const saveBookIntoDB = async (payload: Book) => {
  const isExistBook = await prisma.book.findFirst({
    where: {
      title: payload.title,
      genre: payload.genre,
      publishedYear: payload.publishedYear,
    },
  });

  if (isExistBook) {
    throw new AppError(httpStatus.BAD_REQUEST, "Book already exists!");
  }

  return await prisma.book.create({
    data: payload,
  });
};

const fetchAllBooksFromDB = async () => {
  return await prisma.book.findMany();
};

const fetchBookFromDB = async (bookId: string) => {
  return await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });
};

const updateBookIntoDB = async (bookId: string, data: Partial<Book>) => {
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  return await prisma.book.update({
    where: { bookId },
    data,
  });
};

const deleteBookFromDB = async (bookId: string) => {
  await prisma.book.findUniqueOrThrow({
    where: { bookId },
  });

  await prisma.book.delete({
    where: { bookId },
  });

  return null;
};

export const BookService = {
  saveBookIntoDB,
  fetchAllBooksFromDB,
  fetchBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
