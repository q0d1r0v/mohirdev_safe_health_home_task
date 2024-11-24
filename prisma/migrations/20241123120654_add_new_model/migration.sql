-- CreateEnum
CREATE TYPE "status" AS ENUM ('REJALASHTIRILGAN', 'TUGALLANGAN', 'BEKOR_QILINDI');

-- CreateEnum
CREATE TYPE "medical_conditions" AS ENUM ('DIABET', 'GIPERTENZIYA', 'ASTMA', 'YURAK_KASALLIGI', 'HECH');

-- CreateTable
CREATE TABLE "appointments" (
    "id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "doctor_name" VARCHAR(255) NOT NULL,
    "appointment_date" TIMESTAMP(3) NOT NULL,
    "status" "status" NOT NULL,
    "medical_conditions" "medical_conditions"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "appointments_patient_id_idx" ON "appointments"("patient_id");
