/*
  Warnings:

  - You are about to drop the `Esp32_01_TableRecord` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Esp32_01_TableRecord" DROP CONSTRAINT "Esp32_01_TableRecord_userId_fkey";

-- AlterTable
ALTER TABLE "Esp32_01_TableUpdate" ALTER COLUMN "time" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;

-- DropTable
DROP TABLE "Esp32_01_TableRecord";

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "key1" TEXT NOT NULL,
    "key2" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
