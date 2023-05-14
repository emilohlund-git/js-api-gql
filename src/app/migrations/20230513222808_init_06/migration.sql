-- DropForeignKey
ALTER TABLE "Partner" DROP CONSTRAINT "Partner_imageId_fkey";

-- DropIndex
DROP INDEX "Partner_imageId_key";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "partnerId" TEXT;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "Partner"("id") ON DELETE SET NULL ON UPDATE CASCADE;
