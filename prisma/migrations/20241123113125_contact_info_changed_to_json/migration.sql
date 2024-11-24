/*
  Warnings:

  - You are about to alter the column `name` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Changed the type of `contact_info` on the `patients` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "patients" ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
DROP COLUMN "contact_info",
ADD COLUMN     "contact_info" JSONB NOT NULL;
