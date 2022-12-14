import { Produto } from "src/produto/entities/produto.entity";

interface IRepository{
    inserirProduto(produto: Produto);
    alterarProduto(produto: Produto);
    consultarProduto(id: string);
    excluirProduto(id: Produto);
}