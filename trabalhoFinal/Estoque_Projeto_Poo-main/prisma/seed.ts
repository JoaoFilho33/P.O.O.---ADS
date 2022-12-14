import { BadRequestException } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";
import { EstoqueDto } from "src/estoque/dto/estoque.dto";
import { ProdutoDto } from "src/produto/dto/produto.dto";

const prisma = new PrismaClient();

async function main(){
    let dataE: EstoqueDto
    let dataP: ProdutoDto

    const estoqueExist = await this.prisma.estoque.findFirst({
        where: {
            id: dataE.id
        }
    })

    const produtoExist = await this.prisma.produto.findFirst({
        where: {
            id: dataP.id
        }
    })
    
    if(estoqueExist){
        throw new BadRequestException('Estoque already exists')
    }

    if(produtoExist){
        throw new BadRequestException('Produto already exists')
    }

    const estoque1 = await prisma.estoque.create({
        data:{
            id: randomUUID(),
            capacidade: 10000
        }
    });

    const produto = await prisma.produto.create({
        data:{
            nome: 'Arroz',
            marca: 'Achei',
            valor: 5.60,
            codidoBarra: '1235456546',
            dataValidade: '2022-12-02',
            produto: dataE,
            produtoId: string,
            perecivel:  boolean 
        }
    })
}
