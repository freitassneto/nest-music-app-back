/*
  Warnings:

  - You are about to drop the column `cover_img` on the `musics` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "musics" DROP COLUMN "cover_img",
ADD COLUMN     "cover_image" TEXT;
