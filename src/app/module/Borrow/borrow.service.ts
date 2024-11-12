import httpStatus from "http-status";
import { AppError, prisma } from "../../utils";
import { ICreatePayload } from "./borrow.interface";

const saveBorrowIntoDB = async (payload: ICreatePayload) => {
  const book = await prisma.book.findUniqueOrThrow({
    where: { bookId: payload.bookId },
  });

  if (book.availableCopies < 1) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Currently, there are no available copies of this book"
    );
  }

  await prisma.member.findUniqueOrThrow({
    where: { memberId: payload.memberId },
  });

  const result = await prisma.$transaction(async (tx) => {
    await tx.book.update({
      where: {
        bookId: payload.bookId,
      },
      data: {
        availableCopies: {
          decrement: 1,
        },
      },
    });

    const borrowRecord = await tx.borrowRecord.create({
      data: payload,
    });

    return borrowRecord;
  });

  return result;
};

const fetchAllBorrowRecords = async () => {
  return await prisma.borrowRecord.findMany({
    where: {
      returnDate: null,
    },
    include: {
      book: true,
      member: true,
    },
  });
};

const fetchBorrowRecordFromDB = async (borrowId: string) => {
  return await prisma.borrowRecord.findUniqueOrThrow({
    where: {
      borrowId,
    },
    include: {
      book: true,
      member: true,
    },
  });
};

const returnBookIntoDB = async (borrowId: string) => {
  const borrowRecord = await prisma.borrowRecord.findUniqueOrThrow({
    where: { borrowId },
  });

  await prisma.$transaction(async (tx) => {
    await tx.borrowRecord.update({
      where: { borrowId },
      data: {
        returnDate: new Date(),
      },
    });

    await tx.book.update({
      where: {
        bookId: borrowRecord.bookId,
      },
      data: {
        availableCopies: {
          increment: 1,
        },
      },
    });
  });

  return null;
};

const fetchOverdueBorrowRecords = async () => {
  // Calculate the date 14 days ago from today
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  // Find overdue records
  return await prisma.borrowRecord.findMany({
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
};

export const BorrowRecordService = {
  saveBorrowIntoDB,
  fetchAllBorrowRecords,
  fetchBorrowRecordFromDB,
  returnBookIntoDB,
  fetchOverdueBorrowRecords,
};
