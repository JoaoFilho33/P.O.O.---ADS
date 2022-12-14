class Pessoa2 {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

export class Conta2 {
    numero: string;
    saldo: number;
    cliente: Pessoa2;

    constructor(numero: string, saldo: number, cliente: Pessoa) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = cliente;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }

    transferir(contaDestino: Conta2, valor: number) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor)
            return true;
        }
        else {
            return false;
        }
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
}

export class Banco2 {
    contas: Conta2[] = [];

    constructor(contas: Conta2[] = []) {
        this.contas = contas;
    }

    inserir(conta: Conta2): void {
        if(this.consultarIndice(conta.numero) == -1) {
            this.contas.push(conta);
        }
    }
    
    consultar(numero: string): Conta2{
        let contaProcurada!: Conta2

        for(let c of this.contas){
            if(c.numero == numero){
                contaProcurada = c
                break
            }
        }

        return contaProcurada
    }

    consultarIndice(numero: String): number {
        let indice: number = -1;
            for (let i: number = 0; i < this.contas.length; i++) {
                if (this.contas[i].numero == numero) {
                    indice = i;
                    break;
                }
            }
        return indice;
    }

    alterar(c: Conta2): void{
        let indice = this.consultarIndice(c.numero)

        if(indice != -1){
            this.contas[indice] = c
        }
    }

    depositar(numero: string, valor: number): void{
        let conta: Conta2 = this.consultar(numero)

        if(conta != null){
            conta.depositar(valor)
        }
    }

    sacar(numero: string, valor: number) {
        let conta: Conta2 = this.consultar(numero);
        
        if (conta != null) {
            conta.sacar(valor);
        }
    }

    transferir(numCredito: string, numDebito: string, valor: number): void{
        let conta1: Conta2 = this.consultar(numCredito)
        let conta2: Conta2 = this.consultar(numDebito)

        if(conta1 != null && conta2 != null){
            conta2.transferir(conta1, valor)
        }
    }

    quantidadeContas() : number {
        return this.contas.length;
    } 

    depositoTotal(): number{
        let soma = 0

        for(let i = 0; i < this.contas.length; i++){
            soma += this.contas[i].saldo
        }

        return soma
    }

    mediaSaldo(): number {
        let media: number = this.depositoTotal() / this.quantidadeContas();

        return media;
    }

    excluir(numero: string): void{
        for(let i = 0; i < this.contas.length; i++){
            if(this.contas[i].numero == numero){
                this.contas.splice(i, 1)
                break
            }
        }
    }

}
