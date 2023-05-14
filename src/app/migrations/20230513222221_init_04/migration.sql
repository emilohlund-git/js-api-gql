/*
  Warnings:

  - A unique constraint covering the columns `[imageId]` on the table `Partner` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_facilityId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_horseId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Partner_imageId_key" ON "Partner"("imageId");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_horseId_fkey" FOREIGN KEY ("horseId") REFERENCES "Horse"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;
