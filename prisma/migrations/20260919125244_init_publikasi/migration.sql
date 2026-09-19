-- CreateTable
CREATE TABLE "Publikasi" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Publikasi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Publikasi_createdAt_idx" ON "Publikasi"("createdAt");

-- CreateIndex
CREATE INDEX "Publikasi_category_idx" ON "Publikasi"("category");
