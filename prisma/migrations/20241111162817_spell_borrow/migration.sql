/*
  Warnings:

  - The primary key for the `borrowrecords` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brrowDate` on the `borrowrecords` table. All the data in the column will be lost.
  - You are about to drop the column `brrowId` on the `borrowrecords` table. All the data in the column will be lost.
  - The required column `borrowId` was added to the `borrowrecords` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "borrowrecords" DROP CONSTRAINT "borrowrecords_pkey",
DROP COLUMN "brrowDate",
DROP COLUMN "brrowId",
ADD COLUMN     "borrowDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "borrowId" TEXT NOT NULL,
ADD CONSTRAINT "borrowrecords_pkey" PRIMARY KEY ("borrowId");
