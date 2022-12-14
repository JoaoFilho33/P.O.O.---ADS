import { ApiProperty } from "@nestjs/swagger"
import { ProdutoDto } from "src/produto/dto/produto.dto"

export interface EstoqueDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    capacidade: number;
    @ApiProperty()
    produto: ProdutoDto[]
}
