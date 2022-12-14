/*
  Warnings:

  - The primary key for the `Estoque` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Estoque` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `codidoBarra` on the `Produto` table. All the data in the column will be lost.
  - The `id` column on the `Produto` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `produtoId` on the `Produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_produtoId_fkey";

-- DropIndex
DROP INDEX "Produto_codidoBarra_key";

-- AlterTable
ALTER TABLE "Estoque" DROP CONSTRAINT "Estoque_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Estoque_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_pkey",
DROP COLUMN "codidoBarra",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "produtoId",
ADD COLUMN     "produtoId" INTEGER NOT NULL,
ADD CONSTRAINT "Produto_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_id_fkey" FOREIGN KEY ("id") REFERENCES "Estoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
