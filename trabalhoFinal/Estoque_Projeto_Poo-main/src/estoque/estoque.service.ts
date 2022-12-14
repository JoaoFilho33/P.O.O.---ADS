import { BadRequestException, Injectable } from '@nestjs/common';
import { Estoque } from '@prisma/client';
import { PrismaService } from 'src/database/PrismaService';
import { EstoqueDto } from './dto/estoque.dto';

@Injectable()
export class EstoqueService {
  constructor(private prisma : PrismaService){}

  async create(data: EstoqueDto){
    const estoqueExist = await this.prisma.estoque.findFirst({
      where:{
        id: data.id
      }
    })

    if(estoqueExist){
      throw new BadRequestException('Estoque já existe')
    }

    const estoque = await this.prisma.estoque.create({})

    return estoque
  }

  findAll() {
    return this.prisma.estoque.findMany();
  }

  findOne(id: number) {
    return this.prisma.estoque.findMany({
      select: {id: true}
    });
  }

  delete(id: number) {

  }
}
