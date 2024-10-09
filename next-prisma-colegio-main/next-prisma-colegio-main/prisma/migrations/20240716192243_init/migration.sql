/*
  Warnings:

  - You are about to drop the `Data` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Esp32_01_TableRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Esp32_01_TableRecordDia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Esp32_01_TableRecordDia_Mensual` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Esp32_01_TableRecordDia_Semanal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Data";

-- DropTable
DROP TABLE "Esp32_01_TableRecord";

-- DropTable
DROP TABLE "Esp32_01_TableRecordDia";

-- DropTable
DROP TABLE "Esp32_01_TableRecordDia_Mensual";

-- DropTable
DROP TABLE "Esp32_01_TableRecordDia_Semanal";

-- CreateTable
CREATE TABLE "esp3201TableRecord" (
    "board" TEXT,
    "temperature" TEXT,
    "humidity" TEXT,
    "veleta" TEXT,
    "anemometro" TEXT,
    "pluviometro" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" SERIAL NOT NULL,

    CONSTRAINT "esp3201TableRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "esp3201TableUpdatedia" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "max_temp" DOUBLE PRECISION,
    "min_temp" DOUBLE PRECISION,
    "max_humidity" DOUBLE PRECISION,
    "min_humidity" DOUBLE PRECISION,
    "moda_veleta" TEXT,
    "avg_anemometro" DOUBLE PRECISION,
    "sum_pluviometro" DOUBLE PRECISION
);

-- CreateTable
CREATE TABLE "Esp3201TableRecordDiaMensual" (
    "id" SERIAL NOT NULL,
    "mes" TEXT NOT NULL,
    "avg_max_temp" DOUBLE PRECISION,
    "avg_min_temp" DOUBLE PRECISION,
    "avg_max_humidity" DOUBLE PRECISION,
    "avg_min_humidity" DOUBLE PRECISION,
    "moda_veleta" TEXT,
    "avg_anemometro" DOUBLE PRECISION,
    "sum_pluviometro" DOUBLE PRECISION,

    CONSTRAINT "Esp3201TableRecordDiaMensual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Esp3201TableRecordDiaSemanal" (
    "id" SERIAL NOT NULL,
    "semana" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "max_temp" DOUBLE PRECISION,
    "min_temp" DOUBLE PRECISION,
    "max_humidity" DOUBLE PRECISION,
    "min_humidity" DOUBLE PRECISION,
    "moda_veleta" TEXT,
    "avg_anemometro" DOUBLE PRECISION,
    "sum_pluviometro" DOUBLE PRECISION,

    CONSTRAINT "Esp3201TableRecordDiaSemanal_pkey" PRIMARY KEY ("id")
);

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
