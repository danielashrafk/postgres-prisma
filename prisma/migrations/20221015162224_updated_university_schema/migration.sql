/*
  Warnings:

  - Added the required column `courseId` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `graderId` to the `TestResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentId` to the `TestResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `testId` to the `TestResult` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('STUDENT', 'TEACHER');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Test" ADD COLUMN     "courseId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TestResult" ADD COLUMN     "graderId" TEXT NOT NULL,
ADD COLUMN     "studentId" TEXT NOT NULL,
ADD COLUMN     "testId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "courseEnrollment" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "UserRole" NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "courseEnrollment_pkey" PRIMARY KEY ("userId","courseId","role")
);

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResult" ADD CONSTRAINT "TestResult_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResult" ADD CONSTRAINT "TestResult_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TestResult" ADD CONSTRAINT "TestResult_graderId_fkey" FOREIGN KEY ("graderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseEnrollment" ADD CONSTRAINT "courseEnrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseEnrollment" ADD CONSTRAINT "courseEnrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
