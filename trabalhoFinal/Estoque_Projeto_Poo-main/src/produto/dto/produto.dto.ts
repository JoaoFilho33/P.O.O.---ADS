import { ApiProperty } from "@nestjs/swagger"
import { EstoqueDto } from "src/estoque/dto/estoque.dto"

export interface ProdutoDto {
    @ApiProperty()
    id: number
    @ApiProperty()

    nome: string
    marca: string
    valor: number
    codidoBarra: string
    dataValidade: Date
    produto: EstoqueDto
    produtoId: number
    perecivel: boolean 
}
