/*
  Warnings:

  - You are about to drop the `brrowrecords` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "brrowrecords" DROP CONSTRAINT "brrowrecords_bookId_fkey";

-- DropForeignKey
ALTER TABLE "brrowrecords" DROP CONSTRAINT "brrowrecords_memberId_fkey";

-- DropTable
DROP TABLE "brrowrecords";

-- CreateTable
CREATE TABLE "borrowrecords" (
    "brrowId" TEXT NOT NULL,
    "brrowDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "returnDate" TIMESTAMP(3),
    "bookId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "borrowrecords_pkey" PRIMARY KEY ("brrowId")
);

-- AddForeignKey
ALTER TABLE "borrowrecords" ADD CONSTRAINT "borrowrecords_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrowrecords" ADD CONSTRAINT "borrowrecords_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
