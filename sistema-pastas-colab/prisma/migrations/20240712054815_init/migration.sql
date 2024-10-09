/*
  Warnings:

  - Added the required column `userId` to the `Esp32_01_TableRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Esp32_01_TableRecord" ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "board" DROP NOT NULL,
ALTER COLUMN "temperature" DROP NOT NULL,
ALTER COLUMN "humidity" DROP NOT NULL,
ALTER COLUMN "humidity" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "veleta" DROP NOT NULL,
ALTER COLUMN "anemometro" DROP NOT NULL,
ALTER COLUMN "anemometro" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "pluviometro" DROP NOT NULL,
ALTER COLUMN "pluviometro" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "time" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Esp32_01_TableRecordDia" ALTER COLUMN "max_temp" DROP NOT NULL,
ALTER COLUMN "max_temp" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "min_temp" DROP NOT NULL,
ALTER COLUMN "min_temp" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "min_humidity" DROP NOT NULL,
ALTER COLUMN "min_humidity" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "max_humidity" DROP NOT NULL,
ALTER COLUMN "max_humidity" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "moda_veleta" DROP NOT NULL,
ALTER COLUMN "sum_pluviometro" DROP NOT NULL,
ALTER COLUMN "sum_pluviometro" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "avg_anemometro" DROP NOT NULL,
ALTER COLUMN "avg_anemometro" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Esp32_01_TableUpdate" (
    "id" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION,
    "humidity" DOUBLE PRECISION,
    "veleta" TEXT,
    "anemometro" DOUBLE PRECISION,
    "pluviometro" DOUBLE PRECISION,
    "time" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Esp32_01_TableUpdate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Esp32_01_TableRecord" ADD CONSTRAINT "Esp32_01_TableRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
