/*
  Warnings:

  - Added the required column `description` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hyperLink` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageLink` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Post` ADD COLUMN `description` MEDIUMTEXT NOT NULL,
    ADD COLUMN `hyperLink` VARCHAR(191) NOT NULL,
    ADD COLUMN `imageLink` VARCHAR(191) NOT NULL;
