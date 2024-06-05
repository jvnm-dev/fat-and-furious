/*
  Warnings:

  - Made the column `name` on table `Training` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duration` on table `Training` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `Training` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Training` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Training" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "duration" SET NOT NULL,
ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "image" SET NOT NULL;
