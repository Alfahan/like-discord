/*
  Warnings:

  - You are about to alter the column `token` on the `user_password_resets` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(64)`.

*/
-- AlterTable
ALTER TABLE "user_password_resets" ALTER COLUMN "token" SET DATA TYPE VARCHAR(64);
