/*
  Warnings:

  - You are about to drop the column `medical_conditions` on the `appointments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "appointments" DROP COLUMN "medical_conditions";

-- DropEnum
DROP TYPE "medical_conditions";
