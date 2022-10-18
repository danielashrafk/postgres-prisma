/*
  Warnings:

  - You are about to drop the `courseEnrollment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "courseEnrollment" DROP CONSTRAINT "courseEnrollment_courseId_fkey";

-- DropForeignKey
ALTER TABLE "courseEnrollment" DROP CONSTRAINT "courseEnrollment_userId_fkey";

-- DropTable
DROP TABLE "courseEnrollment";

-- CreateTable
CREATE TABLE "CourseEnrollment" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "UserRole" NOT NULL,
    "userId" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,

    CONSTRAINT "CourseEnrollment_pkey" PRIMARY KEY ("userId","courseId","role")
);

-- AddForeignKey
ALTER TABLE "CourseEnrollment" ADD CONSTRAINT "CourseEnrollment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseEnrollment" ADD CONSTRAINT "CourseEnrollment_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
