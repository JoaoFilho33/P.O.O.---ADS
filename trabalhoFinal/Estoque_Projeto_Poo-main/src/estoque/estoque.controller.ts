import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueDto } from './dto/estoque.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post()
  async create(@Body() createEstoqueDto: EstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  @Get()
  async findAll() {
    return this.estoqueService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(id)
  }

  @Put(':id')
  async update(@Param("id") id: string, @Body() data: EstoqueDto){
    return this.estoqueService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.estoqueService.delete(id);
  }
}
