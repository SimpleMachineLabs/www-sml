-- CreateTable
CREATE TABLE "EmailList" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "EmailList_pkey" PRIMARY KEY ("id")
);
