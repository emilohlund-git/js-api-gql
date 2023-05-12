/*
  Warnings:

  - You are about to drop the column `sex` on the `Horse` table. All the data in the column will be lost.
  - Added the required column `gender` to the `Horse` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Horse" DROP COLUMN "sex",
ADD COLUMN     "gender" TEXT NOT NULL;
