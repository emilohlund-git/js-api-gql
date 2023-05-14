/*
  Warnings:

  - You are about to drop the column `partnerId` on the `Image` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[imageId]` on the table `Partner` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_partnerId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "partnerId";

-- AlterTable
ALTER TABLE "Partner" ALTER COLUMN "imageId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Partner_imageId_key" ON "Partner"("imageId");

-- AddForeignKey
ALTER TABLE "Partner" ADD CONSTRAINT "Partner_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
