/*
  Warnings:

  - You are about to drop the `_ApartmentToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ApartmentToUser" DROP CONSTRAINT "_ApartmentToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ApartmentToUser" DROP CONSTRAINT "_ApartmentToUser_B_fkey";

-- AlterTable
ALTER TABLE "Apartment" ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_ApartmentToUser";

-- AddForeignKey
ALTER TABLE "Apartment" ADD CONSTRAINT "Apartment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
