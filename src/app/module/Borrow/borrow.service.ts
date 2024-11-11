import { prisma } from "../../utils";
import { ICreatePayload } from "./borrow.interface";

const saveBorrowIntoDB = async (payload: ICreatePayload) => {
  await prisma.book.findUniqueOrThrow({
    where: { bookId: payload.bookId },
  });

  await prisma.member.findUniqueOrThrow({
    where: { memberId: payload.memberId },
  });

  return await prisma.borrowRecord.create({
    data: payload,
  });
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
  await prisma.borrowRecord.findUniqueOrThrow({
    where: { borrowId },
  });

  await prisma.borrowRecord.update({
    where: { borrowId },
    data: {
      returnDate: new Date(),
    },
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
