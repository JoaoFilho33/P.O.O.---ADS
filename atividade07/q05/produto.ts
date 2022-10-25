class Produto {
    private _id: string;
    private _descricao: string;
    private _qtdEstoque: number;
    private _valorUnitario: number;

    constructor(identificador: string,  descricao: string, estoque: number, valorUnitario: number) {
        this._id = identificador;
        this._descricao = descricao;
        this._qtdEstoque = estoque;
        this._valorUnitario = valorUnitario;
    }

    get Id() {
        return this._id;
    }

    public repor(quantidade: number): void{
        this._qtdEstoque += quantidade;
    }

    public baixa(quantidade: number): void{
        this._qtdEstoque -= quantidade;
    }
}

class ProdutoPerecivel extends Produto {
    private validade: Date;

    constructor(identificador: string, descricao: string, estoque: number, valorUnitario: number, validade: Date, ) {
        super(identificador, descricao, estoque, valorUnitario);
        this.validade = validade;
    }

    public ehValido(): boolean {
        let data: Date = new Date()
        return this.validade.getTime() >= data.getTime()
    }

    public repor(quantidade: number): void{
        if(this.ehValido()) {
            super.repor(quantidade);
        }
    }

    public baixa(quantidade: number): void{
        if(this.ehValido()) {
            super.baixa(quantidade);
        }
    }
}

class Estoque {
    constructor(private _produtos: Produto[] = []) {}

    public inserir(produto: Produto) {
        if(this.consultarIndice(produto.Id) == -1) {// indice != -1 significa que o produto ja existe, e por isso não será incluso
            this._produtos.push(produto);
        }
    }

    private consultarIndice(id: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].Id == id) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    public excluir(id: string): void {
        for (let i = 0; i < this._produtos.length; i++) {
            if (this._produtos[i].Id == id) {
                this._produtos.splice(i, 1)
                break
            }
        }
    }

    public repor(id: string, qtd: number): void{
        let pos: number = this.consultarIndice(id);
        if(pos != -1) {
            this._produtos.at(pos)?.repor(qtd);
        }
    }

    public baixa(id: string, qtd: number): void { 
        if(this.consultarIndice(id) != -1) {
            this._produtos.at(this.consultarIndice(id))?.baixa(qtd);
        }  
    }

    public exibirVencidos(): void{
        for(let produto of this._produtos) {
            if(produto instanceof ProdutoPerecivel) {
                if(!(produto.ehValido())) {
                    console.log(produto)
                }
            }
        }
    }

}


let estoque: Estoque = new Estoque()

let feijao: Produto = new Produto("1", "feijão", 23, 4);
let banana: ProdutoPerecivel = new ProdutoPerecivel("2", "bananas", 15, 2, new Date("2020-10-20"));

estoque.inserir(feijao);
estoque.inserir(banana);

estoque.repor('1', 4);
estoque.repor('2', 5);//como banana !ehValida, ela não é reposta nem dado baixa

estoque.baixa('1', 2);
estoque.baixa('2', 3);

estoque.exibirVencidos()
/*
ProdutoPerecivel {
  _id: '2',
  _descricao: 'bananas',
  _qtdEstoque: 15,
  _valorUnitario: 2,
  validade: 2020-10-20T00:00:00.000Z
}
*/