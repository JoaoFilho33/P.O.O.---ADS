export class Conta4 {

    constructor(private numero: string, private saldo: number) {}

    public get Numero(): string {
        return this.numero;
    }

    public get Saldo(): number {
        return this.saldo;
    }

    public sacar(valor: number): boolean {
        if (this.saldo - valor < 0) {
            return false;
        }
        else {
            this.saldo = this.saldo - valor;
            return true;
        }
    }

    public depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    public consultarSaldo() {
        return this.saldo;
    }

    public transferir(contaDestino: Conta4, valor: number) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor)
            return true;
        }
        else {
            return false;
        }
    }
}

export class Poupanca extends Conta4{
    private _taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this._taxaJuros = taxaJuros;
    }

    taxaJuros(): number {
        return this._taxaJuros;
    }

    renderJuros(): void {
        this.depositar(this.Saldo * this._taxaJuros/100);
    }
}

export class Imposto extends Conta4 {
    private _taxaDesconto: number;

    constructor(numero: string, saldo: number, taxaDesconto: number) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }

    debitar(valor: number): void {
        let total = valor + valor * (this._taxaDesconto/100);
        super.sacar(total);
    }
}

export class Banco4 {

    constructor(private contas: Conta4[] = []) {}

    public inserir(conta: Conta4): void {
        if (this.consultarIndice(conta.Numero) == -1) {
            this.contas.push(conta);
        }
    }

    public consultarSaldo(numero: string): Conta4 {
        let contaProcurada!: Conta4;

        for (let c of this.contas) {
            if (c.Numero == numero) {
                contaProcurada = c;
                break;
            }
        }

        return contaProcurada
    }

    private consultarIndice(numero: string): number {
        let indice: number = -1;
        for (let i: number = 0; i < this.contas.length; i++) {
            if (this.contas[i].Numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }

    public sacar(numero: string, valor: number): void {
        let conta: Conta4 = this.consultarSaldo(numero);

        if (conta != null) {
            if(conta instanceof Imposto) {
                conta.debitar(valor);
            }
            else {
                conta.sacar(valor);
            }
        }
    }

    public depositar(numero: string, valor: number): void {
        let conta: Conta4 = this.consultarSaldo(numero)

        if (conta != null) {
            conta.depositar(valor)
        }
    }

    public transferir(numCredito: string, numDebito: string, valor: number): void {
        let conta1: Conta4 = this.consultarSaldo(numCredito)
        let conta2: Conta4 = this.consultarSaldo(numDebito)

        if (conta1 != null && conta2 != null) {
            conta2.transferir(conta1, valor)
        }
    }

    public quantidadeContas(): number {
        return this.contas.length;
    }

    public depositoTotal(): number {
        let soma = 0

        for (let i = 0; i < this.contas.length; i++) {
            soma += this.contas[i].Saldo
        }

        return soma
    }

    public mediaTotal(): number {
        let media: number = this.depositoTotal() / this.quantidadeContas();

        return media;
    }

    public excluir(numero: string): void {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].Numero == numero) {
                this.contas.splice(i, 1)
                break
            }
        }
    }

    public renderJuros(numero: string): void{
        for (let i = 0; i < this.contas.length; i++) {
            if(this.consultarIndice(numero)) {
                if(this.contas[i] instanceof Poupanca){
                    (<Poupanca> this.contas[i]).renderJuros();
                }
            }
        }
    }
}

let conta: Conta4 = new Poupanca("1", 100, 0)
let c: Poupanca = <Poupanca> conta// faz a classe Conta receber elementos de Poupanca

let poupanca: Poupanca = new Poupanca("2", 200, 0.5)

c.renderJuros();
poupanca.renderJuros();

console.log(conta.Saldo);// 100.5
console.log(poupanca.Saldo);// 201 