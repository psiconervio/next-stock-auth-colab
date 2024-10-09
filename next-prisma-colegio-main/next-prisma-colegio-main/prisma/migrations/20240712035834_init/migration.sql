-- CreateTable
CREATE TABLE "Esp32_01_TableUpdateDia_Mensual" (
    "id" SERIAL NOT NULL,
    "mes" TEXT NOT NULL,
    "avg_max_temp" DOUBLE PRECISION,
    "avg_min_temp" DOUBLE PRECISION,
    "avg_max_humidity" DOUBLE PRECISION,
    "avg_min_humidity" DOUBLE PRECISION,
    "moda_veleta" TEXT,
    "avg_anemometro" DOUBLE PRECISION,
    "sum_pluviometro" DOUBLE PRECISION,

    CONSTRAINT "Esp32_01_TableUpdateDia_Mensual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Esp32_01_TableUpdateDia_Semanal" (
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

    CONSTRAINT "Esp32_01_TableUpdateDia_Semanal_pkey" PRIMARY KEY ("id")
);
