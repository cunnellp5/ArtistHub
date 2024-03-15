/*
  Warnings:

  - You are about to drop the `BlogImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BlogItem` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BlogImage" DROP CONSTRAINT "BlogImage_blogPostId_fkey";

-- DropForeignKey
ALTER TABLE "BlogItem" DROP CONSTRAINT "BlogItem_blogPostId_fkey";

-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "BlogImage";

-- DropTable
DROP TABLE "BlogItem";
