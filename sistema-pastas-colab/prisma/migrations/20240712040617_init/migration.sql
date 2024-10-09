/*
  Warnings:

  - You are about to drop the `Esp32_01_TableUpdateDia_Mensual` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Esp32_01_TableUpdateDia_Semanal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Esp32_01_TableUpdateDia_Mensual";

-- DropTable
DROP TABLE "Esp32_01_TableUpdateDia_Semanal";

-- CreateTable
CREATE TABLE "Esp32_01_TableRecord" (
    "id" TEXT NOT NULL,
    "board" TEXT NOT NULL,
    "temperature" DOUBLE PRECISION NOT NULL,
    "humidity" INTEGER NOT NULL,
    "veleta" TEXT NOT NULL,
    "anemometro" INTEGER NOT NULL,
    "pluviometro" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Esp32_01_TableRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Esp32_01_TableRecordDia" (
    "id" SERIAL NOT NULL,
    "max_temp" INTEGER NOT NULL,
    "min_temp" INTEGER NOT NULL,
    "min_humidity" INTEGER NOT NULL,
    "max_humidity" INTEGER NOT NULL,
    "moda_veleta" TEXT NOT NULL,
    "sum_pluviometro" INTEGER NOT NULL,
    "avg_anemometro" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Esp32_01_TableRecordDia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Esp32_01_TableRecordDia_Mensual" (
    "id" SERIAL NOT NULL,
    "mes" TEXT NOT NULL,
    "avg_max_temp" DOUBLE PRECISION,
    "avg_min_temp" DOUBLE PRECISION,
    "avg_max_humidity" DOUBLE PRECISION,
    "avg_min_humidity" DOUBLE PRECISION,
    "moda_veleta" TEXT,
    "avg_anemometro" DOUBLE PRECISION,
    "sum_pluviometro" DOUBLE PRECISION,

    CONSTRAINT "Esp32_01_TableRecordDia_Mensual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Esp32_01_TableRecordDia_Semanal" (
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

    CONSTRAINT "Esp32_01_TableRecordDia_Semanal_pkey" PRIMARY KEY ("id")
);
