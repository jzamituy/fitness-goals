/*
  Warnings:

  - You are about to drop the column `userId` on the `alerts` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `attendances` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `goals` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `moods` table. All the data in the column will be lost.
  - Added the required column `gymMemberId` to the `alerts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gymMemberId` to the `attendances` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gymMemberId` to the `goals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gymMemberId` to the `moods` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "alerts" DROP CONSTRAINT "alerts_userId_fkey";

-- DropForeignKey
ALTER TABLE "attendances" DROP CONSTRAINT "attendances_userId_fkey";

-- DropForeignKey
ALTER TABLE "goals" DROP CONSTRAINT "goals_userId_fkey";

-- DropForeignKey
ALTER TABLE "moods" DROP CONSTRAINT "moods_userId_fkey";

-- DropIndex
DROP INDEX "alerts_userId_idx";

-- DropIndex
DROP INDEX "attendances_userId_idx";

-- DropIndex
DROP INDEX "goals_userId_idx";

-- DropIndex
DROP INDEX "moods_userId_idx";

-- AlterTable
ALTER TABLE "alerts" DROP COLUMN "userId",
ADD COLUMN     "gymMemberId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "attendances" DROP COLUMN "userId",
ADD COLUMN     "gymMemberId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "coaches" ADD COLUMN     "availability" JSONB,
ADD COLUMN     "biography" TEXT,
ADD COLUMN     "experience" INTEGER;

-- AlterTable
ALTER TABLE "goals" DROP COLUMN "userId",
ADD COLUMN     "gymMemberId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "moods" DROP COLUMN "userId",
ADD COLUMN     "gymMemberId" UUID NOT NULL;

-- AlterTable
ALTER TABLE "nutritionists" ADD COLUMN     "availability" JSONB,
ADD COLUMN     "biography" TEXT,
ADD COLUMN     "experience" INTEGER;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "imageUrl" TEXT;

-- CreateIndex
CREATE INDEX "alerts_gymMemberId_idx" ON "alerts"("gymMemberId");

-- CreateIndex
CREATE INDEX "attendances_gymMemberId_idx" ON "attendances"("gymMemberId");

-- CreateIndex
CREATE INDEX "goals_gymMemberId_idx" ON "goals"("gymMemberId");

-- CreateIndex
CREATE INDEX "moods_gymMemberId_idx" ON "moods"("gymMemberId");

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_gymMemberId_fkey" FOREIGN KEY ("gymMemberId") REFERENCES "gym_members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_gymMemberId_fkey" FOREIGN KEY ("gymMemberId") REFERENCES "gym_members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moods" ADD CONSTRAINT "moods_gymMemberId_fkey" FOREIGN KEY ("gymMemberId") REFERENCES "gym_members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "alerts" ADD CONSTRAINT "alerts_gymMemberId_fkey" FOREIGN KEY ("gymMemberId") REFERENCES "gym_members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
