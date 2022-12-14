import { Injectable } from '@nestjs/common';
import { ProdutoDto } from './dto/produto.dto';

@Injectable()
export class ProdutoService {
  create(createProdutoDto: ProdutoDto) {
    return 'This action adds a new produto';
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
