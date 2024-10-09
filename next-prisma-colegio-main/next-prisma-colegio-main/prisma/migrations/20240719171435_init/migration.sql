/*
  Warnings:

  - The primary key for the `esp3201TableUpdatedia` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[fecha]` on the table `esp3201TableUpdatedia` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "esp3201TableUpdatedia_id_key";

-- AlterTable
ALTER TABLE "esp3201TableUpdatedia" DROP CONSTRAINT "esp3201TableUpdatedia_pkey";

-- DropTable
DROP TABLE "Data";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "esp3201TableUpdatedia_fecha_key" ON "esp3201TableUpdatedia"("fecha");
