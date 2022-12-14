import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { EstoqueModule } from './estoque/estoque.module';

@Module({
  imports: [ProdutoModule, EstoqueModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
