/*
  Warnings:

  - You are about to drop the column `userId` on the `Data` table. All the data in the column will be lost.
  - You are about to drop the `Esp32_01_TableUpdate` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Data" DROP CONSTRAINT "Data_userId_fkey";

-- AlterTable
ALTER TABLE "Data" DROP COLUMN "userId";

-- DropTable
DROP TABLE "Esp32_01_TableUpdate";

-- CreateTable
CREATE TABLE "Esp32_01_TableRecord" (
    "id" TEXT NOT NULL,
    "board" TEXT,
    "temperature" DOUBLE PRECISION,
    "humidity" DOUBLE PRECISION,
    "veleta" TEXT,
    "anemometro" DOUBLE PRECISION,
    "pluviometro" DOUBLE PRECISION,
    "time" TIMESTAMP(3),
    "date" TIMESTAMP(3),

    CONSTRAINT "Esp32_01_TableRecord_pkey" PRIMARY KEY ("id")
);
