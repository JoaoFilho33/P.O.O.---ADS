export class Conta4 {

    constructor(private numero: string, private saldo: number, private titular: string) {}

    public get Numero(): string {
        return this.numero;
    }

    public get Saldo(): number {
        return this.saldo;
    }

    public get Titular(): string {
        return this.titular;
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
            conta.sacar(valor);
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
}
