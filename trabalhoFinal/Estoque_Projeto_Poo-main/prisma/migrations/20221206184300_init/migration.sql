-- CreateTable
CREATE TABLE "Estoque" (
    "id" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,

    CONSTRAINT "Estoque_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "codidoBarra" TEXT NOT NULL,
    "dataValidade" TIMESTAMP(3) NOT NULL,
    "produtoId" TEXT NOT NULL,
    "perecivel" BOOLEAN NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produto_codidoBarra_key" ON "Produto"("codidoBarra");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Estoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
